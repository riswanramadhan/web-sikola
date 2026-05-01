import { Badge } from './Badge'

interface SectionHeadingProps {
  label: string
  heading: string
  subtext?: string
  centered?: boolean
}

export function SectionHeading({ label, heading, subtext, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Badge className="mb-4" variant="default">
        {label}
      </Badge>
      <h2 className="font-poppins text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {subtext ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{subtext}</p> : null}
    </div>
  )
}
