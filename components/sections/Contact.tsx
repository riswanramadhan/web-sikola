'use client'

import type { ReactNode } from 'react'
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'
import { Mail, MapPin, Phone, MessageCircleMore } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { contactLinks } from '@/lib/i18n/shared'
import { useTranslation } from '@/lib/i18n/useTranslation'

function ContactInfoCard({
  icon,
  label,
  value,
  href,
  external = false,
  iconClassName = 'bg-brand-gradient text-white'
}: {
  icon: ReactNode
  label: string
  value: string
  href: string
  external?: boolean
  iconClassName?: string
}) {
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer noopener' : undefined} className="brand-focus block w-full">
      <Card className="flex items-start gap-4 p-5 transition-transform duration-300 hover:-translate-y-1">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClassName}`}>{icon}</div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{label}</p>
          <p className="mt-2 text-sm font-medium leading-7 text-text">{value}</p>
        </div>
      </Card>
    </a>
  )
}

export function Contact() {
  const { content } = useTranslation()

  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <SectionHeading label={content.nav.contact} heading={content.contact.heading} subtext={content.contact.subtext} centered />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <ContactInfoCard
            icon={<Mail className="h-5 w-5" />}
            label={content.contact.emailLabel}
            value="sikolaindonesia@gmail.com"
            href={contactLinks.email}
          />
          <ContactInfoCard
            icon={<Phone className="h-5 w-5" />}
            label={content.contact.phoneLabel}
            value="+62 851 8566 3696"
            href={contactLinks.whatsapp}
            external
            iconClassName="bg-accent text-primary-dark"
          />
          <ContactInfoCard
            icon={<MapPin className="h-5 w-5" />}
            label={content.contact.addressLabel}
            value="Jl. Utama Unhas, Tamalanrea Indah, Kota Makassar"
            href={contactLinks.address}
            external
          />
        </div>

        <div className="space-y-6">
          <Card className="overflow-hidden bg-brand-gradient p-6 text-white shadow-lift">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl shadow-sm">
                <MessageCircleMore className="h-6 w-6" />
              </div>
              <div className="max-w-md">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">WhatsApp</p>
                <h3 className="mt-2 font-poppins text-xl font-bold sm:text-2xl">{content.contact.whatsappChannelLabel}</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">{content.contact.whatsappDescription}</p>
              </div>
            </div>
            <div className="mt-6 border-t border-white/15 pt-5">
              <Button href={contactLinks.whatsappChannel} external variant="accent">
                {content.contact.whatsappButton}
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{content.contact.socialHeading}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={contactLinks.instagram} target="_blank" rel="noreferrer noopener" aria-label={content.contact.socialButtons.instagram} className="brand-focus flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-yellow-400 text-white transition hover:scale-110">
                <FaInstagram />
              </a>
              <a href={contactLinks.tiktok} target="_blank" rel="noreferrer noopener" aria-label={content.contact.socialButtons.tiktok} className="brand-focus flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:scale-110">
                <FaTiktok />
              </a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer noopener" aria-label={content.contact.socialButtons.linkedin} className="brand-focus flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white transition hover:scale-110">
                <FaLinkedinIn />
              </a>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading label={content.contact.faqLabel} heading={content.contact.faqHeading} subtext="" />
        </div>
        <FAQAccordion items={content.contact.faq} />
      </div>
    </section>
  )
}
