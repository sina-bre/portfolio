import { contentRepository } from '@/api'
import { Container, Reveal } from '@/shared/components'

const { education } = contentRepository.getProfile()

export function Education() {
  return (
    <section id="education" data-section="Education">
      <Container className="mt-32">
        <h2 className="eyebrow text-accent">Education</h2>
        <ul className="mt-6 border-b border-line">
          {education.map((item) => (
            <li key={item.degree} className="border-t border-line py-6">
              <Reveal className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-medium">{item.degree}</h3>
                  <p className="text-muted">{item.school}</p>
                </div>
                <p className="font-mono text-xs text-faint">{item.period}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
