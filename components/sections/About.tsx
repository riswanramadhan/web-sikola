'use client'

import Image from 'next/image'
import { Eye, Landmark, Rocket, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function About() {
  const { content } = useTranslation()

  return (
    <section id="about" className="section-shell scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] lg:items-center">
        <SectionHeading label={content.about.label} heading={content.about.heading} subtext={content.about.intro} />

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end"
        >
          <div className="relative aspect-[5/4] animate-floaty">
            <Image
              src="/images/maskot-sikola-indonesia.png"
              alt="Maskot Sikola Indonesia platform mentoring mahasiswa"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-12 space-y-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="brand-card w-full overflow-hidden bg-gradient-to-b from-white via-white to-primary/5 px-6 pb-5 pt-6 sm:px-7 sm:pb-6 sm:pt-7 lg:max-w-[360px] lg:justify-self-start"
          >
            <div className="flex flex-col gap-4 text-left">
              <div className="rounded-[32px] bg-brand-gradient p-1.5 shadow-soft">
                <div className="relative w-full overflow-hidden rounded-[26px] bg-bg aspect-square sm:aspect-[5/4]">
                  <Image
                    src="/images/mentors/rifal-ceo-optimized.png"
                    alt="Rifal S.E pendiri dan CEO Sikola Indonesia"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

              <div className="space-y-1">
                <Badge>{content.about.founderLabel}</Badge>
                <h3 className="font-poppins text-2xl font-bold text-text sm:text-3xl">{content.about.founderName}</h3>
                <p className="text-sm font-medium text-primary">{content.about.founderUniversity}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="brand-card w-full border-primary/15 bg-gradient-to-br from-primary/5 via-white to-accent/10 p-6 sm:p-8"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-brand-gradient text-white shadow-soft">
                  <Landmark className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{content.about.label}</p>
                  <h3 className="mt-2 font-poppins text-2xl font-bold text-text">{content.about.heading}</h3>
                </div>
              </div>

              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

              <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
                <p>{content.about.introCard}</p>
                <p>{content.about.launchDate}</p>
              </div>

              <div className="mt-6 rounded-3xl border border-primary/20 bg-gradient-to-b from-white via-white to-primary/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/20 text-primary-dark">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-poppins text-lg font-bold text-text">{content.about.values.heading}</p>
                  </div>
                </div>

                <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                <div className="mt-4 flex flex-wrap gap-2">
                  {content.about.values.items.map((value) => (
                    <Badge key={value} variant="social" className="normal-case tracking-normal">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="brand-card bg-gradient-to-br from-white via-white to-primary/5 p-6 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mt-2 font-poppins text-2xl font-bold text-text">
                {content.about.vision.heading} & {content.about.mission.heading}
              </h3>
            </div>
          </div>

          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-gradient-to-b from-white via-white to-primary/5 p-5 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Eye className="h-5 w-5" />
              </div>
              <h4 className="mt-2 font-poppins text-xl font-bold text-text">{content.about.vision.heading}</h4>
              <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
              <p className="mt-3 text-sm leading-7 text-muted">{content.about.vision.content}</p>
            </div>

            <div className="rounded-3xl border border-border bg-gradient-to-b from-white via-white to-accent/10 p-5 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-primary-dark">
                <Rocket className="h-5 w-5" />
              </div>
              <h4 className="mt-2 font-poppins text-xl font-bold text-text">{content.about.mission.heading}</h4>
              <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <ul className="mx-auto mt-4 max-w-xl space-y-3 text-left text-sm leading-7 text-muted">
                {content.about.mission.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
