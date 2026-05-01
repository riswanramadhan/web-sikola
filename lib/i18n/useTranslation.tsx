'use client'

import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { en } from './en'
import { id } from './id'
import type { Locale, SiteContent } from './types'

interface LanguageContextValue {
  lang: Locale
  setLang: (lang: Locale) => void
  content: SiteContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>('id')

  useEffect(() => {
    const storedLang = window.localStorage.getItem('sikola-lang')
    if (storedLang === 'id' || storedLang === 'en') {
      setLang(storedLang)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('sikola-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const content = lang === 'id' ? id : en

  const value = useMemo(
    () => ({ lang, setLang, content }),
    [content, lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useTranslation must be used inside LanguageProvider')
  }

  return context
}