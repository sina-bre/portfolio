import type { Role } from '@/types'

export const roles: Role[] = [
  {
    slug: 'yekta-group',
    title: 'Front-End Developer',
    company: 'Yekta Group',
    location: 'Mashhad',
    start: 'Oct 2025',
    end: null,
    duration: '1 yr',
    summary:
      "Own the frontend of the group's two live platforms, heliumpark.ir and yekta-group.com, serving four entertainment venues across Mashhad and Tehran.",
    highlights: [
      'Delivered the full customer booking journey on heliumpark.ir: ticket and package purchase, VIP membership, events and group reservations, OTP login with automatic token refresh, and online payment with invoice tracking.',
      'Lead invoicing and reservation work across two internal admin panels totalling 131 screens and 10 role-scoped workspaces for the cashier, coffee shop, accounting, support and management reporting teams; one of them runs live as the group ERP at erp.heliumpark.ir.',
      'Designed and built a TypeScript, Express and SQL Server backend of 42 modules and 258 REST endpoints for internal task and document management — module architecture, a 50-permission RBAC model, real-time updates over server-sent events and encrypted attachments.',
    ],
    stack: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Node.js',
      'SQL Server',
    ],
  },
  {
    slug: 'asiatech',
    title: 'Front-End Developer',
    company: "Asiatech (Arman Tose'e Sayna)",
    location: 'Mashhad',
    start: 'Sep 2024',
    end: 'Jan 2025',
    duration: '5 mos',
    summary:
      'Delivered Admin and Experts CRM applications and established the component architecture the team built on.',
    highlights: [
      'Delivered Admin and Experts CRM applications with React, TypeScript and GraphQL, establishing the component architecture and reusable patterns the team built on.',
      'Refactored complex features into modular custom hooks, improving code clarity and making the codebase easier for the team to extend.',
      'Developed a beauty salon reservation system with Next.js, Tailwind CSS and shadcn/ui, delivering a fast, responsive and accessible interface.',
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    slug: 'arzesh-network',
    title: 'Front-End Developer',
    company: 'Arzesh Network',
    location: 'Mashhad',
    start: 'Feb 2023',
    end: 'Oct 2023',
    duration: '8 mos',
    summary:
      'Built content and learning tools with Vue: a headless CMS and a learning management system.',
    highlights: [
      'Developed data-entry and state-management features for a headless CMS built with Vue and Vuex, and documented key implementations to support handover.',
      'Designed and developed a Learning Management System (LMS) for quizzes and tests, covering quiz creation, test delivery and results tracking.',
    ],
    stack: ['Vue', 'Vuex', 'JavaScript'],
  },
  {
    slug: 'farawin',
    title: 'Front-End Developer Intern',
    company: 'Farawin',
    location: 'Mashhad',
    start: 'Mar 2022',
    end: 'Oct 2022',
    duration: '7 mos',
    summary: 'Rebuilt the Nasim Rezvan app in React and shipped it as an installable PWA.',
    highlights: [
      'Rebuilt the Nasim Rezvan app in React, focusing on performance optimization for a real-time audio player.',
      'Shipped a PWA for offline access and home-screen installation, enabling native-like use without a connection.',
    ],
    stack: ['React', 'PWA'],
  },
]
