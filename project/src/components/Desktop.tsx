import React, { useState } from 'react';
import { User, Briefcase, Linkedin, Mail, GraduationCap, Code, FileText, Briefcase as BriefcaseAlt, Smartphone } from 'lucide-react';
import ContentModal from './ContentModal';

// Ripple effect component
const RippleEffect: React.FC<{ x: number; y: number; color: string }> = ({ x, y, color }) => (
  <div
    className="absolute pointer-events-none animate-ping"
    style={{
      left: x - 10,
      top: y - 10,
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: color,
      opacity: 0.3,
      animation: 'ripple 0.6s ease-out forwards'
    }}
  />
);

// Tooltip component
const Tooltip: React.FC<{ text: string; children: React.ReactNode; theme: 'dark' | 'light' }> = ({ text, children, theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`
          absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium
          whitespace-nowrap pointer-events-none z-50 animate-in fade-in slide-in-from-bottom-2 duration-200
          ${theme === 'dark' 
            ? 'bg-[#08171E]/95 text-[#A1CCDC] border border-[#096B90]/30' 
            : 'bg-white/95 text-gray-700 border border-gray-200'
          }
          backdrop-blur-sm shadow-lg
        `}>
          {text}
          <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
            theme === 'dark' ? 'border-t-[#08171E]/95' : 'border-t-white/95'
          }`} />
        </div>
      )}
    </div>
  );
};

// Floating geometric overlay
const GeometricOverlay: React.FC<{ theme: 'dark' | 'light'; wallpaperAccents: WallpaperAccents }> = ({ wallpaperAccents }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {/* Floating geometric shapes */}
    <div 
      className="absolute w-32 h-32 opacity-5 animate-float-slow"
      style={{
        top: '10%',
        right: '15%',
        background: `linear-gradient(45deg, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`,
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        animationDelay: '0s'
      }}
    />
    <div 
      className="absolute w-24 h-24 opacity-5 animate-float-slow"
      style={{
        bottom: '20%',
        left: '10%',
        background: `linear-gradient(135deg, ${wallpaperAccents.secondary}, ${wallpaperAccents.primary})`,
        borderRadius: '50%',
        animationDelay: '2s'
      }}
    />
    <div 
      className="absolute w-20 h-20 opacity-5 animate-float-slow"
      style={{
        top: '60%',
        right: '25%',
        background: `linear-gradient(90deg, ${wallpaperAccents.primary}, transparent)`,
        clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        animationDelay: '4s'
      }}
    />
  </div>
);

interface WallpaperAccents {
  primary: string;
  secondary: string;
  glow: string;
  gradient: string;
}

interface DesktopProps {
  theme: 'dark' | 'light';
  wallpaperAccents: WallpaperAccents;
}

type ContentType = 'about' | 'projects' | 'education' | 'skills' | 'resume' | 'experience' | 'contact' | null;

const Desktop: React.FC<DesktopProps> = ({ theme, wallpaperAccents }) => {
  const [activeContent, setActiveContent] = useState<ContentType>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const createRipple = (e: React.MouseEvent, color: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y, color };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const iconItems = [
    // Featured row (top)
    { 
      id: 'about', 
      label: 'About Me', 
      icon: User, 
      featured: true,
      tooltip: 'Learn about my background and experience',
      onClick: () => setActiveContent('about')
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: Briefcase, 
      featured: true,
      tooltip: 'Explore my latest work and projects',
      onClick: () => setActiveContent('projects')
    },
    // Second row
    { 
      id: 'linkedin', 
      label: 'LinkedIn', 
      icon: Linkedin, 
      featured: false,
      tooltip: 'Connect with me on LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/yohs', '_blank')
    },
    { 
      id: 'experience', 
      label: 'Experience', 
      icon: BriefcaseAlt, 
      featured: false,
      tooltip: 'View my professional experience',
      onClick: () => setActiveContent('experience')
    },
    { 
      id: 'education', 
      label: 'Education', 
      icon: GraduationCap, 
      featured: false,
      tooltip: 'See my educational background',
      onClick: () => setActiveContent('education')
    },
    // Third row
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: Mail, 
      featured: false,
      tooltip: 'Get in touch with me',
      onClick: () => setActiveContent('contact')
    },
    { 
      id: 'skills', 
      label: 'Skills', 
      icon: Code, 
      featured: false,
      tooltip: 'Discover my technical skills',
      onClick: () => setActiveContent('skills')
    },
    { 
      id: 'resume', 
      label: 'Resume', 
      icon: FileText, 
      featured: false,
      tooltip: 'Download my resume',
      onClick: () => setActiveContent('resume')
    }
  ];

  const featuredItems = iconItems.filter(item => item.featured);
  const utilityItems = iconItems.filter(item => !item.featured);

  if (isMobile) {
    return (
      <div className="min-h-screen pt-8 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <GeometricOverlay theme={theme} wallpaperAccents={wallpaperAccents} />
        
        {/* Mobile Phone Frame */}
        <div className="max-w-sm mx-auto px-4">
          {/* Phone Header */}
          <div className={`mb-6 rounded-[2rem] border p-5 backdrop-blur-xl surface-shadow ${
            theme === 'dark'
              ? 'bg-[#042B44]/40 border-white/10 text-[#A1CCDC]'
              : 'bg-white/50 border-white/40 text-gray-800'
          }`}>
            <div className="mb-4 flex items-center justify-between">
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                theme === 'dark'
                  ? 'bg-white/8 text-[#A1CCDC]'
                  : 'bg-gray-900/5 text-gray-700'
              }`}>
                <Smartphone className="h-3.5 w-3.5" />
                Mobile Launcher
              </div>
              <div className={`text-[11px] uppercase tracking-[0.22em] ${
                theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
              }`}>
                2026 Refresh
              </div>
            </div>
            <h2 className="text-left text-2xl font-semibold tracking-tight text-balance">
              YohannesOS, rebuilt as a cleaner portfolio launcher.
            </h2>
            <p className={`mt-2 text-left text-sm leading-6 ${
              theme === 'dark' ? 'text-[#A1CCDC]/78' : 'text-gray-600'
            }`}>
              Quick access to work, experience, and contact info with less visual clutter.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["AI Systems", "Production Work", "Spring 2027 Search"].map((label) => (
                <span
                  key={label}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    theme === 'dark'
                      ? 'bg-white/8 text-[#A1CCDC]'
                      : 'bg-white/80 text-gray-700'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          
          {/* Phone App Grid */}
          <div className={`panel-grid rounded-[2rem] p-6 backdrop-blur-xl border surface-shadow ${
            theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
          } ${
            theme === 'dark'
              ? 'bg-[#042B44]/30 border-white/10'
              : 'bg-white/45 border-white/40'
          }`}>
            <div className="relative mb-5 flex items-center justify-between">
              <div>
                <div className={`text-[11px] uppercase tracking-[0.24em] ${
                  theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                }`}>
                  Apps
                </div>
                <div className="text-lg font-semibold tracking-tight">Open a section</div>
              </div>
              <div className={`rounded-full px-3 py-1 text-xs ${
                theme === 'dark' ? 'bg-white/8 text-[#A1CCDC]' : 'bg-gray-900/5 text-gray-600'
              }`}>
                {iconItems.length} items
              </div>
            </div>
            <div className="relative grid grid-cols-3 gap-4">
              {iconItems.map((item, index) => (
                <Tooltip key={item.id} text={item.tooltip || item.label} theme={theme}>
                  <button
                    onClick={(e) => {
                      createRipple(e, wallpaperAccents.primary);
                      item.onClick();
                    }}
                    aria-label={item.label}
                    style={{ 
                      animationDelay: `${300 + index * 100}ms`,
                      animationDuration: `${4 + (index % 3)}s`
                    }}
                    className={`
                      relative overflow-hidden animate-float group
                      w-full aspect-square rounded-2xl flex flex-col items-center justify-center gap-2
                      transition-all duration-200 ease-out transform hover:scale-[1.03] active:scale-95
                      ${theme === 'dark'
                        ? 'bg-[#042B44]/45 hover:bg-[#096B90]/26 border border-white/10'
                        : 'bg-white/72 hover:bg-white border border-white/50'
                      }
                      backdrop-blur-sm hover:shadow-lg
                    `}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 8px 25px ${wallpaperAccents.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {ripples.map(ripple => (
                      <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} color={ripple.color} />
                    ))}
                    
                    {/* App Icon */}
                    <div className={`
                      p-2 rounded-xl transition-all duration-200 ease-out group-hover:scale-110 group-hover:rotate-12
                      ${theme === 'dark'
                        ? 'bg-[#096B90]/20'
                        : 'bg-gray-100'
                      }
                    `}>
                      <item.icon 
                        size={20} 
                        style={{ color: wallpaperAccents.primary }}
                        className="transition-colors duration-200"
                      />
                    </div>
                    
                    {/* App Label */}
                    <span className={`text-xs font-medium text-center leading-tight ${
                      theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                </Tooltip>
              ))}
            </div>
            
            {/* Phone Home Indicator */}
            <div className="flex justify-center mt-6">
              <div className={`w-32 h-1 rounded-full ${
                theme === 'dark' ? 'bg-[#096B90]/30' : 'bg-gray-300'
              }`} />
            </div>
          </div>
          
          {/* Phone Status Bar Simulation */}
          <div className="text-center mt-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
              theme === 'dark' 
                ? 'bg-[#042B44]/30 text-[#71B7D5]' 
                : 'bg-white/30 text-gray-600'
            }`}>
              <div className="w-1 h-1 rounded-full bg-current" />
              <span>Swipe up for more</span>
            </div>
          </div>
        </div>
        
        {activeContent && (
          <ContentModal
            type={activeContent}
            theme={theme}
            onClose={() => setActiveContent(null)}
            wallpaperAccents={wallpaperAccents}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center pb-16 px-6">
      <GeometricOverlay theme={theme} wallpaperAccents={wallpaperAccents} />
      <div className="w-full max-w-6xl">
        <div className={`panel-grid relative overflow-hidden rounded-[2rem] border p-6 md:p-8 backdrop-blur-2xl surface-shadow ${
          theme === 'dark'
            ? 'bg-[#03141d]/62 border-white/10'
            : 'bg-white/45 border-white/45'
        }`}>
          <div className="relative mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                theme === 'dark'
                  ? 'bg-white/8 text-[#A1CCDC]'
                  : 'bg-gray-900/5 text-gray-700'
              }`}>
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: wallpaperAccents.primary }} />
                Desktop Portfolio
              </div>
              <h1 className={`text-4xl font-semibold tracking-tight md:text-5xl ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                A cleaner launcher for work that matters.
              </h1>
              <p className={`mt-4 max-w-xl text-base leading-7 text-balance ${
                theme === 'dark' ? 'text-[#A1CCDC]/80' : 'text-gray-600'
              }`}>
                Open featured projects, experience, and contact details from a single OS-style surface updated for the current search cycle.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {["Applied AI", "Production Systems", "Updated Aug 2026"].map((pill) => (
                <div
                  key={pill}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
                    theme === 'dark'
                      ? 'border-white/10 bg-white/6 text-[#A1CCDC]'
                      : 'border-white/50 bg-white/80 text-gray-700'
                  }`}
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {featuredItems.map((item, index) => (
                <Tooltip key={item.id} text={item.tooltip || item.label} theme={theme}>
                  <button
                    onClick={(e) => {
                      createRipple(e, wallpaperAccents.primary);
                      item.onClick();
                    }}
                    aria-label={item.label}
                    className={`group relative overflow-hidden rounded-[1.75rem] border p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] ${
                      theme === 'dark'
                        ? 'border-white/10 bg-white/6 hover:bg-white/10'
                        : 'border-white/50 bg-white/80 hover:bg-white'
                    }`}
                    style={{ animationDelay: `${160 + index * 100}ms` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 25px 50px -18px ${wallpaperAccents.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {ripples.map(ripple => (
                      <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} color={ripple.color} />
                    ))}
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})` }}
                    />
                    <div className={`mb-10 inline-flex rounded-2xl border p-3 ${
                      theme === 'dark' ? 'border-white/10 bg-[#071b25]' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <item.icon size={30} style={{ color: wallpaperAccents.primary }} />
                    </div>
                    <div className={`mb-2 text-xs uppercase tracking-[0.22em] ${
                      theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                    }`}>
                      Featured
                    </div>
                    <div className={`text-2xl font-semibold tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`mt-3 text-sm leading-6 ${
                      theme === 'dark' ? 'text-[#A1CCDC]/78' : 'text-gray-600'
                    }`}>
                      {item.tooltip}
                    </div>
                  </button>
                </Tooltip>
              ))}
            </div>

            <div className={`rounded-[1.75rem] border p-5 ${
              theme === 'dark'
                ? 'border-white/10 bg-white/6'
                : 'border-white/50 bg-white/75'
            }`}>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className={`text-[11px] uppercase tracking-[0.22em] ${
                    theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                  }`}>
                    Shortcuts
                  </div>
                  <div className={`text-lg font-semibold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Everything else
                  </div>
                </div>
                <div className={`rounded-full px-3 py-1 text-xs ${
                  theme === 'dark' ? 'bg-white/8 text-[#A1CCDC]' : 'bg-gray-900/5 text-gray-600'
                }`}>
                  {utilityItems.length} apps
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {utilityItems.map((item, index) => (
                  <Tooltip key={item.id} text={item.tooltip || item.label} theme={theme}>
                    <button
                      onClick={(e) => {
                        createRipple(e, wallpaperAccents.primary);
                        item.onClick();
                      }}
                      aria-label={item.label}
                      className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] ${
                        theme === 'dark'
                          ? 'border-white/10 bg-[#042B44]/34 hover:bg-[#096B90]/18'
                          : 'border-white/50 bg-white/78 hover:bg-white'
                      }`}
                      style={{ animationDelay: `${320 + index * 70}ms` }}
                    >
                      {ripples.map(ripple => (
                        <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} color={ripple.color} />
                      ))}
                      <div className="mb-4 flex items-center justify-between">
                        <div className={`rounded-xl p-2.5 ${
                          theme === 'dark' ? 'bg-white/8' : 'bg-gray-100'
                        }`}>
                          <item.icon size={20} style={{ color: wallpaperAccents.primary }} />
                        </div>
                        <div className={`text-[10px] uppercase tracking-[0.22em] ${
                          theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-500'
                        }`}>
                          Open
                        </div>
                      </div>
                      <div className={`text-sm font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.label}
                      </div>
                      <div className={`mt-1 text-xs leading-5 ${
                        theme === 'dark' ? 'text-[#A1CCDC]/72' : 'text-gray-600'
                      }`}>
                        {item.tooltip}
                      </div>
                    </button>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {activeContent && (
        <ContentModal
          type={activeContent}
          theme={theme}
          onClose={() => setActiveContent(null)}
          wallpaperAccents={wallpaperAccents}
        />
      )}
    </div>
  );
};

export default Desktop;
