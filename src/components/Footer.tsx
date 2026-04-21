'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative pt-12 md:pt-16 pb-8 md:pb-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-black font-bold text-sm">A</span>
            </div>
            <span className="text-base font-semibold">Acore</span>
          </Link>

          <div className="flex items-center gap-5 md:gap-7 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="mailto:hello@acorehq.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] md:text-xs text-white/30">© 2026 Acore, Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px] md:text-xs text-white/40">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
            </span>
            Building in public
          </div>
        </div>
      </div>
    </footer>
  )
}