import { contentRepository } from '@/api'
import { Container } from '@/shared/components'

import { RoleCard } from './RoleCard'

const roles = contentRepository.getRoles()

export function Timeline() {
  return (
    <section id="timeline" data-section="Timeline" aria-label="Career timeline">
      <Container>
        <ol className="relative">
          <span
            aria-hidden
            className="absolute top-2 bottom-0 left-[0.55rem] w-px bg-linear-to-b from-accent via-white/20 to-white/5 md:left-[calc(25%-1rem)]"
          />
          {roles.map((role) => (
            <RoleCard key={role.slug} role={role} />
          ))}
        </ol>
      </Container>
    </section>
  )
}
