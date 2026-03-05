import {
  Navigation,
  Hero,
  Features,
  InteractiveDemo,
  Resources,
  Team,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation - Sticky header */}
      <Navigation />
      
      {/* Hero - Main headline and product preview */}
      <Hero />
      
      {/* Features - 6 feature cards */}
      <Features />
      
      {/* Interactive Demo - Clickable product demo */}
      <InteractiveDemo />
      
      {/* Resources - Guides, case studies, documentation */}
      <Resources />
      
      {/* Team - Team members with social links */}
      <Team />
      
      {/* Contact/Waitlist - Join waitlist form */}
      <Contact />
      
      {/* Footer - Links and social */}
      <Footer />
    </main>
  )
}
