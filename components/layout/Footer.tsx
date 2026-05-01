"use client"

import Image from 'next/image'
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { contactLinks } from '@/lib/i18n/shared'
import { useTranslation } from '@/lib/i18n/useTranslation'

export function Footer() {
  const { content } = useTranslation()

  return (
    <footer className="bg-brand-gradient text-white">
      <div className="section-shell py-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-lg font-bold tracking-tight">Sikola Indonesia</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">{content.footer.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {content.footer.quickLinksHeading}
            </p>
            <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              {['hero', 'about', 'programs', 'mentors', 'contact'].map((item) => (
                <a key={item} href={`#${item}`} className="brand-focus text-white/80 transition hover:text-white">
                  {item === 'hero'
                    ? content.nav.home
                    : item === 'about'
                      ? content.nav.about
                      : item === 'programs'
                        ? content.nav.programs
                        : item === 'mentors'
                          ? content.nav.mentors
                          : content.nav.contact}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 border-t border-white/15 pt-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{content.footer.contactHeading}</p>
            <div className="mt-3 space-y-2 text-sm text-white/85">
              <a className="brand-focus flex items-center gap-3 transition hover:text-white" href={contactLinks.email}>
                <Mail className="h-4 w-4" />
                sikolaindonesia@gmail.com
              </a>
              <a className="brand-focus flex items-center gap-3 transition hover:text-white" href={contactLinks.whatsapp} target="_blank" rel="noreferrer noopener">
                <Phone className="h-4 w-4" />
                +62 851 8566 3696
              </a>
              <a className="brand-focus flex items-center gap-3 transition hover:text-white" href={contactLinks.address} target="_blank" rel="noreferrer noopener">
                <MapPin className="h-4 w-4" />
                Jl. Utama Unhas, Tamalanrea Indah, Kota Makassar
              </a>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{content.contact.socialHeading}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={contactLinks.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="brand-focus inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:-translate-y-1 hover:border-white hover:bg-white/10">
                  <FaInstagram />
                </a>
                <a href={contactLinks.tiktok} target="_blank" rel="noreferrer noopener" aria-label="TikTok" className="brand-focus inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:-translate-y-1 hover:border-white hover:bg-white/10">
                  <FaTiktok />
                </a>
                <a href={contactLinks.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="brand-focus inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:-translate-y-1 hover:border-white hover:bg-white/10">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="mt-4">
                <Button href={contactLinks.whatsappChannel} external variant="accent" className="shadow-none">
                  {content.contact.whatsappButton}
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Partner Digital</p>
              <a href="https://www.dekatlokal.com" target="_blank" rel="noreferrer noopener" aria-label="DekatLokal website" className="brand-focus mt-3 inline-flex">
                <Image src="/images/dekatlokal-logo.png" alt="DekatLokal" width={220} height={64} className="h-auto w-full max-w-[220px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-5 text-center text-sm text-white/75">
          © 2026 Sikola Indonesia. All Rights Reserved | Powered by{' '}
          <a
            href="https://www.dekatlokal.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold text-white underline decoration-white/80 decoration-2 underline-offset-4 transition hover:text-white/90"
          >
            DekatLokal
          </a>
        </div>
      </div>
    </footer>
  )
}
