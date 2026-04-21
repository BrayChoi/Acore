'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const team = [
  {
    name: 'Brayden Choi',
    role: 'Co-Founder',
    bio: 'Product',
    avatar: 'BC',
    linkedin: 'https://www.linkedin.com/in/brayden-choi-10177b2b8/',
    github: 'https://github.com/BrayChoi',
  },
  {
    name: 'Michael Park',
    role: 'Co-Founder',
    bio: 'Business Analyst',
    avatar: 'MP',
    linkedin: 'https://www.linkedin.com/in/michael-p-6558a4387/',
  },
]

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="relative py-20 md:py-32 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] md:text-xs text-white/70 font-medium tracking-wide uppercase">Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]"
          >
            Built by operators<br />
            <span className="text-white/60">for operators.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-lg text-white/50 leading-relaxed"
          >
            We've seen the piles of paperwork, the missed rebates, and the late-night document hunts. 
            We're building Acore to fix it.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-20 h-20 md:w-28 md:h-28 mb-4 md:mb-5">
                <div className="absolute inset-0 rounded-2xl bg-white/10 rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="relative w-full h-full bg-[#0a0a0a] rounded-2xl flex items-center justify-center text-xl md:text-2xl font-bold border border-white/10 group-hover:border-white/20 transition-all">
                  {member.avatar}
                </div>
              </div>

              <h3 className="text-sm md:text-lg font-semibold mb-0.5">{member.name}</h3>
              <p className="text-[11px] md:text-sm text-white/60 mb-1">{member.role}</p>
              <p className="text-[10px] md:text-xs text-white/40 mb-3 md:mb-4">{member.bio}</p>
              <div className="flex items-center justify-center gap-2">
                {/* LinkedIn */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/5 border border-white/10 items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}

                {/* GitHub */}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/5 border border-white/10 items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={`${member.name} GitHub`}
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.99 3.23 9.23 7.71 10.73.56.1.77-.24.77-.54v-1.9c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1 1.64-.77 2.04-1.2.1-.73.4-1.23.73-1.51-2.51-.28-5.15-1.25-5.15-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.4.1-2.92 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.38s1.92.13 2.82.38c2.15-1.45 3.1-1.15 3.1-1.15.6 1.52.22 2.64.1 2.92.72.79 1.16 1.79 1.16 3.02 0 4.32-2.65 5.28-5.17 5.55.41.36.78 1.08.78 2.18v3.23c0 .3.2.65.78.54 4.47-1.5 7.7-5.74 7.7-10.73C23.25 5.48 18.27.5 12 .5z"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}