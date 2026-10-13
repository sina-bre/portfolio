import { Reveal, Tag } from '@/shared/components'
import { pad } from '@/shared/lib/format'
import type { SkillGroup } from '@/types'

export function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <li
      id={group.id}
      className="group border-t border-line py-8 transition-colors duration-500 hover:bg-white/[0.025] md:px-3"
    >
      <Reveal className="grid grid-cols-[2.5rem_1fr] gap-x-2">
        <span className="pt-1 font-mono text-xs text-faint">{pad(index)}</span>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-medium transition-colors duration-300 group-hover:text-accent">
              {group.title}
            </h3>
            {group.badge && <Tag>{group.badge}</Tag>}
          </div>
          <p className="mt-2 text-muted">{group.summary}</p>
          <p className="mt-4 font-mono text-xs leading-relaxed text-faint">
            {group.items.join(' / ')}
          </p>
        </div>
      </Reveal>
    </li>
  )
}
