export const portfolioData = {
  about: {
    intro:
      "I'm Yohannes, an Applied AI Engineer and Computer Science student building LLM-powered backends, RAG systems, and full-stack AI products. My strongest work spans a production AI content aggregator demoed live at NSBE 2026, a multi-channel admissions chatbot with two-stage retrieval, and applied AI delivery during my completed Accenture internship.",
    highlights: [
      "Completed Accenture Technology Summer Analyst internship from June 8, 2026 to August 18, 2026, with production-facing accessibility and AI platform delivery work framed publicly through ClientRadar and supporting AI initiatives.",
      "Built and shipped defensible AI projects: an end-to-end LLM content pipeline ingesting 8 YouTube channels plus 25 DMV tech event feeds, a multi-channel RAG admissions chatbot with pgvector and two-stage retrieval, and a full-stack anonymous social platform.",
      "I focus on systems I can explain line-by-line: production APIs, monitoring layers, retrieval pipelines, and full-stack delivery."
    ],
    tags: [
      "RAG Pipelines",
      "LLM Engineering",
      "Python & FastAPI",
      "React & Full-Stack",
      "Docker & DevOps"
    ],
    terminalHeadline:
      "Applied AI Engineer · Accenture Technology Summer Analyst Alum",
    terminalSummary: [
      "Applied AI Engineering: LLM pipelines, RAG systems,",
      "production backends, and full-stack AI products.",
      "Completed Accenture internship · Summer 2026.",
      "B.S. Computer Science (AI/ML Track) @ SCSU · 3.92 GPA · Dec 2027."
    ],
    currentStatus:
      "Post-Accenture internship · Applied AI / SWE opportunities for Spring 2027",
    availability:
      "Open to Spring 2027 internships, selective new-grad pipelines, research collaborations, and strong applied AI projects."
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
      title: "Kibur RAG Admissions Chatbot",
      status: "Partial",
      terminalStatus: "PARTIAL",
      stack: ["Python", "PostgreSQL", "pgvector", "Telegram", "Cross-Encoder Reranking", "SQLite"],
      terminalStack: ["Python", "PostgreSQL", "pgvector", "Telegram", "SQLite"],
      description: [
        "Multi-channel admissions chatbot for prospective students across Telegram and email, built as the sole developer during a Jan-May 2026 CO-OP.",
        "Two-stage retrieval pipeline uses all-MiniLM-L6-v2 for candidate retrieval and ms-marco-MiniLM-L-6-v2 cross-encoder reranking before generation.",
        "Institutional knowledge base is embedded in PostgreSQL with pgvector, with a standalone SQLite-backed staff dashboard so non-technical staff can update content without touching code."
      ],
      terminalDescription:
        "Multi-channel RAG chatbot with pgvector, two-stage retrieval, and staff dashboard tooling",
      fileSlug: "kibur-rag-chatbot",
      fileDescription: "Admissions RAG chatbot with pgvector and cross-encoder reranking",
      terminalIcon: "🎓",
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
      status: "Partial",
      terminalStatus: "PARTIAL",
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
      terminalIcon: "🎥"
    },
    {
      title: "ASL Gesture Classifier",
      status: "Partial",
      terminalStatus: "PARTIAL",
      stack: ["TensorFlow", "MediaPipe", "OpenCV", "Streamlit"],
      terminalStack: ["TensorFlow", "MediaPipe", "OpenCV", "Streamlit"],
      description: [
        "Real-time ASL gesture classifier using MediaPipe Holistic keypoint extraction, 30-frame temporal windows, and an LSTM sequence model for live sign prediction.",
        "Scoped down deliberately from an earlier two-way Sign-Speech concept so the portfolio only presents the slice I can defend deeply.",
        "Streamlit-based live inference interface demonstrates the model pipeline from webcam capture to gesture classification."
      ],
      terminalDescription:
        "MediaPipe + LSTM ASL classifier with live inference UI",
      fileSlug: "asl-gesture-classifier",
      fileDescription: "Scoped ASL gesture classifier built with MediaPipe and TensorFlow",
      terminalIcon: "🤟"
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
      degree: "B.S. Computer Science (AI/ML Track)",
      terminalDegree: "B.S. Computer Science (AI/ML Track)",
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
        "St. Cloud State University — B.S. Computer Science (AI/ML Track) • GPA 3.92 • Expected Dec 2027"
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
    { name: "Accenture Technology Summer Analyst", status: "Completed — Aug 18, 2026" },
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
      title: "Technology Summer Analyst",
      company: "Accenture",
      period: "Jun 2026 – Aug 2026",
      location: "Seattle, Washington",
      points: [
        "Completed Accenture's Technology Summer Analyst internship from June 8, 2026 to August 18, 2026, staffed on the Avanade side while keeping the official Accenture title.",
        "Built production-facing accessibility remediation for an internal AI presentation-generation platform, including a custom TypeScript and OOXML accessibility layer plus automated regression tests for screen-reader compatibility.",
        "Contributed across AI platform workstreams including API integration, delivery readiness, and production-impact fixes, with public-safe framing centered on ClientRadar accessibility first and supporting AI initiatives second."
      ],
      isActive: false
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
      period: "Aug 2024 – May 2025",
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
      "Post-Accenture internship · Open to Spring 2027 internships, selective new-grad roles, and research collaborations",
    intro:
      "I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions."
  },
  resume: {
    link: "/resume.pdf",
    summary: {
      experience: [
        "Completed Accenture Technology Summer Analyst internship (Summer 2026)",
        "Applied AI + full-stack delivery across consulting, research, education, and freelance work",
        "Built flagship AI systems across LLM pipelines, RAG retrieval, and full-stack applications",
        "Mentored 50+ students through SI PASS and workshops"
      ],
      achievements: [
        "Accenture role originated from live AI Aggregator demo at NSBE 2026 Baltimore",
        "Two-stage RAG retrieval design with bi-encoder plus cross-encoder reranking",
        "80% reduction in manual reporting for college SIS workflows",
        "Context-aware LLM curator agent with real-time profile-swap demo"
      ]
    }
  }
} as const;
