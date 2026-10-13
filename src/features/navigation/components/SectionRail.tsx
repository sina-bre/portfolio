import { useLocation } from 'react-router'

import { ChevronUp } from '@/shared/components'
import { useActiveSection } from '@/shared/hooks/useActiveSection'
import { cn } from '@/shared/lib/cn'
import { pad } from '@/shared/lib/format'

import { usePageSections } from '../hooks/usePageSections'

const scrollToId = (id?: string) => id && document.getElementById(id)?.scrollIntoView()

/** Progress rail on every page: previous/next buttons and one dot per marked section. */
export function SectionRail() {
  const { pathname } = useLocation()
  const sections = usePageSections(pathname)
  const ids = sections.map((section) => section.id)
  const active = useActiveSection(ids)
  const index = ids.indexOf(active ?? '')

  if (sections.length < 2) return null

  return (
    <nav
      aria-label="Sections"
      className="fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 md:right-5 md:block"
    >
      <div className="flex flex-col items-center gap-1.5 rounded-full border border-white/15 bg-canvas/90 p-2 shadow-[0_12px_45px_rgb(0_0_0/0.9)] backdrop-blur transition-colors duration-300 hover:border-accent/50">
        <RailButton
          label="Previous section"
          disabled={index <= 0}
          onClick={() => scrollToId(ids[index - 1])}
        />
        <span className="h-px w-3 bg-white/15" />

        <ol className="flex flex-col items-center gap-2 py-1">
          {sections.map((section, i) => {
            const current = i === index
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-label={section.label}
                  aria-current={current ? 'location' : undefined}
                  className="group relative grid size-5 place-items-center"
                >
                  {current && (
                    <span className="absolute inset-0 animate-ping rounded-full border border-accent/60 opacity-40" />
                  )}
                  <span
                    className={cn(
                      'rounded-full transition-all duration-300 ease-out-expo',
                      current
                        ? 'size-3 bg-accent shadow-[0_0_14px_var(--color-accent)] ring-2 ring-accent/40'
                        : 'size-1.5 bg-faint group-hover:scale-150 group-hover:bg-ink',
                    )}
                  />
                  <span
                    className={cn(
                      'pointer-events-none absolute right-8 rounded-lg border bg-canvas px-2.5 py-1 font-mono text-[0.68rem] tracking-widest whitespace-nowrap uppercase transition-all duration-300 ease-out-expo',
                      current
                        ? 'border-accent/40 text-accent'
                        : 'translate-x-2 border-line text-ink opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
                    )}
                  >
                    {pad(i + 1)} · {section.label}
                  </span>
                </a>
              </li>
            )
          })}
        </ol>

        <span className="h-px w-3 bg-white/15" />
        <RailButton
          label="Next section"
          down
          disabled={index >= ids.length - 1}
          onClick={() => scrollToId(ids[index + 1])}
        />
      </div>
    </nav>
  )
}

interface RailButtonProps {
  label: string
  down?: boolean
  disabled: boolean
  onClick: () => void
}

function RailButton({ label, down, disabled, onClick }: RailButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="group grid size-7 place-items-center rounded-full text-muted transition-colors hover:bg-accent hover:text-canvas disabled:pointer-events-none disabled:opacity-20"
    >
      <ChevronUp
        className={cn(
          'transition-transform duration-200',
          down ? 'rotate-180 group-hover:translate-y-0.5' : 'group-hover:-translate-y-0.5',
        )}
      />
    </button>
  )
}
