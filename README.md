# Khaled Abdullah El-Sayed — Personal Portfolio Website

Modern, high-performance, and fully responsive personal portfolio website engineered with **React.js (Vite)**, **Tailwind CSS**, and **Framer Motion**.

---

## 🎨 Color Palette & Design System
Strictly configured to the exact 4-color palette:
- **Primary Background (Deep Midnight Navy):** `#010736`
- **Secondary Surface / Cards (Dark Royal Navy):** `#0D1C42`
- **Borders, Dividers & Interactive Accents (Steel Blue):** `#22396F`
- **Primary Highlight, Headings Accent & CTA (Warm Cream Gold):** `#FCF1D0`
- **Typography:** Display (`Space Grotesk` / `Plus Jakarta Sans`), Body (`Inter`), Code/Tags (`JetBrains Mono`).

---

## 📁 Modular Data Architecture (`src/data/`)
All personal data, projects, skills, and links are separated into clean files inside `src/data/` so you can update anything without touching the UI components:

| File | Purpose |
|------|---------|
| `src/data/personalInfo.js` | Name, title, social links, WhatsApp, Email, photo path, core tech pills |
| `src/data/about.js` | 6-line career summary and background |
| `src/data/education.js` | Law degree, Route Academy diploma, NTI scholarship |
| `src/data/experience.js` | Hands-on engineering tracks & responsibilities |
| `src/data/skills.js` | Categorized skills with matching icons + "Currently Learning" AWS badge |
| `src/data/projects.js` | Projects, screenshots, live demo links, and GitHub repositories |
| `src/data/feedback.js` | Testimonials & endorsements |
| `src/data/services.js` | 6 specialized engineering services |

---

## 🖼️ How to Add Your Personal Photo
1. Save your personal photo as `profile.jpg`.
2. Paste it directly into the `public/` folder (`public/profile.jpg`).
3. If the file is not found, the website automatically falls back to the clean branded SVG placeholder (`profile-placeholder.svg`) with zero layout breakage.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
