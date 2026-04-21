'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
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
      await fetch('YOUR_GOOGLE_SCRIPT_URL', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
      })
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', role: '' })
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-white/[0.02] blur-3xl top-1/4 left-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-white"></span>
            </span>
            <span className="text-[10px] md:text-xs text-white/70 font-medium tracking-wide uppercase">Waitlist Open</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]"
          >
            Be first in line.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-lg text-white/50 leading-relaxed"
          >
            Early-access members get 50% off launch pricing, direct input on the roadmap, 
            and a personal onboarding session with the founders.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <div className="p-5 md:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10">
            {submitted ? (
              <div className="text-center py-4 md:py-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-2">You're in.</h3>
                <p className="text-white/50 text-xs md:text-sm">We'll reach out personally within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <FormField 
                  id="name" 
                  label="Full Name" 
                  required 
                  value={formData.name} 
                  onChange={(v) => setFormData({ ...formData, name: v })} 
                  placeholder="John Doe" 
                />
                <FormField 
                  id="email" 
                  label="Work Email" 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={(v) => setFormData({ ...formData, email: v })} 
                  placeholder="john@restaurant.com" 
                />
                <FormField 
                  id="company" 
                  label="Restaurant Name" 
                  value={formData.company} 
                  onChange={(v) => setFormData({ ...formData, company: v })} 
                  placeholder="Sunrise Bistro" 
                />
                <div>
                  <label htmlFor="role" className="block text-[11px] md:text-xs font-medium mb-1.5 text-white/70 uppercase tracking-wide">Role</label>
                  <select 
                    id="role" 
                    value={formData.role} 
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })} 
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm appearance-none cursor-pointer focus:border-white/30 focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-[#0a0a0a]">Select…</option>
                    <option value="owner" className="bg-[#0a0a0a]">Owner / Founder</option>
                    <option value="gm" className="bg-[#0a0a0a]">General Manager</option>
                    <option value="operations" className="bg-[#0a0a0a]">Operations</option>
                    <option value="finance" className="bg-[#0a0a0a]">Finance / Accounting</option>
                    <option value="other" className="bg-[#0a0a0a]">Other</option>
                  </select>
                </div>
                
                {error && <p className="text-red-400 text-xs">{error}</p>}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining…' : (
                    <>
                      Request Early Access
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-[10px] md:text-xs text-white/30 text-center">No spam. We only email about launch updates.</p>
              </form>
            )}
          </div>

          {/* Benefits */}
          <div className="mt-4 md:mt-5 grid grid-cols-3 gap-2 md:gap-3">
            {[
              { title: 'Early Access', sub: 'Be first' },
              { title: '50% Off', sub: 'Launch year' },
              { title: 'Shape It', sub: 'Roadmap input' },
            ].map((b) => (
              <div key={b.title} className="p-2.5 md:p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                <p className="font-medium text-[11px] md:text-sm">{b.title}</p>
                <p className="text-[9px] md:text-[11px] text-white/40 mt-0.5">{b.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FormField({ id, label, type = 'text', required, value, onChange, placeholder }: {
  id: string; label: string; type?: string; required?: boolean; value: string; onChange: (v: string) => void; placeholder: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] md:text-xs font-medium mb-1.5 text-white/70 uppercase tracking-wide">
        {label} {required && <span className="text-white/30">*</span>}
      </label>
      <input 
        type={type} 
        id={id} 
        required={required} 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:border-white/30 focus:outline-none transition-colors" 
        placeholder={placeholder} 
      />
    </div>
  )
}