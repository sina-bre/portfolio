import { contentRepository } from '@/api'
import { ArrowUpRight, Reveal } from '@/shared/components'

const live = contentRepository.getLiveProjects()

/** Every project with a public address, listed by that address. */
export function LiveProducts() {
  return (
    <Reveal className="mt-20">
      <p className="flex items-center gap-3 eyebrow text-faint">
        <span className="size-2 animate-pulse-dot rounded-full bg-accent" />
        Live now · {live.length}
      </p>
      <ul className="mt-6 border-t border-line">
        {live.map((project) => (
          <li key={project.slug}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-line py-5 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_auto]"
            >
              <span className="font-mono text-base break-all transition-colors duration-300 group-hover:text-accent sm:text-lg">
                {new URL(project.url).hostname}
              </span>
              <span className="text-sm text-muted max-sm:order-last max-sm:col-span-2">
                {project.tagline} · {project.company}
              </span>
              <ArrowUpRight className="text-faint transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:text-accent" />
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
