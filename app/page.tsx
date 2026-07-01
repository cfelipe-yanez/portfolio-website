import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Publications } from '@/components/sections/publications'
import { Experience } from '@/components/sections/experience'
import { Teaching } from '@/components/sections/teaching'
import { Certifications } from '@/components/sections/certifications'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Publications />
        <Experience />
        <Teaching />
        <Certifications />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}
