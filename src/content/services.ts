import type { Service } from '@/types'

export const services: Service[] = [
  {
    title: 'Frontend Engineering',
    badge: 'Core craft',
    summary:
      'The part of a product people see and touch — fast, clear and consistent from phone to widescreen.',
    builds: [
      'Customer-facing platforms',
      'Booking and payment flows',
      'Reusable component systems',
    ],
    detail:
      'React 19 and the Next.js App Router with server components, TypeScript end to end, TanStack Query for server state, React Hook Form with Zod for validated forms and Tailwind CSS for styling. Persian RTL layouts with Jalali calendars when the product needs them.',
  },
  {
    title: 'Admin Panels & Internal Tools',
    badge: 'Current role',
    summary:
      'The screens operations teams live in all day, organised around the people who use them.',
    builds: [
      'Role-scoped workspaces',
      'Invoicing and reservations',
      'Data tables, charts and exports',
    ],
    detail:
      'TanStack Table, ApexCharts and Chart.js for data, XLSX export, QR and label printing, and navigation scoped per role — cashier, coffee shop, accounting, support, reporting — instead of one menu guarded by dozens of permission checks.',
  },
  {
    title: 'Backend & APIs',
    badge: 'Full-stack range',
    summary: 'The API behind the interface, so the data path makes sense end to end.',
    builds: ['REST APIs with Swagger docs', 'RBAC and OTP authentication', 'Real-time updates'],
    detail:
      'Node.js, Express and TypeScript over SQL Server with stored procedures only, JWT with token revocation, phone-only OTP, a two-layer permission model, server-sent events for realtime, and Jest with Supertest for coverage.',
  },
]
