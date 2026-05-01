'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { useTranslation } from '@/lib/i18n/useTranslation'

const sectionIds = ['hero', 'about', 'programs', 'mentors', 'contact'] as const

export function Navbar() {
  const { content } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY + 160
      setIsScrolled(window.scrollY > 24)

      let currentSection = 'hero'

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) {
          continue
        }

        if (section.offsetTop <= currentOffset) {
          currentSection = id
        }
      }

      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navItems = [
    { id: 'hero', label: content.nav.home },
    { id: 'about', label: content.nav.about },
    { id: 'programs', label: content.nav.programs },
    { id: 'mentors', label: content.nav.mentors },
    { id: 'contact', label: content.nav.contact }
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-border bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="brand-focus flex h-12 w-[180px] items-center sm:h-14 sm:w-[220px]"
        >
          <Image
            src="/images/logo-sikola.png"
            alt="Sikola Indonesia"
            width={220}
            height={56}
            className="h-full w-full object-contain object-left"
          />
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`brand-focus group relative text-sm font-medium ${active ? 'text-primary-dark' : 'text-muted'}`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute -bottom-2 left-0 h-0.5 w-full origin-left rounded-full bg-accent/40 transition-transform duration-300 ${
                    active ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="pointer-events-none absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent"
                  />
                ) : null}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="brand-focus inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text shadow-sm transition hover:-translate-y-0.5 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-white/95 px-4 pb-5 pt-2 shadow-lg backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`brand-focus rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    activeSection === item.id ? 'bg-primary/10 text-primary-dark' : 'text-text hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-2 border-t border-border/60 pt-3 text-center text-xs text-muted">
                Powered by{' '}
                <a
                  href="https://www.dekatlokal.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-bold underline"
                >
                  DekatLokal
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
