import { projects } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/project-card'

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        index="02"
        eyebrow="Featured Work"
        title="Projects at the intersection of AI and the real world"
        description="Selected systems spanning computer vision, biomedical AI, data science and robotics — each taken from raw data to measurable impact."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
