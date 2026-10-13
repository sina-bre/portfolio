import { contentRepository } from '@/api'
import { Reveal, Section } from '@/shared/components'
import { pad } from '@/shared/lib/format'

const { reasons } = contentRepository.getApproach()

export function Reasons() {
  return (
    <Section id="why" index="10" label="Why work with me" title="What you can count on.">
      <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
        {reasons.map((reason, i) => (
          <li
            key={reason.title}
            className="group bg-canvas p-8 transition-colors duration-500 hover:bg-surface sm:p-10"
          >
            <Reveal delay={(i % 2) * 90}>
              <p className="font-mono text-xs text-accent">{pad(i + 1)}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] transition-colors duration-300 group-hover:text-accent">
                {reason.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{reason.body}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
