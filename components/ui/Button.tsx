import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'accent'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  external?: boolean
  variant?: ButtonVariant
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-gradient text-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  accent:
    'bg-accent text-primary-dark font-bold shadow-md hover:bg-accent-dark hover:shadow-lg'
}

export function Button({
  href,
  external = false,
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 brand-focus'
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noreferrer noopener' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
