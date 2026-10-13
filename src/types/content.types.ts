export interface Link {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface Role {
  slug: string
  title: string
  company: string
  location: string
  start: string
  end: string | null
  duration: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type ProjectCategory = 'Product' | 'Internal tool' | 'Backend' | 'Client work'

export interface Project {
  slug: string
  title: string
  tagline: string
  category: ProjectCategory
  company: string
  year: string
  stack: string[]
  scale?: string
  url?: string
  summary: string
  highlights: string[]
  featured?: boolean
}

export interface Service {
  title: string
  badge?: string
  summary: string
  builds: string[]
  detail: string
}

export interface SkillGroup {
  id: string
  title: string
  badge?: string
  summary: string
  items: string[]
}

export interface Principle {
  title: string
  body: string
}

export interface Step {
  title: string
  body: string
}

export interface Education {
  degree: string
  school: string
  period: string
}
