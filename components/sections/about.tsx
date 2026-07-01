import { profile, journey } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="From the human body to intelligent systems"
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: '4+', label: 'Domains bridged' },
              { value: '10+', label: 'AI projects shipped' },
              { value: '3', label: 'Publications' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <div className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
          <ul className="space-y-7">
            {journey.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.05}>
                <li className="relative pl-8">
                  <span className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-primary bg-background" />
                  <h3 className="text-lg font-medium text-foreground">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
