import React, { useState, useEffect } from 'react';
import { Monitor, Power, Volume2, VolumeX, Sun, Moon, Terminal, Clock, Menu, X, Minus, Plus, Smartphone } from 'lucide-react';
import LandingScreen from './components/LandingScreen';
import Desktop from './components/Desktop';
import TerminalMode from './components/TerminalMode';
import StartMenu from './components/StartMenu';
import AudioManager from './components/AudioManager';

type AppState = 'landing' | 'booting' | 'desktop' | 'terminal';
type Theme = 'dark' | 'light';

// Wallpaper-based design system
const getWallpaperAccents = (wallpaperIndex: number, theme: 'dark' | 'light') => {
  const accents = {
    0: { // Default
      primary: theme === 'dark' ? '#71B7D5' : '#3B82F6',
      secondary: theme === 'dark' ? '#A1CCDC' : '#60A5FA',
      glow: theme === 'dark' ? 'rgba(113,183,213,0.3)' : 'rgba(59,130,246,0.2)',
      gradient: theme === 'dark' 
        ? 'from-[#096B90]/20 via-[#71B7D5]/10 to-[#A1CCDC]/5'
        : 'from-blue-500/10 via-blue-400/5 to-blue-300/5'
    },
    1: { // Blue
      primary: theme === 'dark' ? '#60A5FA' : '#2563EB',
      secondary: theme === 'dark' ? '#93C5FD' : '#3B82F6',
      glow: theme === 'dark' ? 'rgba(96,165,250,0.3)' : 'rgba(37,99,235,0.2)',
      gradient: theme === 'dark'
        ? 'from-blue-500/20 via-blue-400/10 to-blue-300/5'
        : 'from-blue-600/10 via-blue-500/5 to-blue-400/5'
    },
    2: { // Purple
      primary: theme === 'dark' ? '#A78BFA' : '#7C3AED',
      secondary: theme === 'dark' ? '#C4B5FD' : '#8B5CF6',
      glow: theme === 'dark' ? 'rgba(167,139,250,0.3)' : 'rgba(124,58,237,0.2)',
      gradient: theme === 'dark'
        ? 'from-purple-500/20 via-purple-400/10 to-purple-300/5'
        : 'from-purple-600/10 via-purple-500/5 to-purple-400/5'
    },
    3: { // Green
      primary: theme === 'dark' ? '#34D399' : '#059669',
      secondary: theme === 'dark' ? '#6EE7B7' : '#10B981',
      glow: theme === 'dark' ? 'rgba(52,211,153,0.3)' : 'rgba(5,150,105,0.2)',
      gradient: theme === 'dark'
        ? 'from-emerald-500/20 via-emerald-400/10 to-emerald-300/5'
        : 'from-emerald-600/10 via-emerald-500/5 to-emerald-400/5'
    },
    4: { // Orange
      primary: theme === 'dark' ? '#FB923C' : '#EA580C',
      secondary: theme === 'dark' ? '#FDBA74' : '#F97316',
      glow: theme === 'dark' ? 'rgba(251,146,60,0.3)' : 'rgba(234,88,12,0.2)',
      gradient: theme === 'dark'
        ? 'from-orange-500/20 via-orange-400/10 to-orange-300/5'
        : 'from-orange-600/10 via-orange-500/5 to-orange-400/5'
    }
  };
  return accents[wallpaperIndex as keyof typeof accents] || accents[0];
};

function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);
  const [theme, setTheme] = useState<Theme>('light');
  const [isMuted, setIsMuted] = useState(false);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [brightness, setBrightness] = useState(80);
  const [wallpaperIndex, setWallpaperIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Wallpaper gradients
  const wallpapers = [
    'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300', // Default light
    'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300',
    'bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300',
    'bg-gradient-to-br from-green-100 via-green-200 to-green-300',
    'bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300'
  ];

  const darkWallpapers = [
    'bg-gradient-to-br from-[#08171E] via-[#042B44] to-[#096B90]', // Default dark
    'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700',
    'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700',
    'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700',
    'bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700'
  ];

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update clock every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Apply brightness to the entire app
  useEffect(() => {
    document.documentElement.style.filter = `brightness(${brightness}%)`;
    return () => {
      document.documentElement.style.filter = '';
    };
  }, [brightness]);

  const increaseBrightness = () => {
    setBrightness(prev => Math.min(100, prev + 10));
  };

  const decreaseBrightness = () => {
    setBrightness(prev => Math.max(50, prev - 10));
  };

  const changeWallpaper = () => {
    setWallpaperIndex(prev => (prev + 1) % wallpapers.length);
  };

  // Get current wallpaper accents
  const wallpaperAccents = getWallpaperAccents(wallpaperIndex, theme);

  const handlePowerOn = () => {
    setIsTransitioning(true);
    setAppState('booting');
    
    // Smooth boot progress animation
    const bootSteps = [
      { progress: 20, delay: 300 },
      { progress: 45, delay: 800 },
      { progress: 70, delay: 1200 },
      { progress: 90, delay: 1800 },
      { progress: 100, delay: 2200 }
    ];
    
    bootSteps.forEach(({ progress, delay }) => {
      setTimeout(() => {
        setBootProgress(progress);
      }, delay);
    });
    
    // Transition to desktop
    setTimeout(() => {
      setIsTransitioning(false);
      setAppState('desktop');
    }, 2800);
  };

  const openTerminal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    setAppState('terminal');
    setShowStartMenu(false);
    }, 200);
  };

  const closeTerminal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    setAppState('desktop');
    }, 200);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const toggleStartMenu = () => {
    setShowStartMenu(prev => !prev);
  };

  const returnToLanding = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setAppState('landing');
      setIsTransitioning(false);
      setBootProgress(0);
    }, 300);
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ease-out ${
      theme === 'dark' 
        ? darkWallpapers[wallpaperIndex]
        : wallpapers[wallpaperIndex]
    }`}>
      <AudioManager isMuted={isMuted} />
      
      {/* Vignette overlay */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${
        appState === 'landing' ? 'opacity-30' : 'opacity-100'
      } bg-gradient-radial from-transparent via-transparent to-black/20`} />
      
      {/* Global transition overlay */}
      <div className={`fixed inset-0 bg-black/30 backdrop-blur-[2px] transition-all duration-300 ease-out z-[100] ${
        isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} />
      
      {appState === 'landing' && (
        <LandingScreen 
          onPowerOn={handlePowerOn} 
          theme={theme}
          onToggleTheme={toggleTheme}
          isMuted={isMuted}
          onToggleMute={toggleMute}
          brightness={brightness}
          onIncreaseBrightness={increaseBrightness}
          onDecreaseBrightness={decreaseBrightness}
        />
      )}
      
      {appState === 'booting' && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 animate-in fade-in duration-500 backdrop-blur-[1px] ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}>
          <div className="text-center max-w-md mx-auto px-6">
            {/* Boot logo */}
            <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700 ease-out">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#096B90] to-[#71B7D5]' 
                  : 'bg-gradient-to-br from-gray-600 to-gray-800'
              }`}>
                {isMobile ? (
                  <Smartphone className={`w-8 h-8 ${
                    theme === 'dark' ? 'text-white' : 'text-white'
                  }`} />
                ) : (
                  <Monitor className={`w-8 h-8 ${
                    theme === 'dark' ? 'text-white' : 'text-white'
                  }`} />
                )}
              </div>
              <h1 className={`text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
              }`}>YohannesOS</h1>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-600'
              }`}>v2.1.0</p>
            </div>
            
            {/* Progress bar */}
            <div className="mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-300 ease-out">
              <div className={`w-full rounded-full h-1 mb-4 ${
                theme === 'dark' ? 'bg-[#042B44]' : 'bg-gray-300'
              }`}>
                <div 
                  className={`h-1 rounded-full transition-all duration-500 ease-out ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-[#096B90] to-[#71B7D5]' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-800'
                  }`}
                  style={{ width: `${bootProgress}%` }}
                />
              </div>
            </div>
            
            {/* Boot messages */}
            <div className={`font-mono text-sm space-y-2 text-left animate-in slide-in-from-bottom-4 duration-700 delay-500 ease-out ${
              theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-600'
            }`}>
              <div className={`transition-opacity duration-300 ${bootProgress >= 20 ? 'opacity-100' : 'opacity-0'}`}>
                → Initializing desktop environment...
              </div>
              <div className={`transition-opacity duration-300 ${bootProgress >= 45 ? 'opacity-100' : 'opacity-0'}`}>
                → Loading user profile...
              </div>
              <div className={`transition-opacity duration-300 ${bootProgress >= 70 ? 'opacity-100' : 'opacity-0'}`}>
                → Preparing workspace...
              </div>
              <div className={`transition-opacity duration-300 ${bootProgress >= 90 ? 'opacity-100' : 'opacity-0'}`}>
                → Welcome back.
              </div>
            </div>
          </div>
        </div>
      )}
      
      {appState === 'desktop' && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">
          {/* Premium background overlay that matches wallpaper */}
          <div 
            className={`fixed inset-0 pointer-events-none transition-all duration-1000 ease-out bg-gradient-to-br ${wallpaperAccents.gradient}`}
            style={{
              background: `radial-gradient(circle at 30% 20%, ${wallpaperAccents.glow}, transparent 50%), radial-gradient(circle at 70% 80%, ${wallpaperAccents.glow}, transparent 50%)`
            }}
          />
          
          <Desktop 
            theme={theme} 
            onOpenTerminal={openTerminal} 
            onReturnToLanding={returnToLanding}
            wallpaperAccents={wallpaperAccents}
          />
          
          {/* Taskbar */}
          <div className={`fixed bottom-0 left-0 right-0 h-12 backdrop-blur-md border-t z-40 animate-in slide-in-from-bottom duration-500 delay-300 ease-out ${
            theme === 'dark' 
              ? 'bg-[#08171E]/80 border-[#096B90]/30' 
              : 'bg-white/80 border-gray-300'
          }`}>
            <div className="flex items-center justify-between h-full px-4">
              {/* Left side - Start button */}
              <button
                onClick={toggleStartMenu}
                className={`
                  px-3 py-1.5 rounded transition-all duration-300 ease-out transform-gpu
                  hover:scale-110 active:scale-90 relative overflow-hidden
                  ${showStartMenu ? 'scale-110' : 'scale-100'}
                  ${
                  theme === 'dark'
                    ? `text-[#A1CCDC] ${showStartMenu ? 'bg-[#096B90]/50 shadow-[0_0_30px_rgba(113,183,213,0.4)]' : 'hover:bg-[#096B90]/30'}`
                    : `text-gray-700 ${showStartMenu ? 'bg-gray-200 shadow-lg' : 'hover:bg-gray-200'}`
                  }
                `}
                style={{ willChange: 'transform' }}
              >
                {/* Glow effect */}
                <div className={`
                  absolute inset-0 rounded transition-all duration-300 ease-out
                  ${showStartMenu || theme === 'dark' 
                    ? 'bg-gradient-to-r from-[#096B90]/20 to-[#71B7D5]/20 opacity-100' 
                    : 'opacity-0'
                  }
                `} />
                
                {/* Button content */}
                <div className="relative z-10">
                <Menu 
                  size={16} 
                  className={`transition-all duration-300 ease-out transform-gpu ${
                    showStartMenu ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                  }`}
                  style={{ willChange: 'transform' }}
                />
                </div>
              </button>
              
              {/* Right side - Controls and clock */}
              <div className="flex items-center gap-2">
                {/* Brightness controls */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={decreaseBrightness}
                    className={`p-2 rounded transition-all duration-200 hover:scale-105 ${
                      theme === 'dark'
                        ? 'hover:bg-[#096B90]/30 text-[#A1CCDC]'
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                    title="Decrease brightness"
                  >
                    <Minus size={14} />
                  </button>
                  <span className={`text-xs font-mono px-1 ${
                    theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700'
                  }`}>
                    {brightness}%
                  </span>
                  <button
                    onClick={increaseBrightness}
                    className={`p-2 rounded transition-all duration-200 hover:scale-105 ${
                      theme === 'dark'
                        ? 'hover:bg-[#096B90]/30 text-[#A1CCDC]'
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                    title="Increase brightness"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={toggleMute}
                  className={`p-2 rounded transition-all duration-200 hover:scale-105 ${
                    theme === 'dark'
                      ? 'hover:bg-[#096B90]/30 text-[#A1CCDC]'
                      : 'hover:bg-gray-200 text-gray-700'
                  }`}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded transition-all duration-150 hover:scale-105 ${
                    theme === 'dark'
                      ? 'hover:bg-[#096B90]/30 text-[#A1CCDC]'
                      : 'hover:bg-gray-200 text-gray-700'
                  }`}
                  title="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                
                <button
                  onClick={openTerminal}
                  className={`p-2 rounded transition-all duration-200 hover:scale-105 ${
                    theme === 'dark'
                      ? 'hover:bg-[#096B90]/30 text-[#A1CCDC]'
                      : 'hover:bg-gray-200 text-gray-700'
                  }`}
                  title="Open Terminal"
                >
                  <Terminal size={16} />
                </button>
                
                <div className={`px-3 py-1.5 text-sm font-mono ${
                  theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700'
                }`}>
                  {currentTime.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Start Menu */}
          {showStartMenu && (
            <StartMenu
              theme={theme}
              onClose={() => setShowStartMenu(false)}
              onOpenTerminal={openTerminal}
              onReturnToLanding={returnToLanding}
              onChangeWallpaper={changeWallpaper}
              wallpaperAccents={wallpaperAccents}
              isMobile={isMobile}
            />
          )}
        </div>
      )}
      
      {appState === 'terminal' && (
        <TerminalMode theme={theme} onClose={closeTerminal} />
      )}

    </div>
  );
}

export default App;