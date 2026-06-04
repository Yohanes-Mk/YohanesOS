export const portfolioData = {
  about: {
    intro:
      "I'm Yohannes, an Applied AI Engineer and CS/Econ student building LLM-powered backends, RAG pipelines, and full-stack AI systems. Incoming Tech Summer Analyst at Accenture — I've shipped everything from a production AI content aggregator demoed at NSBE to a full-stack anonymous social platform and a RAG admissions chatbot in production.",
    highlights: [
      "Incoming Accenture Tech Summer Analyst (Seattle, Summer 2026) — offer secured through NSBE 2026 career fair after demoing AI Event & Content Aggregator live to recruiters.",
      "Built and shipped production-grade AI projects: an end-to-end LLM content pipeline ingesting 8 YouTube channels + 25 DMV tech event feeds with context-aware ranking, a RAG admissions chatbot (pgvector + two-stage retrieval), and a full-stack anonymous social platform. Each is fully defensible line-by-line.",
      "Each project ships with production-ready APIs, monitoring layers, or Dockerized pipelines."
    ],
    tags: [
      "RAG Pipelines",
      "LLM Engineering",
      "Python & FastAPI",
      "React & Full-Stack",
      "Docker & DevOps"
    ],
    terminalHeadline:
      "Applied AI Engineer · Incoming Accenture Tech Summer Analyst",
    terminalSummary: [
      "Applied AI Engineering: LLM pipelines, RAG systems,",
      "production backends, and full-stack AI products.",
      "Incoming Accenture Tech Summer Analyst (Seattle, Summer 2026).",
      "CS + Economics @ SCSU · 3.92 GPA · Graduating Dec 2027."
    ],
    currentStatus:
      "Incoming Accenture Tech Summer Analyst — Seattle, WA (Summer 2026)",
    availability:
      "Accenture Tech Summer Analyst (Summer 2026). Open to Fall 2026 internships, research collaborations, and side projects."
  },
  projects: [
    {
      title: "AI Event & Content Aggregator",
      status: "Live",
      terminalStatus: "LIVE",
      stack: ["Python", "PostgreSQL", "SQLAlchemy", "OpenAI API", "Streamlit", "Docker"],
      terminalStack: ["Python", "PostgreSQL", "OpenAI API", "Streamlit", "Docker"],
      description: [
        "End-to-end solo AI pipeline — ingests 8 YouTube channels and 25 iCal event feeds via feedparser/icalendar, summarizes with gpt-4o-mini structured output, and delivers personalized HTML digests by email.",
        "Context-aware curator agent re-ranks the same content pool differently per user profile (engineer vs. founder vs. PM) using LLM reasoning over a live user context document — swappable live via Streamlit console.",
        "Production monitoring layer with run lifecycle tracking, per-stage metrics, and per-item error capture — pipeline degrades gracefully on failures. Demoed live at NSBE 2026 Baltimore."
      ],
      terminalDescription:
        "LLM pipeline with context-aware ranking, production monitoring, and live Streamlit demo. NSBE 2026 flagship project.",
      fileSlug: "ai-event-aggregator",
      fileDescription: "End-to-end AI content pipeline with curator agent and monitoring layer",
      githubLink: "https://github.com/Yohanes-Mk/ai-event-aggregator",
      terminalIcon: "📡",
      featured: true
    },
    {
      title: "NearbyTalk — Anonymous Local Social Platform",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["React", "FastAPI", "MongoDB", "JWT", "Docker"],
      terminalStack: ["React", "FastAPI", "MongoDB", "JWT", "Docker"],
      description: [
        "Full-stack anonymous social platform (Yik Yak-style) with city and university-gated feeds.",
        "Email domain verification for .edu access control, JWT-based stateless auth, threaded posts, and tri-state voting with karma tracking.",
        "FastAPI REST backend with MongoDB document storage — runs locally via Docker."
      ],
      terminalDescription:
        "Anonymous social platform with geo-gated feeds, .edu verification, and JWT auth",
      fileSlug: "nearbytalk",
      fileDescription: "Full-stack anonymous social platform — React + FastAPI + MongoDB",
      githubLink: "https://github.com/Yohanes-Mk",
      terminalIcon: "💬"
    },
    {
      title: "Fleet Command: Strategic Conquest",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["Unity", "C#", "Claude API"],
      terminalStack: ["Unity", "C#", "Claude API"],
      description: [
        "Hybrid 4X strategy / deck-building game in Unity with hex-grid conquest and card-based combat.",
        "AI-powered opponents integrated via Anthropic Claude API — full game state serialized to JSON for LLM decision-making across strategic and tactical layers.",
        "Rule-based fallback AI for offline play. Built as SE 482 Computer Animation & Visualization final project at SCSU."
      ],
      terminalDescription:
        "4X strategy game with Claude API-powered AI opponents and JSON state serialization",
      fileSlug: "fleet-command",
      fileDescription: "Unity 4X game with LLM-driven opponents via Claude API",
      terminalIcon: "♟️"
    },
    {
      title: "Real-Time Surveillance & Analytics System",
      status: "Active",
      terminalStatus: "IN PROGRESS",
      stack: ["Python", "YOLO", "MediaPipe", "Flask", "SQLite", "Streamlit", "Docker"],
      terminalStack: ["Python", "YOLO", "MediaPipe", "Flask", "Docker"],
      description: [
        "Multi-stage computer vision pipeline: YOLO object detection → MediaPipe pose estimation → centroid tracker for persistent cross-frame IDs → fall detection, abandoned object, and crowd density logic.",
        "Flask API exposes detection events triggering real-time email and WhatsApp alerts; all events logged to SQLite/CSV for downstream analytics.",
        "Streamlit analytics dashboard for detection history and pipeline performance review. Containerized with Docker."
      ],
      terminalDescription:
        "Multi-stage CV pipeline: YOLO → MediaPipe → centroid tracker → real-time alert APIs and analytics dashboard",
      fileSlug: "realtime-surveillance-system",
      fileDescription: "Multi-camera CV analytics with Mediapipe + OpenCV",
      githubLink:
        "https://github.com/Yohanes-Mk/Realtime-surveillance-system",
      terminalIcon: "🎥",
      featured: true
    },
    {
      title: "ResearchMate — Autonomous Research Assistant",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["Python", "Gemini LLM", "arXiv API", "PubMed API", "ReportLab"],
      terminalStack: ["Python", "Gemini LLM", "arXiv API", "PubMed API"],
      description: [
        "Multi-agent pipeline orchestrating paper retrieval, summarization, and citation formatting across arXiv and PubMed APIs using Gemini LLM.",
        "Generates curated PDF briefs per topic in under two minutes with ~85% relevance hit rate via validation and relevance filtering layers.",
        "Earlier project — Gemini-based architecture. Demonstrates multi-agent orchestration and modular pipeline design."
      ],
      terminalDescription:
        "Multi-agent pipeline summarizing literature into polished PDFs in under 2 minutes",
      fileSlug: "researchmate",
      fileDescription: "Autonomous literature review pipeline with Gemini + APIs",
      githubLink: "https://github.com/Yohanes-Mk/ResearchMate",
      terminalIcon: "🧠"
    },
    {
      title: "Sign-Speech — Two-Way Visual Interpreter",
      status: "R&D",
      terminalStatus: "R&D",
      stack: ["TensorFlow", "MediaPipe", "OpenCV", "Streamlit"],
      terminalStack: ["TensorFlow", "MediaPipe", "OpenCV", "Streamlit"],
      description: [
        "Builds independent ASL-to-speech and lip-reading speech-to-text pipelines inspired by LipNet.",
        "Fusion layer in development to synchronize gesture and visual speech cues for real-time translation.",
        "Accessible AI prototype empowering conversations between Deaf and hearing communities."
      ],
      terminalDescription:
        "Combines ASL gesture recognition and lip-reading for accessible communication",
      fileSlug: "sign-speech",
      fileDescription: "Two-way ASL gesture and lip-reading interpreter",
      terminalIcon: "🤟"
    },
    {
      title: "2D → 3D Multi-View Generator",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["PyTorch", "Diffusers", "Zero123++", "Docker", "Streamlit"],
      terminalStack: ["PyTorch", "Diffusers", "Zero123++", "Docker"],
      description: [
        "GPU-accelerated diffusion pipeline producing six consistent 3D-style renders from a single image.",
        "Integrated Rembg and Meta SAM for background removal and segmentation-driven cleanup.",
        "Packaged with Cog + Docker for reproducible deployments and cached model downloads."
      ],
      terminalDescription:
        "Generates six consistent 3D views with optional background removal + SAM segmentation",
      fileSlug: "2d-to-3d-generator",
      fileDescription: "Zero123++-powered diffusion pipeline for multi-view renders",
      githubLink: "https://github.com/Yohanes-Mk/2d-to-3d",
      terminalIcon: "🖼️"
    },
    {
      title: "YohannesOS Portfolio",
      status: "Live",
      terminalStatus: "LIVE",
      stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      terminalStack: ["React", "TypeScript", "Tailwind CSS"],
      description: [
        "Desktop-inspired personal OS with start menu, wallpaper system, and immersive animations.",
        "Includes interactive terminal mode mirroring Linux commands and structured file system data."
      ],
      terminalDescription:
        "OS-inspired personal site with terminal + desktop modes",
      fileSlug: "yohanes-os",
      fileDescription: "This portfolio OS interface",
      demoLink: "https://yohanes-os.vercel.app/",
      githubLink: "https://github.com/Yohanes-Mk/YohanesOS",
      terminalIcon: "💻"
    }
  ],
  skills: {
    professional: [
      { name: "Python", icon: "Terminal" },
      { name: "FastAPI", icon: "Zap" },
      { name: "Flask", icon: "Server" },
      { name: "React", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "Docker", icon: "Box" },
      { name: "REST APIs", icon: "Globe" },
      { name: "OpenAI API", icon: "Zap" },
      { name: "Anthropic API", icon: "Zap" },
      { name: "RAG Pipelines", icon: "Layers" },
      { name: "LangChain", icon: "Layers" },
      { name: "pgvector", icon: "Database" },
      { name: "SQLAlchemy", icon: "Database" },
      { name: "AWS", icon: "Cloud" },
      { name: "GitHub Actions", icon: "GitBranch" },
      { name: "Streamlit", icon: "Monitor" }
    ],
    tools: [
      { name: "VS Code", icon: "Monitor" },
      { name: "Claude Code", icon: "Terminal" },
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "Postman", icon: "Smartphone" },
      { name: "Linux", icon: "Terminal" },
      { name: "Figma", icon: "Palette" },
      { name: "Vercel", icon: "Globe" },
      { name: "Render", icon: "Globe" },
      { name: "Firebase", icon: "Database" },
      { name: "Tailwind", icon: "Palette" },
      { name: "Vite", icon: "Zap" }
    ],
    terminalCategories: [
      {
        label: "🧠  AI & LLM Engineering",
        items: ["RAG Pipelines", "LangChain", "OpenAI API", "Anthropic API", "sentence-transformers", "pgvector", "Prompt Engineering"]
      },
      {
        label: "⚙️  Backend & APIs",
        items: ["FastAPI", "Flask", "Python", "PostgreSQL", "SQLAlchemy", "MongoDB", "SQLite", "REST", "Docker"]
      },
      {
        label: "🎨  Frontend & UX",
        items: ["React", "TypeScript", "Tailwind CSS", "Streamlit", "HTML/CSS"]
      },
      {
        label: "🔬  ML & Computer Vision",
        items: ["OpenCV", "MediaPipe", "YOLO", "TensorFlow", "PyTorch", "Scikit-learn"]
      },
      {
        label: "🛠️  DevOps & Tooling",
        items: ["GitHub Actions", "Docker", "Linux", "AWS", "Vercel", "Render", "Git"]
      }
    ],
    files: {
      "ai_llm.txt": "RAG Pipelines, LangChain, OpenAI API, Anthropic API, sentence-transformers, pgvector, Prompt Engineering",
      "backend.txt": "Python, FastAPI, Flask, PostgreSQL, SQLAlchemy, MongoDB, SQLite, Docker, REST APIs",
      "frontend.txt": "React, TypeScript, Tailwind CSS, Streamlit, HTML/CSS",
      "ml_cv.txt": "OpenCV, MediaPipe, YOLO, TensorFlow, PyTorch, Scikit-learn, Diffusers",
      "cloud.txt": "AWS, Docker, GitHub Actions, Vercel, Render, Firebase"
    }
  },
  education: [
    {
      school: "St. Cloud State University",
      degree: "B.S. Computer Science (AI/ML), B.A. Economics",
      terminalDegree: "B.S. Computer Science (AI/ML) & B.A. Economics",
      gpa: "3.92",
      expected: "Dec 2027",
      location: "St. Cloud, MN",
      coursework: [
        "AI & Neural Networks",
        "Distributed Systems",
        "Operating Systems",
        "Database Theory & Design",
        "Object-Oriented Software Development",
        "Programming Language Concepts",
        "Computer Architecture",
        "Linear Algebra",
        "Probability & Statistics"
      ],
      activities: [
        "NSBE (National Society of Black Engineers)",
        "Cloud Computing Club",
        "Student Government Tech Fee Committee"
      ],
      terminalCoursework: [
        "AI & Neural Networks · Distributed Systems · Operating Systems",
        "Database Theory & Design · OOP Software Development",
        "Programming Language Concepts · Linear Algebra · Statistics"
      ],
      terminalPrograms: [
        "AI4ALL Discover AI · CodePath AI 110 · CodePath TIP 102 & Web 101",
        "NSBE · Cloud Computing Club · Student Government Tech Fee Committee"
      ],
      fileName: "scsu.txt",
      fileContent:
        "St. Cloud State University — B.S. Computer Science (AI/ML), B.A. Economics • GPA 3.92 • Expected Dec 2027"
    },
    {
      school: "University of Maryland, Baltimore County (UMBC)",
      terminalSchool: "University of Maryland, Baltimore County",
      degree: "Computer Science Transfer Student • Dean's List (2023 – 2024)",
      period: "2023–2024",
      summary: [
        "Led Python SI PASS sessions twice per week while balancing full-time coursework.",
        "Supported CWIT technical operations and launched automation tools adopted program-wide."
      ],
      fileName: "umbc.txt",
      fileContent:
        "University of Maryland, Baltimore County — Computer Science transfer student • Dean's List (2023-2024)"
    }
  ],
  professionalDevelopment: [
    { name: "Accenture Tech Summer Analyst", status: "Incoming — Summer 2026" },
    { name: "CodePath AI 110", status: "Completed" },
    { name: "AI4ALL Discover AI", status: "Graduate" },
    { name: "CodePath TIP 102", status: "Completed" },
    { name: "CodePath Web Development 101", status: "Completed" },
    { name: "NSBE", status: "Active Member" },
    { name: "Cloud Computing Club", status: "Active Member" },
    { name: "Student Government Tech Fee Committee", status: "Active Member" },
    { name: "ColorStack", status: "Active Member" }
  ],
  experience: [
    {
      title: "Technology Architecture Analyst Intern",
      company: "Accenture",
      period: "May 2026 – Present",
      location: "Seattle, Washington",
      points: [
        "Incoming Tech Summer Analyst — offer secured through NSBE 2026 recruiting pipeline (Baltimore, March 2026) after demoing the AI Event & Content Aggregator live at the career fair.",
        "Advanced through two interview rounds on April 24, 2026; verbal offer extended April 28, 2026.",
        "Role sits within Accenture's Technology Architecture track of the Technology Summer Analyst program."
      ],
      isActive: true
    },
    {
      title: "Freelance Full-Stack & AI Developer",
      company: "Independent",
      period: "Fall 2025 – Present",
      location: "Remote",
      points: [
        "Building a role-based water treatment client management system (So Safe) with automated SMS/email notifications via Twilio and SendGrid — three isolated user roles: Technician, Customer, Admin.",
        "Rebuilding Kibur College's website (full rebrand) and developing a RAG chatbot over institutional documents using pgvector and cross-encoder re-ranking.",
        "Building website and AI feature integration for BeteSeb Academy."
      ],
      isActive: true
    },
    {
      title: "AI Admissions Assistant — CO-OP",
      company: "Kibur College",
      period: "Jan 2026 – May 2026",
      location: "Remote — Addis Ababa, Ethiopia",
      points: [
        "Built a multi-channel RAG-based admissions chatbot handling prospective student queries over Telegram and email as the sole developer across the full pipeline.",
        "Designed two-stage retrieval system: all-MiniLM-L6-v2 for candidate retrieval + ms-marco-MiniLM-L-6-v2 cross-encoder re-ranking before LLM generation — improved answer precision over single-stage retrieval.",
        "Embedded institutional knowledge base into PostgreSQL with pgvector; built standalone staff dashboard (SQLite-backed, own subdomain) enabling non-technical staff to update the knowledge base without touching code."
      ]
    },
    {
      title: "Undergraduate Research Assistant — Brain-Computer Interface Lab",
      company: "St. Cloud State University",
      period: "Jan 2025 – May 2025",
      location: "St. Cloud, Minnesota",
      points: [
        "Developed EEG data preprocessing pipelines and real-time ML classifiers (logistic regression, k-NN) achieving sub-second latency for attention-state detection tasks.",
        "Maintained and debugged the Avatar platform's EEG data anonymization pipeline, fixing file organization logic to correctly classify brainwave recordings by thought category for IRB-compliant ML training.",
        "Implemented RSA key management scripts for a shared AI HPC server; resolved PySide6/QML UI inconsistencies across an 8-tab drone/robot/model control application.",
        "Maintained Ubuntu compute nodes, resolved merge conflicts, and supported deployment workflows for a multi-contributor research platform."
      ]
    },
    {
      title: "Software Engineering Intern — SIS/LMS",
      company: "Kibur College",
      period: "Summer 2024",
      location: "Remote — Addis Ababa, Ethiopia",
      points: [
        "Developed Flask/FastAPI microservices for enrollment, grade submission, and course registration secured with Firebase Auth + RBAC.",
        "Automated reporting workflows for 800+ student records, cutting manual compilation time by ≈80%.",
        "Documented OpenAPI specs and delivered CI-ready endpoints with idempotent database writes and error tracing."
      ]
    },
    {
      title: "Technical Operations Assistant",
      company: "Center for Women in Technology (CWIT), UMBC",
      period: "Fall 2023 – Spring 2024",
      location: "Baltimore, Maryland",
      points: [
        "Built Python + Google Sheets automation adopted as the standard attendance tracker for 200+ program participants.",
        "Maintained internal websites, event pages, and digital collateral while coordinating multi-department communications.",
        "Designed brochures and social assets with Adobe tools to support recruitment and alumni outreach."
      ]
    },
    {
      title: "SI PASS Leader — Calculus I & II",
      company: "University of Maryland, Baltimore County",
      period: "Fall 2023 – Spring 2024",
      location: "Baltimore, Maryland",
      points: [
        "Facilitated twice-weekly peer-assisted study sessions for 12–25 students in Calculus I and II, reinforcing problem-solving fundamentals and exam preparation.",
        "Created practice problems and mock assessments tailored to recurring exam problem areas.",
        "Collaborated with faculty to track outcomes and adapt session materials based on student performance trends."
      ]
    }
  ],
  contact: {
    email: "yohanigusse@gmail.com",
    linkedin: "https://www.linkedin.com/in/yohs",
    linkedinDisplay: "www.linkedin.com/in/yohs",
    github: "https://github.com/Yohanes-Mk",
    githubDisplay: "github.com/Yohanes-Mk",
    location: "Minnesota, United States",
    status:
      "Incoming Accenture Tech Summer Analyst · Open to Fall 2026 internships and research collaborations",
    intro:
      "I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions."
  },
  resume: {
    link: "/resume.pdf",
    summary: {
      experience: [
        "Incoming Accenture Tech Summer Analyst (Seattle, Summer 2026)",
        "AI/ML + full-stack delivery across research, education, and freelance clients",
        "Built 5+ production AI projects — RAG pipelines, LLM agents, full-stack apps",
        "Mentored 50+ students through SI PASS and workshops"
      ],
      achievements: [
        "Accenture offer landed via live project demo at NSBE 2026 Baltimore",
        "Two-stage RAG retrieval (bi-encoder + cross-encoder) deployed in production",
        "80% reduction in manual reporting for college SIS workflows",
        "Context-aware LLM curator agent with real-time profile-swap demo"
      ]
    }
  }
} as const;
