import type { Repo } from '@/types'

/** Curated public repositories. Live stars and dates are merged in from the GitHub API. */
export const openSource: Repo[] = [
  { name: 'front-end-hand-book', description: 'A frontend handbook, written in MDX' },
  { name: 'next-template-app', description: 'My opinionated Next.js starting point' },
  { name: 'turbo-repo-ecommerce-app', description: 'Monorepo e-commerce with Turborepo' },
  { name: 'daily-package', description: 'Small TypeScript utilities I keep reaching for' },
  { name: 'car-trader', description: 'Nuxt 3 + Supabase + Prisma car listings' },
  { name: 'I-banck', description: 'Vue 3 banking app — accounts, transactions, charts' },
].map((repo) => ({
  ...repo,
  url: `https://github.com/sina-bre/${repo.name}`,
  language: null,
  stars: 0,
  updatedAt: null,
}))
