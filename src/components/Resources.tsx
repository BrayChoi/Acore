'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const resources = [
  {
    type: 'Guide',
    title: 'The Complete Small Business Compliance Checklist for 2026',
    description: 'Everything you need to know about staying compliant with utilities, vendors, and expense reporting.',
    readTime: '12 min read',
  },
  {
    type: 'Case Study',
    title: 'How Sunrise Bakery Reduced Compliance Costs by 40%',
    description: 'Learn how a local bakery streamlined their vendor management and saved thousands annually.',
    readTime: '8 min read',
  },
  {
    type: 'Webinar',
    title: 'Utility Expense Management Best Practices',
    description: 'Join our expert panel discussing strategies for managing gas, electricity, and water expenses.',
    readTime: '45 min',
  },
]

const documentation = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Help Center',
    description: 'FAQs and troubleshooting guides',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Video Tutorials',
    description: 'Step-by-step visual walkthroughs',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Community',
    description: 'Connect with other Acore users',
  },
]

function ResourceCard({ resource, index }: { resource: typeof resources[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card group cursor-pointer"
    >
      {/* Icon placeholder */}
      <div className="relative h-40 mb-6 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-all group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80">
          {resource.type}
        </span>
        <span className="text-xs text-white/40">{resource.readTime}</span>
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors line-clamp-2">
        {resource.title}
      </h3>

      <p className="text-sm text-white/50 line-clamp-2 mb-4">
        {resource.description}
      </p>

      <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white/70 transition-colors">
        <span>Read more</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.article>
  )
}

export function Resources() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="resources" className="relative py-32 overflow-hidden">
      <div className="glow-orb glow-orb-soft w-[400px] h-[400px] top-1/3 -right-20" />

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
            <span className="text-sm text-white/70 font-medium">Resources</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            Learn, grow, and
            <br />
            <span className="gradient-text">stay informed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/50 text-lg"
          >
            Guides, case studies, and best practices to help you master 
            compliance management for your business.
          </motion.p>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {resources.map((resource, index) => (
            <ResourceCard key={resource.title} resource={resource} index={index} />
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {documentation.map((item) => (
            <a
              key={item.title}
              href="#"
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-all">
                {item.icon}
              </div>
              <div>
                <h4 className="font-medium text-sm group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-xs text-white/40 mt-1">{item.description}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
