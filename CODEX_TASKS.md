# YohannesOS Portfolio — Codex Task Queue

**How to use this file:**
- Codex: Read the current task in the "CURRENT TASK" section
- Codex: After each commit, update the task status and report what you did
- Jon/Claude: Review git diff to verify changes, then write the next task in "NEXT TASK" or "BACKLOG"
- Keep one task active at a time; finish before moving to the next

---

## CURRENT TASK

**Task #1: Fix two critical bugs (P1)**

**Files to edit:**
- `project/src/components/Desktop.tsx` — line 493
- `project/src/components/TerminalMode.tsx` — line 511

**Changes:**

1. **Desktop.tsx:493** — `ContentModal` is missing the `wallpaperAccents` prop on desktop layout. The mobile branch (line 313) passes it correctly.
   - Find the line: `<ContentModal type={activeContent} theme={theme} onClose={() => setActiveContent(null)} />`
   - Add prop: `wallpaperAccents={wallpaperAccents}`
   - Result: `<ContentModal type={activeContent} theme={theme} onClose={() => setActiveContent(null)} wallpaperAccents={wallpaperAccents} />`

2. **TerminalMode.tsx:511** — Light-mode terminal input text is near-invisible (`text-gray-100`).
   - Find the line rendering the echoed input: `<span className={theme === 'dark' ? 'text-white' : 'text-gray-100'}>{entry.input}</span>`
   - Change `text-gray-100` to `text-gray-800` so light-mode text is readable
   - Result: `<span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{entry.input}</span>`

**Commit message:**
```
Fix wallpaper accents on desktop ContentModal and light-mode terminal input visibility

- Pass wallpaperAccents prop to Desktop layout ContentModal (was broken on desktop, working on mobile)
- Change light-mode terminal input text to text-gray-800 for readability (was text-gray-100)

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

**When done:**
1. Commit the changes
2. Run `npm run build` to verify no errors
3. Return to this file and fill in "Status" below, then note the commit hash

---

## Status

- [x] Changes made
- [x] Committed by Jon (Codex had shell permission issues)
- [x] Verified in git
- [x] Tested build (`npm run build` passes when using nvm Node v24.13.1 on PATH)

**Commit hash:** `e4cd071`

**What was changed:**
- ✅ Added `wallpaperAccents={wallpaperAccents}` to the desktop `ContentModal` render in `project/src/components/Desktop.tsx:498`
- ✅ Changed light-mode echoed terminal input text from `text-gray-100` to `text-gray-800` in `project/src/components/TerminalMode.tsx:511`

**Verification:**
- Desktop.tsx now passes wallpaper accents correctly (matches mobile branch pattern)
- TerminalMode.tsx light-mode input is now readable (text-gray-800 instead of near-white text-gray-100)
- `npm run build` passed using `PATH=/Users/jon/.nvm/versions/node/v24.13.1/bin:$PATH`

**Status:** ✅ COMPLETE — Ready for Task #2

---

## NEXT TASK

**Task #1.5: Start localhost dev server (OPERATIONS — not a code change)**

**Why:** Vercel deployments are slow and hide live changes. We need a local dev server so Jon can instantly see changes as they're made during Task #2 and beyond.

**What to do:**

1. In your shell, navigate to the project directory:
   ```bash
   cd /Users/jon/Projects/Portfolio/YohanesOS/project
   ```

2. Start the Vite dev server:
   ```bash
   npm run dev
   ```

3. Wait for the output. You'll see something like:
   ```
   VITE v5.4.8  ready in 123 ms

   ➜  Local:   http://localhost:5173/
   ➜  press h to show help
   ```

4. **Run it in the background** using the `run_in_background` parameter on your Bash tool so it stays alive:
   ```bash
   cd /Users/jon/Projects/Portfolio/YohanesOS/project && npm run dev
   ```

5. Report the localhost URL (typically `http://localhost:5173`) back to Jon in your status update.

**Acceptance criteria:**
- [ ] Dev server started without errors
- [ ] Localhost URL is reported (e.g., `http://localhost:5173`)
- [ ] Server runs in background (doesn't block future work)
- [ ] Jon can open the URL in a browser and see the site live

**When done:**
1. Report the localhost URL
2. Keep the server running (don't kill it)
3. Let Jon know you're ready for Task #2

---

## Status (Task #1.5)

- [x] Dev server started without errors
- [x] Localhost URL reported: `http://127.0.0.1:5173/`
- [x] Server runs in background in Codex session `7538`
- [x] Localhost verified with `HTTP/1.1 200 OK`

**Status:** COMPLETE — Ready for Task #2

---

## NEXT TASK

**Task #2: Centralize portfolio data into a single module (P1)**

**Why:** Currently project/skill/education/experience content is duplicated in `ContentModal.tsx` (1,125 lines) and `TerminalMode.tsx` (540 lines), and they're already drifting. Creating one data source eliminates the drift and makes the next update (Task #3) a single change.

**What to do:**

1. Create new file: `project/src/data/portfolioData.ts`

2. Export a single object with this structure:
   ```typescript
   export const portfolioData = {
     about: {
       intro: "...",
       highlights: ["...", "..."],
       tags: ["Computer Vision Ops", "LLM + Automation", ...]
     },
     projects: [
       {
         title: "Real-Time Surveillance & Analytics System",
         status: "Active",
         stack: ["Python", "OpenCV", ...],
         description: ["...", "..."],
         githubLink: "https://...",
         featured: true
       },
       // ... rest of projects
     ],
     skills: {
       professional: [{ name: "React", icon: "Code2" }, ...],
       tools: [{ name: "VS Code", icon: "Monitor" }, ...]
     },
     education: [
       {
         school: "St. Cloud State University",
         degree: "B.S. Computer Science (AI/ML), B.A. Economics",
         gpa: "3.6",
         expected: "Dec 2026",
         // ... etc
       }
     ],
     experience: [
       {
         title: "Undergraduate Research Assistant — Brain-Computer Interface Lab",
         company: "St. Cloud State University",
         period: "Winter 2024 – Summer 2025",
         location: "St. Cloud, Minnesota",
         points: ["...", "..."],
         isActive: true
       }
     ],
     contact: {
       email: "yohanigusse@gmail.com",
       linkedin: "https://www.linkedin.com/in/yohs",
       github: "https://github.com/Yohanes-Mk"
     }
   };
   ```

3. Extract **all** content from `ContentModal.tsx` (About, Projects, Skills, Education, Experience sections) and `TerminalMode.tsx` (projects, skills, education, contact arrays) into this file.

4. Import and use `portfolioData` in:
   - `ContentModal.tsx` — replace hardcoded data with `portfolioData.*`
   - `TerminalMode.tsx` — replace hardcoded projects/skills/education with `portfolioData.*`

5. Verify both components still render correctly (same data, same appearance).

**Acceptance criteria:**
- [x] `portfolioData.ts` created and exports a single object
- [x] All project/skill/education/experience content extracted
- [x] ContentModal.tsx imports and uses `portfolioData`
- [x] TerminalMode.tsx imports and uses `portfolioData`
- [x] No intentional visual changes to the site (data is the same, just moved)
- [ ] ESLint passes (blocked by existing unrelated lint errors in App, AudioManager, Desktop, LandingScreen, and StartMenu)

**Commit message:**
```
Centralize portfolio data into a single source module

- Create project/src/data/portfolioData.ts with all content (projects, skills, education, experience)
- Import and use portfolioData in ContentModal.tsx (replacing 1,125-line component duplicates)
- Import and use portfolioData in TerminalMode.tsx
- Eliminates content drift between modal and terminal modes

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

**When done:**
1. Commit the changes
2. Update the "Status" section below with what you did
3. Let Jon know when ready for Task #3

---

## Status (Task #2)

- [x] Created `project/src/data/portfolioData.ts`
- [x] Moved modal content for about, projects, skills, education, professional development, experience, contact, and resume summary into `portfolioData`
- [x] Updated `ContentModal.tsx` to render project, skill, education, experience, contact, and resume content from `portfolioData`
- [x] Updated `TerminalMode.tsx` to generate its file system and portfolio commands from `portfolioData`
- [x] Removed touched-file lint issues from `ContentModal.tsx` and `TerminalMode.tsx`
- [x] `npm run build` passes using `PATH=/Users/jon/.nvm/versions/node/v24.13.1/bin:$PATH`
- [x] Local dev server still responds with `HTTP/1.1 200 OK` at `http://127.0.0.1:5173/`
- [ ] `npm run lint` passes: current run fails on 14 pre-existing unrelated errors in `App.tsx`, `AudioManager.tsx`, `Desktop.tsx`, `LandingScreen.tsx`, and `StartMenu.tsx`
- [ ] Committed: blocked because git staging permission was rejected

**Commit hash:** Not created yet

**Ready for Task #3:** Not yet. Source refactor is implemented and build-verified, but commit is still blocked.

---

## BACKLOG

### P1 — High Priority
- [ ] **Task #2:** Centralize portfolio data into a single data module
  - Create `project/src/data/portfolioData.ts` with all project/skill/education/experience content
  - Use from both ContentModal.tsx and TerminalMode.tsx
  - Prevents drift between modal and terminal content

- [ ] **Task #3:** Update README.md with current projects and accurate bio
  - Replace stale project descriptions (Gojo Caption, Market Tracker, Habit@, ASL Classifier, CWIT)
  - Update to: Surveillance System, ResearchMate, Sign-Speech, 2D→3D Generator
  - Match the content currently on the live site

- [ ] **Task #4:** Reconcile name spelling and resume link
  - Standardize name across UI, repo, docs: decide on "Yohannes" or "Yohanes"
  - Fix resume: either use `public/resume.pdf` bundled file OR remove the local file if Google Drive is canonical
  - Update index.html favicon from default vite.svg

### P2 — Medium Priority
- [ ] **Task #5:** Add SEO and meta tags
  - Update `index.html` with real meta description, OG/Twitter cards, author, favicon
  - Change title to include real name (not just "YohannesOS")
  - Consider adding a no-JS fallback section for crawlers

- [ ] **Task #6:** Remove or fix broken systems
  - Audio system: either dispatch the boot-chime/click events OR remove AudioManager entirely
  - Admin password: remove hardcoded plaintext OR make it real (authenticate against a backend)
  - Leaderboard: decide if it's worth keeping (localStorage-only, per-browser, not shared)

### P3 — Nice-to-Have / Polish
- [ ] **Task #7:** Fix ESLint errors
  - Remove unused imports/variables
  - Replace `any` types with proper types
  - Fix `no-case-declarations` in TerminalMode switch blocks

- [ ] **Task #8:** Add accessibility features
  - Add `prefers-reduced-motion` media query support
  - Add focus trap and Esc-to-close to modals
  - Add `aria-label` to icon-only buttons

- [ ] **Task #9:** Cleanup
  - Gitignore `dist/` (remove from git)
  - Update `package.json` name from "vite-react-typescript-starter" to "yohanes-os"
  - Extract repeated theme ternaries into CSS variables or a theme hook

---

## How Codex Should Respond

After each task, respond in this format:

```
## Status Update: Task #X

✅ **Complete**

**What I changed:**
- Line X in file.tsx: description
- Line Y in file.tsx: description

**Commit:** `git commit -m "..."`

**Build test:** `npm run build` passed ✓

**Notes:** Any issues or questions

---

**Ready for next task** — Jon/Claude, please review and assign Task #X+1
```

If you hit blockers, ask for clarification before proceeding.
