import { apiConfig } from '@/config/api.config'
import { siteConfig } from '@/config/site.config'
import { openSource } from '@/content/open-source'
import type { Repo } from '@/types'

import { getJson } from './http'

interface GithubRepoDto {
  name: string
  language: string | null
  stargazers_count: number
  pushed_at: string
}

export interface GithubRepository {
  getPinnedRepos(): Promise<Repo[]>
}

const reposUrl = `${apiConfig.github.baseUrl}/users/${siteConfig.github.username}/repos?per_page=100`

async function fetchPinnedRepos(): Promise<Repo[]> {
  try {
    const live = await getJson<GithubRepoDto[]>(reposUrl, apiConfig.github.timeoutMs)
    const byName = new Map(live.map((dto) => [dto.name, dto]))

    return openSource.map((repo) => {
      const dto = byName.get(repo.name)
      if (!dto) return repo
      return {
        ...repo,
        language: dto.language,
        stars: dto.stargazers_count,
        updatedAt: dto.pushed_at,
      }
    })
  } catch {
    // Rate limits or offline visitors should never break the page: fall back to curated data.
    return openSource
  }
}

let cache: Promise<Repo[]> | undefined

export const githubRepository: GithubRepository = {
  // Cached so React's `use()` receives the same promise on every render.
  getPinnedRepos: () => (cache ??= fetchPinnedRepos()),
}
