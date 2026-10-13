import { contentRepository } from '@/api'
import { Reveal, ScrollWords, Section } from '@/shared/components'

const { about, stats } = contentRepository.getProfile()

export function About() {
  return (
    <Section
      id="about"
      index="02"
      label="Who I am"
      title="Frontend first, full stack when it matters."
    >
      <ScrollWords
        text={about}
        className="max-w-4xl text-[clamp(1.375rem,2.6vw,2.25rem)] leading-[1.3] font-medium tracking-[-0.02em]"
      />

      <dl className="mt-20 grid grid-cols-2 gap-y-10 border-t border-line pt-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="display-h2">{stat.value}</dd>
            <dd className="mt-2 text-sm text-muted">{stat.label}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
