'use client'

import { useTranslation } from '@/lib/i18n/useTranslation'

export function LanguageToggle() {
  const { lang, setLang } = useTranslation()

  return (
    <div className="flex overflow-hidden rounded-full border border-border bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setLang('id')}
        className={`brand-focus px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
          lang === 'id' ? 'bg-brand-gradient text-white' : 'text-muted'
        }`}
        aria-pressed={lang === 'id'}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`brand-focus px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
          lang === 'en' ? 'bg-brand-gradient text-white' : 'text-muted'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}
