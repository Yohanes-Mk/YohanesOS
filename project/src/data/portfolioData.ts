export const portfolioData = {
  about: {
    intro:
      "I'm Yohannes Nigusse, a software engineer building backend systems, full-stack products, and applied AI workflows. My work spans enterprise software at Accenture, admissions tooling at Kibur College, research infrastructure, and team-led course projects. I focus on clear architecture, automated testing, and reliable delivery, and I serve as Vice President of the National Society of Black Engineers.",
    highlights: [
      "I completed Accenture's Technology Summer Analyst internship on August 18, 2026, where I shipped release-critical accessibility and platform engineering work for an enterprise AI presentation-generation system.",
      "I’ve worked on applied AI workflows across real cloud infrastructure, including AWS Lambda and API Gateway integrations, Azure-based document generation and search flows, and human-in-the-loop AI systems.",
      "I build defensible systems across solo, client, and research environments, including The Stack, a multi-channel admissions RAG chatbot with pgvector and reranking, and backend services that support real operational workflows.",
      "I care most about building systems that are technically honest, useful in production, and clear about where AI should assist versus where people should stay in control."
    ],
    tags: [
      "Applied AI Systems",
      "Backend Architecture",
      "RAG & Retrieval",
      "Cloud Integrations",
      "Product Delivery",
      "Software Architecture",
      "NSBE Vice President"
    ],
    terminalHeadline:
      "Software Engineer · Backend Systems · Applied AI",
    terminalSummary: [
      "Software engineering, backend systems, and applied AI.",
      "Built production-minded systems across Accenture, Kibur,",
      "research infrastructure, and independent LLM products.",
      "Vice President, National Society of Black Engineers.",
      "B.S. Computer Science (AI/ML Track) @ SCSU · 3.92 GPA · Dec 2027."
    ],
    currentStatus:
      "Post-Accenture internship · focused on applied AI, backend engineering, and Summer 2027 opportunities",
    availability:
      "Open to Summer 2027 internships, selective new-grad pipelines, research collaborations, and serious applied AI builds."
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
        "Built run tracking, stage metrics, structured JSON logs, and item-level error isolation. Across 500 runs on a reproducible input set, 96.4% completed successfully; monitoring traced degraded and failed cases to API rate limits. Demoed live at NSBE 2026."
      ],
      terminalDescription:
        "Solo LLM pipeline with context-aware ranking, monitoring, and NSBE 2026 demo",
      fileSlug: "the-stack",
      fileDescription: "Flagship solo AI pipeline for personalized event and content curation under The Stack",
      githubLink: "https://github.com/Yohanes-Mk/the-stack",
      terminalIcon: "📡",
      featured: true
    },
    {
      title: "RidgeRunner — Unity Time-Trial Racer",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["Unity 6", "C#", "WheelCollider", "Race Telemetry"],
      terminalStack: ["Unity 6", "C#", "Race Telemetry"],
      description: [
        "Built a playable time-trial racing prototype with ordered checkpoint and lap-state logic, live minimap, best-lap tracking, and off-track penalties.",
        "Implemented session timing, split telemetry, and a tuned Unity WheelCollider-based vehicle controller for arcade-style handling.",
        "Shipped a Windows build and gameplay demo as a completed game-development project."
      ],
      terminalDescription:
        "Playable Unity time-trial racer with checkpoint logic, telemetry, and gameplay demo",
      fileSlug: "ridge-runner",
      fileDescription: "Unity 6 time-trial racer with a playable build and gameplay demo",
      githubLink: "https://github.com/Yohanes-Mk/RidgeRunner",
      terminalIcon: "🏁",
      featured: false
    },
    {
      title: "NimbusQueue — Distributed Task Queue",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "GCP", "GitHub Actions"],
      terminalStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "GCP", "GitHub Actions"],
      description: [
        "Backend lead on a four-person CSCI 312 distributed-systems course team, building asynchronous job processing across three GCP workers.",
        "Load-tested 5,000 mixed-duration jobs: three workers reduced queue-drain time by 62% versus one worker and improved P95 processing latency from 450 ms to 110 ms.",
        "Terminated the active coordinator during a 2,500-job test; PostgreSQL-backed leader election restored processing in 3.4 seconds with no duplicated or lost jobs. Docker Compose and GitHub Actions gated redeploys on 42 integration tests."
      ],
      terminalDescription: "Backend lead on a four-person CSCI 312 distributed-systems course team, building asynchronous job processing across three GCP workers.",
      fileSlug: "nimbusqueue",
      fileDescription: "NimbusQueue — Distributed Task Queue",
      terminalIcon: "☁️",
      featured: true
    },
    {
      title: "CampusMarket — Campus Marketplace",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "GitHub Actions"],
      terminalStack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "GitHub Actions"],
      description: [
        "Lead developer on a five-person CSCI 430 software-architecture course team, directing listing and search workflows across React, FastAPI, and PostgreSQL.",
        "Applied SOLID principles and Factory, Observer, and Strategy patterns to separate responsibilities. Used Claude Code to scaffold CRUD boilerplate and conducted 20+ pull-request reviews focused on requirements, edge cases, and code quality.",
        "Configured automated tests on every pull request with GitHub Actions, helping raise team test coverage from under 30% to over 75% before final submission."
      ],
      terminalDescription: "Lead developer on a five-person CSCI 430 software-architecture course team, directing listing and search workflows across React, FastAPI, and PostgreSQL.",
      fileSlug: "campusmarket",
      fileDescription: "CampusMarket — Campus Marketplace",
      terminalIcon: "🛒",
      featured: true
    },
    {
      title: "ConcurrentBank — Database Concurrency Lab",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["PostgreSQL", "Python", "SQLAlchemy"],
      terminalStack: ["PostgreSQL", "Python", "SQLAlchemy"],
      description: [
        "Solo CSCI 411 database course project exploring transaction isolation, deadlocks, and crash recovery. Stress-tested 1,500 concurrent financial transactions and reproduced a non-repeatable read under Read Committed; post-change Repeatable Read runs showed no occurrences.",
        "Reproduced PostgreSQL 40P01 deadlocks across 50 runs, then enforced consistent lock ordering and automated retries, with no deadlocks across 50 post-change runs.",
        "Validated WAL crash recovery during a 500-transaction workload: 312 committed transactions remained durable and 188 interrupted transactions remained uncommitted."
      ],
      terminalDescription: "Solo CSCI 411 database course project exploring transaction isolation, deadlocks, and crash recovery. Stress-tested 1,500 concurrent financial transactions and reproduced a non-repeatable read under Read Committed; post-change Repeatable Read runs showed no occurrences.",
      fileSlug: "concurrentbank",
      fileDescription: "ConcurrentBank — Database Concurrency Lab",
      terminalIcon: "🏦",
      featured: false
    },
    {
      title: "InvenTrack — Inventory Management",
      status: "Completed",
      terminalStatus: "COMPLETED",
      stack: ["Python", "SQLAlchemy", "SQLite", "Streamlit"],
      terminalStack: ["Python", "SQLAlchemy", "SQLite", "Streamlit"],
      description: [
        "Solo CSCI 331 software-systems course project for tracking inventory, reorder points, and transactions using Streamlit, SQLAlchemy, and SQLite.",
        "Separated domain logic from storage to support in-memory testing. Unit and integration tests caught two reorder-point data-integrity bugs before the course demo."
      ],
      terminalDescription: "Solo CSCI 331 software-systems course project for tracking inventory, reorder points, and transactions using Streamlit, SQLAlchemy, and SQLite.",
      fileSlug: "inventrack",
      fileDescription: "InvenTrack — Inventory Management",
      terminalIcon: "📦",
      featured: false
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
      stack: ["Python", "PostgreSQL", "pgvector", "Telegram", "Cross-Encoder Reranking", "SQLite", "Gemini API"],
      terminalStack: ["Python", "PostgreSQL", "pgvector", "Telegram", "SQLite", "Gemini API"],
      description: [
        "Sole developer of a Telegram/email admissions RAG assistant using PostgreSQL/pgvector and Gemini, validated in an owner-confirmed pilot with 84 queries from 12 users.",
        "Designed a two-stage retrieval system using all-MiniLM-L6-v2 for candidate retrieval and a cross-encoder for reranking before LLM generation.",
        "On a separate 75-question benchmark, 68/75 retrieved expected top-five context and 70/75 answers were correct or partially correct (owner-confirmed). A SQLite dashboard enabled approximately 12 staff to update institutional knowledge without code changes."
      ],
      terminalDescription:
        "Multi-channel RAG chatbot with pgvector, reranking, and staff dashboard tooling",
      fileSlug: "kibur-rag-chatbot",
      fileDescription: "Admissions RAG chatbot with pgvector and cross-encoder reranking",
      terminalIcon: "🎓",
      featured: false
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
      { name: "Azure Blob Storage", icon: "Cloud" },
      { name: "AWS Lambda", icon: "Cloud" },
      { name: "API Gateway", icon: "Cloud" },
      { name: "OOXML", icon: "FileCode" },
      { name: "Accessibility", icon: "Monitor" },
      { name: "NVDA Testing", icon: "Monitor" },
      { name: "GitHub Actions", icon: "GitBranch" },
      { name: "Streamlit", icon: "Monitor" },
      { name: "GCP", icon: "Cloud" },
      { name: "Gemini API", icon: "Zap" },
      { name: "Redis", icon: "Database" },
      { name: "Distributed Systems", icon: "Layers" },
      { name: "Software Architecture", icon: "Layers" },
      { name: "Database Transactions", icon: "Database" },
      { name: "Integration Testing", icon: "Code2" },
      { name: "Regression Testing", icon: "Code2" },
      { name: "Observability", icon: "Monitor" }
    ],
    tools: [
      { name: "VS Code", icon: "Monitor" },
      { name: "Claude Code", icon: "Terminal" },
      { name: "OpenAI Codex", icon: "Terminal" },
      { name: "GitHub Copilot", icon: "Github" },
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "Linux", icon: "Terminal" },
      { name: "Clockwise", icon: "Monitor" },
      { name: "Jest", icon: "Code2" },
      { name: "Vercel", icon: "Globe" },
      { name: "Render", icon: "Globe" },
      { name: "AWS Console", icon: "Cloud" },
      { name: "Azure Portal", icon: "Cloud" },
      { name: "Scrum", icon: "Layers" },
      { name: "GitHub Actions", icon: "GitBranch" },
      { name: "Docker Desktop", icon: "Box" }
    ],
    terminalCategories: [
      {
        label: "🧠  AI & LLM Engineering",
        items: ["RAG Pipelines", "Agentic AI", "LangChain", "OpenAI API", "Gemini API", "Anthropic API", "sentence-transformers", "pgvector", "Prompt Engineering"]
      },
      {
        label: "⚙️  Backend & APIs",
        items: ["Python", "FastAPI", "Flask", "REST APIs", "PostgreSQL", "SQLAlchemy", "MongoDB", "SQLite", "Redis", "Distributed Systems", "Database Transactions", "Docker"]
      },
      {
        label: "☁️  Cloud & Platform",
        items: ["GCP", "AWS Lambda", "API Gateway", "Azure OpenAI", "Azure Cognitive Search", "Azure Blob Storage", "GitHub Actions", "Render", "Vercel"]
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
        items: ["Claude Code", "OpenAI Codex", "GitHub Copilot", "Jest", "Unit Testing", "Integration Testing", "Regression Testing", "Code Review", "Observability", "OOXML", "Accessibility", "NVDA Testing", "Git", "Linux", "GitHub Actions", "Scrum"]
      }
    ],
    files: {
      "ai_llm.txt": "RAG Pipelines, Agentic AI, LangChain, Gemini API, OpenAI API, Anthropic API, sentence-transformers, pgvector, Prompt Engineering",
      "backend.txt": "Python, FastAPI, Flask, REST APIs, PostgreSQL, SQLAlchemy, MongoDB, SQLite, Redis, Distributed Systems, Database Transactions, Docker",
      "frontend.txt": "React, TypeScript, Tailwind CSS, Streamlit, HTML/CSS, PySide6/QML, Unity",
      "ml_cv.txt": "OpenCV, MediaPipe, YOLO, TensorFlow, PyTorch, Scikit-learn",
      "cloud.txt": "GCP, AWS Lambda, API Gateway, Azure OpenAI, Azure Cognitive Search, Azure Blob Storage, GitHub Actions, Render, Vercel",
      "tooling.txt": "Unit Testing, Integration Testing, Regression Testing, Code Review, Observability, Software Architecture, Claude Code, OpenAI Codex, GitHub Copilot, Jest, OOXML, Accessibility, NVDA Testing, Git, Linux, GitHub Actions, Scrum"
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
        "Software Design & Architecture",
        "Linear Algebra",
        "Probability & Statistics"
      ],
      activities: [
        "Vice President, NSBE (National Society of Black Engineers)",
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
        "NSBE Vice President · Cloud Computing Club · Student Government Tech Fee Committee"
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
    { name: "AWS Cloud Certification", status: "Completed" },
    { name: "Scrum Certification", status: "Completed" },
    { name: "CodePath AI 110", status: "Completed" },
    { name: "AI4ALL Discover AI", status: "Graduate" },
    { name: "CodePath TIP 102", status: "Completed" },
    { name: "CodePath Web Development 101", status: "Completed" },
    { name: "NSBE", status: "Vice President" },
    { name: "Cloud Computing Club", status: "Active Member" },
    { name: "Student Government Tech Fee Committee", status: "Active Member" },
    { name: "ColorStack", status: "Affiliate" },
    { name: "Monte Johnson CS Scholarship", status: "Recipient" },
    { name: "Duane Joyer Memorial Scholarship", status: "Recipient" }
  ],
  experience: [
    {
      title: "Technology Summer Analyst",
      company: "Accenture",
      period: "Jun 2026 – Aug 2026",
      location: "Seattle, Washington",
      points: [
        "Resolved 10+ externally reported accessibility defects in TypeScript/OOXML-generated PowerPoint decks backed by Azure storage/search, unblocking a production release milestone for approximately 30,000 internal accounts.",
        "Engineered a custom accessibility layer in the generation pipeline and authored 11 Jest regression rules to prevent screen-reader compatibility regressions.",
        "Validated fixes across 8 formal scenarios using automated regression testing and NVDA, covering reading order, alt text, title structure, navigation, footnotes, and malformed bullets; delivered sign-off evidence clearing the release gate.",
        "Extended the pricing tool's production API integration layer to carry additional inputs into structured recommendation documents and migrated document generation to AWS Lambda/API Gateway."
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
      title: "Software Engineering Intern",
      company: "Kibur College",
      period: "Jan 2026 – May 2026",
      location: "Remote — Addis Ababa, Ethiopia",
      points: [
        "Sole developer of a Telegram/email RAG admissions assistant combining semantic retrieval in PostgreSQL/pgvector with Gemini synthesis; validated in an owner-confirmed pilot with 84 queries from 12 users.",
        "Built a separate 75-question benchmark: 68/75 retrieved expected top-five context and 70/75 answers were correct or partially correct (owner-confirmed). Used seven failed-context cases to guide retrieval tuning.",
        "Designed relational schema, vector indexing, and retrieval routing; built a SQLite dashboard enabling approximately 12 staff to update institutional knowledge without code changes.",
        "Co-designed a shared-nothing distributed backend across 60+ repurposed campus computers, modeling capacity planning, quorum-based availability, and fault-isolated scaling without cloud infrastructure spend."
      ]
    },
    {
      title: "Undergraduate Research Assistant — Brain-Computer Interface Lab",
      company: "St. Cloud State University",
      period: "Aug 2024 – May 2025",
      location: "St. Cloud, Minnesota",
      points: [
        "Diagnosed EEG sample-rate mismatches and implemented metadata-driven polyphase resampling, restoring 14 previously failed recordings across 3 runs; all 14 produced valid 8-channel PSD features for the anonymized dataset.",
        "Wrote RSA key-management scripts that automated key expiry and blocked post-login authorized_keys changes across two workstations and one storage server, hardening access controls for four researchers.",
        "Corrected tab resizing, active-state indicators, and button alignment across an eight-tab PySide6/QML research interface, restoring consistent drone, robot, and model controls."
      ]
    },
    {
      title: "Technical Operations Assistant",
      company: "Center for Women in Technology (CWIT), UMBC",
      period: "Fall 2023 – Spring 2024",
      location: "Baltimore, Maryland",
      points: [
        "Automated recurring attendance tracking for 50–100 participants per session with Python and the Google Sheets API, reducing manual record processing by approximately 85%.",
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
      "Post-Accenture internship · Open to Summer 2027 internships, selective new-grad roles, and research collaborations",
    intro:
      "I’m interested in applied AI, backend, and software engineering opportunities where I can ship real systems, learn fast, and grow with a strong team."
  },
  resume: {
    link: "/Yohannes_Nigusse_Product_Software_Resume.pdf",
    alternatives: [
      { label: "Backend & Infrastructure", link: "/YOHANNES_RESUME_BACKEND_INFRASTRUCTURE.pdf" },
      { label: "Enterprise Software Engineering", link: "/YOHANNES_RESUME_ENTERPRISE_SWE.pdf" }
    ],
    summary: {
      experience: [
        "Accenture Technology Summer Analyst: 10+ accessibility fixes, 11 Jest regression rules, and 8 formal NVDA validation scenarios",
        "Sole builder of a multi-channel admissions RAG chatbot with pgvector, cross-encoder reranking, and non-technical staff update tooling",
        "Team lead on CampusMarket and NimbusQueue, delivering full-stack architecture and tested distributed job processing",
        "Vice President, National Society of Black Engineers; B.S. Computer Science (AI/ML Track), 3.92 GPA"
      ],
      achievements: [
        "Resolved release-blocking accessibility issues for an enterprise AI presentation-generation platform",
        "The Stack: 96.4% successful runs across a reproducible 500-run reliability test; demoed at NSBE 2026",
        "NimbusQueue: 62% faster queue drain across three workers and 3.4-second failover in a 2,500-job test",
        "CampusMarket: helped raise team test coverage from under 30% to over 75%; Monte Johnson CS and Duane Joyer Memorial scholarship recipient"
      ]
    }
  }
} as const;
