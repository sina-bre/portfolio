import { contentRepository } from '@/api'
import { Reveal, Section } from '@/shared/components'
import { pad } from '@/shared/lib/format'

const { principles } = contentRepository.getApproach()

export function Principles() {
  return (
    <Section
      id="philosophy"
      index="04"
      label="Development philosophy"
      title="How I think about building for the web."
    >
      <ol className="border-b border-line">
        {principles.map((principle, i) => (
          <li
            key={principle.title}
            className="group border-t border-line py-10 transition-colors duration-500 hover:bg-white/[0.025] md:px-3"
          >
            <Reveal className="grid gap-4 md:grid-cols-[4rem_1fr_1.3fr] md:gap-8">
              <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-accent">
                {pad(i + 1)}
              </span>
              <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold tracking-[-0.025em] transition-transform duration-500 ease-out-expo group-hover:translate-x-2">
                {principle.title}
              </h3>
              <p className="leading-relaxed text-muted">{principle.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
