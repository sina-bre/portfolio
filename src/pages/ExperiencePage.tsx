import { Education, Timeline } from '@/features/experience'
import { ArrowLink, Container, PageHeader, Seo } from '@/shared/components'

export function ExperiencePage() {
  return (
    <>
      <Seo title="Experience" description="Sina Baradaran's professional timeline and education." />
      <PageHeader
        label="Experience"
        title={
          <>
            Four teams, one <span className="text-accent">direction</span>.
          </>
        }
      >
        <p>From a React internship in 2022 to owning two live platforms and their backend today.</p>
      </PageHeader>
      <Timeline />
      <Education />
      <Container className="py-32">
        <ArrowLink to="/works">See the work</ArrowLink>
      </Container>
    </>
  )
}
