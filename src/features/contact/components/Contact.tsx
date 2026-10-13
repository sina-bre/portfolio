import { siteConfig } from '@/config/site.config'
import {
  ArrowRight,
  ButtonLink,
  Container,
  Download,
  Magnet,
  PhoneLinks,
  Reveal,
} from '@/shared/components'

export function Contact() {
  return (
    <section
      id="contact"
      data-section="Contact"
      className="relative overflow-hidden border-t border-line py-32 text-center sm:py-44"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(ellipse_at_bottom,rgb(255_91_46/0.14),transparent_65%)]"
      />
      <Container>
        <Reveal>
          <p className="eyebrow text-muted">
            <span className="text-accent">11</span> · Let&apos;s talk
          </p>
          <h2 className="mx-auto mt-6 max-w-6xl display-h1">
            Let&apos;s build something <span className="text-accent">useful</span>.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-lg text-muted">
            Have a product, a question or a role in mind? Send a message — I read everything.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Magnet>
              <ButtonLink href={`mailto:${siteConfig.email}`}>
                Start a conversation <ArrowRight />
              </ButtonLink>
            </Magnet>
            <Magnet>
              <ButtonLink href={`mailto:${siteConfig.email}`} variant="outline">
                {siteConfig.email}
              </ButtonLink>
            </Magnet>
            <ButtonLink href={siteConfig.resumeUrl} variant="ghost">
              Download resume <Download />
            </ButtonLink>
          </div>
          <PhoneLinks className="mt-8 justify-center font-mono text-sm text-muted" />
        </Reveal>
      </Container>
    </section>
  )
}
