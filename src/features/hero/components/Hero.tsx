import { contentRepository } from '@/api'
import { siteConfig } from '@/config/site.config'
import { LocalTime } from '@/features/navigation'
import {
  ArrowRight,
  BlurText,
  ButtonLink,
  Container,
  Magnet,
  VelocityMarquee,
} from '@/shared/components'

const { intro, heroStack } = contentRepository.getProfile()

export function Hero() {
  return (
    <section
      id="intro"
      data-section="Intro"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(ellipse_at_top_right,rgb(255_91_46/0.16),transparent_60%)]"
      />

      <Container className="scroll-exit pt-32 pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-muted">
            <span className="size-2 animate-pulse-dot rounded-full bg-accent" />
            Now: {siteConfig.now}
          </p>
          <p className="font-mono text-xs tracking-[0.02em] text-muted">
            {siteConfig.location} · <LocalTime />
          </p>
        </div>

        <h1 className="mt-16 display-h1">
          <BlurText text={siteConfig.name} />
        </h1>
        <p className="mt-5 animate-blur-in text-[clamp(1.5rem,3.4vw,3rem)] leading-none font-medium tracking-[-0.025em] [animation-delay:350ms]">
          Front-End <span className="text-accent">Developer</span>
        </p>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-xl leading-relaxed text-muted">{intro}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Magnet>
              <ButtonLink href="/works">
                View my work <ArrowRight />
              </ButtonLink>
            </Magnet>
            <Magnet>
              <ButtonLink href="/#contact" variant="outline">
                Contact me
              </ButtonLink>
            </Magnet>
            <ButtonLink href={siteConfig.resumeUrl} variant="ghost">
              Resume
            </ButtonLink>
          </div>
        </div>
      </Container>

      <VelocityMarquee
        items={heroStack}
        speed={40}
        className="border-y border-line py-4 font-mono text-sm tracking-[0.16em] text-muted uppercase"
      />
    </section>
  )
}
