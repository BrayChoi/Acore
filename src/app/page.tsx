import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { WhyAcore } from '@/components/WhyAcore'
import { Features } from '@/components/Features'
import { InteractiveDemo } from '@/components/InteractiveDemo'
import { Team } from '@/components/Team'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <WhyAcore />
      <Features />
      <InteractiveDemo />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}