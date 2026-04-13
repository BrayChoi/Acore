'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    bio: 'Former compliance officer at Fortune 500',
    avatar: 'SC',
    socials: [
      { platform: 'github', url: 'https://github.com/sarahchen' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/sarahchen' },
      { platform: 'twitter', url: 'https://twitter.com/sarahchen' },
    ],
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO & Co-founder',
    bio: 'Ex-Stripe engineer',
    avatar: 'MJ',
    socials: [
      { platform: 'github', url: 'https://github.com/marcusjohnson' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/marcusjohnson' },
    ],
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Product',
    bio: 'Product leader from Notion',
    avatar: 'ER',
    socials: [
      { platform: 'github', url: 'https://github.com/elenarodriguez' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/elenarodriguez' },
      { platform: 'twitter', url: 'https://twitter.com/elenarodriguez' },
    ],
  },
  {
    name: 'David Kim',
    role: 'Head of Customer Success',
    bio: 'Helped 200+ small businesses at Gusto',
    avatar: 'DK',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com/in/davidkim' },
      { platform: 'twitter', url: 'https://twitter.com/davidkim' },
    ],
  },
]

const SocialIcons: Record<string, JSX.Element> = {
  github: (
    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
}

function TeamMember({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-center"
    >
      <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
        <div className="team-avatar-bg rotate-6 group-hover:rotate-12" />
        <div className="relative w-full h-full bg-surface-100 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold border border-white/10 group-hover:border-white/20 transition-all">
          {member.avatar}
        </div>
      </div>

      <h3 className="text-base md:text-lg font-semibold mb-0.5 md:mb-1">{member.name}</h3>
      <p className="text-xs md:text-sm text-white/60 mb-2 md:mb-3">{member.role}</p>
      <p className="text-xs md:text-sm text-white/40">{member.bio}</p>

      <div className="flex items-center justify-center gap-2 md:gap-3 mt-3 md:mt-4">
        {member.socials.map((social) => (
          
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
            aria-label={`${member.name}'s ${social.platform}`}
          >
            {SocialIcons[social.platform]}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export function Team() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="team" className="relative py-16 md:py-32 overflow-hidden">
      <div className="glow-orb glow-orb-soft w-[200px] h-[200px] md:w-[400px] md:h-[400px] bottom-0 right-0" />

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
            <span className="text-xs md:text-sm text-white/70 font-medium">Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Built by experts who<br />
            <span className="gradient-text">understand your challenges</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/50 text-sm md:text-lg px-4 md:px-0"
          >
            Our team combines deep expertise in compliance, technology, and small business operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {team.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-20 text-center p-6 md:p-10 rounded-2xl md:rounded-3xl glass"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2">Join our team</h3>
          <p className="text-white/50 text-sm md:text-base mb-4 md:mb-6">We're always looking for talented people who share our mission.</p>
          <a 
            href="mailto:careers@acore.io" 
            className="btn-secondary inline-flex px-5 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base"
          >
            View open positions
            <svg className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}