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
const GeometricOverlay: React.FC<{ theme: 'dark' | 'light'; wallpaperAccents: WallpaperAccents }> = ({ theme, wallpaperAccents }) => (
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
  onOpenTerminal: () => void;
  onReturnToLanding: () => void;
  wallpaperAccents: WallpaperAccents;
}

type ContentType = 'about' | 'projects' | 'education' | 'skills' | 'resume' | 'experience' | 'contact' | null;

const Desktop: React.FC<DesktopProps> = ({ theme, onOpenTerminal, onReturnToLanding, wallpaperAccents }) => {
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
      onClick: () => window.open('https://linkedin.com/in/yohannes', '_blank')
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

  if (isMobile) {
    return (
      <div className="min-h-screen pt-8 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <GeometricOverlay theme={theme} wallpaperAccents={wallpaperAccents} />
        
        {/* Mobile Phone Frame */}
        <div className="max-w-sm mx-auto px-4">
          {/* Phone Header */}
          <div className="text-center mb-6">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-[#096B90] to-[#71B7D5]' 
                : 'bg-gradient-to-br from-gray-600 to-gray-800'
            }`}>
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className={`text-xl font-bold ${
              theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
            }`}>
              YohannesOS Mobile
            </h2>
          </div>
          
          {/* Phone App Grid */}
          <div className={`rounded-3xl p-6 backdrop-blur-xl border ${
            theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
          } ${
            theme === 'dark'
              ? 'bg-[#042B44]/30 border-[#096B90]/20'
              : 'bg-white/40 border-gray-200'
          }`}>
            <div className="grid grid-cols-3 gap-4">
              {iconItems.map((item, index) => (
                <Tooltip key={item.id} text={item.tooltip || item.label} theme={theme}>
                  <button
                    onClick={(e) => {
                      createRipple(e, wallpaperAccents.primary);
                      item.onClick();
                    }}
                    style={{ 
                      animationDelay: `${300 + index * 100}ms`,
                      animationDuration: `${4 + (index % 3)}s`
                    }}
                    className={`
                      relative overflow-hidden animate-float group
                      w-full aspect-square rounded-2xl flex flex-col items-center justify-center gap-2
                      transition-all duration-200 ease-out transform hover:scale-105 active:scale-95
                      ${theme === 'dark'
                        ? 'bg-[#042B44]/40 hover:bg-[#096B90]/30 border border-[#096B90]/15'
                        : 'bg-white/60 hover:bg-white border border-gray-200'
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

  // Desktop layout
  const featuredItems = iconItems.filter(item => item.featured);
  const secondRowItems = iconItems.slice(2, 5);
  const thirdRowItems = iconItems.slice(5);

  return (
    <div className="min-h-screen flex items-center justify-center pb-16 px-6">
      <GeometricOverlay theme={theme} wallpaperAccents={wallpaperAccents} />
      <div className="text-center">
        {/* Desktop grid */}
        <div className="space-y-8">
          {/* Featured row - larger tiles */}
          <div className="flex gap-6 justify-center animate-in slide-in-from-top-4 duration-700 delay-100 ease-out">
            {featuredItems.map((item, index) => (
              <Tooltip key={item.id} text={item.tooltip || item.label} theme={theme}>
                <button
                key={item.id}
                onClick={(e) => {
                  createRipple(e, wallpaperAccents.primary);
                  item.onClick();
                }}
                style={{ animationDelay: `${200 + index * 150}ms` }}
                className={`
                  relative overflow-hidden
                  group relative p-8 w-40 h-40 rounded-2xl animate-in slide-in-from-top-4
                  transition-all duration-200 ease-out transform hover:scale-105 hover:-translate-y-2 active:scale-95
                  border-2 border-transparent hover:border-opacity-30
                  ${theme === 'dark'
                    ? 'bg-[#042B44]/50 hover:bg-[#096B90]/30'
                    : 'bg-white/70 hover:bg-white'
                  }
                  backdrop-blur-sm hover:shadow-2xl
                `}
                style={{
                  '--hover-border-color': wallpaperAccents.primary,
                  '--hover-shadow': `0 25px 50px -12px ${wallpaperAccents.glow}`,
                } as React.CSSProperties & { [key: string]: string }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = wallpaperAccents.primary + '50';
                  e.currentTarget.style.boxShadow = `0 25px 50px -12px ${wallpaperAccents.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {ripples.map(ripple => (
                  <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} color={ripple.color} />
                ))}
                <div className="flex flex-col items-center gap-4">
                  <item.icon 
                    size={44} 
                    className="transition-all duration-200 ease-out group-hover:scale-110"
                    style={{ 
                      color: theme === 'dark' ? '#71B7D5' : '#6B7280',
                      '--hover-color': wallpaperAccents.primary
                    } as React.CSSProperties & { [key: string]: string }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = wallpaperAccents.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme === 'dark' ? '#71B7D5' : '#6B7280';
                    }}
                  />
                  <span className={`text-base font-medium ${
                    theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
                  }`}>
                    {item.label}
                  </span>
                </div>
                
                {/* Dynamic glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out scale-105"
                  style={{ backgroundColor: wallpaperAccents.glow }}
                />
              </button>
              </Tooltip>
            ))}
          </div>

          {/* Second row */}
          <div className="flex gap-6 justify-center animate-in slide-in-from-bottom-4 duration-700 delay-300 ease-out">
            {secondRowItems.map((item, index) => (
              <Tooltip key={item.id} text={item.tooltip || item.label} theme={theme}>
                <button
                key={item.id}
                onClick={(e) => {
                  createRipple(e, wallpaperAccents.primary);
                  item.onClick();
                }}
                style={{ animationDelay: `${400 + index * 100}ms` }}
                className={`
                  relative overflow-hidden
                  group relative p-5 w-32 h-32 rounded-xl animate-in slide-in-from-bottom-4
                  transition-all duration-200 ease-out transform hover:scale-105 hover:-translate-y-1 active:scale-95
                  ${theme === 'dark'
                    ? 'bg-[#042B44]/40 hover:bg-[#096B90]/25 border border-[#096B90]/15'
                    : 'bg-white/60 hover:bg-white border border-gray-200'
                  }
                  backdrop-blur-sm
                `}
              >
                {ripples.map(ripple => (
                  <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} color={ripple.color} />
                ))}
                <div className="flex flex-col items-center gap-3">
                  <item.icon 
                    size={32} 
                    className={`transition-all duration-200 ease-out group-hover:scale-110 ${
                      theme === 'dark' ? 'text-[#71B7D5] group-hover:text-[#A1CCDC]' : 'text-gray-600 group-hover:text-gray-800'
                    }`}
                  />
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </button>
              </Tooltip>
            ))}
          </div>

          {/* Third row */}
          <div className="flex gap-5 justify-center animate-in slide-in-from-bottom-4 duration-700 delay-500 ease-out">
            {thirdRowItems.map((item, index) => (
              <Tooltip key={item.id} text={item.tooltip || item.label} theme={theme}>
                <button
                key={item.id}
                onClick={(e) => {
                  createRipple(e, wallpaperAccents.primary);
                  item.onClick();
                }}
                style={{ animationDelay: `${600 + index * 100}ms` }}
                className={`
                  relative overflow-hidden
                  group relative p-4 w-28 h-28 rounded-xl animate-in slide-in-from-bottom-4
                  transition-all duration-200 ease-out transform hover:scale-105 hover:-translate-y-1 active:scale-95
                  ${theme === 'dark'
                    ? 'bg-[#042B44]/40 hover:bg-[#096B90]/25 border border-[#096B90]/15'
                    : 'bg-white/60 hover:bg-white border border-gray-200'
                  }
                  backdrop-blur-sm
                `}
              >
                {ripples.map(ripple => (
                  <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} color={ripple.color} />
                ))}
                <div className="flex flex-col items-center gap-2">
                  <item.icon 
                    size={28} 
                    className={`transition-all duration-200 ease-out group-hover:scale-110 ${
                      theme === 'dark' ? 'text-[#71B7D5] group-hover:text-[#A1CCDC]' : 'text-gray-600 group-hover:text-gray-800'
                    }`}
                  />
                  <span className={`text-xs font-medium leading-tight text-center ${
                    theme === 'dark' ? 'text-[#A1CCDC]' : 'text-gray-800'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      
      {activeContent && (
        <ContentModal
          type={activeContent}
          theme={theme}
          onClose={() => setActiveContent(null)}
        />
      )}
    </div>
  );
};

export default Desktop;