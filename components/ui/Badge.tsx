import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'lomba' | 'beasiswa' | 'karir' | 'social' | 'default'
  className?: string
}

const badgeStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  lomba: 'bg-blue-50 text-blue-700',
  beasiswa: 'bg-yellow-50 text-yellow-700',
  karir: 'bg-emerald-50 text-emerald-700',
  social: 'bg-primary/10 text-primary',
  default: 'bg-primary/10 text-primary'
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${badgeStyles[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
