import { GraduationCap } from 'lucide-react'
import { teaching } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Teaching() {
  return (
    <section
      id="teaching"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        index="06"
        eyebrow="Teaching"
        title="Sharing knowledge"
        description="Helping students and career-changers grow into confident engineers and data scientists."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {teaching.map((t, i) => (
          <Reveal key={t.course} delay={i * 0.06}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-medium leading-snug">
                {t.course}
              </h3>
              <p className="mt-1 text-sm text-primary/90">{t.role}</p>
              <p className="text-sm text-muted-foreground">{t.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
