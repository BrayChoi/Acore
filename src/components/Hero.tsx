'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-60" />
      
      {/* Glow effects */}
      <div className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full bg-white/[0.03] blur-3xl -top-20 md:-top-40 left-1/2 -translate-x-1/2" />
      <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-white/[0.02] blur-3xl top-1/3 -right-10 md:-right-20" />
      <div className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-white/[0.02] blur-3xl bottom-1/4 -left-10 md:-left-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6 md:mb-8"
          >
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-white"></span>
            </span>
            <span className="text-[10px] md:text-xs text-white/70 font-medium tracking-wide uppercase">Built for Independent Restaurants</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-4 md:mb-6"
          >
            The compliance layer<br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
              for your restaurant.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm md:text-lg lg:text-xl text-white/50 mb-8 md:mb-10 leading-relaxed px-2 md:px-0"
          >
            Centralize every vendor contract, COI, permit, and co-op obligation in one control plane.
            Stop chasing documents. Stop missing rebates. Stop letting compliance be the thing that breaks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 px-4 md:px-0"
          >
            <Link 
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-xl bg-white text-black font-medium text-sm md:text-base hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            >
              Join the Waitlist
              <svg className="ml-2 w-4 h-4 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="#demo" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm md:text-base hover:bg-white/10 transition-all backdrop-blur-xl"
            >
              See how it works
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-12 md:mb-16 text-[10px] md:text-xs text-white/40"
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Bank-grade encryption
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span>SOC 2 on roadmap</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span>Made for SMB margins</span>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl md:rounded-[40px] blur-2xl" />
            
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/10 shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#0a0a0a] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-2 md:mx-4">
                  <div className="max-w-[240px] md:max-w-xs mx-auto h-6 md:h-7 rounded-md bg-white/[0.03] flex items-center justify-center border border-white/5">
                    <span className="text-[9px] md:text-[10px] text-white/40 font-mono">app.acorehq.com</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-3 md:p-6 lg:p-8">
                {/* Risk Exposure Header */}
                <div className="flex items-center justify-between mb-4 md:mb-6 flex-wrap gap-2">
                  <div>
                    <p className="text-[10px] md:text-xs text-white/40 mb-0.5 md:mb-1">Risk Exposure — Next 30 Days</p>
                    <h3 className="text-base md:text-xl font-semibold">Control Plane</h3>
                  </div>
                  <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] md:text-xs text-emerald-400 font-medium">92% Coverage</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="p-2.5 md:p-4 rounded-lg md:rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-[9px] md:text-[11px] text-white/40 mb-0.5 md:mb-1 uppercase tracking-wide">Vendors</p>
                    <p className="text-lg md:text-2xl font-bold">24</p>
                    <p className="text-[9px] md:text-[11px] text-emerald-400 mt-0.5">All active</p>
                  </div>
                  <div className="p-2.5 md:p-4 rounded-lg md:rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-[9px] md:text-[11px] text-white/40 mb-0.5 md:mb-1 uppercase tracking-wide">Expiring</p>
                    <p className="text-lg md:text-2xl font-bold">3</p>
                    <p className="text-[9px] md:text-[11px] text-yellow-400 mt-0.5">Next 14 days</p>
                  </div>
                  <div className="p-2.5 md:p-4 rounded-lg md:rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-[9px] md:text-[11px] text-white/40 mb-0.5 md:mb-1 uppercase tracking-wide">Rebates</p>
                    <p className="text-lg md:text-2xl font-bold">$4.2K</p>
                    <p className="text-[9px] md:text-[11px] text-emerald-400 mt-0.5">YTD earned</p>
                  </div>
                  <div className="p-2.5 md:p-4 rounded-lg md:rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-[9px] md:text-[11px] text-white/40 mb-0.5 md:mb-1 uppercase tracking-wide">At Risk</p>
                    <p className="text-lg md:text-2xl font-bold">$1.2K</p>
                    <p className="text-[9px] md:text-[11px] text-red-400 mt-0.5">Unfiled Q1</p>
                  </div>
                </div>

                {/* Obligations List — hidden on small mobile */}
                <div className="hidden sm:block rounded-lg md:rounded-xl bg-white/[0.02] border border-white/5 p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h4 className="text-xs md:text-sm font-medium">Upcoming Obligations</h4>
                    <span className="text-[10px] md:text-xs text-white/40">This week</span>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <ObligationRow
                      status="red"
                      title="CleanPro Services — COI expires"
                      meta="Insurance certificate"
                      due="3 days"
                    />
                    <ObligationRow
                      status="yellow"
                      title="Co-op Q1 rebate filing"
                      meta="$1,200 at risk if missed"
                      due="7 days"
                    />
                    <ObligationRow
                      status="green"
                      title="Sysco Foods — W-9 renewed"
                      meta="Auto-verified by platform"
                      due="Complete"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ObligationRow({ status, title, meta, due }: { status: 'red' | 'yellow' | 'green'; title: string; meta: string; due: string }) {
  const colors = {
    red: { bg: 'bg-red-500/10', border: 'border-red-500/20', dot: 'bg-red-400', text: 'text-red-400' },
    yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', dot: 'bg-yellow-400', text: 'text-yellow-400' },
    green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', dot: 'bg-emerald-400', text: 'text-emerald-400' },
  }[status]

  return (
    <div className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
      <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${colors.dot} flex-shrink-0`} />
      <div className="flex-1 min-w-0">
        <p className="text-xs md:text-sm font-medium truncate">{title}</p>
        <p className="text-[10px] md:text-xs text-white/40 truncate">{meta}</p>
      </div>
      <span className={`text-[10px] md:text-xs ${colors.text} font-medium flex-shrink-0`}>{due}</span>
    </div>
  )
}