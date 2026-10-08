/**
 * Every project card and case-study page is generated from this list.
 * Plain JS (no JSX or asset imports) so scripts/generate-pages.mjs can read it too.
 *
 * - `group`: 'work' projects are listed first on /projects/
 * - `page: false` shows a card only, with no case-study page
 * - Images live in /public/photos; projects without one can set `flow` to draw a pipeline instead
 */
export const projects = [
  {
    slug: 'laundry-management-system',
    group: 'work',
    name: 'Laundry Management System',
    kicker: 'BYU Print and Mail · Production',
    year: null,
    summary:
      'Replaced the legacy inventory system behind BYU Laundry’s uniform rental operation, owning it end to end from database to frontend to production.',
    metrics: [
      { value: '60,000+', label: 'scan events processed monthly' },
      { value: '473', label: 'active uniform renters tracked' },
      { value: '~7 min → secs', label: 'page loads after the rebuild' },
      { value: '~11 in 1', label: 'uniforms checked out per cascade scan' },
    ],
    tags: ['React', 'TypeScript', 'Flask', 'SQLAlchemy', 'SQL Server', 'Docker', 'GitHub Actions', 'Playwright', 'pytest', 'OIDC'],
    links: [],
    image: { src: '/photos/laundry3.webp', alt: 'BYU Laundry carts and folded uniforms on the production floor' },
    gallery: [
      { src: '/photos/laundry3.webp', alt: 'BYU Laundry carts and folded uniforms on the production floor' },
      { src: '/photos/laundry2.webp', alt: 'Garment conveyor lines inside the BYU Laundry facility' },
      { src: '/photos/laundry1.webp', alt: 'Uniform racks and processing stations at BYU Laundry' },
    ],
    sections: [
      {
        title: 'The problem',
        paragraphs: [
          'BYU Laundry rents uniforms to campus departments and tracks every garment with barcodes and RFID tags. The legacy system behind it was slow, with some pages taking around seven minutes to load, and it had quietly stopped catching real problems.',
        ],
        bullets: [
          'Inactive users could keep having uniforms washed without anyone noticing',
          'Unreturned RFID items were tracked by hand in stale spreadsheets',
          'Operators worked around the software instead of with it',
        ],
      },
      {
        title: 'What I did',
        bullets: [
          'Worked directly with laundry managers and student operators to replace the legacy system, owning it from database to frontend to production',
          'Shadowed operators at the scanning and RFID stations and shipped changes based on what I saw, including a cascade-scan feature that checks out a renter’s whole weekly batch (about 11 uniforms) in one scan',
          'Found problems nobody had raised, then built validation for inactive renters and a live overdue-items dashboard to replace the spreadsheets',
          'Led the production launch with one new developer and no manager on site, diagnosing RFID scanners that were still writing to the old database and fixing it live',
          'Ran live demos and one-on-one training for managers and student operators',
        ],
      },
      {
        title: 'How it works',
        bullets: [
          'React and TypeScript frontend (Vite, React Router, TanStack Query and Table, Material UI) with role-protected screens for scanning, departments, inventory, billing, wearers, and users',
          'Flask API organized into domain blueprints, with SQLAlchemy models and separate data-access and service layers on Microsoft SQL Server',
          'Server-side integrations with Pace for shipment and job validation and Workday for billing-code validation, so credentials and business rules never reach the browser',
          'University single sign-on through OIDC, short-lived JWTs in HttpOnly cookies, and authorization enforced on the server (not just hidden in the UI)',
          'Multi-stage Docker build that packages the frontend and API into one image; GitHub Actions runs pytest and Playwright on every pull request and deploys on merge to main',
        ],
      },
      {
        title: 'Engineering decisions',
        bullets: [
          'The backend is the authority: every scan is re-validated for status, owner, active state, and pickup-versus-delivery rules before anything is written',
          'Scan events are stored separately from an item’s current state, so operations have a full history as well as the latest value',
          'RFID reads are noisy, so cabinet intake merges repeated reads, de-duplicates tags, and reports registered, reassigned, skipped, and failed items separately',
          'Overdue inventory moves through 7-, 14-, 21-, and 30-business-day billing stages, and an order can never appear in two stages at once',
        ],
      },
    ],
  },
  {
    slug: 'month-end-close',
    group: 'work',
    name: 'Month-End Close',
    kicker: 'BYU Print and Mail · Finance',
    year: null,
    summary:
      'A billing tool I built from scratch that gives accounting one web interface for month-end close, creating the jobs and invoices they bill against through the Pace API.',
    metrics: [
      { value: '6 hr → <30 min', label: 'month-end billing close' },
      { value: 'Dry run first', label: 'totals and warnings before any financial change' },
    ],
    tags: ['React', 'TypeScript', 'Flask', 'Python', 'Pace API', 'SQL Server', 'Oracle', 'AWS S3', 'Box', 'SFTP', 'Docker', 'Vitest', 'pytest'],
    links: [],
    image: { src: '/photos/month-end1.webp', alt: 'BYU Mail Services front desk' },
    gallery: [
      { src: '/photos/month-end1.webp', alt: 'BYU Mail Services front desk' },
      { src: '/photos/month-end2.webp', alt: 'Mail room with sorting bins and shelving' },
      { src: '/photos/month-end3.webp', alt: 'Print and mail warehouse aisle with packages and shelving' },
    ],
    sections: [
      {
        title: 'The problem',
        paragraphs: [
          'Closing the month for billing took about six hours and meant stitching together several scripts and legacy systems. Each step could create real financial records, so mistakes were expensive and hard to undo.',
        ],
      },
      {
        title: 'What I did',
        bullets: [
          'Built the tool from scratch: it reads from and writes to Pace through its API, creating the jobs and invoices accounting bills against',
          'Cut a six-hour process to under 30 minutes',
          'Demoed it to and trained the assistant controller, who now runs the close with it',
        ],
      },
      {
        title: 'How it works',
        bullets: [
          'React and TypeScript frontend with workflow controls, live progress, summaries, warnings, and a submission history',
          'Flask API with blueprints and services for workflows, submissions, and integrations, served by Gunicorn',
          'Integrates with Pace, SQL Server, and Oracle, and delivers generated billing feed files to Box, AWS S3, or SFTP',
          'GitHub Actions runs backend tests, frontend tests, and a production build on every push, then deploys with Docker Compose',
        ],
      },
      {
        title: 'Designed for safe side effects',
        bullets: [
          'Billing runs in explicit stages (dry run, create jobs, create invoices), and the dry run shows totals and warnings before anything financial happens',
          'Long-running work returns a job ID right away; a background worker reports progress and the UI polls for status instead of holding a request open',
          'Feed files are staged, validated, hashed, and previewed before delivery, and re-sending a file with a matching checksum requires an explicit acknowledgement',
          'Deliveries are verified after upload: SFTP uses a temporary upload plus rename and size check, and Box checks the file name, folder, size, and hash',
        ],
      },
    ],
  },
  {
    slug: 'jwt-pizza',
    group: 'personal',
    name: 'JWT Pizza',
    kicker: 'DevOps · Full stack',
    year: '2026',
    summary:
      'A pizza-ordering app (React frontend + Node/Express/MySQL service) that I took from a course starter to a monitored, tested, continuously deployed production system on AWS.',
    metrics: [
      { value: '2', label: 'repos with full CI/CD pipelines' },
      { value: '0', label: 'long-lived AWS keys in CI (OIDC)' },
      { value: '~6 min', label: 'from load spike to firing alert in my chaos drill' },
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
    flow: ['lint', 'test', 'build', 'deploy', 'monitor'],
    gallery: [],
    sections: [
      {
        title: 'The goal',
        paragraphs: [
          'The app itself came from a course starter. My job was to run it like a real product: automate testing and deployment, put it on AWS, watch it in production, and practice what happens when it breaks.',
        ],
      },
      {
        title: 'CI/CD',
        bullets: [
          'GitHub Actions pipelines for both repos: lint, Jest unit tests against a MySQL service container, Playwright end-to-end tests, coverage reporting, and versioned builds on every push',
          'Frontend built and shipped to S3 behind CloudFront, with cache invalidation on each deploy',
          'Backend packaged as an arm64 Docker image, pushed to ECR, and rolled out on ECS',
          'Keyless deploys using GitHub OIDC and an IAM role, so no long-lived cloud credentials sit in CI',
        ],
      },
      {
        title: 'Observability',
        bullets: [
          'Custom metrics for HTTP traffic by method, auth success and failure, active users, pizzas sold, creation failures, revenue, latency, and CPU',
          'Structured logging shipped to Grafana alongside the metrics dashboards',
          'Alert rules for latency and pizza-creation failures, paged through Grafana OnCall',
        ],
      },
      {
        title: 'Chaos drill and incident report',
        paragraphs: [
          'The scheduled chaos event never triggered for my deployment, so I ran my own: parallel load plus oversized orders to stress the pizza factory dependency. The latency alert fired about six minutes in, the failure alert followed, and everything was back to normal within about half an hour. I wrote it up like a real incident, with a summary, detection, impact, a minute-by-minute timeline, and the response.',
        ],
      },
      {
        title: 'Load and security testing',
        bullets: [
          'Load tested a login-and-order flow with k6',
          'Penetration tested my own deployment and a peer’s with Burp Suite: brute-forcing a weak password got in (fix: lockout and rate limiting), while tampering with order and user IDs to reach other accounts was blocked',
          'Wrote a research report on how GitHub Actions secrets stay secret: sealed-box encryption, just-in-time decryption on the runner, and why log masking is only a safety net',
        ],
      },
    ],
  },
  {
    slug: 'task2pr',
    group: 'personal',
    name: 'task2pr',
    kicker: 'AI agent',
    year: '2026',
    summary:
      'An agent that picks up a Wrike task marked “AI Ready,” explores the target repo, makes the code change, runs the tests, and opens a GitHub pull request for human review.',
    metrics: [],
    tags: ['Python', 'Claude API', 'FastAPI', 'GitHub API', 'Wrike API', 'pytest'],
    links: [{ label: 'GitHub', href: 'https://github.com/demaradr/task2pr' }],
    image: null,
    flow: ['task', 'explore', 'edit', 'test', 'PR'],
    gallery: [],
    sections: [
      {
        title: 'How it works',
        paragraphs: [
          'A Wrike task tagged “AI Ready” kicks off an explore agent with read-only tools that produces a plan. An edit agent then makes the change, the harness runs the test suite and feeds failures back for a capped number of retries, and only a passing change gets pushed and opened as a pull request. When a human merges it, a GitHub webhook marks the Wrike task complete.',
        ],
      },
      {
        title: 'What I built',
        bullets: [
          'Explore and edit tool-use loops on the Claude API, with narrow tools like one-level directory listings and files read in 500-line pages to keep context usage under control',
          'Git and GitHub integration that branches, commits, pushes, and opens the PR through the REST API',
          'HMAC-verified FastAPI webhook receiver that completes the Wrike task on merge',
          'An eval harness that runs the edit loop against seeded fixture repos (add a function, fix a bug, handle divide-by-zero) and scores pass or fail by each fixture’s tests',
          'Unit tests that mock Wrike, GitHub, and the model API so the suite runs offline',
        ],
      },
      {
        title: 'Safety by design',
        bullets: [
          'The agent never gets a shell tool, and the test command is fixed by the operator rather than taken from task text, so a malicious task can’t run commands',
          'All file access is sandboxed to the target repo in code',
          'The agent proposes changes and never merges them',
          'The GitHub token is used for a single push URL, never written to git config, and scrubbed from error output',
        ],
      },
    ],
  },
  {
    slug: 'futbol-legacy',
    group: 'personal',
    name: 'Futbol Legacy',
    kicker: 'Game · Prototype',
    year: null,
    summary:
      'A turn-based tactical puzzle game about football history: in 2050 AI has “solved” football, and you travel back in time to learn the tactical ideas that shaped it, one puzzle at a time.',
    metrics: [
      { value: '2', label: 'playable lesson tracks' },
      { value: '6', label: 'tactical win conditions modeled' },
    ],
    tags: ['Godot 4', 'GDScript', 'JSON puzzle data'],
    // Repo is private; add a link here if you make it public.
    links: [],
    image: {
      src: '/photos/futbol-legacy.webp',
      alt: 'Futbol Legacy tactic board: two teams of player chips on a pitch with move and pass controls',
    },
    gallery: [],
    sections: [
      {
        title: 'The idea',
        paragraphs: [
          'It’s not a football simulator. Think chess, Into the Breach, or a coach’s magnetic tactic board. You walk around a small yard, talk to mentors, and each one teaches a tactical idea through a short track of puzzles.',
        ],
      },
      {
        title: 'How a turn works',
        bullets: [
          'Plan: orange arrows show where the opponent press is about to step, and you give up to three move or pass orders, including pass chains like A → B → C',
          'Simulate: everyone moves at once, then passes play out one at a time and fail if an opponent is too close to the path',
          'Evaluate: you win, fail, or play the next turn. Each puzzle checks for one idea, like a passing triangle through the press or the keeper joining the build-up',
        ],
      },
      {
        title: 'Built so far',
        bullets: [
          'A walkable yard with mentors: Xavi teaches triangles, Valdés teaches build-up from the keeper, and Pep sets your next goal',
          'Two lesson tracks of three puzzles each, with tutorials that play the solution and then reset the board',
          'Three save slots with autosave after each win, plus a pause menu and settings',
        ],
      },
      {
        title: 'Under the hood',
        bullets: [
          'Data-driven puzzles: each JSON file defines 22 player chips, the ball carrier, scripted opponent steps, rules like move radius and pass range, and the win condition',
          'Six win checks: triangle press, third man, false nine, goalkeeper build-up, overload switch, and counter-press',
          'Campaign, save-game, and settings systems as Godot autoloads, kept separate from the board, simulation, and puzzle-loading code',
        ],
      },
    ],
  },
  {
    slug: '2d-platformer',
    group: 'personal',
    name: '2D Platformer',
    kicker: 'Game',
    year: '2025',
    summary:
      'A platformer prototype built with my brother: I programmed the gameplay (player controller and enemy AI) while he made the art and levels.',
    metrics: [],
    tags: ['Godot 4', 'GDScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/demaradr/2d-platformer-godot' }],
    image: {
      src: '/photos/godot-platformer.webp',
      alt: 'Gameplay from the 2D platformer: player, slime, and flying eyeball enemy in a dungeon level',
    },
    gallery: [],
    sections: [
      {
        title: 'What I built',
        bullets: [
          'A responsive player controller with tuned acceleration, coyote time, and variable jump height that cuts upward velocity when you release jump',
          'A ground slime that patrols and flips when its raycasts hit a wall',
          'A flying eyeball that idles until you enter its detection range, then eases toward you',
          'Kill zones and other gameplay helpers that tie the level together',
        ],
      },
      {
        title: 'What I learned',
        bullets: [
          'How to tune 2D movement so it feels right to players',
          'Using timers and state flags for quality-of-life features like coyote time',
          'Structuring AI with Godot nodes, raycasts, and signals',
          'Collaborating across disciplines to match the art and the gameplay',
        ],
      },
    ],
  },
  {
    slug: 'chess',
    group: 'personal',
    name: 'Chess',
    kicker: 'Class project',
    year: null,
    summary:
      'A multiplayer chess server and command-line client in Java: HTTP API for users and games, WebSocket for live moves, database persistence, and a shared module for the rules of chess and game state.',
    metrics: [],
    tags: ['Java', 'Maven', 'WebSocket', 'HTTP', 'SQL', 'Unit testing'],
    // Repo is private; add a link here if you make it public.
    links: [],
    image: { src: '/photos/chess.webp', alt: 'Chess board rendered in the terminal by the command-line client' },
    gallery: [],
    page: false,
    sections: [],
  },
]

export const projectUrl = (slug) => `/projects/${slug}/`

export const hasPage = (project) => project.page !== false
