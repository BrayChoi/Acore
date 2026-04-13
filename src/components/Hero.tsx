'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-background" />
      
      <div className="glow-orb glow-orb-white w-[300px] h-[300px] md:w-[600px] md:h-[600px] -top-20 md:-top-40 left-1/2 -translate-x-1/2 animate-glow-pulse" />
      <div className="glow-orb glow-orb-soft w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-1/3 -right-10 md:-right-20" />
      <div className="glow-orb glow-orb-soft w-[150px] h-[150px] md:w-[300px] md:h-[300px] bottom-1/4 -left-10 md:-left-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 rounded-full glass mb-6 md:mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs md:text-sm text-white/70">Now accepting early access signups</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Compliance,<br />
            <span className="shimmer-text">simplified.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base md:text-xl text-white/50 mb-8 md:mb-12 leading-relaxed px-4 md:px-0"
          >
            Manage vendor relationships, track compliance obligations, and maximize co-op rebates — all without the overhead of an HR team. Built for restaurant SMBs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-20 px-4 md:px-0"
          >
            <Link href="#contact" className="btn-primary w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium justify-center">
              Join the Waitlist
              <svg className="ml-2 w-4 md:w-5 h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="#demo" className="btn-secondary w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium justify-center">
              <svg className="mr-2 w-4 md:w-5 h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-4 md:-inset-8 bg-white/5 rounded-2xl md:rounded-[40px] blur-2xl md:blur-3xl" />
            
            <div className="relative rounded-xl md:rounded-3xl overflow-hidden dashboard-glow bg-surface-50">
              <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-4 bg-surface-100 border-b border-white/5">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20" />
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 mx-2 md:mx-6">
                  <div className="max-w-[200px] md:max-w-sm mx-auto h-6 md:h-8 rounded-md md:rounded-lg bg-surface-200 flex items-center justify-center border border-white/5">
                    <span className="text-[10px] md:text-xs text-white/40">app.acore.io/dashboard</span>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-8">
                <div className="grid grid-cols-3 gap-2 md:gap-5 mb-4 md:mb-6">
                  <div className="stat-card p-3 md:p-5 rounded-xl md:rounded-2xl">
                    <p className="text-[10px] md:text-sm text-white/40 mb-1 md:mb-2">Active Vendors</p>
                    <p className="text-lg md:text-3xl font-bold mb-0.5 md:mb-1">24</p>
                    <p className="text-[10px] md:text-sm text-green-400">+3 this month</p>
                  </div>
                  <div className="stat-card p-3 md:p-5 rounded-xl md:rounded-2xl">
                    <p className="text-[10px] md:text-sm text-white/40 mb-1 md:mb-2">Compliance</p>
                    <p className="text-lg md:text-3xl font-bold mb-0.5 md:mb-1">94%</p>
                    <p className="text-[10px] md:text-sm text-green-400">↑ 3%</p>
                  </div>
                  <div className="stat-card p-3 md:p-5 rounded-xl md:rounded-2xl">
                    <p className="text-[10px] md:text-sm text-white/40 mb-1 md:mb-2">Co-op Rebates</p>
                    <p className="text-lg md:text-3xl font-bold mb-0.5 md:mb-1">$4.2K</p>
                    <p className="text-[10px] md:text-sm text-white/60">YTD</p>
                  </div>
                </div>

                <div className="hidden sm:block rounded-xl md:rounded-2xl bg-surface-100 border border-white/5 p-4 md:p-5">
                  <div className="flex items-center justify-between mb-3 md:mb-5">
                    <h3 className="text-sm md:font-medium">Compliance Status</h3>
                    <span className="text-xs md:text-sm text-white/40">March 2026</span>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-400 text-sm md:text-base">✓</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">Sysco Foods - W-9 & COI</p>
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="flex-1 h-1 md:h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-full rounded-full bg-white progress-glow" />
                          </div>
                          <span className="text-[10px] md:text-xs text-white/60">Compliant</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-yellow-500/20 flex items-center justify-center">
                        <span className="text-yellow-400 text-sm md:text-base">!</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">CleanPro Services - COI Expiring</p>
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="flex-1 h-1 md:h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[75%] rounded-full bg-yellow-400" />
                          </div>
                          <span className="text-[10px] md:text-xs text-yellow-400">3 days left</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="scroll-indicator w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  )
}