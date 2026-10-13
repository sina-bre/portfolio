import { principles, reasons, steps } from '@/content/approach'
import { roles } from '@/content/experience'
import * as profile from '@/content/profile'
import { projects } from '@/content/projects'
import { services } from '@/content/services'
import { skillGroups } from '@/content/skills'
import type { Principle, Project, Role, Service, SkillGroup, Step } from '@/types'

export type Profile = typeof profile

export interface Approach {
  principles: Principle[]
  steps: Step[]
  reasons: Principle[]
}

/**
 * Single read path for site content. Components never import `@/content` directly,
 * so the source can move to a CMS or an API by replacing this implementation only.
 */
export interface ContentRepository {
  getProfile(): Profile
  getApproach(): Approach
  getRoles(): Role[]
  getProjects(): Project[]
  getFeaturedProjects(): Project[]
  getProject(slug: string): Project | undefined
  getServices(): Service[]
  getSkillGroups(): SkillGroup[]
}

export const contentRepository: ContentRepository = {
  getProfile: () => profile,
  getApproach: () => ({ principles, steps, reasons }),
  getRoles: () => roles,
  getProjects: () => projects,
  getFeaturedProjects: () => projects.filter((project) => project.featured),
  getProject: (slug) => projects.find((project) => project.slug === slug),
  getServices: () => services,
  getSkillGroups: () => skillGroups,
}
