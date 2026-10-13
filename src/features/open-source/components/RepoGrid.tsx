import { use } from 'react'

import { githubRepository } from '@/api'

import { RepoCard } from './RepoCard'

const gridClass = 'mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'

export function RepoGrid() {
  // React 19 `use()` suspends until the cached promise resolves.
  const repos = use(githubRepository.getPinnedRepos())

  return (
    <ul className={gridClass}>
      {repos.map((repo) => (
        <RepoCard key={repo.name} repo={repo} />
      ))}
    </ul>
  )
}

export function RepoGridSkeleton() {
  return (
    <ul className={gridClass} aria-busy>
      {Array.from({ length: 6 }, (_, i) => (
        <li key={i} className="h-36 animate-pulse rounded-2xl border border-line bg-surface" />
      ))}
    </ul>
  )
}
