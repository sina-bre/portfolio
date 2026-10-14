import type { Education, Stat } from '@/types'

import { projects } from './projects'

export const intro =
  'I build production web applications with React, Next.js and TypeScript — booking flows, admin panels and the component systems behind them — and I write the API when the API is what is in the way.'

export const about =
  "I'm Sina, a front-end developer from Mashhad, Iran. For three years I've shipped production web applications with React, Next.js, TypeScript and Vue. Today I own the frontend of two live platforms at Yekta Group, along with the internal panels that run its daily operations."

export const stats: Stat[] = [
  { value: '3+', label: 'Years in production' },
  { value: String(projects.filter((project) => project.url).length), label: 'Live products' },
  { value: '131', label: 'Admin panel screens' },
  { value: '258', label: 'REST endpoints designed' },
]

export const heroStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'TanStack Query',
  'Vue 3',
  'Node.js',
  'Express',
  'SQL Server',
  'GraphQL',
]

export const education: Education[] = [
  {
    degree: 'MSc in Software Engineering',
    school: 'Islamic Azad University, Mashhad',
    period: '2024 – Present',
  },
  {
    degree: 'Bachelor of Computer Engineering',
    school: 'Islamic Azad University, Mashhad',
    period: '2019 – 2023',
  },
]

export const currentFocus = {
  title: 'Right now: two live platforms at',
  highlight: 'Yekta Group',
  body: 'I joined Yekta Group in October 2025. I own the frontend of heliumpark.ir and yekta-group.com, lead invoicing and reservation work across the internal admin panels, including the ERP live at erp.heliumpark.ir, and designed the backend that runs task and document management — while finishing an MSc in Software Engineering.',
  role: 'Front-End Developer',
  since: 'October 2025',
}
