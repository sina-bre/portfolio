import { contentRepository } from '@/api'
import { ArrowLink, Reveal, Section } from '@/shared/components'

const roles = contentRepository.getRoles()

export function ExperienceSnapshot() {
  return (
    <Section
      id="experience"
      index="07"
      label="Experience snapshot"
      title="From intern to owning two live platforms."
    >
      <ol className="border-b border-line">
        {roles.map((role) => (
          <li
            key={role.slug}
            className="group border-t border-line py-8 transition-colors duration-500 hover:bg-white/[0.025] md:px-3"
          >
            <Reveal className="grid gap-3 md:grid-cols-[10rem_1fr_1.4fr] md:gap-8">
              <p className="font-mono text-xs text-faint">
                {role.start} – {role.end ?? 'Present'}
              </p>
              <div>
                <h3 className="text-xl font-medium transition-colors duration-300 group-hover:text-accent">
                  {role.company}
                </h3>
                <p className="text-sm text-muted">{role.title}</p>
              </div>
              <p className="leading-relaxed text-muted">{role.summary}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <ArrowLink to="/experience" className="mt-12">
        Read the full timeline
      </ArrowLink>
    </Section>
  )
}
