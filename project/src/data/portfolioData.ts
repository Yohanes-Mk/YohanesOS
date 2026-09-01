export const portfolioData = {
  about: {
    intro:
      "I'm Yohannes, a Computer Science student focused on Applied AI engineering, backend systems, and full-stack product delivery. I build production-minded software that connects LLM workflows, retrieval systems, APIs, and user-facing tools, with recent work spanning Accenture, Kibur College, research infrastructure, and solo AI products.",
    highlights: [
      "Completed Accenture's Technology Summer Analyst internship on August 18, 2026, delivering release-critical accessibility and platform engineering work for an enterprise AI presentation-generation system.",
      "Built defensible AI systems across solo, client, and research environments: The Stack, a multi-channel admissions RAG chatbot with pgvector and reranking, and backend services for real operational workflows.",
      "My strongest work sits at the intersection of LLM pipelines, retrieval architecture, backend APIs, cloud deployment, and product-minded implementation."
    ],
    tags: [
      "Applied AI",
      "RAG & Retrieval",
      "Python Backends",
      "Cloud & APIs",
      "Full-Stack Delivery"
    ],
    terminalHeadline:
      "Applied AI Engineer · Backend + Full-Stack Builder",
    terminalSummary: [
      "Applied AI, backend APIs, and full-stack product delivery.",
      "Built production-minded systems across Accenture, Kibur,",
      "research infrastructure, and solo LLM products.",
      "B.S. Computer Science (AI/ML Track) @ SCSU · 3.92 GPA · Dec 2027."
    ],
    currentStatus:
      "Post-Accenture internship · Applied AI / SWE opportunities for Spring 2027",
    availability:
      "Open to Spring 2027 internships, selective new-grad pipelines, research collaborations, and strong applied AI projects."
  },
  projects: [
    {
      title: "The Stack — AI Event & Content Aggregator",
      status: "Live",
      terminalStatus: "LIVE",
      stack: ["Python", "PostgreSQL", "SQLAlchemy", "OpenAI API", "Streamlit", "Docker"],
      terminalStack: ["Python", "PostgreSQL", "OpenAI API", "Streamlit", "Docker"],
      description: [
        "Designed and built a solo end-to-end AI content pipeline that ingests YouTube channels and iCal event feeds, summarizes with OpenAI gpt-4o-mini structured output, and delivers personalized HTML digests by email.",
        "Built a context-aware curator agent that re-ranks the same content pool differently per user profile using LLM reasoning over a live user context document.",
        "Engineered a production-style monitoring layer with run lifecycle tracking, per-stage metrics, and per-item error capture so the pipeline degrades gracefully instead of aborting. Demoed live at NSBE 2026."
      ],
      terminalDescription:
        "Solo LLM pipeline with context-aware ranking, monitoring, and NSBE 2026 demo",
      fileSlug: "ai-event-aggregator",
      fileDescription: "Flagship solo AI pipeline for personalized event and content curation",
      githubLink: "https://github.com/Yohanes-Mk/ai-event-aggregator",
      terminalIcon: "📡",
      featured: true
    },
    {
      title: "AI Donor-Discovery Platform",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["Python", "LLM APIs", "REST Integrations", "Human-in-the-Loop"],
      terminalStack: ["Python", "LLM APIs", "REST Integrations"],
      description: [
        "Built the AI pipeline and API integrations behind a team-built platform that finds corporate-donor prospects from public data, ranks them by fit, and drafts outreach for staff approval.",
        "The platform surfaces personalized volunteering and donation suggestions by cross-referencing calendar and event information rather than treating fundraising as a generic lead list.",
        "Designed with explicit human oversight so final decisions stay with nonprofit staff instead of being automated away."
      ],
      terminalDescription:
        "Accenture team project for donor discovery, ranking, and human-reviewed outreach",
      fileSlug: "ai-donor-discovery-platform",
      fileDescription: "Team-built Accenture platform for donor prospecting and responsible AI workflows",
      terminalIcon: "🤝"
    },
    {
      title: "Kibur RAG Admissions Chatbot",
      status: "Partial",
      terminalStatus: "PARTIAL",
      stack: ["Python", "PostgreSQL", "pgvector", "Telegram", "Cross-Encoder Reranking", "SQLite"],
      terminalStack: ["Python", "PostgreSQL", "pgvector", "Telegram", "SQLite"],
      description: [
        "Built a multi-channel RAG-based admissions chatbot handling prospective student queries over Telegram and email as the sole developer across the full pipeline.",
        "Designed a two-stage retrieval system using all-MiniLM-L6-v2 for candidate retrieval and a cross-encoder for reranking before LLM generation.",
        "Embedded the institutional knowledge base into PostgreSQL with pgvector and added retrieval routing plus a standalone SQLite-backed staff dashboard for non-technical updates."
      ],
      terminalDescription:
        "Multi-channel RAG chatbot with pgvector, reranking, and staff dashboard tooling",
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
      stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Interactive UI"],
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
      { name: "TypeScript", icon: "FileCode" },
      { name: "FastAPI", icon: "Zap" },
      { name: "Flask", icon: "Server" },
      { name: "React", icon: "Code2" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "SQLAlchemy", icon: "Database" },
      { name: "pgvector", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "Docker", icon: "Box" },
      { name: "REST APIs", icon: "Globe" },
      { name: "OpenAI API", icon: "Zap" },
      { name: "Anthropic API", icon: "Zap" },
      { name: "RAG Pipelines", icon: "Layers" },
      { name: "Agentic AI", icon: "Layers" },
      { name: "LangChain", icon: "Layers" },
      { name: "Azure OpenAI", icon: "Cloud" },
      { name: "Azure Cognitive Search", icon: "Cloud" },
      { name: "AWS Lambda", icon: "Cloud" },
      { name: "OOXML", icon: "FileCode" },
      { name: "Accessibility", icon: "Monitor" },
      { name: "GitHub Actions", icon: "GitBranch" },
      { name: "Streamlit", icon: "Monitor" }
    ],
    tools: [
      { name: "VS Code", icon: "Monitor" },
      { name: "Claude Code", icon: "Terminal" },
      { name: "OpenAI Codex", icon: "Terminal" },
      { name: "GitHub Copilot", icon: "Github" },
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "Postman", icon: "Smartphone" },
      { name: "Linux", icon: "Terminal" },
      { name: "Jest", icon: "Code2" },
      { name: "Vercel", icon: "Globe" },
      { name: "Render", icon: "Globe" },
      { name: "Firebase", icon: "Database" },
      { name: "Figma", icon: "Palette" },
      { name: "Tailwind", icon: "Palette" },
      { name: "Vite", icon: "Zap" }
    ],
    terminalCategories: [
      {
        label: "🧠  AI & LLM Engineering",
        items: ["RAG Pipelines", "Agentic AI", "LangChain", "OpenAI API", "Anthropic API", "sentence-transformers", "pgvector", "Prompt Engineering"]
      },
      {
        label: "⚙️  Backend & APIs",
        items: ["Python", "FastAPI", "Flask", "REST APIs", "PostgreSQL", "SQLAlchemy", "MongoDB", "SQLite", "Docker"]
      },
      {
        label: "☁️  Cloud & Platform",
        items: ["AWS Lambda", "API Gateway", "Azure OpenAI", "Azure Cognitive Search", "Azure Blob Storage", "GitHub Actions", "Render", "Vercel"]
      },
      {
        label: "🎨  Frontend & UX",
        items: ["React", "TypeScript", "Tailwind CSS", "Streamlit", "HTML/CSS", "PySide6/QML", "Unity"]
      },
      {
        label: "🔬  ML & Computer Vision",
        items: ["OpenCV", "MediaPipe", "YOLO", "TensorFlow", "PyTorch", "Scikit-learn"]
      },
      {
        label: "🛠️  Tooling & Quality",
        items: ["Claude Code", "OpenAI Codex", "GitHub Copilot", "Jest", "OOXML", "Accessibility", "Git", "Linux"]
      }
    ],
    files: {
      "ai_llm.txt": "RAG Pipelines, Agentic AI, LangChain, OpenAI API, Anthropic API, sentence-transformers, pgvector, Prompt Engineering",
      "backend.txt": "Python, FastAPI, Flask, REST APIs, PostgreSQL, SQLAlchemy, MongoDB, SQLite, Docker",
      "frontend.txt": "React, TypeScript, Tailwind CSS, Streamlit, HTML/CSS, PySide6/QML, Unity",
      "ml_cv.txt": "OpenCV, MediaPipe, YOLO, TensorFlow, PyTorch, Scikit-learn",
      "cloud.txt": "AWS Lambda, API Gateway, Azure OpenAI, Azure Cognitive Search, Azure Blob Storage, GitHub Actions, Render, Vercel",
      "tooling.txt": "Claude Code, OpenAI Codex, GitHub Copilot, Jest, OOXML, Accessibility, Git, Linux"
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
        "Data Structures & Algorithms",
        "AI & Neural Networks",
        "Distributed Systems",
        "Operating Systems",
        "Database Theory & Design",
        "Object-Oriented Software Development",
        "Programming Language Concepts",
        "Computer Architecture",
        "Software Systems",
        "Linear Algebra",
        "Probability & Statistics"
      ],
      activities: [
        "NSBE (National Society of Black Engineers)",
        "Cloud Computing Club",
        "Student Government Tech Fee Committee"
      ],
      terminalCoursework: [
        "Data Structures & Algorithms · AI & Neural Networks · Distributed Systems",
        "Operating Systems · Database Theory · OOP Software Development",
        "Programming Language Concepts · Computer Architecture · Statistics"
      ],
      terminalPrograms: [
        "AI4ALL Discover AI · CodePath AI 110 · CodePath TIP 102 · Web 101",
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
        "Owned a release-critical accessibility workstream for an enterprise client-intelligence platform supporting ~30,000 internal accounts and data spanning a 9,000+ global client portfolio, addressing 10+ defects identified through external accessibility testing.",
        "Engineered a custom accessibility layer in the TypeScript/OOXML generation pipeline to overcome core-library limitations, restructuring presentation generation and building automated regression tests for screen-reader compatibility.",
        "Resolved the full set of release-blocking accessibility issues and cleared the platform for production deployment, enabling its broader client-intelligence capabilities to reach teams across the firm's global client portfolio."
      ],
      isActive: false
    },
    {
      title: "Freelance Full-Stack & AI Developer",
      company: "Independent",
      period: "Fall 2025 – Present",
      location: "Remote",
      points: [
        "Building client-facing software across AI, automation, and web delivery, with projects spanning role-based operations tooling, institutional website rebuilds, and AI feature integration.",
        "Developing systems that connect backend workflows, notifications, retrieval layers, and non-technical admin tooling for real users.",
        "Using freelance work as a proving ground for shipping scoped software quickly while keeping implementation honest and defensible."
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
        "Embedded institutional knowledge base into PostgreSQL with pgvector; implemented retrieval routing to resolve common queries before invoking the LLM and built a standalone SQLite-backed staff dashboard."
      ]
    },
    {
      title: "Undergraduate Research Assistant — Brain-Computer Interface Lab",
      company: "St. Cloud State University",
      period: "Aug 2024 – May 2025",
      location: "St. Cloud, Minnesota",
      points: [
        "Contributed to Avatar, a research platform integrating OpenBCI EEG headsets with robotics systems for real-time control and reliable server-side data handling.",
        "Maintained and debugged the Avatar platform's EEG data anonymization pipeline, fixing file organization logic to correctly classify brainwave recordings by thought category for IRB-compliant ML training.",
        "Implemented RSA key management scripts for a shared AI HPC server and resolved UI inconsistencies across an 8-tab PySide6/QML desktop application.",
        "Debugged deployment tracebacks, resolved merge conflicts, and maintained Linux and Ubuntu compute infrastructure for a multi-contributor research platform."
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
        "Built a Python + Google Sheets API automation tool for recurring operational workflows and event attendance, reducing manual record processing by about 85%.",
        "Updated and maintained the CWIT website, improving content accuracy and usability with HTML and CSS.",
        "Built Flask and FastAPI services with RBAC and CI support for student records workflows."
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
      "I’m interested in applied AI, backend, and software engineering opportunities where I can ship real systems, learn fast, and grow with a strong team."
  },
  resume: {
    link: "/resume.pdf",
    summary: {
      experience: [
        "Accenture Technology Summer Analyst with production accessibility and TypeScript/OOXML delivery experience",
        "AI admissions assistant and sole builder of a multi-channel RAG chatbot with pgvector and reranking",
        "Applied AI and backend engineering across consulting, research, education, and freelance software delivery",
        "Mentored students through SI PASS while balancing full-time technical coursework"
      ],
      achievements: [
        "Resolved release-blocking accessibility issues for an enterprise AI presentation-generation platform",
        "Built The Stack and demoed it live at NSBE 2026 Baltimore",
        "Designed two-stage RAG retrieval with bi-encoder recall and cross-encoder reranking",
        "Reduced manual operational processing by about 85% through Python automation"
      ]
    }
  }
} as const;
