import { Section } from './Section'

const schools = [
  {
    name: 'Brigham Young University',
    detail: 'B.S. Computer Science',
    date: 'Dec 2026',
    note: 'GPA 3.80 — scholarship',
  },
  {
    name: 'Salt Lake Community College',
    detail: 'Computer Science & Information Systems',
    date: 'May 2024',
    note: 'GPA 3.97 — honors, scholarship',
  },
]

const roles = [
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

function Column({ heading, items }) {
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

export function Background() {
  return (
    <Section
      id="background"
      eyebrow="Background"
      title="Education & earlier roles"
      description="Strong fundamentals, plus experience leading teams and working with people."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <Column heading="Education" items={schools} />
        <Column heading="Earlier roles" items={roles} />
      </div>
    </Section>
  )
}
