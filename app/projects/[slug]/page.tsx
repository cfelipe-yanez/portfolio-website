import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, FileText, Download } from 'lucide-react'
import { Github } from '@/components/brand-icons'
import { projects } from '@/lib/data'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { Reveal } from '@/components/reveal'
import { ThemeToggle } from '@/components/theme-toggle'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project not found' }
  return {
    title: `${project.title} — Felipe Yánez`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
        <div className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border px-4 py-2.5 sm:px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to projects
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6">
        {/* Hero */}
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {project.category}
          </span>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="size-4" /> GitHub
              </a>
            ) : null}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                <ExternalLink className="size-4" /> Live Demo
              </a>
            ) : null}
            {project.links.paper ? (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                <FileText className="size-4" /> Paper
              </a>
            ) : null}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="size-4" /> Downloads
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-border">
            <div className="aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={720}
                priority
                className="size-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Metrics */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-card p-5 text-center"
              >
                <div className="text-2xl font-semibold text-primary sm:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Body */}
        <div className="mt-16 space-y-14">
          <Block title="Overview">{project.overview}</Block>
          <Block title="Problem">{project.problem}</Block>

          <Reveal>
            <div>
              <BlockTitle>Objectives</BlockTitle>
              <ul className="mt-4 space-y-3">
                {project.objectives.map((obj) => (
                  <li key={obj} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Block title="Methodology">{project.methodology}</Block>

          {/* Pipeline diagram placeholder */}
          <Reveal>
            <div>
              <BlockTitle>Pipeline Diagram</BlockTitle>
              <div className="mt-4 flex flex-col items-stretch gap-3 rounded-3xl border border-dashed border-border bg-card/50 p-6 sm:flex-row sm:items-center">
                {['Data', 'Preprocessing', 'Model', 'Evaluation', 'Deployment'].map(
                  (stage, i, arr) => (
                    <div key={stage} className="flex flex-1 items-center gap-3">
                      <div className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-center text-sm">
                        {stage}
                      </div>
                      {i < arr.length - 1 ? (
                        <span className="hidden text-primary sm:inline">→</span>
                      ) : null}
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>

          <Block title="Dataset">{project.dataset}</Block>
          <Block title="Model Architecture">{project.architecture}</Block>
          <Block title="Training">{project.training}</Block>

          {/* Evaluation metrics */}
          <Reveal>
            <div>
              <BlockTitle>Evaluation Metrics</BlockTitle>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {project.evaluation.map((e) => (
                  <div
                    key={e.label}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="text-2xl font-semibold text-foreground">
                      {e.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {e.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Block title="Results">{project.results}</Block>
          <Block title="Visualizations">{project.visualizations}</Block>
          <Block title="Lessons Learned">{project.lessons}</Block>
          <Block title="Future Work">{project.future}</Block>
        </div>

        {/* Next project */}
        <Reveal>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-20 flex items-center justify-between rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Next project
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {next.title}
              </h3>
            </div>
            <span className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
              <ArrowLeft className="size-4 rotate-180" />
            </span>
          </Link>
        </Reveal>
      </main>
      <BackToTop />
    </>
  )
}

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
      {children}
    </h2>
  )
}

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal>
      <div>
        <BlockTitle>{title}</BlockTitle>
        <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {children}
        </p>
      </div>
    </Reveal>
  )
}
