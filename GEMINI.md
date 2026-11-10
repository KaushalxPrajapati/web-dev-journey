# Repository Rules & Guardrails: web-dev-journey

## Core Nature of This Repository
`web-dev-journey` is an authentic, personal learning repository documenting the developer's milestone-by-milestone progress in web development (HTML, CSS, JavaScript, React, Node, Express, MongoDB).
Its purpose is to serve as a personal reference for reviewing handwritten code and learning progression.

---

## Inviolable Rules for All Agents

### 1. Absolute Code Preservation (Zero Unauthorized Upgrades)
- **NEVER** modify, refactor, "modernize", or rewrite handwritten practice components, exercises, variables, or CSS unless explicitly instructed with commands like *"refactor this component"* or *"rewrite this CSS"*.
- **Wrap, Never Mutate:** Outer showcase tools, navigation sidebars, study guides, and routing wrappers must wrap *around* existing components as-is, without touching internal component code.
- **Preserve Authenticity:** Retain handwritten naming conventions, currencies (e.g. `₹`), mock data, and comments. Beginner syntax is an intentional historical record, not flawed code to be updated.

### 2. Strict Git Verification Before Claiming Original Code
- **No Guesses or Scratchpad Restorations:** Never claim code is "restored" or "original" based on assumptions, memory, or obsolete scratchpad files.
- **Always Verify Git History:** Use `git log -S "<symbol>"`, `git log --oneline <file>`, and `git show <commit>:<file>` (e.g., Commit 8: `73efa8c`) to verify true origin before asserting or restoring authentic code.

### 3. Respect Minimalist & Plain Styling
- Do NOT inject unsolicited CSS variables (`:root`, `--primary-color`), verbose resets, corporate design systems, or third-party UI libraries into learning components.
- Keep styling authentic, clean, and standard CSS true to the learner's style. Outer layout and spacing belong in outer showcase wrappers, not inside child learning components.

### 4. Decoupled Architecture
- Keep independent practice projects (`04-projects/03-react-apps/*`) completely decoupled from study playbooks (`01-frontend/04-react/react-playbook/`).
- Avoid cross-directory relative imports between standalone projects and playbooks (`../../../../04-projects/...`). Standalone projects must remain self-contained.

---

## Boundary Matrix

| Zone / Activity | Allowed Actions | Strictly Prohibited |
| :--- | :--- | :--- |
| **Practice Components** (`components/01-*` through `components/05-*`) | • Read and display in showcase<br>• Import into playbook wrappers<br>• Add adjacent study notes | • Renaming props, variables, or files<br>• Swapping currencies or mock items<br>• Modernizing class or functional patterns<br>• Modifying internal CSS or class names |
| **Playbook Showcase** (`react-playbook/src/App.jsx`, layout) | • Adding sidebar links and categories<br>• Outer container-level layout<br>• Navigation routing and tabs | • Modifying child components to fit layout<br>• Inlining component logic into App.jsx<br>• Adding global CSS resets that alter child styling |
| **Standalone Projects** (`04-projects/03-react-apps/*`) | • Independent maintenance within folder<br>• Running npm dev/build in project root | • Linking playbook directly into project files<br>• Moving project files into playbook without decoupling |
