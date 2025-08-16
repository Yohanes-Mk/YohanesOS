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

  const cloneBoard = (b: Board) => b.map(row => row.slice());

  const isValidMove = (
    from: { row: number; col: number },
    to: { row: number; col: number },
    player: 'human' | 'jon'
  ) => {
    const piece = board[from.row][from.col];
    if (!piece || piece.player !== player) return false;
    const target = board[to.row][to.col];
    if (target) return false;
    const dr = to.row - from.row;
    const dc = to.col - from.col;
    const dir = player === 'human' ? -1 : 1;
    if (Math.abs(dc) !== Math.abs(dr)) return false;
    if (Math.abs(dr) === 1) {
      if (piece.king) return Math.abs(dr) === 1;
      return dr === dir;
    }
    if (Math.abs(dr) === 2) {
      const midRow = (from.row + to.row) / 2;
      const midCol = (from.col + to.col) / 2;
      const midPiece = board[midRow][midCol];
      if (midPiece && midPiece.player !== player) {
        if (piece.king) return true;
        return dr === 2 * dir;
      }
    }
    return false;
  };

  const movePiece = (
    from: { row: number; col: number },
    to: { row: number; col: number },
    player: 'human' | 'jon'
  ) => {
    setBoard(prev => {
      const newBoard = cloneBoard(prev);
      const piece = newBoard[from.row][from.col];
      if (!piece) return prev;
      newBoard[to.row][to.col] = piece;
      newBoard[from.row][from.col] = null;
      if (Math.abs(to.row - from.row) === 2) {
        const midRow = (from.row + to.row) / 2;
        const midCol = (from.col + to.col) / 2;
        newBoard[midRow][midCol] = null;
      }
      if (player === 'human' && to.row === 0) piece.king = true;
      if (player === 'jon' && to.row === 7) piece.king = true;
      return newBoard;
    });
  };

  const handleSquareClick = (row: number, col: number) => {
    if (!playerTurn) return;
    const piece = board[row][col];
    if (selected) {
      if (isValidMove(selected, { row, col }, 'human')) {
        movePiece(selected, { row, col }, 'human');
        setSelected(null);
        setPlayerTurn(false);
      } else {
        setSelected(null);
      }
    } else if (piece && piece.player === 'human') {
      setSelected({ row, col });
    }
  };

  const aiMove = () => {
    const moves: { from: { row: number; col: number }; to: { row: number; col: number } }[] = [];
    board.forEach((rowData, r) => {
      rowData.forEach((piece, c) => {
        if (piece && piece.player === 'jon') {
          const dirs = piece.king ? [[1, 1], [1, -1], [-1, 1], [-1, -1]] : [[1, 1], [1, -1]];
          dirs.forEach(([dr, dc]) => {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && isValidMove({ row: r, col: c }, { row: nr, col: nc }, 'jon')) {
              moves.push({ from: { row: r, col: c }, to: { row: nr, col: nc } });
            }
            const jr = r + 2 * dr;
            const jc = c + 2 * dc;
            if (jr >= 0 && jr < 8 && jc >= 0 && jc < 8 && isValidMove({ row: r, col: c }, { row: jr, col: jc }, 'jon')) {
              moves.push({ from: { row: r, col: c }, to: { row: jr, col: jc } });
            }
          });
        }
      });
    });
    if (moves.length === 0) {
      alert('You win!');
      setBoard(createInitialBoard());
      setPlayerTurn(true);
      return;
    }
    const move = moves[Math.floor(Math.random() * moves.length)];
    movePiece(move.from, move.to, 'jon');
    setPlayerTurn(true);
  };

  useEffect(() => {
    if (!playerTurn) {
      const timer = setTimeout(aiMove, 500);
      return () => clearTimeout(timer);
    }
  }, [playerTurn]);

  useEffect(() => {
    const humanPieces = board.flat().filter(p => p && p.player === 'human').length;
    const jonPieces = board.flat().filter(p => p && p.player === 'jon').length;
    if (humanPieces === 0) {
      alert('Jon wins!');
      setBoard(createInitialBoard());
      setPlayerTurn(true);
    } else if (jonPieces === 0) {
      alert('You win!');
      setBoard(createInitialBoard());
      setPlayerTurn(true);
    }
  }, [board]);

  return (
    <div className="flex flex-col items-center gap-4">
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
        {playerTurn ? 'Your turn' : "Jon's turn"}
      </div>
    </div>
  );
};

export default CheckersGame;

