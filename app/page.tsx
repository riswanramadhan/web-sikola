import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Mentors } from '@/components/sections/Mentors'
import { Navbar } from '@/components/layout/Navbar'
import { Programs } from '@/components/sections/Programs'
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton'

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Mentors />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}
