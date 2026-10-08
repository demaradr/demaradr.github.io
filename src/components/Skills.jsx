import { Section } from './Section'

const groups = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Node.js', 'Express', 'Flask', 'FastAPI'],
  },
  {
    label: 'DevOps & cloud',
    items: ['Docker', 'GitHub Actions', 'AWS (ECS, ECR, S3, CloudFront)', 'Linux', 'Grafana'],
  },
  {
    label: 'Databases',
    items: ['MSSQL', 'MySQL'],
  },
  {
    label: 'Testing',
    items: ['Unit testing', 'Jest', 'pytest', 'Playwright', 'k6 load testing'],
  },
  {
    label: 'AI',
    items: ['Claude API', 'Tool-use agents', 'Agent evals'],
  },
]

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="Grouped for quick scanning—aligned with production web development, APIs, and deployment."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ label, items }) => (
          <div
            key={label}
            className="rounded-xl border border-line/5 bg-canvas p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line/5 bg-surface px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
