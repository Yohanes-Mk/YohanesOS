import React, { useState } from 'react';
import { Power, Sun, Moon, Volume2, VolumeX, Minus, Plus, ArrowRight, Sparkles, Briefcase, ShieldCheck } from 'lucide-react';

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
    setTimeout(() => {
      onPowerOn();
    }, 300);
  };

  const proofPoints = [
    {
      icon: Sparkles,
      label: 'Applied AI',
      detail: 'LLM pipelines, retrieval systems, and product-facing AI workflows'
    },
    {
      icon: Briefcase,
      label: 'Recent Proof',
      detail: 'Accenture, Kibur, and solo projects demoed in real recruiting contexts'
    },
    {
      icon: ShieldCheck,
      label: 'Defensible Work',
      detail: 'Backend systems, monitoring, accessibility delivery, and honest project framing'
    }
  ];

  return (
    <div className="min-h-screen px-6 py-8 animate-in fade-in duration-1000 ease-out">
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
            aria-label="Decrease brightness"
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
            aria-label="Increase brightness"
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
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
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
          aria-label="Toggle theme"
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

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="animate-in slide-in-from-left-4 duration-700 delay-150 ease-out">
            <div className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ${
              theme === 'dark'
                ? 'border-white/10 bg-[#08171E]/70 text-[#A1CCDC]'
                : 'border-white/50 bg-white/75 text-gray-700'
            }`}>
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              September 2026 Portfolio Refresh
            </div>

            <h1 className={`max-w-3xl text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Portfolio OS rebuilt around applied AI and real delivery.
            </h1>

            <p className={`mt-6 max-w-2xl text-lg leading-8 ${
              theme === 'dark' ? 'text-[#A1CCDC]/82' : 'text-gray-600'
            }`}>
              A cleaner portfolio launcher for recruiter-facing work: stronger proof, tighter writing, and a product-style interface instead of an old desktop demo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {proofPoints.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className={`rounded-[1.5rem] border p-4 backdrop-blur-xl surface-shadow ${
                    theme === 'dark'
                      ? 'border-white/10 bg-[#08171E]/55'
                      : 'border-white/45 bg-white/72'
                  }`}
                >
                  <div className="mb-3 inline-flex rounded-2xl p-3" style={{ backgroundColor: `${theme === 'dark' ? '#042B44' : '#eff6ff'}` }}>
                    <Icon size={18} style={{ color: theme === 'dark' ? '#71B7D5' : '#2563EB' }} />
                  </div>
                  <div className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {label}
                  </div>
                  <p className={`mt-2 text-sm leading-6 ${
                    theme === 'dark' ? 'text-[#A1CCDC]/74' : 'text-gray-600'
                  }`}>
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={handlePowerClick}
                disabled={isPowering}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`
                  group relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-semibold
                  transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95
                  disabled:cursor-not-allowed disabled:opacity-60
                  ${theme === 'dark'
                    ? 'bg-white text-[#042B44] hover:shadow-[0_18px_40px_rgba(161,204,220,0.25)]'
                    : 'bg-gray-900 text-white hover:shadow-2xl'
                  }
                `}
              >
                <Power size={20} className={`${isPowering ? 'animate-spin' : ''}`} />
                <span>{isPowering ? 'Booting workspace' : 'Open workspace'}</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className={`rounded-full border px-4 py-3 text-sm ${
                theme === 'dark'
                  ? 'border-white/10 bg-[#08171E]/70 text-[#A1CCDC]'
                  : 'border-white/50 bg-white/75 text-gray-700'
              }`}>
                Spring 2027 internships · selective new-grad roles
              </div>
            </div>

            <p className={`mt-5 text-sm ${
              theme === 'dark' ? 'text-[#71B7D5]/72' : 'text-gray-500'
            }`}>
              Boot into projects, experience, resume, terminal, and contact surfaces.
            </p>
          </div>

          <div className="animate-in slide-in-from-right-4 duration-700 delay-250 ease-out">
            <div className={`relative overflow-hidden rounded-[2rem] border p-5 backdrop-blur-2xl surface-shadow ${
              theme === 'dark'
                ? 'border-white/10 bg-[#08171E]/65'
                : 'border-white/50 bg-white/78'
            }`}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
                    theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                  }`}>
                    Preview
                  </div>
                  <div className={`mt-1 text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Dashboard-style workspace
                  </div>
                </div>
                <div className={`rounded-full px-3 py-1 text-xs ${
                  theme === 'dark' ? 'bg-white/10 text-[#A1CCDC]' : 'bg-gray-100 text-gray-600'
                }`}>
                  v2.2
                </div>
              </div>

              <div className={`rounded-[1.75rem] border p-4 ${
                theme === 'dark'
                  ? 'border-[#096B90]/30 bg-[#021119]'
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className={`text-xs uppercase tracking-[0.22em] ${
                    theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                  }`}>
                    active
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className={`rounded-[1.5rem] border p-5 transition-all duration-500 ${
                      isHovering || isPowering
                        ? 'scale-[1.01]'
                        : 'scale-100'
                    } ${
                      theme === 'dark'
                        ? 'border-white/10 bg-white/6'
                        : 'border-white/70 bg-white'
                    }`}>
                      <div className={`text-xs uppercase tracking-[0.22em] ${
                        theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                      }`}>
                        Featured
                      </div>
                      <div className={`mt-3 text-2xl font-semibold tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        The Stack
                      </div>
                      <p className={`mt-2 text-sm leading-6 ${
                        theme === 'dark' ? 'text-[#A1CCDC]/76' : 'text-gray-600'
                      }`}>
                        Solo LLM pipeline with monitoring, digest generation, and context-aware ranking.
                      </p>
                    </div>

                    <div className={`rounded-[1.5rem] border p-5 ${
                      theme === 'dark'
                        ? 'border-white/10 bg-white/6'
                        : 'border-white/70 bg-white'
                    }`}>
                      <div className={`text-xs uppercase tracking-[0.22em] ${
                        theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                      }`}>
                        Experience
                      </div>
                      <div className={`mt-3 text-base font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Accenture · Kibur · BCI Lab
                      </div>
                      <p className={`mt-2 text-sm leading-6 ${
                        theme === 'dark' ? 'text-[#A1CCDC]/76' : 'text-gray-600'
                      }`}>
                        Enterprise accessibility, RAG systems, research infrastructure, and backend delivery.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {['Projects', 'Resume', 'Terminal'].map((label) => (
                      <div
                        key={label}
                        className={`rounded-2xl border px-4 py-4 text-sm font-medium ${
                          theme === 'dark'
                            ? 'border-white/10 bg-[#042B44]/42 text-[#A1CCDC]'
                            : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`mt-4 flex items-center justify-between rounded-2xl border px-4 py-3 ${
                theme === 'dark'
                  ? 'border-white/10 bg-white/6 text-[#A1CCDC]'
                  : 'border-gray-200 bg-white text-gray-700'
              }`}>
                <span className="text-sm">Experience tuned for recruiters and technical hiring teams</span>
                <span className={`text-xs uppercase tracking-[0.22em] ${
                  theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                }`}>
                  {isMobile ? 'mobile' : 'desktop'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
