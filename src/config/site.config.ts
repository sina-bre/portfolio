import type { Link } from '@/types'

export const siteConfig = {
  name: 'Sina Baradaran',
  initials: 'SB',
  role: 'Front-End Developer',
  location: 'Mashhad, Iran',
  timeZone: 'Asia/Tehran',
  email: 'sinabaradaran01@gmail.com',
  phones: [
    { label: '+98 937 582 9408', href: 'tel:+989375829408' },
    { label: '+98 991 849 5388', href: 'tel:+989918495388' },
  ],
  resumeUrl: '/sina-baradaran-resume.pdf',
  github: { username: 'sina-bre', url: 'https://github.com/sina-bre' },
  linkedin: 'https://www.linkedin.com/in/sina-baradaran/',
  now: 'Front-End Developer at Yekta Group',
} as const

export const navLinks: Link[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Work', href: '/works' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/#contact' },
]

export const socialLinks: Link[] = [
  { label: 'GitHub', href: siteConfig.github.url },
  { label: 'LinkedIn', href: siteConfig.linkedin },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
]
