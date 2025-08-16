import React, { useState } from 'react';

interface WallpaperAccents {
  primary: string;
  secondary: string;
  glow: string;
  gradient: string;
}

type Player = 'red' | 'black';
interface Piece {
  player: Player;
  king: boolean;
}

const BOARD_SIZE = 8;

const createInitialBoard = (): (Piece | null)[][] => {
  const board: (Piece | null)[][] = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(null)
  );
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if ((r + c) % 2 === 1) board[r][c] = { player: 'black', king: false };
    }
  }
  for (let r = BOARD_SIZE - 3; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if ((r + c) % 2 === 1) board[r][c] = { player: 'red', king: false };
    }
  }
  return board;
};

const getValidMoves = (
  board: (Piece | null)[][],
  r: number,
  c: number,
  piece: Piece
): [number, number][] => {
  const dirs: Array<[number, number]> = [];
  if (piece.player === 'red' || piece.king) dirs.push([-1, -1], [-1, 1]);
  if (piece.player === 'black' || piece.king) dirs.push([1, -1], [1, 1]);
  const moves: Array<[number, number]> = [];
  for (const [dr, dc] of dirs) {
    const nr = r + dr;
    const nc = c + dc;
    if (nr >= 0 && nr < BOARD_SIZE && nc >= 0 && nc < BOARD_SIZE) {
      if (!board[nr][nc]) {
        moves.push([nr, nc]);
      } else if (board[nr][nc] && board[nr][nc]!.player !== piece.player) {
        const jr = nr + dr;
        const jc = nc + dc;
        if (
          jr >= 0 &&
          jr < BOARD_SIZE &&
          jc >= 0 &&
          jc < BOARD_SIZE &&
          !board[jr][jc]
        ) {
          moves.push([jr, jc]);
        }
      }
    }
  }
  return moves;
};

const hasMoves = (board: (Piece | null)[][], player: Player): boolean => {
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      const p = board[r][c];
      if (p && p.player === player && getValidMoves(board, r, c, p).length > 0) {
        return true;
      }
    }
  }
  return false;
};

const CheckersGame: React.FC<{ theme: 'dark' | 'light'; wallpaperAccents: WallpaperAccents }> = ({ theme, wallpaperAccents }) => {
  const [board, setBoard] = useState<(Piece | null)[][]>(createInitialBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>('red');
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [validMoves, setValidMoves] = useState<Array<[number, number]>>([]);
  const [winner, setWinner] = useState<Player | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setBoard(createInitialBoard());
    setCurrentPlayer('red');
    setSelected(null);
    setValidMoves([]);
    setWinner(null);
    setGameStarted(true);
  };

  const handleSquareClick = (r: number, c: number) => {
    if (!gameStarted || winner) return;

    if (selected) {
      if (validMoves.some(([mr, mc]) => mr === r && mc === c)) {
        const newBoard = board.map(row => row.slice());
        const piece = newBoard[selected[0]][selected[1]]!;
        newBoard[selected[0]][selected[1]] = null;
        if (Math.abs(r - selected[0]) === 2) {
          const cr = (r + selected[0]) / 2;
          const cc = (c + selected[1]) / 2;
          newBoard[cr][cc] = null;
        }
        if ((piece.player === 'red' && r === 0) || (piece.player === 'black' && r === BOARD_SIZE - 1)) {
          piece.king = true;
        }
        newBoard[r][c] = piece;
        const opponent: Player = currentPlayer === 'red' ? 'black' : 'red';
        const opponentHasPieces = newBoard.some(row => row.some(p => p && p.player === opponent));
        const opponentHasMoves = opponentHasPieces && hasMoves(newBoard, opponent);
        if (!opponentHasPieces || !opponentHasMoves) {
          setWinner(currentPlayer);
        } else {
          setCurrentPlayer(opponent);
        }
        setBoard(newBoard);
        setSelected(null);
        setValidMoves([]);
        return;
      }
    }

    const piece = board[r][c];
    if (piece && piece.player === currentPlayer) {
      setSelected([r, c]);
      setValidMoves(getValidMoves(board, r, c, piece));
    } else {
      setSelected(null);
      setValidMoves([]);
    }
  };

  return (
    <div className="text-center">
      {!gameStarted && (
        <button
          onClick={startGame}
          className="mb-4 px-4 py-2 rounded-lg font-medium text-white"
          style={{
            background: `linear-gradient(to right, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`,
            boxShadow: `0 4px 15px ${wallpaperAccents.glow}`
          }}
        >
          Start Game
        </button>
      )}

      {gameStarted && (
        <>
          <div
            className="mb-2 font-semibold"
            style={{ color: wallpaperAccents.primary }}
          >
            Turn: {currentPlayer === 'red' ? 'Red' : 'Black'}
          </div>
          <div
            className="grid grid-cols-8 gap-0 border"
            style={{ width: '100%', maxWidth: '360px', margin: '0 auto' }}
          >
            {board.map((row, r) =>
              row.map((piece, c) => {
                const dark = (r + c) % 2 === 1;
                const isSelected = selected && selected[0] === r && selected[1] === c;
                const isMove = validMoves.some(([mr, mc]) => mr === r && mc === c);
                return (
                  <div
                    key={`${r}-${c}`}
                    onClick={() => handleSquareClick(r, c)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${
                      dark ? (theme === 'dark' ? 'bg-[#042B44]' : 'bg-gray-600') : theme === 'dark' ? 'bg-[#71B7D5]' : 'bg-gray-200'
                    } ${isSelected ? 'ring-2 ring-yellow-400' : ''} ${isMove ? 'ring-2 ring-green-400' : ''}`}
                  >
                    {piece && (
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                          piece.player === 'red' ? 'bg-red-500' : 'bg-black'
                        } ${piece.king ? 'border-2 border-yellow-300' : ''}`}
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </>
      )}

      {winner && (
        <div
          className="mt-4 font-semibold"
          style={{ color: wallpaperAccents.secondary }}
        >
          Winner: {winner === 'red' ? 'Red' : 'Black'}
          <div className="mt-2">
            <button
              onClick={startGame}
              className="px-4 py-2 rounded-lg font-medium text-white"
              style={{
                background: `linear-gradient(to right, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`,
                boxShadow: `0 4px 15px ${wallpaperAccents.glow}`
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckersGame;

