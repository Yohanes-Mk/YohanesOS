import React, { useState, useEffect } from 'react';

interface WallpaperAccents {
  primary: string;
  secondary: string;
  glow: string;
  gradient: string;
}

interface Piece {
  player: 'human' | 'jon';
  king: boolean;
}

type Board = (Piece | null)[][];

interface Move {
  from: { row: number; col: number };
  to: { row: number; col: number };
  capture: boolean;
}

const createInitialBoard = (): Board => {
  const board: Board = Array.from({ length: 8 }, () => Array(8).fill(null));
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c) % 2 === 1) board[r][c] = { player: 'jon', king: false };
    }
  }
  for (let r = 5; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c) % 2 === 1) board[r][c] = { player: 'human', king: false };
    }
  }
  return board;
};

const CheckersGame: React.FC<{ theme: 'dark' | 'light'; wallpaperAccents: WallpaperAccents }> = ({ theme, wallpaperAccents }) => {
  const [board, setBoard] = useState<Board>(createInitialBoard);
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<'human' | 'jon' | null>(null);

  const cloneBoard = (b: Board) => b.map(row => row.slice());

  const getPieceMoves = (r: number, c: number, player: 'human' | 'jon'): Move[] => {
    const piece = board[r][c];
    if (!piece || piece.player !== player) return [];
    const moves: Move[] = [];
    const dirs = piece.king
      ? [
          [1, 1],
          [1, -1],
          [-1, 1],
          [-1, -1]
        ]
      : player === 'human'
      ? [
          [-1, 1],
          [-1, -1]
        ]
      : [
          [1, 1],
          [1, -1]
        ];

    dirs.forEach(([dr, dc]) => {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && !board[nr][nc]) {
        moves.push({ from: { row: r, col: c }, to: { row: nr, col: nc }, capture: false });
      }
      const jr = r + 2 * dr;
      const jc = c + 2 * dc;
      if (jr >= 0 && jr < 8 && jc >= 0 && jc < 8 && !board[jr][jc]) {
        const mid = board[nr][nc];
        if (mid && mid.player !== player) {
          moves.push({ from: { row: r, col: c }, to: { row: jr, col: jc }, capture: true });
        }
      }
    });
    return moves;
  };

  const getAllMoves = (player: 'human' | 'jon'): Move[] => {
    const moves: Move[] = [];
    board.forEach((row, r) =>
      row.forEach((piece, c) => {
        if (piece && piece.player === player) {
          moves.push(...getPieceMoves(r, c, player));
        }
      })
    );
    return moves;
  };

  const movePiece = (move: Move, player: 'human' | 'jon') => {
    setBoard(prev => {
      const newBoard = cloneBoard(prev);
      const piece = newBoard[move.from.row][move.from.col]!;
      newBoard[move.to.row][move.to.col] = piece;
      newBoard[move.from.row][move.from.col] = null;
      if (move.capture) {
        const midRow = (move.from.row + move.to.row) / 2;
        const midCol = (move.from.col + move.to.col) / 2;
        newBoard[midRow][midCol] = null;
      }
      if (player === 'human' && move.to.row === 0) piece.king = true;
      if (player === 'jon' && move.to.row === 7) piece.king = true;
      return newBoard;
    });
  };

  const hasCaptureAvailable = (player: 'human' | 'jon') => getAllMoves(player).some(m => m.capture);

  const handleSquareClick = (row: number, col: number) => {
    if (!playerTurn || winner) return;
    const piece = board[row][col];
    const captureMandatory = hasCaptureAvailable('human');

    if (selected) {
      const moves = getPieceMoves(selected.row, selected.col, 'human');
      const move = moves.find(m => m.to.row === row && m.to.col === col);
      if (move && (!captureMandatory || move.capture)) {
        movePiece(move, 'human');
        if (move.capture && getPieceMoves(row, col, 'human').some(m => m.capture)) {
          setSelected({ row, col });
        } else {
          setSelected(null);
          setPlayerTurn(false);
        }
      } else {
        setSelected(null);
      }
    } else if (piece && piece.player === 'human') {
      if (!captureMandatory || getPieceMoves(row, col, 'human').some(m => m.capture)) {
        setSelected({ row, col });
      }
    }
  };

  const aiContinue = (from: { row: number; col: number }) => {
    const captures = getPieceMoves(from.row, from.col, 'jon').filter(m => m.capture);
    if (!captures.length) {
      setPlayerTurn(true);
      return;
    }
    const move = captures[Math.floor(Math.random() * captures.length)];
    movePiece(move, 'jon');
    setTimeout(() => aiContinue(move.to), 500);
  };

  const aiMove = () => {
    const moves = getAllMoves('jon');
    if (!moves.length) {
      setWinner('human');
      return;
    }
    const captureMoves = moves.filter(m => m.capture);
    const list = captureMoves.length ? captureMoves : moves;
    const move = list[Math.floor(Math.random() * list.length)];
    movePiece(move, 'jon');
    if (move.capture && getPieceMoves(move.to.row, move.to.col, 'jon').some(m => m.capture)) {
      setTimeout(() => aiContinue(move.to), 500);
    } else {
      setPlayerTurn(true);
    }
  };

  useEffect(() => {
    if (!playerTurn && !winner) {
      const timer = setTimeout(aiMove, 500);
      return () => clearTimeout(timer);
    }
  }, [playerTurn, winner]);

  const checkForWinner = () => {
    const humanPieces = board.flat().filter(p => p && p.player === 'human').length;
    const jonPieces = board.flat().filter(p => p && p.player === 'jon').length;
    const humanMoves = getAllMoves('human').length;
    const jonMoves = getAllMoves('jon').length;
    if (humanPieces === 0 || humanMoves === 0) setWinner('jon');
    else if (jonPieces === 0 || jonMoves === 0) setWinner('human');
  };

  useEffect(() => {
    checkForWinner();
  }, [board]);

  const resetGame = () => {
    setBoard(createInitialBoard());
    setSelected(null);
    setPlayerTurn(true);
    setWinner(null);
  };

  return (
    <div className="relative flex flex-col items-center gap-4">
      <div className="grid grid-cols-8">
        {board.map((row, r) =>
          row.map((piece, c) => {
            const isDark = (r + c) % 2 === 1;
            const isSelected = selected && selected.row === r && selected.col === c;
            return (
              <div
                key={`${r}-${c}`}
                onClick={() => handleSquareClick(r, c)}
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${
                  isDark ? 'bg-gray-700' : 'bg-gray-300'
                } ${isSelected ? 'ring-2 ring-yellow-400' : ''}`}
              >
                {piece && (
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                      piece.player === 'human' ? 'bg-red-500' : 'bg-black'
                    } ${piece.king ? 'ring-2 ring-white' : ''}`}
                  />
                )}
              </div>
            );
          })
        )}
      </div>
      <div className="text-sm" style={{ color: wallpaperAccents.primary }}>
        {winner ? '' : playerTurn ? 'Your turn' : "Jon's turn"}
      </div>
      {winner && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div
            className={`p-6 rounded text-center shadow ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
          >
            <p className="mb-4 text-lg font-semibold">
              {winner === 'human' ? 'You win!' : 'Jon wins!'}
            </p>
            <button
              onClick={resetGame}
              className="px-4 py-2 rounded text-white"
              style={{ background: wallpaperAccents.gradient }}
            >
              Play again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckersGame;

