import { contentRepository } from '@/api'
import { Section, VelocityMarquee } from '@/shared/components'
import type { SkillGroup } from '@/types'

import { SkillCard } from './SkillCard'

const groups = contentRepository.getSkillGroups()
const toRow = (row: SkillGroup[]) => row.flatMap((group) => group.items.slice(0, 3))
const firstRow = toRow(groups.slice(0, 5))
const secondRow = toRow(groups.slice(5))

export function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      label="Technology ecosystem"
      title="The tools I reach for, and what they let me build."
    >
      <div className="bleed-x mb-16 grid gap-3 border-y border-line py-6 display-h2">
        <VelocityMarquee items={firstRow} speed={50} />
        <VelocityMarquee items={secondRow} speed={-50} className="text-faint" />
      </div>

      <ol className="grid border-b border-line md:grid-cols-2 md:gap-x-12">
        {groups.map((group, i) => (
          <SkillCard key={group.id} group={group} index={i + 1} />
        ))}
      </ol>
    </Section>
  )
}
