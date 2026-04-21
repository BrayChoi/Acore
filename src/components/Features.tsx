'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const modules = [
  {
    number: '01',
    title: 'Vendor Relationship Hub',
    description: 'Every supplier, every contract, every document in one structured directory. Vendor profiles, risk scores, spend-per-vendor, and dependency indexing.',
    bullets: ['Vendor directory + profiles', 'W-9 & COI tracking', 'Risk score per vendor'],
  },
  {
    number: '02',
    title: 'Contract Intelligence Engine',
    description: 'Upload a contract — we extract renewal dates, auto-renewal clauses, termination windows, rebate structures, and insurance minimums.',
    bullets: ['Clause-level extraction', 'Renewal countdown timers', 'Side-by-side comparison'],
  },
  {
    number: '03',
    title: 'Compliance Tracker',
    description: 'Health permits, liquor licenses, food safety certs, OSHA, labor law. Jurisdiction-aware checklists so nothing falls through.',
    bullets: ['State-aware templates', 'Document vault', 'Audit-ready export'],
  },
  {
    number: '04',
    title: 'Co-op & Rebate Manager',
    description: 'Track purchasing thresholds, supplier approvals, and rebate filings. Stop leaving money on the table every quarter.',
    bullets: ['Threshold tracking', '"Money left on table" estimator', 'Quarterly filing calendar'],
  },
  {
    number: '05',
    title: 'Obligation Calendar',
    description: 'Every deadline — renewals, terminations, permits, inspections, rebates — in one calendar with escalating alerts.',
    bullets: ['Multi-channel alerts', '30/14/7 day warnings', 'Owner escalation rules'],
  },
  {
    number: '06',
    title: 'Risk & Exposure Dashboard',
    description: 'Not just storage — a control plane. Compliance heat map, financial impact of gaps, high-risk vendor concentration.',
    bullets: ['Compliance coverage score', 'Risk heat map', 'Exposure quantification'],
  },
]

function ModuleCard({ module, index }: { module: typeof modules[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative p-5 md:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/20 transition-all overflow-hidden"
    >
      {/* Subtle glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <span className="text-[10px] md:text-xs font-mono text-white/30 tracking-widest">{module.number}</span>
        </div>
        
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 tracking-tight">{module.title}</h3>
        <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-4 md:mb-5">{module.description}</p>
        
        <ul className="space-y-1.5 md:space-y-2 pt-3 md:pt-4 border-t border-white/5">
          {module.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-[11px] md:text-xs text-white/70">
              <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="product" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-white/[0.02] blur-3xl top-1/2 -left-20 md:-left-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="max-w-3xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] md:text-xs text-white/70 font-medium tracking-wide uppercase">Product</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]"
          >
            Six modules.<br />
            <span className="text-white/60">One control plane.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-lg text-white/50 leading-relaxed"
          >
            Think Rippling for HR compliance, Vanta for SOC 2, Ramp for spend — 
            but for restaurant vendor, regulatory, and contractual risk.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {modules.map((module, index) => (
            <ModuleCard key={module.number} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}