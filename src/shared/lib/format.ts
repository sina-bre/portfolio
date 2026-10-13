export const pad = (value: number) => String(value).padStart(2, '0')

export const formatShortDate = (iso: string) =>
  new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(iso))
