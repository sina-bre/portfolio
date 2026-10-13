import { siteConfig } from '@/config/site.config'

interface SeoProps {
  title?: string
  description: string
}

/** React 19 hoists <title> and <meta> into <head> from anywhere in the tree. */
export function Seo({ title, description }: SeoProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.role} in ${siteConfig.location}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </>
  )
}
