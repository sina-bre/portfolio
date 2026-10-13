import type { Principle, Step } from '@/types'

export const principles: Principle[] = [
  {
    title: 'RTL is not a CSS property',
    body: 'dir="rtl" flips the text — then charts render backwards, carousels swipe the wrong way and date pickers stay Gregorian. Persian products need a Jalali calendar layer and a mirrored interaction model.',
  },
  {
    title: 'Pick the simplest transport',
    body: 'When updates only flow from server to client, server-sent events give realtime over plain HTTP with native reconnection — a fraction of the cost of a socket layer you would never fully use.',
  },
  {
    title: 'Keep the data contract visible',
    body: 'With stored procedures instead of an ORM, paging, workspace scoping and permission filters live in one auditable place, so a tenant-isolation bug cannot hide behind a query builder.',
  },
  {
    title: 'Design for the person using it',
    body: 'One navigation guarded by 93 permission checks is unreadable. Ten role-scoped navigations made the admin panel comprehensible to the cashiers and accountants actually using it.',
  },
  {
    title: 'Make the standard outlive me',
    body: 'Seven custom agent skills turn team conventions into executable checklists, so a new module arrives correct whether a teammate or an agent writes it.',
  },
]

export const steps: Step[] = [
  {
    title: 'Understand',
    body: 'Start from the people using the screen and the data that will feed it.',
  },
  {
    title: 'Model',
    body: 'Shape types and API contracts first, so the UI and the server agree before either is built.',
  },
  {
    title: 'Componentize',
    body: 'Extract components and custom hooks so the second screen costs less than the first.',
  },
  {
    title: 'Connect',
    body: 'Wire the API, handle loading, empty and error states, and trace the data end to end.',
  },
  {
    title: 'Verify & tune',
    body: 'Tests and review, then code splitting, lazy loading and memoization where they measurably pay off.',
  },
]

export const reasons: Principle[] = [
  {
    title: 'I own outcomes, not tickets',
    body: 'At Yekta Group I carry two live platforms from architecture decisions through release.',
  },
  {
    title: 'Frontend depth, full-stack range',
    body: 'Three years of React and TypeScript, plus a production Node.js and SQL Server backend I designed myself.',
  },
  {
    title: 'Numbers I can defend',
    body: 'Every figure on this site is countable from the source. I do not ship claims I cannot back up.',
  },
  {
    title: 'Code the next person can extend',
    body: 'Reusable patterns, custom hooks and documented conventions are how I leave a codebase.',
  },
]
