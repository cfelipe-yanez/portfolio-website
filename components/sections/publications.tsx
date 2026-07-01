import { ExternalLink, FileText } from 'lucide-react'
import { publications } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Publications() {
  return (
    <section
      id="publications"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        index="04"
        eyebrow="Research"
        title="Publications"
        description="Peer-reviewed contributions bridging machine learning and biomedical engineering."
      />

      <div className="space-y-4">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.05}>
            <article className="group grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <span className="font-mono text-sm text-primary">{pub.year}</span>
              <div>
                <span className="mb-2 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-[11px] uppercase tracking-wide text-secondary-foreground">
                  {pub.type}
                </span>
                <h3 className="text-pretty text-lg font-medium leading-snug">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pub.venue} · DOI: {pub.doi}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={pub.pdf}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <FileText className="size-3.5" /> PDF
                </a>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View DOI"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
