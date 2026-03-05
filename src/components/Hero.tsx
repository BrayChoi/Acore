'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background" />
      
      {/* Glowing orbs */}
      <div className="glow-orb glow-orb-white w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 animate-glow-pulse" />
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glow-orb glow-orb-soft w-[400px] h-[400px] top-1/3 -right-20"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="glow-orb glow-orb-soft w-[300px] h-[300px] bottom-1/4 -left-20"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-sm text-white/70">
              Now serving 500+ small businesses
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Compliance,
            <br />
            <span className="shimmer-text">simplified.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 leading-relaxed"
          >
            Manage your monthly expenses, utilities, and vendor relationships 
            without the overhead of an HR team. Acore streamlines compliance 
            for small businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link href="#contact" className="btn-primary text-base px-8 py-4">
              Join the waitlist
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="#product" className="btn-secondary text-base px-8 py-4">
              <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View demo
            </Link>
          </motion.div>

          {/* Product Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Glow behind the preview */}
            <div className="absolute -inset-8 bg-white/5 rounded-[40px] blur-3xl" />
            
            {/* Preview container */}
            <div className="relative rounded-3xl overflow-hidden dashboard-glow bg-surface-50">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-4 bg-surface-100 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-red-400/80 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-yellow-400/80 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-green-400/80 transition-colors cursor-pointer" />
                </div>
                <div className="flex-1 mx-6">
                  <div className="max-w-sm mx-auto h-8 rounded-lg bg-surface-200 flex items-center justify-center border border-white/5">
                    <span className="text-xs text-white/40">app.acore.io/dashboard</span>
                  </div>
                </div>
              </div>
              
              {/* Dashboard Preview */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                  {[
                    { label: 'Active Vendors', value: '24', trend: '+3 this month' },
                    { label: 'Compliance Rate', value: '98.2%', trend: '↑ 2.4%' },
                    { label: 'Monthly Savings', value: '$4,280', trend: 'vs. last quarter' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="stat-card"
                    >
                      <p className="text-sm text-white/40 mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold mb-1">{stat.value}</p>
                      <p className="text-sm text-white/60">{stat.trend}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Compliance Tracker */}
                <div className="rounded-2xl bg-surface-100 border border-white/5 p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-medium">Compliance Status</h3>
                    <span className="text-sm text-white/40">January 2026</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'Electricity - PG&E', status: 'Compliant', progress: 100 },
                      { name: 'Gas - SoCalGas', status: 'Compliant', progress: 100 },
                      { name: 'Mortgage - Wells Fargo', status: 'Review Needed', progress: 85 },
                    ].map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                          {item.progress === 100 ? (
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium mb-2">{item.name}</p>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  item.progress === 100 ? 'bg-white progress-glow' : 'bg-white/50'
                                }`}
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                            <span className={`text-xs ${item.progress === 100 ? 'text-white/60' : 'text-white/40'}`}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  )
}
