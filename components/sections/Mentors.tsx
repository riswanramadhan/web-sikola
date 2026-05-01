'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MentorCard } from '@/components/ui/MentorCard'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function Mentors() {
  const { content } = useTranslation()

  return (
    <section id="mentors" className="section-shell scroll-mt-24">
      <SectionHeading
        label={content.mentors.label}
        heading={content.mentors.heading}
        subtext={content.mentors.subtext}
        centered
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {content.mentors.items.map((mentor) => (
          <MentorCard
            key={mentor.name}
            mentor={mentor}
            achievementLabel={content.mentors.achievementLabel}
            showMore={content.mentors.showMore}
            showLess={content.mentors.showLess}
          />
        ))}
      </motion.div>
    </section>
  )
}
