import { Section } from './Section'

const roles = [
  {
    org: 'Mid-Valley Dental Associates',
    title: 'Team Lead',
    summary: 'Team leadership and day-to-day operational coordination.',
  },
  {
    org: 'Crossroads Utah AHEC',
    title: 'Administrative Assistant',
    summary: 'Administrative support for program and office operations.',
  },
]

export function OtherExperience() {
  return (
    <Section
      id="experience"
      eyebrow="Other experience"
      title="Additional professional roles"
      description="Earlier roles that shaped how I communicate, prioritize, and work with people—not my primary engineering story."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {roles.map(({ org, title, summary }) => (
          <li
            key={org}
            className="rounded-xl border border-black/5 bg-surface/80 p-5 shadow-sm transition-shadow duration-200 hover:shadow-card"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{title}</p>
            <p className="mt-2 font-medium text-ink">{org}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{summary}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
