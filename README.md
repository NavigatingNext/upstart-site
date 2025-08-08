# Upstart — Static Site

A lightweight, static site for **Upstart**, a Resilient program that helps students enter high-wage, high-demand skilled trades.

## Quick Start (GitHub Pages)
1. Create a new repo on GitHub (e.g., `upstart-site`).
2. Upload all files in this folder (the files themselves, not the parent folder).
3. In **Settings → Pages**, set **Source** to the `main` branch and **Folder** to `/ (root)`. Save.
4. After 1–2 minutes your site will be live at: `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`.

## Structure
```
/
├── index.html          # Home (role-based CTAs for Students, Parents, Sponsors)
├── students.html       # Program tracks: Explorations, Career Exploration, Readiness
├── parents.html        # Objections, debt-light path, data pointers
├── sponsors.html       # Giving levers + logos grid + CTA
├── bios.html           # Student Stories (cards to fill in with quotes/outcomes)
├── news.html           # Toolbelt generation, BLS/NCCER links, credible sources
├── resources.html      # DOL, New America, industry initiatives
├── about.html          # Faith-based identity; short and welcoming
├── contact.html        # Apply/interest form (stub JS alert; wire to a form service)
├── style.css           # Vanilla, responsive styling
├── script.js           # Newsletter + small interactions
└── assets/             # Put sponsor logos & photos here
```

## Customize
- **Logos/Photos**: drop images in `/assets/` and replace placeholders.
- **Copy**: edit any `.html` file directly in GitHub (pencil icon → commit).
- **Form**: in `contact.html`, swap the form `onsubmit` with your provider (Formspree, HubSpot, etc.).
- **Newsletter**: wire `#newsletter-form` in `script.js` to your email tool.

## Notes
- No build tools or frameworks required.
- Works on GitHub Pages, Netlify, Vercel (as static hosting).
- To use a custom domain on GitHub Pages, add a `CNAME` file with your domain.

---

_Proudly built for fast publishing and easy editing._