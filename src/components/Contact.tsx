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
      const response = await fetch('YOUR_GOOGLE_SCRIPT_URL', {
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
    <section id="contact" className="relative py-16 md:py-32 overflow-hidden">
      <div className="glow-orb glow-orb-soft w-[300px] h-[300px] md:w-[500px] md:h-[500px] top-1/4 left-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="divider-glow mb-12 md:mb-20" />
        
        <div ref={sectionRef} className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass mb-4 md:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs md:text-sm text-white/70 font-medium">Join the Waitlist</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Be the first to<br />
            <span className="gradient-text">experience Acore</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/50 text-sm md:text-lg px-4 md:px-0"
          >
            We're building the future of compliance management. Join the waitlist for early access and exclusive launch benefits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8"
          >
            <div className="flex -space-x-2">
              {['SC', 'MJ', 'ER', 'DK', '+'].map((initials, i) => (
                <div 
                  key={i} 
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface-200 border-2 border-surface flex items-center justify-center text-[10px] md:text-xs font-medium"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm text-white/50">
              <span className="text-white font-medium">Limited spots</span> for early access
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl glass">
            {submitted ? (
              <div className="text-center py-6 md:py-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-white/50 text-sm md:text-base mb-4 md:mb-6">We'll notify you as soon as Acore launches.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-white/80">Full Name <span className="text-red-400">*</span></label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm md:text-base" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-white/80">Work Email <span className="text-red-400">*</span></label>
                  <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm md:text-base" placeholder="john@restaurant.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-white/80">Restaurant / Business Name</label>
                  <input type="text" id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm md:text-base" placeholder="Sunrise Bistro" />
                </div>
                <div>
                  <label htmlFor="role" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-white/80">Your Role</label>
                  <select id="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white text-sm md:text-base appearance-none cursor-pointer">
                    <option value="" className="bg-surface-100">Select your role</option>
                    <option value="owner" className="bg-surface-100">Owner / Founder</option>
                    <option value="gm" className="bg-surface-100">General Manager</option>
                    <option value="operations" className="bg-surface-100">Operations Manager</option>
                    <option value="finance" className="bg-surface-100">Finance / Accounting</option>
                    <option value="other" className="bg-surface-100">Other</option>
                  </select>
                </div>
                {error && <p className="text-red-400 text-xs md:text-sm">{error}</p>}
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                </button>
                <p className="text-[10px] md:text-xs text-white/30 text-center">No spam, ever. We'll only email you about launch updates.</p>
              </form>
            )}
          </div>

          <div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 md:gap-4">
            {[
              { icon: '🚀', title: 'Early Access', desc: 'Be first' },
              { icon: '💰', title: '50% Off', desc: 'Launch deal' },
              { icon: '🎯', title: 'Shape It', desc: 'Your input' },
            ].map((benefit) => (
              <div key={benefit.title} className="p-3 md:p-4 rounded-lg md:rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <span className="text-lg md:text-2xl">{benefit.icon}</span>
                <h4 className="font-medium text-[10px] md:text-sm mt-1 md:mt-2">{benefit.title}</h4>
                <p className="text-[10px] md:text-xs text-white/40 mt-0.5 md:mt-1">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}