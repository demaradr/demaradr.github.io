# Adriano Demartin — portfolio

Multi-page portfolio built with **React**, **Vite**, and **Tailwind CSS**, deployed to GitHub Pages (custom domain in `public/CNAME`).

## How pages work

Each page is a real HTML file, so GitHub Pages serves clean URLs like `/projects/jwt-pizza/` with their own titles and link previews.

- `src/data/pages.js` lists every page (URL, title, description). `scripts/generate-pages.mjs` turns that list into HTML entry files (`index.html`, `projects/index.html`, …) before `vite` and `vite build` run. The generated files are gitignored, so edit `pages.js`, not the HTML.
- `src/data/projects.js` holds every project. Adding one there creates its card and its case-study page (set `page: false` for a card only).
- `src/main.jsx` reads `data-page` from the HTML and renders the matching component in `src/pages/`.
- Images live in `public/photos/`. Keep full-size originals in `photos-original/` (gitignored) and add web-sized WebP versions to `public/photos/`.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

1. **Add your resume** as `public/Adriano_Demartin_Resume.pdf` (or change `resumeUrl` in `src/siteConfig.js`).
2. **Update contact links** in `src/siteConfig.js` (`email`, `linkedinUrl`, etc.).
3. In the GitHub repo: **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main` (or `master`). The workflow in `.github/workflows/deploy.yml` builds the site and publishes the `dist` output.

For a **user/organization** site (`username.github.io`), the Vite `base` stays `/` (see `vite.config.js`). For a **project** site, set `base` to `'/repository-name/'` and adjust the workflow if needed.

## Lint

```bash
npm run lint
```
