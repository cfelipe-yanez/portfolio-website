import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { Github, Linkedin } from '@/components/brand-icons'
import { profile } from '@/lib/data'
import { Reveal } from '@/components/reveal'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'View my code',
    href: profile.github,
    icon: Github,
  },
  {
    label: 'Resume',
    value: 'Download CV (PDF)',
    href: profile.resume,
    icon: Download,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-blob absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Reveal className="text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">
          08 — Contact
        </p>
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Let&apos;s build something intelligent together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Open to roles and collaborations in machine learning, computer vision
          and biomedical AI. Reach out through any channel below.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                <c.icon className="size-5" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-medium">{c.label}</span>
                <span className="block text-sm text-muted-foreground">
                  {c.value}
                </span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          </Reveal>
        ))}
      </div>

      <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span className="font-mono text-xs">
          Designed &amp; built with precision.
        </span>
      </footer>
    </section>
  )
}
