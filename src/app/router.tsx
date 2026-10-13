import { createBrowserRouter } from 'react-router'

import { ErrorPage } from '@/pages/ErrorPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

import { RootLayout } from './RootLayout'

/** Every page is its own chunk; the router waits for it before switching, so no spinner flashes. */
export const router = createBrowserRouter([
  {
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/HomePage').then((m) => ({ Component: m.HomePage })),
      },
      {
        path: 'works',
        lazy: () => import('@/pages/WorksPage').then((m) => ({ Component: m.WorksPage })),
      },
      {
        path: 'works/:slug',
        lazy: () => import('@/pages/ProjectPage').then((m) => ({ Component: m.ProjectPage })),
      },
      {
        path: 'experience',
        lazy: () => import('@/pages/ExperiencePage').then((m) => ({ Component: m.ExperiencePage })),
      },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
