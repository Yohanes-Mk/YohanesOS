import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface WallpaperAccents {
  primary: string;
  secondary: string;
  glow: string;
  gradient: string;
}

interface TetrisGameProps {
  theme: 'dark' | 'light';
  wallpaperAccents: WallpaperAccents;
}

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

type Cell = string;
type Board = Cell[][];

const createBoard = (): Board =>
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(''));

const TETROMINOS = [
  {
    shape: [
      [1, 1, 1, 1]
    ],
    color: 'bg-cyan-500'
  },
  {
    shape: [
      [1, 1],
      [1, 1]
    ],
    color: 'bg-yellow-500'
  },
  {
    shape: [
      [0, 1, 0],
      [1, 1, 1]
    ],
    color: 'bg-purple-500'
  },
  {
    shape: [
      [1, 0, 0],
      [1, 1, 1]
    ],
    color: 'bg-orange-500'
  },
  {
    shape: [
      [0, 0, 1],
      [1, 1, 1]
    ],
    color: 'bg-blue-500'
  },
  {
    shape: [
      [0, 1, 1],
      [1, 1, 0]
    ],
    color: 'bg-green-500'
  },
  {
    shape: [
      [1, 1, 0],
      [0, 1, 1]
    ],
    color: 'bg-red-500'
  }
];

interface Piece {
  shape: number[][];
  color: string;
  pos: { x: number; y: number };
}

const randomPiece = (): Piece => {
  const tet = TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];
  return { shape: tet.shape, color: tet.color, pos: { x: 3, y: 0 } };
};

const rotateMatrix = (matrix: number[][]): number[][] => {
  const N = matrix.length;
  const M = matrix[0].length;
  const res = Array.from({ length: M }, () => Array(N).fill(0));
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      res[x][N - 1 - y] = matrix[y][x];
    }
  }
  return res;
};

const TetrisGame: React.FC<TetrisGameProps> = ({ theme, wallpaperAccents }) => {
  const [board, setBoard] = useState<Board>(createBoard());
  const [piece, setPiece] = useState<Piece>(randomPiece());
  const [nextPiece, setNextPiece] = useState<Piece>(randomPiece());
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [nickname, setNickname] = useState('');
  const [from, setFrom] = useState('');
  const [playerSet, setPlayerSet] = useState(false);
  const [highScores, setHighScores] = useState<Array<{ name: string; from: string; score: number }>>([]);
  const [showAllScores, setShowAllScores] = useState(false);

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('tetrisHighScores');
    if (stored) {
      setHighScores(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const interval = setInterval(() => {
      drop();
    }, 700);
    return () => clearInterval(interval);
  }, [piece, gameStarted, gameOver]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;
      if (e.key === 'ArrowLeft') move(-1);
      else if (e.key === 'ArrowRight') move(1);
      else if (e.key === 'ArrowDown') drop();
      else if (e.key === 'ArrowUp') rotate();
      else if (e.key === ' ') hardDrop();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [piece, gameStarted, gameOver]);

  useEffect(() => {
    if (gameOver && playerSet) {
      const newScores = [...highScores, { name: nickname, from, score }].sort((a, b) => b.score - a.score).slice(0, 20);
      setHighScores(newScores);
      localStorage.setItem('tetrisHighScores', JSON.stringify(newScores));
      setPlayerSet(false);
    }
  }, [gameOver]);

  const collide = (p: Piece, offset: { x: number; y: number }): boolean => {
    for (let y = 0; y < p.shape.length; y++) {
      for (let x = 0; x < p.shape[y].length; x++) {
        if (p.shape[y][x]) {
          const newY = y + p.pos.y + offset.y;
          const newX = x + p.pos.x + offset.x;
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) return true;
          if (newY >= 0 && board[newY][newX]) return true;
        }
      }
    }
    return false;
  };

  const merge = (p: Piece) => {
    const newBoard = board.map(row => [...row]);
    p.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value && y + p.pos.y >= 0) {
          newBoard[y + p.pos.y][x + p.pos.x] = p.color;
        }
      });
    });
    setBoard(newBoard);
  };

  const sweep = () => {
    let linesCleared = 0;
    const newBoard = board.filter(row => {
      if (row.every(cell => cell !== '')) {
        linesCleared++;
        return false;
      }
      return true;
    });
    while (newBoard.length < BOARD_HEIGHT) {
      newBoard.unshift(Array(BOARD_WIDTH).fill(''));
    }
    if (linesCleared > 0) {
      setScore(s => s + linesCleared * 100);
      setLines(l => l + linesCleared);
      setBoard(newBoard);
    }
  };

  const move = (dir: number) => {
    if (!collide(piece, { x: dir, y: 0 })) {
      setPiece(prev => ({ ...prev, pos: { x: prev.pos.x + dir, y: prev.pos.y } }));
    }
  };

  const drop = () => {
    if (!collide(piece, { x: 0, y: 1 })) {
      setPiece(prev => ({ ...prev, pos: { x: prev.pos.x, y: prev.pos.y + 1 } }));
    } else {
      merge(piece);
      sweep();
      const next = nextPiece;
      setPiece(next);
      setNextPiece(randomPiece());
      if (collide(next, { x: 0, y: 0 })) {
        setGameOver(true);
        setGameStarted(false);
      }
    }
  };

  const hardDrop = () => {
    let y = 0;
    while (!collide(piece, { x: 0, y: y + 1 })) {
      y++;
    }
    setPiece(prev => ({ ...prev, pos: { x: prev.pos.x, y: prev.pos.y + y } }));
    drop();
  };

  const rotate = () => {
    const rotated = rotateMatrix(piece.shape);
    const rotatedPiece = { ...piece, shape: rotated };
    if (!collide(rotatedPiece, { x: 0, y: 0 })) {
      setPiece(rotatedPiece);
    }
  };

  const startGame = () => {
    setBoard(createBoard());
    setPiece(randomPiece());
    setNextPiece(randomPiece());
    setScore(0);
    setLines(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.touches[0].clientX - touchStart.current.x;
    const dy = e.touches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 30) move(1);
      else if (dx < -30) move(-1);
    } else {
      if (dy < -30) rotate();
      else if (dy > 30) hardDrop();
    }
    touchStart.current = null;
  };

  return (
    <div
      className='flex flex-col items-center'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ touchAction: 'none' }}
    >
      {!gameStarted ? (
        <div className='flex flex-col items-center gap-4'>
          {!playerSet ? (
            <>
              <input
                type='text'
                placeholder='Name'
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                className={'px-3 py-2 rounded-lg text-sm ' + (theme === 'dark' ? 'bg-[#042B44]/50 text-[#A1CCDC]' : 'bg-gray-100')}
              />
              <input
                type='text'
                placeholder='From'
                value={from}
                onChange={e => setFrom(e.target.value)}
                className={'px-3 py-2 rounded-lg text-sm ' + (theme === 'dark' ? 'bg-[#042B44]/50 text-[#A1CCDC]' : 'bg-gray-100')}
              />
              <button
                onClick={() => setPlayerSet(true)}
                disabled={!nickname || !from}
                className={'px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-white ' + ((!nickname || !from) ? 'opacity-50 cursor-not-allowed' : '')}
                style={{
                  background: `linear-gradient(to right, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`,
                  boxShadow: `0 4px 15px ${wallpaperAccents.glow}`
                }}
              >
                Set Player
              </button>
            </>
          ) : (
            <button
              onClick={startGame}
              className='px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-white'
              style={{
                background: `linear-gradient(to right, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`,
                boxShadow: `0 4px 15px ${wallpaperAccents.glow}`
              }}
            >
              {gameOver ? 'Play Again' : 'Start Game'}
            </button>
          )}
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <div
            className='grid gap-[1px]'
            style={{
              gridTemplateRows: `repeat(${BOARD_HEIGHT}, 1fr)`,
              gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)`
            }}
          >
            {board.map((row, y) =>
              row.map((cell, x) => {
                const isPiece =
                  y >= piece.pos.y &&
                  y < piece.pos.y + piece.shape.length &&
                  x >= piece.pos.x &&
                  x < piece.pos.x + piece.shape[0].length &&
                  piece.shape[y - piece.pos.y][x - piece.pos.x];
                const color = isPiece ? piece.color : cell;
                return (
                  <div
                    key={`${y}-${x}`}
                    className={'w-5 h-5 sm:w-6 sm:h-6 border ' + (theme === 'dark' ? 'border-[#042B44]' : 'border-gray-300') + ' ' + (color || (theme === 'dark' ? 'bg-[#08171E]' : 'bg-white'))}
                  ></div>
                );
              })
            )}
          </div>
          <div className='mt-4 text-sm' style={{ color: wallpaperAccents.primary }}>
            Score: {score} | Lines: {lines}
          </div>
        </div>
      )}

      <div className='mt-6 w-full max-w-xs'>
        <h4 className='font-bold mb-3' style={{ color: wallpaperAccents.primary }}>
          Leaderboard
        </h4>
        <div
          className={'overflow-hidden rounded-lg border ' + (theme === 'dark' ? 'border-[#096B90] bg-[#042B44]/50' : 'border-gray-300 bg-gray-50')}
          style={{ boxShadow: `0 4px 15px ${wallpaperAccents.glow}` }}
        >
          <div
            className={'grid grid-cols-3 gap-2 px-4 py-2 text-xs font-semibold uppercase ' + (theme === 'dark' ? 'bg-[#042B44]/70 text-[#A1CCDC]' : 'bg-gray-200 text-gray-700')}
          >
            <span>Player</span>
            <span className='text-center'>From</span>
            <span className='text-right'>Score</span>
          </div>
          <ul
            className={'divide-y text-sm ' + (theme === 'dark' ? 'divide-[#096B90]/30 text-[#A1CCDC]' : 'divide-gray-200 text-gray-700')}
          >
            {highScores.length === 0 && <li className='px-4 py-3 text-center opacity-70'>No scores yet.</li>}
            {highScores.slice(0, showAllScores ? highScores.length : 5).map((s, idx) => (
              <li
                key={idx}
                className={'grid grid-cols-3 gap-2 px-4 py-2 ' + (idx % 2 === 0 ? (theme === 'dark' ? 'bg-[#042B44]/40' : 'bg-white') : '')}
              >
                <span className='flex items-center'>
                  {idx < 3 && <span className='mr-1'>{idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}</span>}
                  {idx + 1}. {s.name}
                </span>
                <span className='text-center'>{s.from}</span>
                <span className='text-right'>{s.score}</span>
              </li>
            ))}
          </ul>
          {highScores.length > 5 && (
            <button
              onClick={() => setShowAllScores(prev => !prev)}
              className={'w-full py-1 flex justify-center transition-colors ' + (theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700')}
            >
              <ChevronDown size={16} className={'transition-transform ' + (showAllScores ? 'rotate-180' : '')} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TetrisGame;
