# Upstart — Static Site (Rescue v3)

This is the GitHub Pages–ready build for **Upstart**.

## Publish
1. Go to your repo → **Add file → Upload files**.
2. Unzip locally, then drag **all files inside** this folder (not the folder itself) into GitHub.
3. Scroll down → **Commit changes** to overwrite `main`.
4. Wait ~1–2 minutes → open your site → hard refresh (Cmd/Ctrl+Shift+R).

## What’s in here
- `.nojekyll` to avoid Jekyll theme interference
- `index.html` with **Home** link, hero image, and photo gallery
- Other `.html` pages with fonts + cache-busted CSS
- `style.css` (Polish Pack v1)
- `script.js`
- `assets/` placeholder

## Verify it worked
- In your repo, the **last commit timestamp** should be just now.
- On the live site, **View Source** should show the Inter font links and `style.css?v=4`.
- Click `style.css?v=4` and confirm the first line says “Upstart Polish Pack v1…”

## Editing tips
- Use the web editor: press `.` in the repo to open `github.dev`.
- Keep image paths relative like `assets/photo.jpg`.
- To avoid cache issues later, bump the CSS query string (e.g., `?v=5`).