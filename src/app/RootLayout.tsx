import { Outlet, useLocation } from 'react-router'

import { TargetCursor } from '@/features/cursor'
import { Footer, Navbar, SectionRail } from '@/features/navigation'

import { ScrollManager } from './ScrollManager'

export function RootLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <ScrollManager />
      <div
        aria-hidden
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-0.5 bg-accent shadow-[0_0_10px_var(--color-accent)]"
      />
      <Navbar />
      {/* Keyed by path so each new page plays the entrance animation. */}
      <main id="main" key={pathname} className="animate-page-in">
        <Outlet />
      </main>
      <Footer />
      <SectionRail />
      <TargetCursor />
    </>
  )
}
