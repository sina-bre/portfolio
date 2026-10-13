import { Suspense } from 'react'

import { Container } from '@/shared/components'

import { RepoGrid, RepoGridSkeleton } from './RepoGrid'

export function OpenSource() {
  return (
    <section id="open-source" data-section="Open source" className="mt-32">
      <Container>
        <h2 className="eyebrow text-accent">Open source</h2>
        <p className="mt-4 max-w-xl text-muted">
          Public repositories on GitHub — stars and activity load live.
        </p>
        <Suspense fallback={<RepoGridSkeleton />}>
          <RepoGrid />
        </Suspense>
      </Container>
    </section>
  )
}
