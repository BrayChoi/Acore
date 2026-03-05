'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { svg } from 'framer-motion/m'
import { useRef } from 'react'

// ============================================
// HOW TO ADD LINKS TO SOCIAL ICONS:
// ============================================
// Each team member has a 'socials' array with objects containing:
//   - platform: 'github' | 'linkedin' | 'twitter'
//   - url: the full URL to link to
// 
// To add a link, just add an object to the socials array:
//   { platform: 'github', url: 'https://github.com/username' }
//
// The icons will automatically render based on the platform name.
// ============================================

const team = [
  // {
  //   name: 'Sarah Chen',
  //   role: 'CEO & Co-founder',
  //   bio: 'Former compliance officer at Fortune 500',
  //   avatar: 'SC',
  //   socials: [
  //     { platform: 'github', url: 'https://github.com/sarahchen' },
  //     { platform: 'linkedin', url: 'https://linkedin.com/in/sarahchen' },
  //     { platform: 'twitter', url: 'https://twitter.com/sarahchen' },
  //   ],
  // },
  {
    name: 'Brayden Choi',
    role: 'Co-Founder',
    bio: 'Product Lead',
    avatar: 'BC',
    socials: [
      { platform: 'github', url: 'https://github.com/BrayChoi' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/brayden-choi-10177b2b8/' },
      { platform: 'gmail', url: 'mailto:brayfulachechoi@gmail.com' },
    ],
  },
  {
    name: 'Michael Park',
    role: 'Co-Founder',
    bio: 'Business Analyst',
    avatar: 'MP',
    socials: [
      //{ platform: 'github', url: 'https://github.com/elenarodriguez' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/michael-p-6558a4387/' },
      { platform: 'gmail', url: 'mailto:michaelpark20783@gmail.com' },
    ],
  },
  // {
  //   name: 'David Kim',
  //   role: 'Head of Customer Success',
  //   bio: 'Helped 200+ small businesses at Gusto',
  //   avatar: 'DK',
  //   socials: [
  //     { platform: 'linkedin', url: 'https://linkedin.com/in/davidkim' },
  //     { platform: 'twitter', url: 'https://twitter.com/davidkim' },
  //   ],
  // },
]

// Icon components for each social platform
const SocialIcons = {
  github: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  gmail:(
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
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
      {/* Avatar */}
      <div className="relative mx-auto w-32 h-32 mb-6">
        <div className="team-avatar-bg rotate-6 group-hover:rotate-12" />
        <div className="relative w-full h-full bg-surface-100 rounded-2xl flex items-center justify-center text-3xl font-bold border border-white/10 group-hover:border-white/20 transition-all">
          {member.avatar}
        </div>
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
      <p className="text-sm text-white/60 mb-3">{member.role}</p>
      <p className="text-sm text-white/40">{member.bio}</p>

      {/* Social Links - Always visible */}
      <div className="flex items-center justify-center gap-3 mt-4">
        {member.socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon hover:scale-110 transition-transform"
            aria-label={`${member.name}'s ${social.platform}`}
          >
            {SocialIcons[social.platform as keyof typeof SocialIcons]}
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
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="glow-orb glow-orb-soft w-[400px] h-[400px] bottom-0 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Divider */}
        <div className="divider-glow mb-20" />
        
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-sm text-white/70 font-medium">Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Built by experts who
            <br />
            <span className="gradient-text">understand your challenges</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/50 text-lg"
          >
            We've been in your shoes. Our team combines deep expertise in compliance, 
            technology, and small business operations.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center p-10 rounded-3xl glass"
        >
          <h3 className="text-xl font-semibold mb-2">Join our team</h3>
          <p className="text-white/50 mb-6">We're always looking for talented people who share our mission.</p>
          <a 
            href="mailto:careers@acore.io" 
            className="btn-secondary inline-flex"
          >
            View open positions
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
