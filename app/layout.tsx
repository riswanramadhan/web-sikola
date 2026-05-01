import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Sikola Indonesia — Platform Mentoring Mahasiswa',
  description:
    'Platform bimbingan personal untuk mahasiswa Indonesia: kompetisi, beasiswa, dan persiapan karier bersama mentor berprestasi.',
  keywords: [
    'mentoring mahasiswa',
    'beasiswa',
    'lomba mahasiswa',
    'sikola indonesia',
    'bimbingan kompetisi'
  ],
  openGraph: {
    title: 'Sikola Indonesia',
    description: "Let's Grow To Be Successful — Platform Mentoring Mahasiswa",
    locale: 'id_ID',
    type: 'website'
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
