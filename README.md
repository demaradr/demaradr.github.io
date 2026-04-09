# Adriano Demartin — portfolio

Single-page portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed to highlight production software engineering experience first, with a minimal layout that works on GitHub Pages (and the custom domain in `public/CNAME`).

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

1. **Add your resume** as `public/resume.pdf` (or change `resumeUrl` in `src/siteConfig.js`).
2. **Update contact links** in `src/siteConfig.js` (`email`, `linkedinUrl`, etc.).
3. In the GitHub repo: **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main` (or `master`). The workflow in `.github/workflows/deploy.yml` builds the site and publishes the `dist` output.

For a **user/organization** site (`username.github.io`), the Vite `base` stays `/` (see `vite.config.js`). For a **project** site, set `base` to `'/repository-name/'` and adjust the workflow if needed.

## Lint

```bash
npm run lint
```
