import { Section } from './Section'

const schools = [
  {
    school: 'Brigham Young University',
    credential: 'B.S. Computer Science',
    end: 'Dec 2026',
    notes: 'GPA 3.80 — scholarship',
  },
  {
    school: 'Salt Lake Community College',
    credential: 'Computer Science & Information Systems',
    end: 'May 2024',
    notes: 'GPA 3.97 — honors, scholarship',
  },
]

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background"
      description="Strong fundamentals and consistent academic performance."
    >
      <ol className="space-y-6">
        {schools.map(({ school, credential, end, notes }) => (
          <li
            key={school}
            className="flex flex-col gap-1 border-l-2 border-accent-subtle pl-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div>
              <p className="font-semibold text-ink">{school}</p>
              <p className="mt-1 text-ink-muted">{credential}</p>
              <p className="mt-2 text-sm text-ink-muted">{notes}</p>
            </div>
            <p className="shrink-0 text-sm font-medium text-accent sm:text-right">{end}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
