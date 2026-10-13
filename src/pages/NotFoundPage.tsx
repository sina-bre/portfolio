import { ArrowRight, ButtonLink, PageHeader, Seo } from '@/shared/components'

export function NotFoundPage() {
  return (
    <div className="min-h-svh">
      <Seo title="Not found" description="This page does not exist." />
      <PageHeader label="404" title="This page doesn't exist.">
        <ButtonLink href="/">
          Back home <ArrowRight />
        </ButtonLink>
      </PageHeader>
    </div>
  )
}
