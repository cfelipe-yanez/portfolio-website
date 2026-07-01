import { experience } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        index="05"
        eyebrow="Career"
        title="Experience"
        description="A path across research, engineering and teaching roles."
      />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />
        <ul className="space-y-8">
          {experience.map((exp, i) => (
            <Reveal key={`${exp.role}-${exp.period}`} delay={i * 0.05}>
              <li className="relative pl-8 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                <span className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />
                <div className={i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:order-2 md:pl-10'}>
                  <span className="font-mono text-sm text-primary">
                    {exp.period}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground">
                    {exp.type}
                  </span>
                </div>
                <div className={i % 2 === 0 ? 'md:pl-10' : 'md:order-1 md:pr-10 md:text-right'}>
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <p className="text-sm text-primary/90">{exp.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
