export const portfolioData = {
  about: {
    intro:
      "I'm Yohannes, an AI engineer and CS/Econ student building real-time vision and automation systems for safety, accessibility, and research teams. I connect computer vision, LLM agents, and human-centered interfaces so busy operators get actionable insights without extra overhead.",
    highlights: [
      "Recent highlights include a multi-camera surveillance platform (OpenCV + Mediapipe) that flags posture anomalies in under a second, ResearchMate agents that distill academic papers into PDF reports in two minutes, and Sign-Speech—a dual ASL gesture and lip-reading interpreter inspired by accessibility work.",
      "Each project ships with production-ready dashboards, APIs, or Dockerized pipelines that teams can deploy quickly."
    ],
    tags: [
      "Computer Vision Ops",
      "LLM + Automation",
      "Python & FastAPI",
      "React & Streamlit",
      "Docker & DevOps"
    ],
    terminalHeadline:
      "AI Engineer & CS/Econ Student focused on real-time vision systems",
    terminalSummary: [
      "I design modular ML pipelines that blend computer vision,",
      "LLMs, and automation to solve operational bottlenecks in",
      "public safety, accessibility, and research analytics. My work",
      "ships as production-ready dashboards, APIs, and interfaces",
      "that teams can operate with confidence."
    ],
    currentStatus:
      "Undergraduate researcher at St. Cloud State University",
    availability:
      "Open to AI/ML engineering internships & collaborations"
  },
  projects: [
    {
      title: "Real-Time Surveillance & Analytics System",
      status: "Active",
      terminalStatus: "IN PROGRESS",
      stack: ["Python", "OpenCV", "Mediapipe", "Flask", "Streamlit"],
      terminalStack: ["Python", "OpenCV", "Mediapipe", "Flask", "Streamlit"],
      description: [
        "Multi-camera posture, crowding, and abandoned-object detection with <1s latency.",
        "Modular pipeline combining pose estimation, object tracking, and automated alerting dashboards.",
        "Inspired by campus public safety work and piloted with Allied Universal supervisors."
      ],
      terminalDescription:
        "Multi-camera posture, crowding, and abandoned object detection with <1s latency",
      fileSlug: "realtime-surveillance-system",
      fileDescription: "Multi-camera CV analytics with Mediapipe + OpenCV",
      githubLink:
        "https://github.com/Yohanes-Mk/Realtime-surveillance-system",
      terminalIcon: "🎥",
      featured: true
    },
    {
      title: "ResearchMate — Autonomous Research Assistant",
      status: "Pilot",
      terminalStatus: "PILOT",
      stack: ["Python", "Gemini LLM", "arXiv API", "PubMed API", "ReportLab"],
      terminalStack: ["Python", "Gemini LLM", "arXiv API", "PubMed API"],
      description: [
        "Multi-agent backend orchestrating paper retrieval, summarization, and citation formatting.",
        "Generates curated PDF briefs per topic in under two minutes with ≈85% relevance hit rate.",
        "Co-developing an institutional pilot with Kibur College for student research automation."
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
      title: "YohanesOS Portfolio",
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
      { name: "React", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "Next.js", icon: "Layers" },
      { name: "Node.js", icon: "Server" },
      { name: "Python", icon: "Terminal" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "AWS", icon: "Cloud" },
      { name: "Docker", icon: "Box" },
      { name: "FastAPI", icon: "Zap" },
      { name: "Flask", icon: "Server" },
      { name: "REST APIs", icon: "Globe" }
    ],
    tools: [
      { name: "VS Code", icon: "Monitor" },
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "Figma", icon: "Palette" },
      { name: "Postman", icon: "Smartphone" },
      { name: "Linux", icon: "Terminal" },
      { name: "Tailwind", icon: "Palette" },
      { name: "Vite", icon: "Zap" },
      { name: "Vercel", icon: "Globe" },
      { name: "Netlify", icon: "Globe" },
      { name: "Firebase", icon: "Database" },
      { name: "Supabase", icon: "Database" }
    ],
    terminalCategories: [
      {
        label: "🎨 Frontend & UX",
        items: ["React", "TypeScript", "Tailwind CSS", "Streamlit"]
      },
      {
        label: "⚙️  Backend & APIs",
        items: ["FastAPI", "Flask", "Node.js", "REST", "Firebase Auth"]
      },
      {
        label: "🧠  AI & Computer Vision",
        items: ["OpenCV", "MediaPipe", "TensorFlow", "PyTorch", "Diffusers"]
      },
      {
        label: "🗄️  Data & Ops",
        items: ["PostgreSQL", "SQLite", "MongoDB", "GitHub Actions", "Docker"]
      },
      {
        label: "🛠️  Tooling",
        items: ["Git", "Linux", "Figma", "Postman", "Adobe Suite"]
      }
    ],
    files: {
      "frontend.txt": "React, TypeScript, Next.js, Tailwind CSS, Streamlit",
      "backend.txt": "Python, FastAPI, Flask, Node.js, REST APIs",
      "ml_cv.txt": "OpenCV, MediaPipe, TensorFlow, PyTorch, Diffusers",
      "databases.txt": "PostgreSQL, SQLite, Firebase, MongoDB",
      "cloud.txt": "AWS, Docker, Render, Vercel, GitHub Actions"
    }
  },
  education: [
    {
      school: "St. Cloud State University",
      degree: "B.S. Computer Science (AI/ML), B.A. Economics",
      terminalDegree: "B.S. Computer Science (AI/ML) & B.A. Economics",
      gpa: "3.6",
      expected: "Dec 2026",
      location: "St. Cloud, MN",
      coursework: [
        "Distributed Systems",
        "Operating Systems",
        "Database Design",
        "Computer Architecture",
        "Linear Algebra"
      ],
      activities: [
        "Cloud Computing Club",
        "Student Government Tech Fee Committee"
      ],
      terminalCoursework: [
        "Distributed Systems & Operating Systems",
        "Database Theory & Computer Architecture",
        "Linear Algebra, Probability & Statistics"
      ],
      terminalPrograms: [
        "AI4ALL Discover AI • CodePath TIP 102 & Web 101",
        "Cloud Computing Club • Student Government Tech Fee Committee"
      ],
      fileName: "scsu.txt",
      fileContent:
        "St. Cloud State University — B.S. Computer Science (AI/ML), B.A. Economics • GPA 3.6 • Expected Dec 2026"
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
    { name: "AI4ALL Discover AI", status: "Graduate" },
    { name: "CodePath TIP 102", status: "Completed" },
    { name: "CodePath Web Development 101", status: "Completed" },
    { name: "Cloud Computing Club", status: "Active Member" },
    { name: "Student Government Tech Fee Committee", status: "Active Member" },
    { name: "ColorStack", status: "Active Member" }
  ],
  experience: [
    {
      title: "Undergraduate Research Assistant — Brain-Computer Interface Lab",
      company: "St. Cloud State University",
      period: "Winter 2024 – Summer 2025",
      location: "St. Cloud, Minnesota",
      points: [
        "Integrated OpenBCI EEG streams with PySide6/QML control-center modules powering live drone and robot demos.",
        "Enhanced EEG visualization widgets, manual override logic, and TensorFlow inference endpoints for the Avatar platform.",
        "Maintained Ubuntu compute nodes, automated data pipelines, and supported IRB-compliant EEG collection sessions."
      ],
      isActive: true
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
      title: "SI PASS Leader (Python)",
      company: "University of Maryland, Baltimore County",
      period: "Fall 2023 – Spring 2024",
      location: "Baltimore, Maryland",
      points: [
        "Facilitated twice-weekly peer instruction reinforcing Python fundamentals, recursion, and data structures for CSCI 201.",
        "Created mock assessments, debugging walkthroughs, and interactive exercises tailored to exam prep.",
        "Collaborated with faculty to track outcomes and adapt materials for recurring problem areas."
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
    status: "Open to AI/ML engineering internships and research collaborations",
    intro:
      "I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions."
  },
  resume: {
    link:
      "https://drive.google.com/file/d/1cHlD6AspC738tO8qSIogF9bRkqAAziUb/view",
    summary: {
      experience: [
        "AI/ML + full-stack delivery across research and education",
        "Built 4 flagship AI products with active pilots",
        "Mentored 50+ students through SI PASS and workshops"
      ],
      achievements: [
        "<1s surveillance anomaly detection across multi-camera feeds",
        "≈85% research-topic relevance for automated literature reviews",
        "80% reduction in manual reporting for college SIS workflows"
      ]
    }
  }
} as const;
