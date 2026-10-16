# Adeleke Eniitan, portfolio

Personal portfolio for Adeleke Eniitan, frontend developer in Ibadan, Nigeria.

Built with React 19 and Vite. No UI library: plain CSS per component, with design tokens in `src/index.css`.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Updating content

All text (projects, skills, experience, contact details) lives in `src/data/content.js`.

To add a project:

1. Take a full-page desktop screenshot (1440px wide) and a phone screenshot (390 x 844).
2. Save them as `.webp` in `src/assets/work/`, about 960px wide for desktop.
3. Import both at the top of `content.js` and add an entry to `projects`.

The desktop preview scrolls through the whole screenshot on hover or keyboard focus, and can be scrolled by finger on touch screens.

To replace the CV, overwrite `public/Adeleke-Eniitan-CV.pdf`.
