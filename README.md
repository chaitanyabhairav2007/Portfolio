# Premium Personal Portfolio Website

An ultra-modern, recruiter-ready personal portfolio website built with Google Antigravity. Designed with Apple-level minimalism, Awwwards-caliber aesthetics, a sleek dark theme (`#08090D`), vibrant electric purple (`#8B5CF6`) and cyan (`#22D3EE`) accents, and fluid micro-interactions.

---

## 🌟 Key Highlights & Design Vision

- **Apple & Awwwards Caliber Design**: Generous whitespace, frosted glass cards (`backdrop-filter: blur(20px)`), subtle 1px glowing borders, and luminous gradient accents.
- **Interactive Ambient Canvas**: Custom 60fps ambient particle & glowing constellation background that reacts smoothly to cursor movement, with automatic pause on blur and full reduced-motion accessibility support.
- **Single-File Personalization**: All content (hero, about, skills, projects, case studies, timelines, honors, socials, SEO metadata) is managed dynamically from a single configuration file: `js/portfolio.config.js`.
- **Selected Works Case Studies**: Interactive project cards with deep-dive modal views breaking down *The Challenge*, *Architectural Solution*, and *Measurable Impact*.
- **Interactive Timeline**: Toggle smoothly between **Work Experience** and **Education & Degrees**.
- **Contact Experience**: One-click copy email button with toast feedback, real-time client-side form validation, character counter, and instant mail client composer.
- **Responsive & Accessible**: Seamlessly adapts across mobile, tablet, laptop, and 4K displays with accessible keyboard navigation, semantic HTML5, and WCAG contrast.

---

## 🚀 Quick Start (Running Locally)

The website is fully client-side and requires zero build steps or heavy node dependencies.

### Option 1: Python HTTP Server (Already active on port 3000)
```bash
python -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option 2: Direct File Launch
Double-click `index.html` in your file explorer to open it in any modern browser (Chrome, Edge, Firefox, Safari, Brave, Opera).

---

## ⚙️ How to Personalize Your Portfolio

You only need to edit **`js/portfolio.config.js`**!

### 1. Personal Details & Hero
```javascript
personal: {
  name: "Your Name",
  headlineGreeting: "Hi, I'm Your Name.",
  primaryRole: "Senior Software Engineer / UI Architect",
  secondHeadline: "I Build Digital Experiences.",
  shortBio: "Your short introduction here...",
  location: "Your City, Country",
  email: "your.email@example.com",
  avatar: "./assets/images/avatar.jpg", // Replace with your photo
  availabilityBadge: "Available for Opportunities",
  isAvailable: true,
}
```

### 2. Social Links
Update or add links in the `socials` array:
```javascript
socials: [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "Instagram", url: "https://instagram.com/yourusername", icon: "instagram" },
  { name: "X (Twitter)", url: "https://x.com/yourusername", icon: "twitter" }
]
```

### 3. Skills Matrix
Organized into 6 core categories. Add, remove, or modify items and proficiency levels:
- Programming Languages
- Frontend Development
- Backend Development
- Databases
- Tools & Platforms
- Other Skills

### 4. Featured Projects & Case Studies
Each project in `projects` includes:
- `title`, `tagline`, `description`, `image`, `tags`, `metrics`
- `liveUrl` and `githubUrl`
- `caseStudy`: structured fields for `problem`, `solution`, and `impact` that appear inside the interactive case study modal.

### 5. Career & Education Timeline
Update `experience` and `education` arrays with your company/institution, roles, periods, and bullet-point accomplishments.

### 6. Honors & Certifications
Add your awards or certificates to `achievements`. If you leave the array empty (`achievements: []`), the section will automatically and cleanly hide itself without leaving empty cards.

---

## 📁 Project Structure

```
.
├── assets/
│   └── images/
│       ├── avatar.jpg                 # Profile portrait (high-res AI generated)
│       ├── project-nexus-ai.jpg       # Project 1 thumbnail
│       ├── project-pulse-defi.jpg     # Project 2 thumbnail
│       └── project-aura-spatial.jpg   # Project 3 thumbnail
├── css/
│   └── style.css                      # Complete custom design system & glassmorphism
├── js/
│   ├── portfolio.config.js            # Centralized configuration & personalization file
│   ├── canvas-bg.js                   # Interactive ambient particle background engine
│   └── main.js                        # App logic, dynamic rendering, modals, & form
├── favicon.svg                        # Futuristic neon SVG favicon
├── index.html                         # Semantic HTML5 entry point with SEO metadata
└── README.md                          # Comprehensive documentation
```

---

## 🎨 Color Palette Reference

| Element | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Background** | `#08090D` | Immersive dark canvas |
| **Glass Card Background**| `rgba(17, 19, 29, 0.72)` | Frosted glassmorphism panels |
| **Primary Text** | `#F5F5F7` | Apple high-contrast readable white |
| **Secondary Text** | `#A1A1AA` | Muted neutral gray |
| **Electric Purple Accent**| `#8B5CF6` | Primary glowing CTA & highlights |
| **Cyan Accent** | `#22D3EE` | Secondary energetic gradient & metric pills |
