'use client'

import { motion } from 'motion/react'
import { skillCategories } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        index="03"
        eyebrow="Capabilities"
        title="A toolkit built across disciplines"
        description="From low-level embedded systems to modern deep learning — the range needed to ship complete AI solutions."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-medium">{cat.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm text-secondary-foreground transition-colors group-hover:border-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
