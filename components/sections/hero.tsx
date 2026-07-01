'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { Github, Linkedin } from '@/components/brand-icons'
import { profile } from '@/lib/data'
import { RotatingRoles } from '@/components/rotating-roles'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-blob absolute -left-32 top-10 size-[38rem] rounded-full bg-primary/20 blur-[120px]" />
        <div
          className="aurora-blob absolute right-0 top-40 size-[30rem] rounded-full bg-primary/10 blur-[120px]"
          style={{ animationDelay: '4s' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--background)_92%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Available for Data & ML work
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 text-xl font-medium sm:text-2xl"
          >
            <RotatingRoles roles={profile.roles} />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <SocialLink href={profile.github} label="GitHub">
              <Github className="size-4" />
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <Linkedin className="size-4" />
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <Mail className="size-4" />
            </SocialLink>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border">
            <div className="aspect-[4/5] w-full">
              <Image
                src="/portrait.png"
                alt={`Portrait of ${profile.name}`}
                width={720}
                height={900}
                priority
                className="size-full object-cover"
              />
            </div>
            <div className="glass absolute bottom-3 left-3 right-3 rounded-2xl border border-border px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Now building
              </p>
              <p className="mt-0.5 text-sm text-foreground">
                AI systems for real-world impact
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground lg:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {children}
    </a>
  )
}
