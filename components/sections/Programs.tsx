'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircleMore, Rocket, Search, Sparkles, Trophy } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TabSystem } from '@/components/ui/TabSystem'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function Programs() {
  const { content } = useTranslation()
  const [tab, setTab] = useState<'mentoring' | 'social'>('mentoring')
  const [search, setSearch] = useState('')

  const filteredMentoring = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) {
      return content.programs.mentoring
    }
    return content.programs.mentoring.filter((item) => {
      const haystack = `${item.title} ${item.description}`.toLowerCase()
      return haystack.includes(query)
    })
  }, [content.programs.mentoring, search])

  const filteredSocial = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) {
      return content.programs.social
    }
    return content.programs.social.filter((item) => {
      const haystack = `${item.title} ${item.description}`.toLowerCase()
      return haystack.includes(query)
    })
  }, [content.programs.social, search])

  const filteredPrograms = tab === 'mentoring' ? filteredMentoring : filteredSocial

  useEffect(() => {
    const query = search.trim()
    if (!query) {
      return
    }

    if (tab === 'mentoring' && filteredMentoring.length === 0 && filteredSocial.length > 0) {
      setTab('social')
      return
    }

    if (tab === 'social' && filteredSocial.length === 0 && filteredMentoring.length > 0) {
      setTab('mentoring')
    }
  }, [filteredMentoring.length, filteredSocial.length, search, tab])

  const categoryIcons = {
    lomba: Trophy,
    beasiswa: Sparkles,
    karir: Rocket,
    social: MessageCircleMore
  } as const

  return (
    <section id="programs" className="section-shell scroll-mt-24">
      <SectionHeading
        label={content.programs.label}
        heading={content.programs.heading}
        subtext={content.programs.subtext}
        centered
      />

      <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-border bg-white p-4 shadow-soft lg:flex-row lg:items-center lg:justify-between">
        <TabSystem
          tabs={[
            { id: 'mentoring', label: content.programs.tabs.mentoring },
            { id: 'social', label: content.programs.tabs.social }
          ]}
          value={tab}
          onChange={(value) => setTab(value as 'mentoring' | 'social')}
        />

        <label className="flex items-center gap-3 rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-muted lg:w-96">
          <Search className="h-4 w-4 text-primary" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={content.programs.searchPlaceholder}
            className="w-full bg-transparent outline-none placeholder:text-muted"
          />
        </label>
      </div>

      <AnimatePresence mode="wait">
        {tab === 'mentoring' ? (
          <motion.div
            key="mentoring"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            <h3 className="font-poppins text-2xl font-bold text-text">{content.programs.mentoringHeading}</h3>
            <div className="mt-6 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.length ? (
                filteredPrograms.map((program) => {
                  const Icon = categoryIcons[program.category]
                  return (
                    <Card
                      key={program.title}
                      className="group flex h-full min-h-[320px] flex-col p-6 transition-transform duration-300 hover:-translate-y-2 hover:bg-cardHover"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Badge variant={program.category}>{content.programs.categoryLabels[program.category]}</Badge>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-bg text-primary shadow-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <h4 className="mt-5 line-clamp-2 font-poppins text-lg font-semibold text-text">{program.title}</h4>
                      <p className="mt-3 line-clamp-4 text-sm leading-7 text-muted">{program.description}</p>
                      <div className="mt-auto pt-6">
                        <Button href={program.link} external className="w-full">
                          {content.programs.registerNow}
                        </Button>
                      </div>
                    </Card>
                  )
                })
              ) : (
                <div className="col-span-full rounded-3xl border border-dashed border-border bg-white p-10 text-center text-muted">
                  {content.programs.noResults}
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            <h3 className="font-poppins text-2xl font-bold text-text">{content.programs.socialHeading}</h3>
            <div className="mt-6 space-y-5">
              {filteredPrograms.length ? (
                filteredPrograms.map((program) => {
                  const Icon = categoryIcons[program.category]
                  return (
                    <Card key={program.title} className="flex min-h-[180px] flex-col gap-5 p-6 lg:flex-row lg:items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <Badge variant="social">{content.programs.categoryLabels.social}</Badge>
                        <h4 className="mt-3 line-clamp-2 font-poppins text-xl font-bold text-primary-dark">{program.title}</h4>
                        <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted">{program.description}</p>
                      </div>
                      <Button href={program.link} external variant="outline" className="lg:min-w-44">
                        {content.programs.registerNow}
                      </Button>
                    </Card>
                  )
                })
              ) : (
                <div className="rounded-3xl border border-dashed border-border bg-white p-10 text-center text-muted">
                  {content.programs.noResults}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
