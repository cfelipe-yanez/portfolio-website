import { Award, CircleDashed, CheckCircle2 } from 'lucide-react'
import { certifications } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const statusStyles: Record<string, { icon: typeof Award; className: string }> = {
  Completed: { icon: CheckCircle2, className: 'text-primary' },
  'In Progress': { icon: CircleDashed, className: 'text-muted-foreground' },
  Planned: { icon: CircleDashed, className: 'text-muted-foreground' },
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        index="07"
        eyebrow="Credentials"
        title="Certifications"
        description="Formal training completed and on the roadmap."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {certifications.map((cert, i) => {
          const status = statusStyles[cert.status] ?? statusStyles.Planned
          const Icon = status.icon
          return (
            <Reveal key={cert.title} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Award className="size-5" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs ${status.className}`}
                  >
                    <Icon className="size-3.5" />
                    {cert.status}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-medium">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.issuer} · {cert.year}
                </p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
