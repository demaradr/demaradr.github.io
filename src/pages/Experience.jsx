import { PageHeader } from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { projects } from '../data/projects'

const highlights = [
  'Replaced a legacy laundry inventory system, owning it end to end from database to frontend to production; operators use it daily for 60,000+ scan events a month',
  'Shadowed operators at scanning and RFID stations and shipped changes from what I saw, like a cascade scan that checks out a renter’s whole weekly batch in one scan',
  'Found problems nobody had raised (inactive users still washing uniforms, overdue RFID items in stale spreadsheets) and built validation and a live overdue dashboard',
  'Led the production launch with one new developer and no manager on site, diagnosing RFID scanners still writing to the old database and fixing it live',
  'Built a month-end close tool from scratch on the Pace API that cut a 6-hour process to under 30 minutes, then demoed and trained the assistant controller',
  'Promoted to Team Lead: onboarded and mentored two new developers and ran demos and one-on-one training for managers, accounting, and student operators',
]

const workProjects = projects.filter((p) => p.group === 'work')

const skills = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'SQL'] },
  { label: 'Frameworks', items: ['React', 'Flask', 'FastAPI', 'Node.js', 'Express', 'SQLAlchemy'] },
  { label: 'Full stack', items: ['REST APIs', 'JWT', 'OAuth / OIDC', 'TanStack Query', 'Material UI'] },
  {
    label: 'DevOps & cloud',
    items: ['Docker', 'GitHub Actions', 'Linux', 'AWS (ECS, ECR, S3, CloudFront)', 'Grafana'],
  },
  { label: 'Databases', items: ['SQL Server', 'MySQL', 'SQLite', 'Oracle'] },
  { label: 'Testing', items: ['pytest', 'Playwright', 'Jest', 'Vitest', 'k6'] },
  { label: 'AI & agents', items: ['LLM tool use', 'Agent orchestration', 'Agent evals', 'Claude API'] },
]

const schools = [
  { name: 'Brigham Young University', detail: 'B.S. Computer Science', date: 'Dec 2026', note: 'GPA 3.80 — scholarship' },
  {
    name: 'Salt Lake Community College',
    detail: 'A.S. Computer Science & Information Systems',
    date: 'May 2024',
    note: 'GPA 3.97 — Honors Program, scholarship',
  },
]

const background = [
  {
    name: 'The Church of Jesus Christ of Latter-day Saints',
    detail: 'Full-time Representative · Chicago, IL',
    date: 'Oct 2020 – Oct 2022',
    note: 'Managed and directed 100+ volunteers, setting goals and coordinating efforts to improve team accountability.',
  },
  {
    name: 'Mid-Valley Dental Associates',
    detail: 'Team Lead',
    note: 'Team leadership and day-to-day operational coordination.',
  },
  {
    name: 'Crossroads Utah AHEC',
    detail: 'Administrative Assistant',
    note: 'Administrative support for program and office operations.',
  },
]

function Timeline({ heading, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{heading}</h3>
      <ol className="mt-6 space-y-6">
        {items.map(({ name, detail, date, note }) => (
          <li key={name} className="border-l-2 border-accent-subtle pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-semibold text-ink">{name}</p>
              {date && <p className="text-sm font-medium text-accent">{date}</p>}
            </div>
            <p className="mt-1 text-ink-muted">{detail}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{note}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="BYU Print and Mail"
        description="Software Engineer, promoted to Team Lead · Production Services · Provo, UT · Sep 2024 – present"
      />

      <Section id="role" eyebrow="The role" title="Building the tools operations runs on" description={null}>
        <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr] lg:items-start">
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              I work directly with laundry managers, student operators, and accounting to find the problems slowing them down,
              then own the fix from requirements to production, including training and support afterward.
            </p>
            <div className="rounded-2xl border border-line/5 bg-surface p-6">
              <p className="sr-only">Page load time reduced from about 7 minutes to seconds.</p>
              <p aria-hidden className="flex flex-wrap items-baseline gap-x-3 font-serif text-4xl font-semibold tracking-tight text-ink">
                <span className="text-ink-muted line-through decoration-2">~7 min</span>
                <span className="text-accent">→</span>
                <span>seconds</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted" aria-hidden>
                Page load time after replacing the legacy laundry system.
              </p>
            </div>
          </div>
          <ul className="space-y-4 rounded-2xl border border-accent/20 bg-gradient-to-br from-canvas to-accent-subtle/40 p-6 shadow-featured sm:p-8">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-ink">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="case-studies" eyebrow="Case studies" title="What I built there" description={null}>
        <ul className="grid gap-6 md:grid-cols-2">
          {workProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} size="lg" />
          ))}
        </ul>
      </Section>

      <Section id="skills" eyebrow="Skills" title="What I work with" description={null}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ label, items }) => (
            <div key={label} className="rounded-xl border border-line/5 bg-canvas p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li key={skill} className="rounded-md border border-line/5 bg-surface px-3 py-1.5 text-sm font-medium text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="background" eyebrow="Background" title="Education & earlier roles" description={null}>
        <div className="grid gap-12 md:grid-cols-2">
          <Timeline heading="Education" items={schools} />
          <Timeline heading="Leadership & earlier roles" items={background} />
        </div>
      </Section>
    </>
  )
}
