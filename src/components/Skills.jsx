import { Section } from './Section'

const groups = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'C++', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Flask'],
  },
  {
    label: 'DevOps & tools',
    items: ['Docker', 'GitHub Actions', 'Linux', 'AWS'],
  },
  {
    label: 'Databases',
    items: ['MSSQL'],
  },
  {
    label: 'Testing',
    items: ['Unit testing', 'Playwright'],
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
            className="rounded-xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-black/5 bg-surface px-3 py-1.5 text-sm font-medium text-ink"
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
