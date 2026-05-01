'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { FAQItem } from '@/lib/i18n/types'

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = index === openIndex
        const buttonId = `faq-button-${index}`
        const panelId = `faq-panel-${index}`

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              open
                ? 'border-primary/20 shadow-[0_20px_45px_-28px_rgba(4,84,152,0.4)] ring-1 ring-primary/10'
                : 'border-border shadow-sm hover:border-primary/15 hover:shadow-md'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              aria-expanded={open}
              aria-controls={panelId}
              id={buttonId}
              className={`brand-focus flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-all duration-300 ${
                open ? 'bg-gradient-to-r from-primary/6 via-white to-accent/10' : 'hover:bg-gray-50'
              }`}
            >
              <span className={`pr-2 font-poppins text-base ${open ? 'font-bold text-primary-dark' : 'font-semibold text-text'}`}>
                {item.question}
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                  open ? 'bg-primary text-white shadow-soft' : 'bg-primary/8 text-primary'
                }`}
              >
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-primary/10 bg-gradient-to-b from-white to-primary/5 px-5 pb-5 pt-4 text-sm leading-7 text-muted">
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
