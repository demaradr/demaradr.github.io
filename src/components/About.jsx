import { Section } from './Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering with a shipping mindset"
      description="I care about systems that hold up in production—not just demos."
    >
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
        <p>
          I am a Computer Science student at Brigham Young University. I like building real systems and shipping
          production software that stakeholders can depend on.
        </p>
        <p>
          In professional settings I have worked independently on substantial technical work, and I have mentored
          newer team members—helping them ramp on codebases, tooling, and collaborative workflows.
        </p>
      </div>
    </Section>
  )
}
