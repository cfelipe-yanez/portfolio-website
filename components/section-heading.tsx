import { Reveal } from '@/components/reveal'

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary/50" />
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
