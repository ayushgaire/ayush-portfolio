# Ayush Gaire — Portfolio

A world-class luxury personal portfolio. Dark futuristic theme, glassmorphism,
animated mesh background, floating particles, custom cursor, 3D Codyza logo,
typing animation, scroll reveals, and Framer Motion transitions.

**Stack:** React + Vite · Tailwind CSS · Framer Motion · Lucide React · EmailJS

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (default http://localhost:5173).

## Build & preview

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
4. Deploy. `vercel.json` already handles SPA routing.

## Customization

| What | Where |
|------|-------|
| All text content, links, projects, articles | `src/data/content.js` |
| Theme colors / fonts | `tailwind.config.js` & `src/index.css` |
| **Resume download** | put `resume.pdf` in `/public` (exact name) |
| **Profile photo** | put `profile.jpg` in `/public` (exact name) |
| Contact details (email / phone / socials) | `src/data/content.js` → `SOCIALS` |

### Profile photo & resume (important)

See `public/READ-ME-ADD-FILES-HERE.txt` for full details. In short:

- Drop a square photo named **`profile.jpg`** into the `/public` folder —
  it appears in the hero in a glowing frame. Until added, the hero falls
  back to the rotating Codyza logo automatically.
- Drop your resume named **`resume.pdf`** into the `/public` folder —
  the "Download Resume" button then works automatically.

No code changes needed for either — just the exact file names.

### Adding your photo

A profile image placeholder lives in the Hero (the 3D Codyza logo block).
To add a real photo, drop an image in `/public` and reference it in
`src/components/Hero.jsx`.

### GitHub links

Update `github` in `SOCIALS` (in `content.js`) and the per-project
`github` fields once your repositories are public.

## Sections

Home · About · Education · Skills · Projects · Experience · Leadership ·
Achievements · Blog · Contact · Footer

© 2026 Ayush Gaire. Built with React + Vite.
