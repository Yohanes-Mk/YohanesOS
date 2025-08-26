import React, { useEffect, useMemo, useRef, useState } from "react";
import { 
  X, Mail, Linkedin, Github, ExternalLink, Download, MapPin, Calendar, Award, Briefcase,
  Code2, Database, Cloud, Smartphone, Server, Globe, Terminal, GitBranch, 
  Palette, Zap, Box, Settings, Monitor, FileCode, Layers, Cpu
} from "lucide-react";

/* -------------------------------------------------------
   Small utilities (no external libs)
------------------------------------------------------- */

// 1) Reveal-on-view hook (IntersectionObserver)
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// 2) Scroll progress hook (0 → 1) for a scrollable container
function useScrollProgress(containerRef: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [containerRef]);
  return progress;
}

/* -------------------------------------------------------
   Types
------------------------------------------------------- */
const defaultWallpaperAccents: WallpaperAccents = {
  primary: "#71B7D5",
  secondary: "#A1CCDC",
  glow: "rgba(113,183,213,0.4)",
  gradient: "linear-gradient(135deg, #71B7D5, #A1CCDC)"
};

interface WallpaperAccents {
  primary: string;
  secondary: string;
  glow: string;
  gradient: string;
}

interface ContentModalProps {
  type: "about" | "projects" | "education" | "skills" | "resume" | "contact" | "experience";
  theme: "dark" | "light";
  onClose: () => void;
  wallpaperAccents: WallpaperAccents;
}

/* -------------------------------------------------------
   Enhanced UI Components
------------------------------------------------------- */

// Floating Orb Component
const FloatingOrb: React.FC<{ 
  size: number; 
  color: string; 
  position: { top: string; left: string }; 
  delay?: number;
  theme: "dark" | "light";
}> = ({ size, color, position, delay = 0, theme }) => (
  <div
    className={`absolute rounded-full pointer-events-none transition-all duration-1000 ease-out opacity-20 ${
      theme === "dark" ? "opacity-30" : "opacity-20"
    }`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: `radial-gradient(circle, ${color}, transparent 70%)`,
      top: position.top,
      left: position.left,
      animationDelay: `${delay}ms`,
      filter: 'blur(1px)',
    }}
  />
);

// Enhanced Section Title with Gradient Underline
const SectionTitle: React.FC<{ theme: "dark" | "light"; children: React.ReactNode; wallpaperAccents: WallpaperAccents }> = ({
  theme,
  children,
  wallpaperAccents,
}) => (
  <div className="text-center mb-12">
    <h2 className={`text-4xl font-bold mb-4 ${
      theme === "dark" ? "text-[#A1CCDC]" : "text-gray-800"
    }`}>
      {children}
    </h2>
    <div 
      className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r"
      style={{
        background: `linear-gradient(to right, ${wallpaperAccents.primary}80, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`
      }}
    />
  </div>
);

// Enhanced Pill with Glassmorphism
const Pill: React.FC<{ theme: "dark" | "light"; text: string; featured?: boolean; wallpaperAccents?: WallpaperAccents }> = ({ 
  theme, 
  text, 
  featured = false,
  wallpaperAccents
}) => (
  <span
    className={`
      px-4 py-2 rounded-full text-sm font-medium backdrop-blur-xl border transition-all duration-300 
      hover:scale-105 hover:shadow-lg transform-gpu
      ${theme === "dark"
          ? "bg-white/5 border-white/10 text-[#A1CCDC] hover:bg-white/10"
          : "bg-white/40 border-white/20 text-gray-700 hover:bg-white/60"
      }
    `}
    style={featured && wallpaperAccents ? {
      background: `linear-gradient(to right, ${wallpaperAccents.primary}30, ${wallpaperAccents.secondary}30)`,
      borderColor: wallpaperAccents.primary + '40',
      color: wallpaperAccents.primary,
      boxShadow: `0 0 20px ${wallpaperAccents.glow}`
    } : {}}
  >
    {text}
  </span>
);

// Glassmorphism Card Component
const GlassCard: React.FC<{ 
  theme: "dark" | "light"; 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
}> = ({ theme, children, className = "", hover = true }) => (
  <div
    className={`
      relative overflow-hidden rounded-3xl backdrop-blur-xl border transition-all duration-500 ease-out
      ${hover ? "hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl" : ""}
      ${theme === "dark"
        ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
        : "bg-white/40 border-white/20 hover:bg-white/60 hover:border-white/30"
      }
      ${className}
    `}
  >
    {/* Floating orbs inside cards */}
    <FloatingOrb 
      size={60} 
      color={theme === "dark" ? "rgba(113,183,213,0.3)" : "rgba(59,130,246,0.2)"} 
      position={{ top: "-10%", right: "-5%" }} 
      theme={theme}
    />
    <FloatingOrb 
      size={40} 
      color={theme === "dark" ? "rgba(161,204,220,0.2)" : "rgba(147,197,253,0.15)"} 
      position={{ bottom: "-5%", left: "-3%" }} 
      theme={theme}
    />
    {children}
  </div>
);

// Enhanced Button Component
const EnhancedButton: React.FC<{
  theme: "dark" | "light";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  wallpaperAccents?: WallpaperAccents;
}> = ({ theme, children, onClick, href, icon, variant = "primary", wallpaperAccents }) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createRipple = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const baseClasses = `
    group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium overflow-hidden
    transition-all duration-300 ease-out transform-gpu hover:scale-105 active:scale-95
    backdrop-blur-xl border overflow-hidden
  `;
  
  const variantClasses = variant === "secondary"
    ? theme === "dark"
      ? "bg-white/5 border-white/10 text-[#A1CCDC] hover:bg-white/10"
      : "bg-white/40 border-white/20 text-gray-700 hover:bg-white/60"
    : "";

  const Component = href ? "a" : "button";
  const props = href ? { href, target: "_blank", rel: "noreferrer" } : { onClick };
  
  const primaryStyle = variant === "primary" && wallpaperAccents ? {
    background: `linear-gradient(to right, ${wallpaperAccents.primary}, ${wallpaperAccents.secondary})`,
    borderColor: wallpaperAccents.primary + '20',
    color: 'white'
  } : {};

  return (
    <Component
      className={`${baseClasses} ${variantClasses}`}
      style={primaryStyle}
      onClick={(e) => {
        createRipple(e);
        if (onClick) onClick();
      }}
      onMouseEnter={variant === "primary" && wallpaperAccents ? (e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${wallpaperAccents.glow}`;
      } : undefined}
      onMouseLeave={variant === "primary" && wallpaperAccents ? (e) => {
        e.currentTarget.style.boxShadow = '';
      } : undefined}
      {...props}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div key={ripple.id} className="absolute rounded-full bg-white/30 animate-ping pointer-events-none"
             style={{ left: ripple.x - 10, top: ripple.y - 10, width: 20, height: 20 }} />
      ))}
      
      {icon && (
        <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

// Timeline Component for Experience
const TimelineItem: React.FC<{
  theme: "dark" | "light";
  title: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  isActive?: boolean;
  index: number;
}> = ({ theme, title, company, period, location, points, isActive = false, index }) => (
  <div className="relative flex gap-6 group">
    {/* Timeline line and dot */}
    <div className="flex flex-col items-center">
      <div className={`
        w-4 h-4 rounded-full border-2 transition-all duration-500 z-10
        ${isActive 
          ? theme === "dark"
            ? "bg-[#71B7D5] border-[#A1CCDC] shadow-[0_0_20px_rgba(113,183,213,0.6)]"
            : "bg-blue-500 border-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          : theme === "dark"
            ? "bg-[#042B44] border-[#096B90]/50 group-hover:border-[#71B7D5]"
            : "bg-white border-gray-300 group-hover:border-blue-400"
        }
      `} />
      <div className={`w-0.5 h-full mt-2 ${
        theme === "dark" ? "bg-[#096B90]/30" : "bg-gray-300"
      }`} />
    </div>

    {/* Content */}
    <GlassCard theme={theme} className="flex-1 p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className={`text-xl font-bold ${
            theme === "dark" ? "text-[#A1CCDC]" : "text-gray-800"
          }`}>
            {title}
          </h3>
          <p className={`text-lg font-semibold ${
            theme === "dark" ? "text-[#71B7D5]" : "text-blue-600"
          }`}>
            {company}
          </p>
        </div>
        <div className="text-right">
          <div className={`text-sm font-medium ${
            theme === "dark" ? "text-[#A1CCDC]" : "text-gray-700"
          }`}>
            {period}
          </div>
          {location && (
            <div className={`text-sm flex items-center gap-1 ${
              theme === "dark" ? "text-[#71B7D5]" : "text-gray-600"
            }`}>
              <MapPin size={12} />
              {location}
            </div>
          )}
        </div>
      </div>

      <ul className={`space-y-2 ${
        theme === "dark" ? "text-[#A1CCDC]" : "text-gray-700"
      }`}>
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
              theme === "dark" ? "bg-[#71B7D5]" : "bg-blue-500"
            }`} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  </div>
);

// Reveal wrapper with staggered animations
const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out will-change-transform`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

/* -------------------------------------------------------
   Content Sections
------------------------------------------------------- */

const ContentModal: React.FC<ContentModalProps> = ({ type, theme, onClose, wallpaperAccents }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(scrollRef);
  
  // Ensure wallpaperAccents is always defined
  const effectiveWallpaperAccents = wallpaperAccents || defaultWallpaperAccents;

  // parallax offsets based on scroll progress
  const parallax = useMemo(
    () => ({
      halo: `translateY(${Math.round(progress * -40)}px)`,
      shape1: `translateY(${Math.round(progress * -20)}px)`,
      shape2: `translateY(${Math.round(progress * -10)}px)`,
    }),
    [progress]
  );

  const mainText = theme === "dark" ? "text-[#A1CCDC]" : "text-gray-800";
  const subText = theme === "dark" ? "text-[#71B7D5]" : "text-gray-600";

  /* ------------ RENDER: ABOUT ------------- */
  const About = (
    <div className="space-y-8 relative">
      {/* Floating orbs */}
      <FloatingOrb size={120} color="rgba(113,183,213,0.15)" position={{ top: "10%", right: "5%" }} theme={theme} />
      <FloatingOrb size={80} color="rgba(161,204,220,0.1)" position={{ bottom: "20%", left: "8%" }} theme={theme} />
      
      <Reveal>
        <SectionTitle theme={theme} wallpaperAccents={effectiveWallpaperAccents}>About Me</SectionTitle>
      </Reveal>

      <Reveal delay={200}>
        <GlassCard theme={theme} className="p-8">
          <p className={`text-lg leading-relaxed mb-6 ${subText}`}>
            I'm Yohannes, a full-stack developer and CS/Econ student who ships clean,
            production-minded web apps. I work React + TypeScript on the front, Node/FastAPI on
            the back, and deploy with Docker and AWS. I like turning messy ideas into simple,
            reliable products with good UX and readable code.
          </p>

          <p className={`${mainText} mb-6`}>
            Recent highlights: a Gojo Caption and Title Generator used by small businesses, a
            Market Price Tracker with scraping, SQLite and forecasting, and an e-commerce MVP in
            Next.js with Stripe and Postgres. I also led Python SI sessions and worked IT support,
            which sharpened my debugging and communication under pressure.
          </p>

          <div className="flex flex-wrap gap-3">
            <Pill theme={theme} text="React + TypeScript" featured wallpaperAccents={effectiveWallpaperAccents} />
            <Pill theme={theme} text="Node.js & FastAPI" wallpaperAccents={effectiveWallpaperAccents} />
            <Pill theme={theme} text="Docker & AWS" wallpaperAccents={effectiveWallpaperAccents} />
            <Pill theme={theme} text="REST APIs" wallpaperAccents={effectiveWallpaperAccents} />
            <Pill theme={theme} text="Data/ML pipelines" wallpaperAccents={effectiveWallpaperAccents} />
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );

  /* ------------ RENDER: SKILLS ------------- */
  const Skills = (
    <div className="space-y-8 relative">
      {/* Floating orbs */}
      <FloatingOrb size={100} color="rgba(113,183,213,0.2)" position={{ top: "5%", left: "10%" }} theme={theme} />
      <FloatingOrb size={60} color="rgba(161,204,220,0.15)" position={{ top: "30%", right: "15%" }} theme={theme} />
      <FloatingOrb size={80} color="rgba(9,107,144,0.1)" position={{ bottom: "10%", right: "5%" }} theme={theme} />
      
      <Reveal>
        <SectionTitle theme={theme} wallpaperAccents={effectiveWallpaperAccents}>Skills & Expertise</SectionTitle>
      </Reveal>

      <Reveal delay={200}>
        <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${subText}`}>
          Clean, modern technologies that power exceptional digital experiences.
        </p>
      </Reveal>

      {/* Professional Skillset */}
      <Reveal delay={300}>
        <div className="space-y-6">
          <div className="text-center">
            <h3 className={`text-2xl font-semibold ${mainText}`}>
              Professional <span style={{ color: effectiveWallpaperAccents.primary }}>Skillset</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: "React", icon: Code2 },
              { name: "TypeScript", icon: FileCode },
              { name: "Next.js", icon: Layers },
              { name: "Node.js", icon: Server },
              { name: "Python", icon: Terminal },
              { name: "PostgreSQL", icon: Database },
              { name: "MongoDB", icon: Database },
              { name: "AWS", icon: Cloud },
              { name: "Docker", icon: Box },
              { name: "FastAPI", icon: Zap },
              { name: "Flask", icon: Server },
              { name: "REST APIs", icon: Globe }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`
                  group p-4 rounded-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 animate-float
                  ${theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border border-white/10"
                    : "bg-gray-50 hover:bg-white border border-gray-200"
                  }
                  backdrop-blur-sm
                `}
                style={{ 
                  animationDelay: `${400 + index * 50}ms`,
                  animationDuration: `${3 + (index % 3)}s`
                }}
              >
                <div className="text-center">
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <skill.icon size={28} className={`mx-auto ${
                      theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className={`text-sm font-medium ${mainText}`}>
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Tools I Use */}
      <Reveal delay={600}>
        <div className="space-y-6">
          <div className="text-center">
            <h3 className={`text-2xl font-semibold ${mainText}`}>
              Tools I <span className={theme === "dark" ? "text-[#71B7D5]" : "text-blue-600"}>Use</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: "VS Code", icon: Monitor },
              { name: "Git", icon: GitBranch },
              { name: "GitHub", icon: Github },
              { name: "Figma", icon: Palette },
              { name: "Postman", icon: Smartphone },
              { name: "Linux", icon: Terminal },
              { name: "Tailwind", icon: Palette },
              { name: "Vite", icon: Zap },
              { name: "Vercel", icon: Globe },
              { name: "Netlify", icon: Globe },
              { name: "Firebase", icon: Database },
              { name: "Supabase", icon: Database }
            ].map((tool, index) => (
              <div
                key={tool.name}
                className={`
                  group p-4 rounded-xl transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 animate-float
                  ${theme === "dark"
                    ? "bg-white/5 hover:bg-white/10 border border-white/10"
                    : "bg-gray-50 hover:bg-white border border-gray-200"
                  }
                  backdrop-blur-sm
                `}
                style={{ 
                  animationDelay: `${700 + index * 50}ms`,
                  animationDuration: `${4 + (index % 2)}s`
                }}
              >
                <div className="text-center">
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <tool.icon size={24} className={`mx-auto ${
                      theme === 'dark' ? 'text-[#71B7D5]' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className={`text-sm font-medium ${mainText}`}>
                    {tool.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );

  /* ------------ RENDER: EDUCATION ------------- */
  const Education = (
    <div className="space-y-8 relative">
      {/* Floating orbs */}
      <FloatingOrb size={90} color="rgba(113,183,213,0.2)" position={{ top: "15%", right: "10%" }} theme={theme} />
      <FloatingOrb size={70} color="rgba(161,204,220,0.15)" position={{ bottom: "25%", left: "5%" }} theme={theme} />
      
      <Reveal>
        <SectionTitle theme={theme} wallpaperAccents={effectiveWallpaperAccents}>Education</SectionTitle>
      </Reveal>
      
      <Reveal delay={200}>
        <GlassCard theme={theme} className="p-8">
          <div className="flex items-start gap-6">
            <div className={`p-4 rounded-2xl backdrop-blur-xl ${
              theme === "dark" ? "bg-white/10" : "bg-white/20"
            }`}>
              <Award className={`w-8 h-8 ${
                theme === "dark" ? "text-[#71B7D5]" : "text-blue-600"
              }`} />
            </div>
            
            <div className="flex-1">
              <h3 className={`text-2xl font-bold mb-2 ${mainText}`}>
                St. Cloud State University
              </h3>
              <p className={`text-lg font-semibold mb-2 ${
                theme === "dark" ? "text-[#71B7D5]" : "text-blue-600"
              }`}>
                B.S. Computer Science (AI/ML), B.A. Economics
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className={`${subText}`}>GPA: 3.6</span>
                <span className={`${subText}`}>•</span>
                <span className={`${subText}`}>Expected Dec 2026</span>
              </div>
              
              <div className="mb-6">
                <h4 className={`font-semibold mb-3 ${mainText}`}>Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {["Algorithms", "Neural Networks", "Data Mining", "Intermediate Microeconomics", "Industrial Organization"].map((course) => (
                    <Pill key={course} theme={theme} text={course} />
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className={`font-semibold mb-3 ${mainText}`}>Activities & Organizations</h4>
                <div className="flex flex-wrap gap-2">
                  <Pill theme={theme} text="Cloud Computing Club" featured />
                  <Pill theme={theme} text="Student Government Tech Fee Committee" />
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      {/* Professional Development */}
      <Reveal delay={400}>
        <GlassCard theme={theme} className="p-6">
          <h3 className={`text-xl font-bold mb-4 ${mainText}`}>Professional Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "CodePath Web Development 101", status: "Completed" },
              { name: "CodePath Career Prep Network", status: "Active Member" },
              { name: "ColorStack", status: "Active Member" },
              { name: "AI4ALL Discover AI Program", status: "Graduate" }
            ].map((item, index) => (
              <div key={item.name} className={`p-4 rounded-xl backdrop-blur-xl border ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-white/20 border-white/20"
              }`}>
                <div className="flex justify-between items-start">
                  <span className={`font-medium ${mainText}`}>{item.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === "Active Member" || item.status === "Completed"
                      ? theme === "dark"
                        ? "bg-[#71B7D5]/20 text-[#71B7D5]"
                        : "bg-green-100 text-green-700"
                      : theme === "dark"
                        ? "bg-[#096B90]/20 text-[#A1CCDC]"
                        : "bg-blue-100 text-blue-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );

  /* ------------ RENDER: PROJECTS ------------- */
  const Projects = (
    <div className="space-y-8 relative">
      {/* Floating orbs */}
      <FloatingOrb size={110} color="rgba(113,183,213,0.2)" position={{ top: "8%", left: "5%" }} theme={theme} />
      <FloatingOrb size={75} color="rgba(161,204,220,0.15)" position={{ top: "40%", right: "8%" }} theme={theme} />
      <FloatingOrb size={95} color="rgba(9,107,144,0.1)" position={{ bottom: "15%", left: "12%" }} theme={theme} />
      
      <Reveal>
        <SectionTitle theme={theme} wallpaperAccents={effectiveWallpaperAccents}>Featured Projects</SectionTitle>
      </Reveal>
      
      <Reveal delay={200}>
        <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${subText}`}>
          Selected, production-minded builds that showcase my technical range and problem-solving approach.
        </p>
      </Reveal>

      <div className="space-y-6">
        {[
          {
            title: "Gojo-Caption-and-Title-Generator",
            status: "Deployed",
            stack: ["Flask", "OpenAI API", "Prompt Engineering", "Google Sheets API"],
            points: [
              "Auto-generates Instagram captions tailored to product descriptions; used by 50+ small businesses.",
              "Structured prompts for tone/style; deployed on Render with analytics logging.",
            ],
            demoLink: "https://gojo-caption-and-title-generator.vercel.app/",
            githubLink: "https://github.com/Yohanes-Mk/Gojo-Caption-and-Title-Generator",
            featured: true,
          },
          {
            title: "CWIT Attendance Automation",
            status: "Completed",
            stack: ["Python", "Google Sheets API"],
            points: [
              "Automated event attendance logging for the Center for Women in Technology (CWIT).",
              "Reduced manual tracking time by ~10 hours/month for program staff.",
            ],
            demoLink: "https://cwit-attendance.demo.com",
            githubLink: "https://github.com/Yohanes-Mk/cwit-attendance-automation",
          },
          {
            title: "YohannesOS Portfolio",
            status: "Live",
            stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            points: [
              "Interactive desktop-like portfolio experience with smooth animations and OS-style interface.",
              "Features terminal mode, start menu, wallpaper system, and responsive design across all devices.",
            ],
            demoLink: "https://yohanes-os.vercel.app/",
            githubLink: "https://github.com/Yohanes-Mk/YohanesOS",
            featured: true,
          },
          {
            title: "Kibur College – Enrollment & Faculty Performance API",
            status: "Production",
            stack: ["Flask", "Firebase Auth", "Google Sheets API", "REST API"],
            points: [
              "Designed and deployed Flask REST API automating enrollment reporting and faculty performance tracking.",
              "Improved reporting efficiency by ~80% with role-based access control serving 1,200+ student records.",
            ],
            githubLink: "https://github.com/Yohanes-Mk/kibur-college-api",
          },
          {
            title: "Market Price Tracker — Ante Nigus Retail",
            status: "Active",
            stack: ["Python", "BeautifulSoup", "SQLite", "Prophet", "Plotly"],
            points: [
              "Scrapes and tracks >1,200 product data points across 5 competitor sites.",
              "Short-term price forecasts (>85% accuracy) with interactive Plotly dashboards.",
            ],
            githubLink: "https://github.com/Yohanes-Mk/market-price-tracker",
          },
          {
            title: "ASL Gesture Classifier",
            status: "Research",
            stack: ["Python", "MediaPipe", "scikit-learn", "PCA"],
            points: [
              "Recognizes 15 static ASL gestures; 94% accuracy with <100ms latency.",
              "Built preprocessing pipeline, integrated demo UI.",
            ],
            githubLink: "/American%20Sign%20Language%28ASL%29%20Classification%20Presentation%20%281%29.pdf",
          },
        ].map((project, index) => (
          <Reveal key={project.title} delay={300 + index * 100}>
            <GlassCard theme={theme} className={`p-6 ${project.featured ? 'ring-2 ring-[#71B7D5]/30' : ''}`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-xl font-bold ${mainText}`}>
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Deployed" || project.status === "Live" || project.status === "Production"
                        ? theme === "dark"
                          ? "bg-[#71B7D5]/20 text-[#71B7D5] border border-[#71B7D5]/30"
                          : "bg-green-100 text-green-700 border border-green-200"
                        : theme === "dark"
                          ? "bg-[#096B90]/20 text-[#A1CCDC] border border-[#096B90]/30"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, techIndex) => (
                      <Pill key={tech} theme={theme} text={tech} featured={techIndex === 0} />
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.demoLink && (
                    <EnhancedButton
                      theme={theme}
                      href={project.demoLink}
                      icon={<ExternalLink size={16} />}
                      variant="primary"
                    >
                      Demo
                    </EnhancedButton>
                  )}
                  {project.githubLink && (
                    <EnhancedButton
                      theme={theme}
                      href={project.githubLink}
                      icon={<Github size={16} />}
                      variant="secondary"
                    >
                      Code
                    </EnhancedButton>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <ul className={`space-y-2 ${subText}`}>
                {project.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      theme === "dark" ? "bg-[#71B7D5]" : "bg-blue-500"
                    }`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  );

  /* ------------ RENDER: EXPERIENCE ------------- */
  const Experience = (
    <div className="space-y-8 relative">
      {/* Floating orbs */}
      <FloatingOrb size={100} color="rgba(113,183,213,0.2)" position={{ top: "5%", right: "8%" }} theme={theme} />
      <FloatingOrb size={80} color="rgba(161,204,220,0.15)" position={{ bottom: "20%", left: "10%" }} theme={theme} />
      
      <Reveal>
        <SectionTitle theme={theme} wallpaperAccents={effectiveWallpaperAccents}>Professional Experience</SectionTitle>
      </Reveal>
      
      <Reveal delay={200}>
        <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${subText}`}>
          My professional journey spans content creation, research, software engineering, and education—each role building on technical skills and leadership experience.
        </p>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        {[
          {
            title: "Content Director",
            company: "Gojo Digitals",
            period: "May 2025 - Present",
            location: "Seattle, Washington, United States",
            points: [
              "Founded and lead a digital media brand covering the Ethiopian Sports Federation in North America (ESFNA) 2025 event, growing combined TikTok and Instagram following to nearly 20K.",
              "Produced, edited, and published 40+ high-engagement short-form videos, photo carousels, and event recaps, generating thousands of views and driving community engagement.",
              "Showcased and built digital presence for 10+ Ethiopian restaurants and small businesses through website revamps and social media creation.",
            ],
            isActive: true,
          },
          {
            title: "Undergraduate Research Assistant – Brain-Computer Interface Lab",
            company: "College of Science and Engineering - St. Cloud State University",
            period: "Jan 2025 - May 2025",
            location: "Minnesota, United States",
            points: [
              "Developed EEG data preprocessing pipelines and real-time ML classifiers (logistic regression, k-NN) with sub-second latency for attention-state detection tasks.",
              "Built a PyQt-based GUI enabling live EEG signal visualization for interactive cognitive experiments.",
              "Managed Ubuntu-based compute environment and automated SSH-based data workflows; contributed toward forthcoming publication on EEG-driven attention prediction.",
            ],
          },
          {
            title: "Software Engineer Intern",
            company: "Kibur College",
            period: "May 2024 - Aug 2024",
            points: [
              "Built and deployed Flask-based REST API automating enrollment reporting and faculty performance tracking, improving departmental reporting efficiency by ~80%.",
              "Integrated Firebase Authentication with role-based access control and Google Sheets API for real-time dashboards serving 1,200+ student records.",
              "Authored API documentation and implemented robust error handling, enabling smooth adoption by the internal IT team.",
            ],
          },
          {
            title: "SI PASS Leader",
            company: "UMBC Training Centers",
            period: "Aug 2023 - May 2024",
            location: "Baltimore County, Maryland, United States",
            points: [
              "Led 20+ peer-assisted study sessions for Python fundamentals, recursion, data structures, and debugging with cohorts of 12–25 students.",
              "Created targeted mock exams, coding challenges, and walkthroughs to strengthen student understanding and boost final exam scores.",
              "Facilitated collaborative problem-solving and live debugging, helping students build practical coding skills and confidence.",
            ],
          },
          {
            title: "Assistant for Events and Programs",
            company: "University of Maryland Baltimore County",
            period: "Jul 2023 - May 2024",
            location: "Baltimore County, Maryland, United States",
            points: [
              "Automated attendance tracking for 100+ scholars using Python scripts integrated with Google Sheets API, reducing manual work by 40% and improving accuracy.",
              "Updated and maintained CWIT's website with HTML/CSS to improve usability, ensure content accuracy, and enhance accessibility.",
              "Prepared digital content and managed communications for internal and external stakeholders.",
            ],
          },
        ].map((exp, index) => (
          <Reveal key={exp.title + index} delay={200 + index * 100}>
            <TimelineItem
              theme={theme}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              location={exp.location}
              points={exp.points}
              isActive={exp.isActive}
              index={index}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );

  /* ------------ RENDER: CONTACT ------------- */
  const Contact = (
    <div className="space-y-8 relative">
      {/* Floating orbs */}
      <FloatingOrb size={120} color="rgba(113,183,213,0.2)" position={{ top: "10%", left: "8%" }} theme={theme} />
      <FloatingOrb size={90} color="rgba(161,204,220,0.15)" position={{ bottom: "15%", right: "10%" }} theme={theme} />
      
      <Reveal>
        <SectionTitle theme={theme} wallpaperAccents={effectiveWallpaperAccents}>Let's Connect</SectionTitle>
      </Reveal>
      
      <Reveal delay={200}>
        <GlassCard theme={theme} className="p-8 text-center">
          <div className="mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border ${
              theme === "dark"
                ? "bg-[#71B7D5]/20 border-[#71B7D5]/30 text-[#71B7D5]"
                : "bg-green-100 border-green-200 text-green-700"
            }`}>
              <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
              <span className="font-medium">Available for new opportunities</span>
            </div>
          </div>
          
          <p className={`text-lg mb-8 ${subText}`}>
            I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <EnhancedButton
              theme={theme}
              href="mailto:yohanigusse@gmail.com"
              icon={<Mail size={20} />}
              variant="primary"
            >
              Email Me
            </EnhancedButton>

            <EnhancedButton
              theme={theme}
              href="https://www.linkedin.com/in/yohs"
              icon={<Linkedin size={20} />}
              variant="secondary"
            >
              LinkedIn
            </EnhancedButton>

            <EnhancedButton
              theme={theme}
              href="https://github.com/Yohanes-Mk"
              icon={<Github size={20} />}
              variant="secondary"
            >
              GitHub
            </EnhancedButton>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );

  /* ------------ RENDER: RESUME ------------- */
  const Resume = (
    <div className="space-y-8 relative">
      {/* Floating orbs */}
      <FloatingOrb size={100} color="rgba(113,183,213,0.2)" position={{ top: "12%", right: "5%" }} theme={theme} />
      <FloatingOrb size={70} color="rgba(161,204,220,0.15)" position={{ bottom: "20%", left: "8%" }} theme={theme} />
      
      <Reveal>
        <SectionTitle theme={theme} wallpaperAccents={effectiveWallpaperAccents}>Resume</SectionTitle>
      </Reveal>
      
      <Reveal delay={200}>
        <GlassCard theme={theme} className="p-8 text-center">
          <div className="mb-8">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl backdrop-blur-xl flex items-center justify-center ${
              theme === "dark" ? "bg-white/10" : "bg-white/20"
            }`}>
              <Download className={`w-10 h-10 ${
                theme === "dark" ? "text-[#71B7D5]" : "text-blue-600"
              }`} />
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${mainText}`}>
              Download Resume
            </h3>
            <p className={`${subText}`}>
              Get the complete overview of my experience and skills
            </p>
          </div>
          
          <EnhancedButton
            theme={theme}
            onClick={() => {
              window.open('/resume.pdf', '_blank');
            }}
            icon={<Download size={20} />}
            variant="primary"
            wallpaperAccents={effectiveWallpaperAccents}
          >
            Download PDF Resume
          </EnhancedButton>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className={`text-lg font-semibold mb-4 ${mainText}`}>
              Quick Summary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className={`font-semibold mb-2 ${mainText}`}>Experience</h5>
                <ul className={`text-sm space-y-1 ${subText}`}>
                  <li>• 3+ years full-stack development</li>
                  <li>• Led development of 5+ production apps</li>
                  <li>• Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <h5 className={`font-semibold mb-2 ${mainText}`}>Achievements</h5>
                <ul className={`text-sm space-y-1 ${subText}`}>
                  <li>• 40% page load time reduction</li>
                  <li>• 80% reporting efficiency improvement</li>
                  <li>• 20K+ social media following growth</li>
                </ul>
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );

  /* ------------ CHOOSE CONTENT ------------- */
  const content =
    type === "about"
      ? About
      : type === "skills"
      ? Skills
      : type === "education"
      ? Education
      : type === "projects"
      ? Projects
      : type === "experience"
      ? Experience
      : type === "contact"
      ? Contact
      : type === "resume"
      ? Resume
      : null;

  /* ------------ MODAL ------------- */
  return (
    <div
      className="fixed inset-0 z-50 p-4 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Enhanced Backdrop with Glassmorphism */}
      <div
        className={`absolute inset-0 backdrop-blur-md ${
          theme === "dark" ? "bg-black/40" : "bg-black/20"
        }`}
        onClick={onClose}
      />

      {/* Parallax halo with enhanced effects */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: parallax.halo }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(60% 60% at 50% 40%, rgba(113,183,213,.2), transparent 70%)"
                : "radial-gradient(60% 60% at 50% 40%, rgba(59,130,246,.15), transparent 70%)",
          }}
        />
      </div>

      {/* Enhanced Modal Card */}
      <div
        className={`relative w-full max-w-6xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border ${
          theme === "dark" 
            ? "bg-[#0f1820]/90 border-white/10" 
            : "bg-white/90 border-white/20"
        }`}
      >
        {/* Enhanced Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-3 rounded-full backdrop-blur-xl border transition-all duration-300 z-10 hover:scale-110 active:scale-95 ${
            theme === "dark"
              ? "bg-white/5 border-white/10 hover:bg-white/10 text-white/70 hover:text-white"
              : "bg-white/20 border-white/20 hover:bg-white/40 text-gray-500 hover:text-gray-700"
          }`}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Enhanced Scroll Container */}
        <div
          ref={scrollRef}
          className="p-8 md:p-12 overflow-y-auto snap-y snap-mandatory scroll-smooth custom-scrollbar max-h-[calc(90vh-4rem)]"
        >
          <div className="snap-start">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;