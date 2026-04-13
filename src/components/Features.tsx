'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '📋',
    title: 'Vendor Management',
    description: 'Track all supplier relationships, contracts, and payment terms in one centralized dashboard.',
  },
  {
    icon: '📄',
    title: 'Document Vault',
    description: 'Securely store W-9s, COIs, licenses, and contracts with automatic expiration tracking.',
  },
  {
    icon: '⏰',
    title: 'Obligation Tracking',
    description: 'Never miss a renewal, permit, or compliance deadline with smart reminders.',
  },
  {
    icon: '🤝',
    title: 'Co-op Management',
    description: 'Track purchasing compliance, maximize rebates, and manage approved vendor lists.',
  },
  {
    icon: '📊',
    title: 'Compliance Analytics',
    description: 'Visualize your compliance health at a glance with real-time dashboards and scores.',
  },
  {
    icon: '🔗',
    title: 'Seamless Integrations',
    description: 'Connect with your existing POS, accounting software, and banking platforms.',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card group p-5 md:p-8 rounded-2xl md:rounded-3xl"
    >
      <div className="icon-box w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl mb-4 md:mb-6 text-lg md:text-2xl">
        {feature.icon}
      </div>
      <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
      <p className="text-white/50 text-sm md:text-base leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="product" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-50" />
      <div className="glow-orb glow-orb-soft w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-1/2 -left-20 md:-left-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="divider-glow mb-12 md:mb-20" />

        <div ref={sectionRef} className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass mb-4 md:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-xs md:text-sm text-white/70 font-medium">Product</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Everything you need to<br />
            <span className="gradient-text">stay compliant</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/50 text-sm md:text-lg px-4 md:px-0"
          >
            Built for restaurant SMBs that don't have the luxury of a dedicated compliance team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}