'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const problems = [
  {
    stat: '96%',
    label: 'of operators face supply delays or shortages',
    source: 'National Restaurant Association, 2022',
  },
  {
    stat: '~5%',
    label: 'typical pre-tax restaurant margin',
    source: 'NRA industry data',
  },
  {
    stat: '30 days',
    label: 'to onboard a new vendor at formal buyers',
    source: 'HBR, 2023',
  },
]

export function WhyAcore() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] md:text-xs text-white/70 font-medium tracking-wide uppercase">Why we exist</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]"
          >
            Restaurants run on thin margins.<br />
            <span className="text-white/60">Compliance shouldn't break them.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto"
          >
            Independent restaurants manage dozens of vendors, constant document chasing, 
            co-op obligations, and regulatory patchwork — all without a compliance team. 
            The cost of getting it wrong is measured in missed rebates, failed audits, and 5-figure fines.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-12 md:mb-20"
        >
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="p-5 md:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10"
            >
              <p className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent mb-2 md:mb-3">
                {item.stat}
              </p>
              <p className="text-sm md:text-base text-white/70 leading-snug mb-2">{item.label}</p>
              <p className="text-[10px] md:text-xs text-white/30">{item.source}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {/* Before */}
          <div className="p-5 md:p-8 rounded-2xl bg-red-500/[0.03] border border-red-500/10">
            <div className="flex items-center gap-2 mb-4 md:mb-5">
              <div className="w-6 h-6 rounded-md bg-red-500/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-white/90">Without Acore</h3>
            </div>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                'Contracts scattered across email, drawers, and QuickBooks',
                'Miss a COI expiration → vendor uninsured → you\'re liable',
                'Miss termination window → auto-renew locks you in',
                'Forget rebate filing → $1,000s left on the table',
                'Health inspector shows up → spend hours hunting for docs',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/60">
                  <span className="text-red-400 mt-1 flex-shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-5 md:p-8 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/10">
            <div className="flex items-center gap-2 mb-4 md:mb-5">
              <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-white/90">With Acore</h3>
            </div>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                'Every contract, COI, and permit in one structured vault',
                'Auto-alerts 30/14/7 days before any expiration',
                'Renewal countdown with termination-window warnings',
                'Rebate deadlines tracked — never leave money behind',
                'Audit-ready export: every doc, every date, in one click',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-white/80">
                  <span className="text-emerald-400 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}