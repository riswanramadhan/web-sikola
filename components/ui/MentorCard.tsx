'use client'

import Image from 'next/image'
import { ChevronDown, Trophy } from 'lucide-react'
import { useState } from 'react'
import { Badge } from './Badge'
import { Card } from './Card'
import type { MentorProfile } from '@/lib/i18n/types'

interface MentorCardProps {
  mentor: MentorProfile
  achievementLabel: string
  showMore: string
  showLess: string
}

export function MentorCard({ mentor, achievementLabel, showMore, showLess }: MentorCardProps) {
  const [expanded, setExpanded] = useState(false)
  const visibleAchievements = expanded ? mentor.topAchievements : mentor.topAchievements.slice(0, 3)

  return (
    <Card className="group flex h-full flex-col items-center p-6 text-center">
      <div className="relative mb-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-accent/25 transition-all group-hover:ring-accent">
          <Image
            src={mentor.photo}
            alt={`Mentor Sikola Indonesia ${mentor.name} ${mentor.university}`}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-primary-dark shadow-sm">
          <Trophy className="h-3.5 w-3.5 shrink-0" />
          <span>{mentor.achievementCount}+</span>
        </div>
      </div>

      <Badge variant="default" className="mb-3">
        {mentor.role}
      </Badge>
      <h3 className="font-poppins text-lg font-bold text-text">{mentor.name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{mentor.university}</p>

      <div className="mt-5 w-full space-y-2 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{achievementLabel}</p>
        <ul className="space-y-2">
          {visibleAchievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-2 text-sm text-muted">
              <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-label={`${expanded ? showLess : showMore} prestasi ${mentor.name}`}
        className="brand-focus mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
      >
        {expanded ? showLess : showMore}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
    </Card>
  )
}
