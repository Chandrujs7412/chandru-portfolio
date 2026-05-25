# J S Chandru — Portfolio

Modern, responsive personal portfolio for a Java Backend & Streaming Data Engineer.

## Tech Stack

- **React 19** + **Vite** — Fast builds, HMR
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Smooth animations
- **React Icons** — Comprehensive icon library

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 9

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`.

## Project Structure

```
src/
├── assets/            # Static assets
├── components/        # Reusable UI components
│   ├── AnimatedCard.jsx
│   ├── Navbar.jsx
│   ├── ParticlesBackground.jsx
│   ├── ScrollProgress.jsx
│   ├── SectionHeading.jsx
│   └── TypeWriter.jsx
├── data/
│   └── portfolio.js   # All portfolio content (single source of truth)
├── hooks/
│   ├── useCountUp.js
│   └── useScrollProgress.js
├── sections/          # Page sections
│   ├── About.jsx
│   ├── Architecture.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Customization

All personal data (name, bio, skills, projects, experience) is centralized in `src/data/portfolio.js`. Edit that single file to update content across the entire site.

## Features

- Animated particles background
- Scroll progress indicator
- Typewriter effect hero section
- Glassmorphism card design
- Animated skill cards
- Experience timeline
- Project filtering system
- Architecture flow diagrams
- Animated stats counters
- Responsive mobile hamburger menu
- Smooth scroll navigation with active section tracking
- Loading animation
- SEO-optimized metadata

## Deployment

Build the production bundle:

```bash
npm run build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## License

MIT
