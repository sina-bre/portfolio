import { contentRepository } from '@/api'
import { siteConfig } from '@/config/site.config'
import { ArrowLink, Reveal, Section } from '@/shared/components'

const { currentFocus } = contentRepository.getProfile()

const facts = [
  { label: 'Role', value: currentFocus.role },
  { label: 'Since', value: currentFocus.since },
  { label: 'Based in', value: siteConfig.location },
]

export function CurrentFocus() {
  return (
    <Section
      id="focus"
      index="09"
      label="Current focus"
      title={
        <>
          {currentFocus.title} <span className="text-accent">{currentFocus.highlight}</span>.
        </>
      }
    >
      <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <p className="text-lg leading-relaxed text-muted">{currentFocus.body}</p>

        <div>
          <dl className="grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow text-faint">{fact.label}</dt>
                <dd className="mt-2 font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <ArrowLink to="/experience" className="mt-10">
            See where I&apos;ve been
          </ArrowLink>
        </div>
      </Reveal>
    </Section>
  )
}
