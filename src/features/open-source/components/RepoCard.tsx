import { ArrowUpRight } from '@/shared/components'
import { formatShortDate } from '@/shared/lib/format'
import type { Repo } from '@/types'

export function RepoCard({ repo }: { repo: Repo }) {
  const meta = [
    repo.language,
    repo.stars > 0 && `★ ${repo.stars}`,
    repo.updatedAt && `Updated ${formatShortDate(repo.updatedAt)}`,
  ].filter(Boolean)

  return (
    <li>
      <a
        href={repo.url}
        target="_blank"
        rel="noreferrer"
        className="group flex h-full flex-col rounded-2xl border border-line p-6 transition-[border-color,background-color,translate] duration-500 ease-out-expo hover:-translate-y-1 hover:border-faint hover:bg-surface"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-medium break-all">{repo.name}</h3>
          <ArrowUpRight className="shrink-0 text-faint transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-accent" />
        </div>
        <p className="mt-2 flex-1 text-sm text-muted">{repo.description}</p>
        {meta.length > 0 && <p className="mt-4 font-mono text-xs text-faint">{meta.join(' · ')}</p>}
      </a>
    </li>
  )
}
