# portfolioData.ts — Update Instructions
> Generated: June 03, 2026
> Apply these changes top-to-bottom. Each section shows exact field paths and new values.
> Fields not mentioned = leave unchanged.

---

## 1. `about`

### `about.intro`
**Replace entirely:**
```
"I'm Yohannes, an Applied AI Engineer and CS/Econ student building LLM-powered backends, RAG pipelines, and full-stack AI systems. Incoming Tech Summer Analyst at Accenture — I've shipped everything from a production AI content aggregator demoed at NSBE to a full-stack anonymous social platform and a RAG admissions chatbot in production."
```

### `about.terminalHeadline`
**Replace:**
```
"Applied AI Engineer · Incoming Accenture Tech Summer Analyst"
```

### `about.terminalSummary`
**Replace array:**
```typescript
[
  "Applied AI Engineering: LLM pipelines, RAG systems,",
  "production backends, and full-stack AI products.",
  "Incoming Accenture Tech Summer Analyst (Seattle, Summer 2026).",
  "CS + Economics @ SCSU · 3.92 GPA · Graduating Dec 2027."
]
```

### `about.currentStatus`
**Replace:**
```
"Incoming Accenture Tech Summer Analyst — Seattle, WA (Summer 2026)"
```

### `about.availability`
**Replace:**
```
"Accenture Tech Summer Analyst (Summer 2026). Open to Fall 2026 internships, research collaborations, and side projects."
```

### `about.tags`
**Replace array:**
```typescript
[
  "RAG Pipelines",
  "LLM Engineering",
  "Python & FastAPI",
  "React & Full-Stack",
  "Docker & DevOps"
]
```

### `about.highlights`
**Replace array:**
```typescript
[
  "Incoming Accenture Tech Summer Analyst (Seattle, Summer 2026) — offer secured through NSBE 2026 career fair after demoing AI Event & Content Aggregator live to recruiters.",
  "Built and shipped production-grade AI projects: an end-to-end LLM content pipeline ingesting 8 YouTube channels + 25 DMV tech event feeds with context-aware ranking, a RAG admissions chatbot (pgvector + two-stage retrieval), and a full-stack anonymous social platform. Each is fully defensible line-by-line.",
  "Each project ships with production-ready APIs, monitoring layers, or Dockerized pipelines."
]
```

---

## 2. `projects`

### 2a. ADD — AI Event & Content Aggregator
**Insert as FIRST project in array. Mark `featured: true`.**
```typescript
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
}
```

### 2b. ADD — NearbyTalk
**Insert after AI Aggregator.**
```typescript
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
}
```
> ⚠️ Update `githubLink` with the correct repo slug once confirmed.

### 2c. ADD — Fleet Command
**Insert after NearbyTalk.**
```typescript
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
}
```

### 2d. UPDATE — Real-Time Surveillance & Analytics System
**Update `stack` and `terminalStack`:**
```typescript
stack: ["Python", "YOLO", "MediaPipe", "Flask", "SQLite", "Streamlit", "Docker"]
terminalStack: ["Python", "YOLO", "MediaPipe", "Flask", "Docker"]
```
**Update `description`:**
```typescript
description: [
  "Multi-stage computer vision pipeline: YOLO object detection → MediaPipe pose estimation → centroid tracker for persistent cross-frame IDs → fall detection, abandoned object, and crowd density logic.",
  "Flask API exposes detection events triggering real-time email and WhatsApp alerts; all events logged to SQLite/CSV for downstream analytics.",
  "Streamlit analytics dashboard for detection history and pipeline performance review. Containerized with Docker."
]
```
**Update `terminalDescription`:**
```
"Multi-stage CV pipeline: YOLO → MediaPipe → centroid tracker → real-time alert APIs and analytics dashboard"
```

### 2e. UPDATE — ResearchMate
**Update `status` and `terminalStatus`:**
```typescript
status: "Completed"
terminalStatus: "COMPLETED"
```
**Update `description`:**
```typescript
description: [
  "Multi-agent pipeline orchestrating paper retrieval, summarization, and citation formatting across arXiv and PubMed APIs using Gemini LLM.",
  "Generates curated PDF briefs per topic in under two minutes with ~85% relevance hit rate via validation and relevance filtering layers.",
  "Earlier project — Gemini-based architecture. Demonstrates multi-agent orchestration and modular pipeline design."
]
```

### 2f. UPDATE — Sub Academy → BeteSeb Academy
**Find the project entry with title containing "Sub Academy" and update:**
```typescript
title: "BeteSeb Academy — Website & AI Features"
fileSlug: "beteseb-academy"
fileDescription: "Website build with planned AI feature integration for BeteSeb Academy"
```
*(All other fields unchanged.)*

---

## 3. `skills`

### `skills.professional`
**Replace array entirely:**
```typescript
[
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
]
```

### `skills.tools`
**Replace array entirely:**
```typescript
[
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
]
```

### `skills.terminalCategories`
**Replace array entirely:**
```typescript
[
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
]
```

### `skills.files`
**Replace entirely:**
```typescript
files: {
  "ai_llm.txt": "RAG Pipelines, LangChain, OpenAI API, Anthropic API, sentence-transformers, pgvector, Prompt Engineering",
  "backend.txt": "Python, FastAPI, Flask, PostgreSQL, SQLAlchemy, MongoDB, SQLite, Docker, REST APIs",
  "frontend.txt": "React, TypeScript, Tailwind CSS, Streamlit, HTML/CSS",
  "ml_cv.txt": "OpenCV, MediaPipe, YOLO, TensorFlow, PyTorch, Scikit-learn, Diffusers",
  "cloud.txt": "AWS, Docker, GitHub Actions, Vercel, Render, Firebase"
}
```

---

## 4. `education`

### SCSU entry — update these fields:
```typescript
gpa: "3.92"
expected: "Dec 2027"
```

**Update `coursework` array:**
```typescript
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
]
```

**Update `activities` array:**
```typescript
activities: [
  "NSBE (National Society of Black Engineers)",
  "Cloud Computing Club",
  "Student Government Tech Fee Committee"
]
```

**Update `terminalCoursework` array:**
```typescript
terminalCoursework: [
  "AI & Neural Networks · Distributed Systems · Operating Systems",
  "Database Theory & Design · OOP Software Development",
  "Programming Language Concepts · Linear Algebra · Statistics"
]
```

**Update `terminalPrograms` array:**
```typescript
terminalPrograms: [
  "AI4ALL Discover AI · CodePath AI 110 · CodePath TIP 102 & Web 101",
  "NSBE · Cloud Computing Club · Student Government Tech Fee Committee"
]
```

**Update `fileContent`:**
```
"St. Cloud State University — B.S. Computer Science (AI/ML), B.A. Economics • GPA 3.92 • Expected Dec 2027"
```

---

## 5. `professionalDevelopment`

**Replace array entirely:**
```typescript
[
  { name: "Accenture Tech Summer Analyst", status: "Incoming — Summer 2026" },
  { name: "CodePath AI 110", status: "Completed" },
  { name: "AI4ALL Discover AI", status: "Graduate" },
  { name: "CodePath TIP 102", status: "Completed" },
  { name: "CodePath Web Development 101", status: "Completed" },
  { name: "NSBE", status: "Active Member" },
  { name: "Cloud Computing Club", status: "Active Member" },
  { name: "Student Government Tech Fee Committee", status: "Active Member" },
  { name: "ColorStack", status: "Active Member" }
]
```

---

## 6. `experience`

### 6a. ADD — Accenture
**Insert as FIRST entry in array.**
```typescript
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
}
```

### 6b. ADD — Freelance Developer
**Insert as SECOND entry, after Accenture.**
```typescript
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
}
```

### 6c. ADD — Kibur CO-OP
**Insert as THIRD entry, after Freelance.**
```typescript
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
}
```

### 6d. UPDATE — BCI Lab entry
**Update `period`:**
```typescript
period: "Jan 2025 – May 2025"
```
**Update `points` array:**
```typescript
points: [
  "Developed EEG data preprocessing pipelines and real-time ML classifiers (logistic regression, k-NN) achieving sub-second latency for attention-state detection tasks.",
  "Maintained and debugged the Avatar platform's EEG data anonymization pipeline, fixing file organization logic to correctly classify brainwave recordings by thought category for IRB-compliant ML training.",
  "Implemented RSA key management scripts for a shared AI HPC server; resolved PySide6/QML UI inconsistencies across an 8-tab drone/robot/model control application.",
  "Maintained Ubuntu compute nodes, resolved merge conflicts, and supported deployment workflows for a multi-contributor research platform."
]
```

### 6e. FIX — SI PASS Leader entry (existing entry — factual correction)
**The existing entry incorrectly states "Python" as the subject. Update `title` and `points`:**
```typescript
title: "SI PASS Leader — Calculus I & II"
```
**Update `points` array:**
```typescript
points: [
  "Facilitated twice-weekly peer-assisted study sessions for 12–25 students in Calculus I and II, reinforcing problem-solving fundamentals and exam preparation.",
  "Created practice problems and mock assessments tailored to recurring exam problem areas.",
  "Collaborated with faculty to track outcomes and adapt session materials based on student performance trends."
]
```

---

## 7. `contact`

### `contact.status`
**Replace:**
```
"Incoming Accenture Tech Summer Analyst · Open to Fall 2026 internships and research collaborations"
```

---

## 8. `resume`

### `resume.summary.experience`
**Replace array:**
```typescript
experience: [
  "Incoming Accenture Tech Summer Analyst (Seattle, Summer 2026)",
  "AI/ML + full-stack delivery across research, education, and freelance clients",
  "Built 5+ production AI projects — RAG pipelines, LLM agents, full-stack apps",
  "Mentored 50+ students through SI PASS and workshops"
]
```

### `resume.summary.achievements`
**Replace array:**
```typescript
achievements: [
  "Accenture offer landed via live project demo at NSBE 2026 Baltimore",
  "Two-stage RAG retrieval (bi-encoder + cross-encoder) deployed in production",
  "80% reduction in manual reporting for college SIS workflows",
  "Context-aware LLM curator agent with real-time profile-swap demo"
]
```

---

## Summary of Changes

| Section | Type | Detail |
|---------|------|--------|
| `about` | Updates | 6 fields — status, availability (Fall 2026 added), headline, summary, tags, highlights |
| `projects` | New entries | 3 — AI Aggregator (featured), NearbyTalk, Fleet Command |
| `projects` | Updates | 4 — Surveillance (stack+desc), ResearchMate (status+desc), Sub→BeteSeb rename, Aggregator stack (SQLAlchemy added) |
| `skills.professional` | Full replace | 18 skills — RAG, pgvector, SQLAlchemy, OpenAI/Anthropic APIs added |
| `skills.tools` | Full replace | 12 tools — Claude Code added, Supabase/Netlify removed |
| `skills.terminalCategories` | Full replace | 5 categories — AI/LLM category added, CV separated |
| `skills.files` | Full replace | ai_llm.txt added as new file |
| `education` | Updates | GPA 3.6→3.92, Dec 2026→Dec 2027, coursework, activities, programs, fileContent |
| `professionalDevelopment` | Full replace | 9 entries — Accenture, CodePath AI110, NSBE added; status fixed to Summer 2026 |
| `experience` | New entries | 3 — Accenture, Freelance Developer, Kibur CO-OP |
| `experience` | Updates | 2 — BCI Lab (period + bullets), SI PASS (title fixed Python→Calculus) |
| `contact` | Update | Status — Fall 2026 internship added |
| `resume` | Updates | 2 summary arrays |
