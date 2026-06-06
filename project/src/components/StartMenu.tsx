import React, { useState, useEffect } from 'react';
import {
  Monitor,
  Palette,
  Gamepad2,
  Quote,
  RefreshCw,
  Terminal,
  Power,
  X,
  ChevronDown,
  Shield
} from 'lucide-react';
import AdminDashboard from './AdminDashboard';

interface WallpaperAccents {
  primary: string;
  secondary: string;
  glow: string;
  gradient: string;
}

interface StartMenuProps {
  theme: 'dark' | 'light';
  onClose: () => void;
  onOpenTerminal: () => void;
  onReturnToLanding: () => void;
  onChangeWallpaper?: () => void;
  wallpaperAccents: WallpaperAccents;
}

// Quotes from Kevin Kelly, "Excellent Advice for Living" (2023)
const QUOTES: { text: string; author: string }[] = [
  { text: 'Being enthusiastic is worth 25 IQ points.', author: 'Kevin Kelly' },
  { text: 'Listening well is a superpower. While listening to someone you love keep asking them "Is there more?" until there is no more.', author: 'Kevin Kelly' },
  { text: "Don't be the best. Be the only.", author: 'Kevin Kelly' },
  { text: 'Prototype your life. Try stuff instead of making grand plans.', author: 'Kevin Kelly' },
  { text: "Don't measure your life with someone else's ruler.", author: 'Kevin Kelly' },
  { text: 'You are what you do. Not what you say, not what you believe, not how you vote, but what you spend your time on.', author: 'Kevin Kelly' },
  { text: "Whenever you can't decide which path to take, pick the one that produces change.", author: 'Kevin Kelly' },
  { text: 'Choose not to be outraged today.', author: 'Kevin Kelly' },
  { text: 'Habit is far more dependable than inspiration. Make progress by making habits.', author: 'Kevin Kelly' },
  { text: 'If you are the smartest person in the room, you are in the wrong room.', author: 'Kevin Kelly' },
  { text: 'Pros make as many mistakes as amateurs; they\'ve just learned how to gracefully recover from their mistakes.', author: 'Kevin Kelly' },
  { text: 'The more you are interested in others, the more interesting they\'ll find you. To be interesting, be interested.', author: 'Kevin Kelly' },
  { text: 'Nothing elevates a person higher than taking responsibility for their mistakes. If you mess up, fess up.', author: 'Kevin Kelly' },
  { text: 'Separate the processes of creating from improving. You can\'t write and edit at the same time. While you invent, don\'t select.', author: 'Kevin Kelly' },
  { text: 'Keep showing up. 99% of success is just showing up. In fact, most success is just persistence.', author: 'Kevin Kelly' },
  { text: 'Friends are better than money. Almost anything money can do, friends can do better.', author: 'Kevin Kelly' },
  { text: 'A vacation plus a disaster equals an adventure.', author: 'Kevin Kelly' },
  { text: 'Forgiveness is accepting the apology you will never get.', author: 'Kevin Kelly' },
  { text: 'Be more generous than necessary. No one on their deathbed has ever regretted giving too much away.', author: 'Kevin Kelly' },
  { text: 'There is no limit on how much we can improve what we start with. There is no limit on better.', author: 'Kevin Kelly' },
  { text: 'When crises strike, don\'t waste them. No problems, no progress.', author: 'Kevin Kelly' },
  { text: 'You are only as young as the last time you changed your mind.', author: 'Kevin Kelly' },
  { text: 'Calm is contagious. Be calm to help others.', author: 'Kevin Kelly' },
  { text: 'When someone tells you something is wrong, they\'re usually right. When they tell you how to fix it, they\'re usually wrong.', author: 'Kevin Kelly' },
  { text: 'If you can\'t tell what you desperately need, it\'s probably sleep.', author: 'Kevin Kelly' },
  { text: 'Ignore what others may be thinking of you — because they aren\'t thinking of you.', author: 'Kevin Kelly' },
  { text: 'It is much easier to change how you think by changing your behavior than it is to change your behavior by changing how you think.', author: 'Kevin Kelly' },
  { text: "Don't worry how or where you begin. As long as you keep moving, your success will arrive far from where you start.", author: 'Kevin Kelly' },
  { text: 'This is the best time ever to make something. None of the greatest, coolest creations 20 years from now have been invented yet. You are not late.', author: 'Kevin Kelly' },
  { text: 'Things do not need to be perfect to be wonderful.', author: 'Kevin Kelly' },
  { text: 'If your goal does not have a schedule, it is a dream.', author: 'Kevin Kelly' },
  { text: 'To be remarkable, read books.', author: 'Kevin Kelly' },
  { text: 'Your behavior, not your opinions, will change the world.', author: 'Kevin Kelly' },
  { text: 'Cultivate an allergy to average.', author: 'Kevin Kelly' },
  { text: 'About 99% of the time, the right time is right now.', author: 'Kevin Kelly' },
  { text: 'Cultivate 12 people who love you because they are worth more than 12 million people who like you.', author: 'Kevin Kelly' },
  { text: "Don't ever work for someone you don't want to become.", author: 'Kevin Kelly' },
  { text: "Don't let your email inbox become your to-do list run by others.", author: 'Kevin Kelly' },
  { text: 'Experiences are fun and having influence is rewarding, but only mattering makes us happy. Do stuff that matters.', author: 'Kevin Kelly' },
  { text: 'Greatness is incompatible with optimizing in the short term. To achieve greatness requires a long view.', author: 'Kevin Kelly' },
  { text: "Don't take a job because it pays the most money.", author: 'Kevin Kelly' },
  { text: 'A worthy goal for a year is to learn enough about a subject so that you can\'t believe how ignorant you were a year earlier.', author: 'Kevin Kelly' },
  { text: 'Pain is inevitable. Suffering is optional.', author: 'Kevin Kelly' },
  { text: 'Recipe for greatness: Become just a teeny bit better than you were last year. Repeat every year.', author: 'Kevin Kelly' },
  { text: 'Draw to discover what you see. Write to discover what you think.', author: 'Kevin Kelly' },
  { text: 'Whenever you have a choice between being right or being kind, be kind. No exceptions.', author: 'Kevin Kelly' },
  { text: 'You don\'t need more time because you already have all the time that you will ever get; you need more focus.', author: 'Kevin Kelly' },
  { text: 'Learn how to learn from those you disagree with or even those who offend you. See if you can find the truth in what they believe.', author: 'Kevin Kelly' },
  { text: 'Recipe for success: underpromise and overdeliver.', author: 'Kevin Kelly' },
  { text: 'Work to become, not to acquire.', author: 'Kevin Kelly' },
];

const StartMenu: React.FC<StartMenuProps> = ({
  theme,
  onClose,
  onOpenTerminal,
  onReturnToLanding,
  onChangeWallpaper,
  wallpaperAccents
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
  const [seenIndices, setSeenIndices] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleItemClick = (action: () => void) => {
    // Don't close menu for modal actions
    action();
  };

  const handleAbout = () => {
    setShowAbout(true);
  };

  const handleMiniGame = () => {
    setShowGame(true);
  };

  const handleAdmin = () => {
    setShowAdmin(true);
  };

  const handleQuoteClick = () => {
    setShowQuoteModal(true);
  };

  const nextQuote = () => {
    const remaining = QUOTES
      .map((_, index) => index)
      .filter((index) => !seenIndices.includes(index) && index !== quoteIndex);
    const pool =
      remaining.length > 0
        ? remaining
        : QUOTES.map((_, index) => index).filter((index) => index !== quoteIndex);
    const next = pool[Math.floor(Math.random() * pool.length)];

    setSeenIndices((prev) => (remaining.length > 0 ? [...prev, quoteIndex] : [quoteIndex]));
    setQuoteIndex(next);
  };

  const currentQuote = QUOTES[quoteIndex];

  const menuItems = [
    { id: 'about-os', label: 'About YohannesOS', icon: Monitor, action: handleAbout },
    { id: 'wallpaper', label: 'Change Wallpaper', icon: Palette, action: onChangeWallpaper || (() => {}) },
    { id: 'mini-game', label: 'Snake Game', icon: Gamepad2, action: handleMiniGame },
    { id: 'admin', label: 'Admin Dashboard', icon: Shield, action: handleAdmin },
    { id: 'quote', label: 'Quote of the Day', icon: Quote, action: handleQuoteClick },
    { id: 'terminal', label: 'Terminal', icon: Terminal, action: () => { onOpenTerminal(); handleClose(); } },
    { id: 'power-off', label: 'Power Off', icon: Power, action: () => { onReturnToLanding(); handleClose(); } }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-30 transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Start Menu */}
      <div 
        className={`
          fixed bottom-12 left-4 w-80 rounded-lg shadow-2xl border z-40
          transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform-gpu
          ${isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
          }
          ${theme === 'dark'
            ? 'bg-[#08171E]/95 border-[#096B90]/30 backdrop-blur-xl'
            : 'bg-white/95 border-gray-200 backdrop-blur-xl'
          }
        `}
        style={{
          transformOrigin: 'bottom left',
          willChange: 'transform, opacity',
          boxShadow: `0 25px 50px -12px ${wallpaperAccents.glow}`
        }}
      >
        {/* Header */}
        <div className={`p-4 border-b transition-all duration-300 ease-out ${
          theme === 'dark' ? 'border-[#096B90]/20' : 'border-gray-200'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: isVisible ? '100ms' : '250ms' }}>
          <div className="flex items-center justify-between">
            <h3 className={`font-semibold transition-colors duration-200`}
                style={{ color: wallpaperAccents.primary }}>
              YohannesOS
            </h3>
            <button
              onClick={handleClose}
              aria-label="Close start menu"
              className={`p-1 rounded transition-all duration-200 hover:scale-110 active:scale-95 ${
                theme === 'dark' 
                  ? 'text-[#71B7D5] hover:bg-[#096B90]/20' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Quote Display */}
        <div className={`p-4 border-b transition-all duration-300 ease-out ${
          theme === 'dark' ? 'border-[#096B90]/20' : 'border-gray-200'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: isVisible ? '150ms' : '200ms' }}>
          <div className={`text-xs font-medium mb-2 transition-colors duration-200`}
               style={{ color: wallpaperAccents.secondary }}>
            Daily Inspiration
          </div>
          <p className={`text-sm italic leading-relaxed mb-1 ${
            theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700'
          }`}>
            "{currentQuote.text}"
          </p>
          <div className="flex items-center justify-between gap-3">
            <span className={`text-xs ${
              theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
            }`}>
              — {currentQuote.author}
            </span>
            <button
              onClick={nextQuote}
              aria-label="Show another quote"
              className={`p-1 rounded transition-transform hover:scale-110 ${
                theme === 'dark' ? 'text-[#71B7D5] hover:bg-[#096B90]/20' : 'text-gray-400 hover:bg-gray-100'
              }`}
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>

        {/* All Items */}
        <div className="p-2 max-h-80 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.action)}
                aria-label={item.label}
                className={`
                  w-full flex items-center gap-3 p-3 rounded-lg text-left
                  transition-all duration-100 ease-out transform hover:scale-[1.02] active:scale-95 will-change-transform
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}
                  ${theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'}
                `}
                style={{ 
                  transitionDelay: isVisible ? `${300 + index * 30}ms` : `${100 - index * 15}ms`,
                  willChange: 'transform, opacity, background-color'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = wallpaperAccents.glow;
                  e.currentTarget.style.boxShadow = `0 8px 25px ${wallpaperAccents.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="transition-transform duration-200 hover:scale-110 hover:rotate-12">
                  <item.icon 
                    size={18} 
                    style={{ color: wallpaperAccents.primary }}
                    className="transition-all duration-200"
                  />
                </div>
                <span className={`text-sm font-medium transition-colors duration-100 ${
                  theme === 'dark' ? 'group-hover:text-white' : 'group-hover:text-gray-900'
                }`}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setShowAbout(false)}
          />
          <div className={`relative max-w-md w-full rounded-2xl p-6 ${
            theme === 'dark' 
              ? 'bg-[#08171E]/95 border border-[#096B90]/30' 
              : 'bg-white border border-gray-200'
          } backdrop-blur-xl animate-in slide-in-from-bottom-4 fade-in duration-300`}
          style={{ boxShadow: `0 25px 50px -12px ${wallpaperAccents.glow}` }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold" style={{ color: wallpaperAccents.primary }}>
                About YohannesOS
              </h3>
              <button
                aria-label="Close about dialog"
                onClick={() => setShowAbout(false)}
                className={`p-1 rounded hover:scale-110 transition-transform duration-150 ${
                  theme === 'dark' ? 'text-[#71B7D5] hover:bg-[#096B90]/20' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <X size={20} />
              </button>
            </div>
            <div className={`space-y-3 text-sm ${
              theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700'
            }`}>
              <p><strong>Version:</strong> 2.1.0</p>
              <p><strong>Built with:</strong> React, TypeScript, Tailwind CSS</p>
              <p><strong>Features:</strong> Desktop environment, Terminal, Smooth animations</p>
              <p><strong>Creator:</strong> Yohannes - Full-stack developer passionate about creating unique digital experiences</p>
              <p className="pt-2 text-xs opacity-75">This portfolio OS showcases modern web technologies in an interactive desktop-like interface.</p>
            </div>
          </div>
        </div>
      )}

      {/* Mini Snake Game Modal */}
      {showGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setShowGame(false)}
          />
          <div className={`relative max-w-lg w-full rounded-2xl p-6 ${
            theme === 'dark' 
              ? 'bg-[#08171E]/95 border border-[#096B90]/30' 
              : 'bg-white border border-gray-200'
          } backdrop-blur-xl animate-in slide-in-from-bottom-4 fade-in duration-300`}
          style={{ boxShadow: `0 25px 50px -12px ${wallpaperAccents.glow}` }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold" style={{ color: wallpaperAccents.primary }}>
                Snake Game
              </h3>
              <button
                aria-label="Close snake game dialog"
                onClick={() => setShowGame(false)}
                className={`p-1 rounded hover:scale-110 transition-transform duration-150 ${
                  theme === 'dark' ? 'text-[#71B7D5] hover:bg-[#096B90]/20' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <X size={20} />
              </button>
            </div>
            <SnakeGame theme={theme} wallpaperAccents={wallpaperAccents} />
          </div>
        </div>
      )}

      {/* Quote Display Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setShowQuoteModal(false)}
          />
          <div className={`relative max-w-md w-full rounded-2xl p-6 ${
            theme === 'dark' 
              ? 'bg-[#08171E]/95 border border-[#096B90]/30' 
              : 'bg-white border border-gray-200'
          } backdrop-blur-xl animate-in slide-in-from-bottom-4 fade-in duration-300`}
          style={{ boxShadow: `0 25px 50px -12px ${wallpaperAccents.glow}` }}>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4" style={{ color: wallpaperAccents.primary }}>
                Quote of the Day
              </h3>
              <p className={`text-lg italic leading-relaxed mb-3 ${
                theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700'
              }`}>
                "{currentQuote.text}"
              </p>
              <p className={`text-sm mb-6 ${
                theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
              }`}>
                — {currentQuote.author}
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={nextQuote}
                  aria-label="Show a new quote"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-[#042B44]/70 text-[#A1CCDC] border border-[#096B90]/30'
                      : 'bg-gray-100 text-gray-700 border border-gray-200'
                  }`}
                >
                  <RefreshCw size={16} />
                  New Quote
                </button>
                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-white"
                  style={{ 
                    background: `linear-gradient(to right, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`,
                    boxShadow: `0 4px 15px ${wallpaperAccents.glow}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 25px ${wallpaperAccents.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 15px ${wallpaperAccents.glow}`;
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Dashboard Modal */}
      {showAdmin && (
        <AdminDashboard
          theme={theme}
          wallpaperAccents={wallpaperAccents}
          onClose={() => setShowAdmin(false)}
        />
      )}
    </>
  );
};

// Simple Snake Game Component
const SnakeGame: React.FC<{ theme: 'dark' | 'light'; wallpaperAccents: WallpaperAccents }> = ({ theme, wallpaperAccents }) => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState<[number, number]>([0, 1]);
  const [nextDirection, setNextDirection] = useState<[number, number]>([0, 1]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [nickname, setNickname] = useState('');
  const [from, setFrom] = useState('');
  const [playerSet, setPlayerSet] = useState(false);
  const [highScores, setHighScores] = useState<Array<{ name: string; from: string; score: number }>>([]);
  const [showAllScores, setShowAllScores] = useState(false);
  type SnakeHighScore = { name: string; from?: string; company?: string; score: number };

  const gridSize = 20;

  useEffect(() => {
    const storedScores = localStorage.getItem('snakeHighScores');
    if (storedScores) {
      const parsed = (JSON.parse(storedScores) as SnakeHighScore[]).map((s) => ({
        name: s.name,
        from: s.from || s.company || '',
        score: s.score
      }));
      setHighScores(parsed.slice(0, 20));
    }
  }, []);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const moveSnake = () => {
      const currDir = nextDirection;
      setDirection(currDir);
      setSnake(currentSnake => {
        const newSnake = [...currentSnake];
        const head = [newSnake[0][0] + currDir[0], newSnake[0][1] + currDir[1]];
        
        // Check boundaries
        if (head[0] < 0 || head[0] >= gridSize || head[1] < 0 || head[1] >= gridSize) {
          setGameOver(true);
          return currentSnake;
        }
        
        // Check self collision
        if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
          setGameOver(true);
          return currentSnake;
        }
        
        newSnake.unshift(head);
        
        // Check food collision
        if (head[0] === food[0] && head[1] === food[1]) {
          setScore(s => s + 10);
          setFood([
            Math.floor(Math.random() * gridSize),
            Math.floor(Math.random() * gridSize)
          ]);
        } else {
          newSnake.pop();
        }
        
        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [nextDirection, food, gameStarted, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction[0] !== 1) setNextDirection([-1, 0]);
          break;
        case 'ArrowDown':
          if (direction[0] !== -1) setNextDirection([1, 0]);
          break;
        case 'ArrowLeft':
          if (direction[1] !== 1) setNextDirection([0, -1]);
          break;
        case 'ArrowRight':
          if (direction[1] !== -1) setNextDirection([0, 1]);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameStarted]);

  useEffect(() => {
    if (gameOver && playerSet) {
      setHighScores(prev => {
        const updated = [...prev, { name: nickname, from, score }]
          .sort((a, b) => b.score - a.score)
          .slice(0, 20);
        localStorage.setItem('snakeHighScores', JSON.stringify(updated));
        return updated;
      });
    }
  }, [gameOver, playerSet, nickname, from, score]);

  const startGame = () => {
    if (!playerSet) {
      if (!nickname.trim() || !from.trim()) return;
      setPlayerSet(true);
    }
    setSnake([[10, 10]]);
    setFood([15, 15]);
    setDirection([0, 1]);
    setNextDirection([0, 1]);
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  };

  const canStart = playerSet || (nickname.trim() !== '' && from.trim() !== '');

  return (
    <div className="text-center">
      <div className={`mb-4 text-lg font-mono ${
        theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
      }`}>
        Score: {score}
      </div>
      
      <div 
        className={`relative mx-auto border-2 ${
          theme === 'dark' ? 'border-[#096B90] bg-[#042B44]/50' : 'border-gray-300 bg-gray-50'
        }`}
        style={{ 
          width: `${gridSize * 15}px`, 
          height: `${gridSize * 15}px` 
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className={`absolute ${index === 0 ? 'rounded-sm' : ''}`}
            style={{
              left: `${segment[1] * 15}px`,
              top: `${segment[0] * 15}px`,
              width: '13px',
              height: '13px',
              backgroundColor: theme === 'dark' ? '#71B7D5' : '#3B82F6'
            }}
          />
        ))}
        
        {/* Food */}
        <div
          className="absolute rounded-full"
          style={{
            left: `${food[1] * 15 + 1}px`,
            top: `${food[0] * 15 + 1}px`,
            width: '11px',
            height: '11px',
            backgroundColor: theme === 'dark' ? '#A1CCDC' : '#60A5FA'
          }}
        />
      </div>
      
      <div className="mt-4 space-y-2">
        {!playerSet && (
          <>
            <input
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              className={`w-full p-2 rounded border ${
                theme === 'dark'
                  ? 'bg-[#042B44]/50 border-[#096B90] text-[#A1CCDC]'
                  : 'bg-white border-gray-300 text-gray-800'
              }`}
            />
            <input
              type="text"
              placeholder="From (company, friend, etc.)"
              value={from}
              onChange={e => setFrom(e.target.value)}
              className={`w-full p-2 rounded border ${
                theme === 'dark'
                  ? 'bg-[#042B44]/50 border-[#096B90] text-[#A1CCDC]'
                  : 'bg-white border-gray-300 text-gray-800'
              }`}
            />
          </>
        )}
        {!gameStarted || gameOver ? (
          <button
            onClick={startGame}
            disabled={!canStart}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-white ${!canStart ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{
              background: `linear-gradient(to right, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`,
              boxShadow: `0 4px 15px ${wallpaperAccents.glow}`
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 8px 25px ${wallpaperAccents.glow}`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `0 4px 15px ${wallpaperAccents.glow}`;
            }}
          >
            {gameOver ? `Game Over! Play Again` : 'Start Game'}
          </button>
        ) : (
          <p
            className="text-sm"
            style={{ color: theme === 'dark' ? wallpaperAccents.secondary : '#4B5563' }}
          >
            Use arrow keys to control the snake
          </p>
        )}
      </div>

      <div className="mt-6">
        <h4
          className="font-bold mb-3"
          style={{ color: wallpaperAccents.primary }}
        >
          Leaderboard
        </h4>
        <div
          className={`overflow-hidden rounded-lg border ${
            theme === 'dark'
              ? 'border-[#096B90] bg-[#042B44]/50'
              : 'border-gray-300 bg-gray-50'
          }`}
          style={{ boxShadow: `0 4px 15px ${wallpaperAccents.glow}` }}
        >
          <div
            className={`grid grid-cols-3 gap-2 px-4 py-2 text-xs font-semibold uppercase ${
              theme === 'dark' ? 'bg-[#042B44]/70 text-[#A1CCDC]' : 'bg-gray-200 text-gray-700'
            }`}
          >
            <span>Player</span>
            <span className="text-center">From</span>
            <span className="text-right">Score</span>
          </div>
          <ul
            className={`divide-y text-sm ${
              theme === 'dark'
                ? 'divide-[#096B90]/30 text-[#A1CCDC]'
                : 'divide-gray-200 text-gray-700'
            }`}
          >
            {highScores.length === 0 && (
              <li className="px-4 py-3 text-center opacity-70">No scores yet.</li>
            )}
            {highScores.slice(0, showAllScores ? highScores.length : 5).map((s, idx) => (
              <li
                key={idx}
                className={`grid grid-cols-3 gap-2 px-4 py-2 ${
                  idx % 2 === 0
                    ? theme === 'dark'
                      ? 'bg-[#042B44]/40'
                      : 'bg-white'
                    : ''
                }`}
              >
                <span className="flex items-center">
                  {idx < 3 && <span className="mr-1">{idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}</span>}
                  {idx + 1}. {s.name}
                </span>
                <span className="text-center">{s.from}</span>
                <span className="text-right">{s.score}</span>
              </li>
            ))}
          </ul>
          {highScores.length > 5 && (
            <button
              onClick={() => setShowAllScores(prev => !prev)}
              aria-label={showAllScores ? 'Collapse leaderboard' : 'Expand leaderboard'}
              className={`w-full py-1 flex justify-center transition-colors ${
                theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700'
              }`}
            >
              <ChevronDown
                size={16}
                className={`transition-transform ${showAllScores ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
