import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sikola Indonesia | Platform Mentoring Mahasiswa',
  description:
    'Platform bimbingan personal untuk mahasiswa Indonesia: kompetisi, beasiswa, dan persiapan karier bersama mentor berprestasi.',
  keywords: [
    'mentoring mahasiswa',
    'beasiswa',
    'lomba mahasiswa',
    'sikola indonesia',
    'bimbingan kompetisi'
  ],
  icons: {
    icon: '/images/logo-sikolaa.png',
    shortcut: '/images/logo-sikolaa.png',
    apple: '/images/logo-sikolaa.png'
  },
  openGraph: {
    title: 'Sikola Indonesia',
    description: "Let's Grow To Be Successful — Platform Mentoring Mahasiswa",
    locale: 'id_ID',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/images/logo-sikolaa.png',
        width: 1200,
        height: 630,
        alt: 'Sikola Indonesia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sikola Indonesia',
    description: "Let's Grow To Be Successful — Platform Mentoring Mahasiswa",
    images: ['/images/logo-sikolaa.png']
  }
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} bg-bg font-sans text-text antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
