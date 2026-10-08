import { Section } from './Section'

/**
 * Add screenshots by dropping files in /public/projects and setting
 * `image: { src: '/photos/name.webp', alt: '...' }`.
 */
const featured = [
  {
    name: 'JWT Pizza',
    kicker: 'DevOps · Full stack',
    year: '2026',
    summary:
      'A pizza-ordering app (React frontend + Node/Express/MySQL service) that I took from a course starter to a monitored, tested, continuously deployed production system on AWS.',
    highlights: [
      'GitHub Actions pipelines for both repos: lint, Jest unit tests, Playwright E2E tests, coverage reporting, and versioned builds on every push',
      'Frontend shipped to S3 + CloudFront with cache invalidation; backend containerized with Docker, pushed to ECR, and rolled out on ECS',
      'Keyless AWS deploys using GitHub OIDC and an IAM role, so no long-lived cloud credentials sit in CI',
      'Custom metrics (latency, auth, revenue, CPU) and structured logging into Grafana, with alert rules paged through Grafana OnCall',
      'Ran a chaos drill and wrote a full incident report: detection, timeline, response, and recovery',
      'Load tested with k6 and penetration tested with Burp Suite alongside a peer, documenting findings and fixes',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'AWS', 'GitHub Actions', 'Grafana', 'Playwright', 'Jest', 'k6'],
    links: [
      { label: 'Frontend repo', href: 'https://github.com/demaradr/jwt-pizza' },
      { label: 'Service repo', href: 'https://github.com/demaradr/jwt-pizza-service' },
      {
        label: 'Incident report',
        href: 'https://github.com/demaradr/jwt-pizza/blob/main/incidentReport/incident-2026-04-06-1.md',
      },
    ],
    image: null,
  },
  {
    name: 'task2pr',
    kicker: 'AI agent',
    year: '2026',
    summary:
      'An agent that picks up a Wrike task marked “AI Ready,” explores the target repo, makes the code change, runs the tests, and opens a GitHub pull request for human review.',
    highlights: [
      'Explore and edit tool-use loops on the Claude API, with narrow, paged file tools to keep context usage under control',
      'Test harness feeds failures back for capped retries; a PR is only opened when the suite passes',
      'HMAC-verified FastAPI webhook marks the Wrike task complete when the PR is merged',
      'Eval harness scores the agent against seeded fixture repos',
      'Safety by design: no shell tool, file access sandboxed to the repo, operator-fixed test command, tokens scrubbed from output',
    ],
    tags: ['Python', 'Claude API', 'FastAPI', 'GitHub API', 'Wrike API', 'pytest'],
    links: [{ label: 'GitHub', href: 'https://github.com/demaradr/task2pr' }],
    image: null,
  },
]

const more = [
  {
    name: 'Chess',
    kicker: 'Class project',
    year: null,
    summary:
      'A multiplayer chess server and command-line client in Java: HTTP API for users and games, WebSocket for live moves, database persistence, and a shared module for the rules of chess and game state.',
    tags: ['Java', 'Maven', 'WebSocket', 'HTTP', 'SQL', 'Unit testing'],
    // Repo is private; add a link here if you make it public.
    links: [],
    image: { src: '/photos/chess.webp', alt: 'Chess board rendered in the terminal by the command-line client' },
  },
  {
    name: 'Futbol Legacy',
    kicker: 'Game · Prototype',
    year: null,
    summary:
      'A turn-based tactical puzzle game about football history: in 2050 AI has “solved” football, and you travel back in time to learn the tactical ideas that shaped it. Plan up to three move and pass orders against a scripted press, then simulate the turn. Each puzzle checks for one idea, like a passing triangle or goalkeeper build-up.',
    tags: ['Godot 4', 'GDScript', 'JSON puzzle data'],
    // Repo is private; add a link here if you make it public.
    links: [],
    image: { src: '/photos/futbol-legacy.webp', alt: 'Futbol Legacy tactic board: two teams of player chips on a pitch with move and pass controls' },
  },
  {
    name: '2D Platformer',
    kicker: 'Game',
    year: '2025',
    summary:
      'A platformer prototype built with my brother: I programmed the gameplay (player controller with coyote time and variable jump height, plus patrolling and swooping enemy AI) while he made the art and levels.',
    tags: ['Godot 4', 'GDScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/demaradr/2d-platformer-godot' }],
    image: { src: '/photos/godot-platformer.webp', alt: 'Gameplay from the 2D platformer: player, slime, and flying eyeball enemy in a dungeon level' },
  },
]

function Tags({ tags }) {
  if (!tags.length) return null
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {tags.map((tag) => (
        <li key={tag} className="rounded-md border border-line/5 bg-surface px-2.5 py-1 text-xs font-medium text-ink">
          {tag}
        </li>
      ))}
    </ul>
  )
}

function Links({ links }) {
  if (!links.length) return null
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          {label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  )
}

function Meta({ kicker, year }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
      {kicker}
      {year && <span className="text-ink-muted"> · {year}</span>}
    </p>
  )
}

function FeaturedProject({ name, kicker, year, summary, highlights, tags, links, image }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line/5 bg-canvas shadow-card">
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-video w-full border-b border-line/5 object-cover"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="p-6 sm:p-8 lg:p-10">
        <Meta kicker={kicker} year={year} />
        <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{name}</h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">{summary}</p>
        <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-5">
          <Tags tags={tags} />
          <Links links={links} />
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ name, kicker, year, summary, tags, links, image }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-xl border border-line/5 bg-canvas shadow-sm transition-shadow duration-200 hover:shadow-card">
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-video w-full border-b border-line/5 object-cover"
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Meta kicker={kicker} year={year} />
        <h3 className="mt-2 text-lg font-semibold text-ink">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{summary}</p>
        <div className="mt-5 space-y-4">
          <Tags tags={tags} />
          <Links links={links} />
        </div>
      </div>
    </li>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="From CI/CD and observability on AWS to AI agents and games."
    >
      <div className="space-y-8">
        {featured.map((project) => (
          <FeaturedProject key={project.name} {...project} />
        ))}
      </div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {more.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </ul>
    </Section>
  )
}
