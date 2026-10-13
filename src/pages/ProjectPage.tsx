import { useParams } from 'react-router'

import { contentRepository } from '@/api'
import { ProjectDetail } from '@/features/projects'
import { ArrowLink, Container, Seo } from '@/shared/components'

import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = contentRepository.getProject(slug)

  if (!project) return <NotFoundPage />

  return (
    <>
      <Seo title={project.title} description={project.summary} />
      <ProjectDetail project={project} />
      <Container className="pb-32">
        <ArrowLink to="/works">All work</ArrowLink>
      </Container>
    </>
  )
}
