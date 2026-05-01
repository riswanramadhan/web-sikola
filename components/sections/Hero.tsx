'use client'

import { ArrowRight, Award, CalendarDays, HeartHandshake, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/lib/i18n/useTranslation'

const statIcons = [Award, CalendarDays, HeartHandshake]

function Counter({ value }: { value: string }) {
  const target = Number.parseInt(value.replace(/\D/g, ''), 10)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.4 }
    )

    const element = document.getElementById('hero-stats')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) {
      return
    }

    const duration = 1200
    const steps = 36
    const increment = Math.max(1, Math.ceil(target / steps))
    const interval = window.setInterval(() => {
      setCount((current) => {
        if (current >= target) {
          window.clearInterval(interval)
          return target
        }
        return Math.min(target, current + increment)
      })
    }, duration / steps)

    return () => window.clearInterval(interval)
  }, [hasAnimated, target])

  return (
    <span className="text-3xl font-bold text-primary-dark sm:text-4xl">
      {count}
      {value.includes('+') ? '+' : ''}
    </span>
  )
}

export function Hero() {
  const { content } = useTranslation()
  const topWords = useMemo(() => content.hero.headlineTop.split(' '), [content.hero.headlineTop])
  const bottomWords = useMemo(() => content.hero.headlineBottom.split(' '), [content.hero.headlineBottom])

  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden pt-22 sm:pt-24">
      <div className="absolute inset-0 -z-10 bg-hero-mesh opacity-90" />
      <div className="absolute left-10 top-24 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-floaty" />
      <div className="absolute right-10 top-40 -z-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl animate-floaty" />

      <div className="section-shell flex min-h-[calc(100vh-5rem)] items-center pt-10 sm:pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            {content.hero.label}
          </motion.div>

          <div className="mt-8 flex justify-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } }
              }}
              className="relative inline-flex flex-col items-start overflow-visible text-left font-poppins text-[4.2rem] font-extrabold leading-[0.9] tracking-tight sm:text-[5.6rem] lg:text-[8.9rem]"
            >
              <span
                className="block"
                style={{
                  marginTop: '-0.04em'
                }}
              >
                <motion.span
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #053c63 0%, #045498 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                  }}
                >
                  Let's Grow
                </motion.span>
              </span>
              <span className="block">
                <motion.span
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="relative inline-block"
                  style={{
                    marginTop: '0em',
                    paddingRight: 'clamp(4.8rem, 10vw, 9.25rem)',
                    fontSize: '0.585em',
                    lineHeight: 0.90,
                    isolation: 'isolate'
                  }}
                >
                  <span
                    className="relative z-10 inline-block bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #fef626 0%, #fdaf0f 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      color: 'transparent'
                    }}
                  >
                    To Be Successful
                  </span>
                  <img
                    src="/images/bintang.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute"
                    style={{
                      right: '-1rem',
                      top: '55%',
                      zIndex: 0,
                      width: 'clamp(6.5rem, 13vw, 11rem)',
                      height: 'clamp(6.5rem, 13vw, 11rem)',
                      objectFit: 'contain',
                      objectPosition: 'center bottom',
                      transform: 'translate(-30%, -50%) rotate(-7deg)'
                    }}
                  />
                </motion.span>
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg"
          >
            {content.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Button href="#programs">
              {content.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="outline">
              {content.hero.ctaSecondary}
            </Button>
          </motion.div>

          <div id="hero-stats" className="mt-10 grid gap-4 rounded-3xl border border-border bg-white/80 p-4 shadow-soft backdrop-blur-sm sm:grid-cols-3 sm:p-6">
            {content.hero.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex min-h-[120px] items-center justify-start gap-4 rounded-2xl bg-bg px-5 py-5 text-left sm:px-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-accent shadow-sm ring-1 ring-border/70 sm:h-20 sm:w-20">
                  {(() => {
                    const Icon = statIcons[index] ?? Award
                    return <Icon className="h-10 w-10 sm:h-12 sm:w-12" />
                  })()}
                </div>
                <div className="min-w-0">
                  <Counter value={stat.value} />
                  <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
