import { hasPage, projects, projectUrl } from './projects.js'

/**
 * One entry per HTML page. scripts/generate-pages.mjs writes an HTML file for each,
 * and vite.config.js builds them all. Plain JS so Node can import it.
 *
 * - `path`: public URL (trailing slash; GitHub Pages serves <path>/index.html)
 * - `page`: which React page component renders (see src/main.jsx)
 */
const NAME = 'Adriano Demartin'

export const pages = [
  {
    path: '/',
    page: 'home',
    title: `${NAME} — Full Stack Software Engineer`,
    description:
      'Full stack software engineer who works directly with users to find and fix real operational problems. Replaced a legacy laundry inventory system and cut a 6-hour billing close to under 30 minutes.',
  },
  {
    path: '/projects/',
    page: 'projects',
    title: `Projects — ${NAME}`,
    description:
      'Production tools for BYU Print and Mail, plus personal and school projects: CI/CD and observability on AWS, an AI coding agent, and games.',
  },
  ...projects.filter(hasPage).map((project) => ({
    path: projectUrl(project.slug),
    page: 'project',
    slug: project.slug,
    title: `${project.name} — ${NAME}`,
    description: project.summary,
  })),
  {
    path: '/experience/',
    page: 'experience',
    title: `Experience — ${NAME}`,
    description:
      'Software engineer and team lead at BYU Print and Mail, B.S. Computer Science at BYU, plus skills and background.',
  },
  {
    path: '/about/',
    page: 'about',
    title: `About — ${NAME}`,
    description: 'Who I am, what I’m looking for, and what I do outside of work.',
  },
  {
    path: '/404.html',
    page: 'not-found',
    title: `Page not found — ${NAME}`,
    description: 'This page doesn’t exist.',
    noindex: true,
  },
]

/** Where the generated HTML file for a page lives, relative to the project root. */
export const htmlFileFor = (page) => (page.path.endsWith('.html') ? page.path.slice(1) : `${page.path.slice(1)}index.html`)
