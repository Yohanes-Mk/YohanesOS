import React, { useState } from 'react';
import { Monitor, Power, Sun, Moon, Volume2, VolumeX, Minus, Plus, Smartphone } from 'lucide-react';

interface LandingScreenProps {
  onPowerOn: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  brightness: number;
  onIncreaseBrightness: () => void;
  onDecreaseBrightness: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ 
  onPowerOn, 
  theme, 
  onToggleTheme, 
  isMuted, 
  onToggleMute,
  brightness,
  onIncreaseBrightness,
  onDecreaseBrightness
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isPowering, setIsPowering] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePowerClick = () => {
    setIsPowering(true);
    // Small delay for visual feedback before transition
    setTimeout(() => {
      onPowerOn();
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-in fade-in duration-1000 ease-out">
      {/* Top Controls */}
      <div className="fixed top-6 right-6 flex gap-3 z-10 animate-in slide-in-from-top duration-700 delay-300 ease-out">
        {/* Brightness controls */}
        <div className={`flex items-center gap-1 px-3 py-2 rounded-full backdrop-blur-md border ${
          theme === 'dark'
            ? 'bg-[#08171E]/80 border-[#096B90]/30'
            : 'bg-white/80 border-gray-200'
        }`}>
          <button
            onClick={onDecreaseBrightness}
            className={`p-1 rounded transition-all duration-150 hover:scale-105 ${
              theme === 'dark'
                ? 'hover:bg-[#096B90]/30 text-[#A1CCDC]'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
            title="Decrease brightness"
          >
            <Minus size={16} />
          </button>
          <span className={`text-xs font-mono px-2 ${
            theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-700'
          }`}>
            {brightness}%
          </span>
          <button
            onClick={onIncreaseBrightness}
            className={`p-1 rounded transition-all duration-150 hover:scale-105 ${
              theme === 'dark'
                ? 'hover:bg-[#096B90]/30 text-[#A1CCDC]'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
            title="Increase brightness"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          onClick={onToggleMute}
          className={`p-3 rounded-full backdrop-blur-md border transition-all duration-150 hover:scale-105 ${
            theme === 'dark'
              ? 'bg-[#08171E]/80 border-[#096B90]/30 hover:bg-[#096B90]/30 text-[#A1CCDC]'
              : 'bg-white/80 border-gray-200 hover:bg-gray-100 text-gray-700'
          }`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        
        <button
          onClick={onToggleTheme}
          className={`p-3 rounded-full backdrop-blur-md border transition-all duration-150 hover:scale-105 ${
            theme === 'dark'
              ? 'bg-[#08171E]/80 border-[#096B90]/30 hover:bg-[#096B90]/30 text-[#A1CCDC]'
              : 'bg-white/80 border-gray-200 hover:bg-gray-100 text-gray-700'
          }`}
          title="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Device Silhouette - Monitor for Desktop, Phone for Mobile */}
      <div className="mb-8 relative animate-in slide-in-from-top-4 duration-700 delay-200 ease-out">
        {isMobile ? (
          /* Mobile Phone Silhouette */
          <div className={`w-32 h-56 rounded-3xl border-4 transition-all duration-500 ease-out relative ${
            isHovering 
              ? 'border-[#71B7D5] shadow-[0_0_40px_rgba(113,183,213,0.4)] scale-105' 
              : 'border-[#096B90]'
          } ${isPowering ? 'scale-110 border-[#A1CCDC] shadow-[0_0_60px_rgba(161,204,220,0.6)]' : ''}`}>
            <div className={`w-full h-full rounded-2xl bg-gradient-to-b transition-all duration-500 ease-out ${
              isHovering 
                ? 'from-[#096B90]/20 to-[#08171E]/40' 
                : 'from-transparent to-transparent'
            } ${isPowering ? 'from-[#71B7D5]/30 to-[#096B90]/50' : ''}`}>
              {/* Phone screen reflection */}
              <div className={`w-full h-12 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl transition-all duration-300 ${
                isPowering ? 'from-white/20' : ''
              }`} />
              
              {/* Phone home indicator */}
              <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full transition-all duration-300 ${
                isPowering ? 'bg-[#71B7D5] shadow-[0_0_8px_rgba(113,183,213,0.8)]' : 'bg-[#042B44]'
              }`} />
              
              {/* Phone camera notch */}
              <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 rounded-full transition-all duration-300 ${
                isPowering ? 'bg-[#71B7D5]' : 'bg-[#042B44]'
              }`} />
            </div>
          </div>
        ) : (
          /* Desktop Monitor Silhouette */
          <div className={`w-48 h-36 rounded-lg border-4 transition-all duration-500 ease-out ${
            isHovering 
              ? 'border-[#71B7D5] shadow-[0_0_40px_rgba(113,183,213,0.4)] scale-105' 
              : 'border-[#096B90]'
          } ${isPowering ? 'scale-110 border-[#A1CCDC] shadow-[0_0_60px_rgba(161,204,220,0.6)]' : ''}`}>
            <div className={`w-full h-full rounded bg-gradient-to-b transition-all duration-500 ease-out ${
              isHovering 
                ? 'from-[#096B90]/20 to-[#08171E]/40' 
                : 'from-transparent to-transparent'
            } ${isPowering ? 'from-[#71B7D5]/30 to-[#096B90]/50' : ''}`}>
              {/* Screen reflection effect */}
              <div className={`w-full h-8 bg-gradient-to-b from-white/10 to-transparent rounded-t transition-all duration-300 ${
                isPowering ? 'from-white/20' : ''
              }`} />
              
              {/* Power indicator */}
              <div className={`absolute bottom-2 right-2 w-2 h-2 rounded-full transition-all duration-300 ${
                isPowering ? 'bg-[#71B7D5] shadow-[0_0_8px_rgba(113,183,213,0.8)]' : 'bg-[#042B44]'
              }`} />
            </div>
          </div>
        )}
        
        {/* Device Stand - Only for Desktop Monitor */}
        {!isMobile && (
          <>
            <div className={`w-16 h-6 bg-[#096B90] mx-auto rounded-b transition-all duration-300 ${
              isPowering ? 'from-white/20' : ''
            }`} />
            <div className={`w-24 h-2 bg-[#042B44] mx-auto rounded-full transition-all duration-300 ${
              isPowering ? 'bg-[#096B90]' : ''
            }`} />
          </>
        )}
      </div>

      {/* Headline */}
      <div className="text-center mb-12 animate-in slide-in-from-bottom-4 duration-700 delay-400 ease-out">
        <h1 className={`text-5xl md:text-6xl font-bold mb-4 tracking-tight ${
          theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
        }`}>
          YohannesOS
        </h1>
        <p className={`text-xl md:text-2xl mb-2 ${
          theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-600'
        }`}>
          Portfolio Operating System
        </p>
        <p className={`text-sm ${
          theme === 'dark' ? 'text-[#71B7D5]/70' : 'text-gray-500'
        }`}>
          Clean • Cinematic • Fast
        </p>
      </div>

      {/* Power On Button */}
      <div className="animate-in slide-in-from-bottom-4 duration-700 delay-600 ease-out">
        <button
          onClick={handlePowerClick}
          disabled={isPowering}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`
            group relative px-8 py-4 rounded-full font-semibold text-lg
            transition-all duration-300 ease-out transform hover:scale-105 active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          ${theme === 'dark'
              ? 'bg-gradient-to-r from-[#096B90] to-[#71B7D5] text-white hover:shadow-[0_0_40px_rgba(113,183,213,0.5)]'
              : 'bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-lg'
          } ${isPowering ? 'animate-pulse shadow-[0_0_60px_rgba(113,183,213,0.7)]' : ''}
          }
          `}
        >
        <div className="flex items-center gap-3">
            <Power size={24} className={`transition-transform duration-300 ease-out ${
              isHovering ? 'rotate-90' : ''
            } ${isPowering ? 'animate-spin' : ''}`} />
            <span>{isPowering ? 'Booting...' : 'Power On'}</span>
        </div>
        
        {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#096B90] to-[#71B7D5] transition-opacity duration-300 blur ${
            isHovering ? 'opacity-20' : 'opacity-0'
          } ${isPowering ? 'opacity-40' : ''}`} />
        </button>
      </div>

      {/* Subtle instruction text */}
      <p className={`mt-8 text-sm animate-in fade-in duration-700 delay-800 ease-out ${
        theme === 'dark' ? 'text-[#71B7D5]/50' : 'text-gray-400'
      }`}>
        Click to boot into the desktop experience
      </p>
    </div>
  );
};

export default LandingScreen;