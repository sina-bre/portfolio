import { About, CurrentFocus } from '@/features/about'
import { Principles, Process, Reasons } from '@/features/approach'
import { Contact } from '@/features/contact'
import { ExperienceSnapshot } from '@/features/experience'
import { Hero } from '@/features/hero'
import { FeaturedWork } from '@/features/projects'
import { Services } from '@/features/services'
import { Skills } from '@/features/skills'
import { Seo } from '@/shared/components'

export function HomePage() {
  return (
    <>
      <Seo description="Sina Baradaran — Front-End Developer in Mashhad building production React, Next.js and TypeScript applications, with full-stack range across Node.js and SQL Server." />
      <Hero />
      <About />
      <Services />
      <Principles />
      <Skills />
      <FeaturedWork />
      <ExperienceSnapshot />
      <Process />
      <CurrentFocus />
      <Reasons />
      <Contact />
    </>
  )
}
