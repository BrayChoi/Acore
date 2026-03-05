'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Replace YOUR_GOOGLE_SCRIPT_URL with your actual Google Apps Script URL
      const response = await fetch('https://script.google.com/macros/s/AKfycbwDj7J6GLS12FLTJXsQhBBMs1OrJyk4bF7n_TBrIH3HRB-5aRe2mGoFndI-dBnczumk/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', role: '' })
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="glow-orb glow-orb-soft w-[500px] h-[500px] top-1/4 left-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="divider-glow mb-20" />
        
        <div ref={sectionRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-sm text-white/70 font-medium">Join the Waitlist</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Be the first to
            <br />
            <span className="gradient-text">experience Acore</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/50 text-lg"
          >
            We're building the future of compliance management for small businesses. 
            Join the waitlist to get early access and exclusive launch benefits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <div className="flex -space-x-2">
              {['SC', 'MJ', 'ER', 'DK', '+'].map((initials, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-surface-200 border-2 border-surface flex items-center justify-center text-xs font-medium"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/50">
              <span className="text-white font-medium">500+</span> businesses already on the waitlist
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <div className="p-8 rounded-3xl glass">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-white/50 mb-6">We'll notify you as soon as Acore launches.</p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white/70">In the meantime, follow us for updates:</p>
                  <div className="flex justify-center gap-3 mt-3">
                    {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">Full Name <span className="text-red-400">*</span></label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 transition-all focus:border-white/30 focus:outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">Work Email <span className="text-red-400">*</span></label>
                  <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 transition-all focus:border-white/30 focus:outline-none" placeholder="john@restaurant.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-white/80">Restaurant / Business Name</label>
                  <input type="text" id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 transition-all focus:border-white/30 focus:outline-none" placeholder="Sunrise Bistro" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2 text-white/80">Your Role</label>
                  <select id="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all focus:border-white/30 focus:outline-none appearance-none cursor-pointer">
                    <option value="" className="bg-surface-100">Select your role</option>
                    <option value="owner" className="bg-surface-100">Owner / Founder</option>
                    <option value="gm" className="bg-surface-100">General Manager</option>
                    <option value="operations" className="bg-surface-100">Operations Manager</option>
                    <option value="finance" className="bg-surface-100">Finance / Accounting</option>
                    <option value="other" className="bg-surface-100">Other</option>
                  </select>
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    <>
                      Join the Waitlist
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-xs text-white/30 text-center">No spam, ever. We'll only email you about launch updates and early access.</p>
              </form>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🚀', title: 'Early Access', desc: 'Be first to try Acore' },
              { icon: '💰', title: 'Launch Discount', desc: '50% off first year' },
              { icon: '🎯', title: 'Shape the Product', desc: 'Direct input on features' },
            ].map((benefit) => (
              <div key={benefit.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <span className="text-2xl">{benefit.icon}</span>
                <h4 className="font-medium text-sm mt-2">{benefit.title}</h4>
                <p className="text-xs text-white/40 mt-1">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
