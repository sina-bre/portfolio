import { ArrowRight, ButtonLink, PageHeader, Seo } from '@/shared/components'

export function ErrorPage() {
  return (
    <div className="min-h-svh">
      <Seo title="Something went wrong" description="An unexpected error occurred." />
      <PageHeader label="Error" title="Something went wrong.">
        <ButtonLink href="/">
          Back home <ArrowRight />
        </ButtonLink>
      </PageHeader>
    </div>
  )
}
