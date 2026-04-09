import { Section } from './Section'

const projects = [
  {
    name: 'Godot 2D platformer demo',
    detail: 'A small game demo built in Godot—exploring gameplay loops and 2D mechanics.',
  },
  {
    name: 'Swift iOS app',
    detail: 'In progress. Learning native iOS structure, UI patterns, and app lifecycle.',
  },
]

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Smaller explorations"
      description="Lightweight work outside my main production engineering focus—kept intentionally brief."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map(({ name, detail }) => (
          <li
            key={name}
            className="rounded-xl border border-dashed border-black/15 bg-surface/50 p-5 sm:p-6"
          >
            <h3 className="font-medium text-ink">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
