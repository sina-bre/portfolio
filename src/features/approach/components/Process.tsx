import { contentRepository } from '@/api'
import { Reveal, Section } from '@/shared/components'
import { pad } from '@/shared/lib/format'

const { steps } = contentRepository.getApproach()

export function Process() {
  return (
    <Section
      id="process"
      index="08"
      label="How I build products"
      title="A repeatable path from brief to shipped feature."
    >
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {steps.map((step, i) => (
          <li key={step.title} className="group">
            <Reveal delay={i * 90}>
              <div className="mb-6 flex items-center gap-3">
                <span className="size-2.5 rounded-full border border-accent transition-all duration-500 ease-out-expo group-hover:scale-150 group-hover:bg-accent" />
                <span className="h-px flex-1 origin-left bg-line transition-colors duration-500 group-hover:bg-accent/50" />
              </div>
              <p className="font-mono text-xs text-faint">{pad(i + 1)}</p>
              <h3 className="mt-2 text-xl font-medium transition-colors duration-300 group-hover:text-accent">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
