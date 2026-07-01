'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Github } from '@/components/brand-icons'
import type { Project } from '@/lib/data'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-primary backdrop-blur">
            {project.category}
          </span>
        </div>
      </Link>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {project.title}
          </h3>
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Open ${project.title} case study`}
            className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary/50 group-hover:text-primary"
          >
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-lg font-semibold text-foreground">
                {m.value}
              </div>
              <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Case Study
          </Link>
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Github className="size-3.5" /> GitHub
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ExternalLink className="size-3.5" /> Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
