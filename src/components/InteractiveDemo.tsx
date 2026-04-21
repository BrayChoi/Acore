'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type TabType = 'dashboard' | 'vendors' | 'obligations' | 'contracts' | 'coop'

const tabs = [
  { id: 'dashboard' as TabType, label: 'Dashboard', short: 'Dash' },
  { id: 'vendors' as TabType, label: 'Vendors', short: 'Vendors' },
  { id: 'obligations' as TabType, label: 'Obligations', short: 'Tasks' },
  { id: 'contracts' as TabType, label: 'Contracts', short: 'Contracts' },
  { id: 'coop' as TabType, label: 'Co-op', short: 'Co-op' },
]

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')

  return (
    <section id="demo" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-white/[0.02] blur-3xl top-1/4 -right-20 md:-right-40" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] md:text-xs text-white/70 font-medium tracking-wide uppercase">Live Preview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]"
          >
            See Acore in action.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm md:text-lg text-white/50"
          >
            Tap through the tabs to explore the control plane.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl md:rounded-[40px] blur-2xl" />
          
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/10 shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#0a0a0a] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-2 md:mx-4">
                <div className="max-w-[240px] md:max-w-xs mx-auto h-6 md:h-7 rounded-md bg-white/[0.03] flex items-center justify-center border border-white/5">
                  <span className="text-[9px] md:text-[10px] text-white/40 font-mono">app.acorehq.com/{activeTab}</span>
                </div>
              </div>
            </div>

            {/* Mobile Tab Bar */}
            <div className="md:hidden flex gap-1 p-2 overflow-x-auto bg-[#0a0a0a] border-b border-white/5 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-black font-medium'
                      : 'text-white/50 bg-white/5'
                  }`}
                >
                  {tab.short}
                </button>
              ))}
            </div>

            <div className="flex min-h-[460px] md:min-h-[540px]">
              {/* Desktop Sidebar */}
              <div className="w-52 lg:w-56 bg-[#080808] border-r border-white/5 p-4 hidden md:flex md:flex-col">
                <div className="flex items-center gap-2.5 mb-6 px-1">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">S</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">Sunrise Bistro</p>
                    <p className="text-[10px] text-white/40">3 locations</p>
                  </div>
                </div>

                <nav className="space-y-0.5">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all ${
                        activeTab === tab.id
                          ? 'bg-white/10 text-white'
                          : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-auto pt-6">
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Coverage</p>
                    <div className="flex items-end gap-1.5 mb-2">
                      <span className="text-xl font-bold">92%</span>
                      <span className="text-[10px] text-emerald-400 mb-1">↑ 3%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 md:p-6 overflow-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'dashboard' && <DashboardTab key="dashboard" />}
                  {activeTab === 'vendors' && <VendorsTab key="vendors" />}
                  {activeTab === 'obligations' && <ObligationsTab key="obligations" />}
                  {activeTab === 'contracts' && <ContractsTab key="contracts" />}
                  {activeTab === 'coop' && <CoopTab key="coop" />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const fade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.25 },
}

function DashboardTab() {
  return (
    <motion.div {...fade}>
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <h2 className="text-base md:text-xl font-semibold">Overview</h2>
        <span className="text-[10px] md:text-xs text-white/40">March 2026</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-5">
        {[
          { label: 'Vendors', value: '24', sub: 'All active', color: 'emerald' },
          { label: 'Expiring', value: '3', sub: '14 days', color: 'yellow' },
          { label: 'Rebates', value: '$4.2K', sub: 'YTD', color: 'emerald' },
          { label: 'At Risk', value: '$1.2K', sub: 'Unfiled', color: 'red' },
        ].map((stat) => (
          <div key={stat.label} className="p-2.5 md:p-3.5 rounded-lg bg-white/[0.03] border border-white/5">
            <p className="text-[9px] md:text-[10px] text-white/40 mb-0.5 uppercase tracking-wide">{stat.label}</p>
            <p className="text-base md:text-xl font-bold">{stat.value}</p>
            <p className={`text-[9px] md:text-[10px] mt-0.5 ${
              stat.color === 'emerald' ? 'text-emerald-400' : stat.color === 'yellow' ? 'text-yellow-400' : 'text-red-400'
            }`}>{stat.sub}</p>
          </div>
        ))}
      </div>

      <h3 className="text-[10px] md:text-xs font-medium mb-2 md:mb-3 text-white/60 uppercase tracking-wide">Action Required</h3>
      <div className="space-y-1.5 md:space-y-2">
        <ActionItem status="red" title="CleanPro COI expires in 3 days" cta="Request renewal" />
        <ActionItem status="yellow" title="Co-op Q1 rebate filing due in 7 days" cta="File now" />
        <ActionItem status="blue" title="Local Produce Co missing 2 documents" cta="Chase vendor" />
      </div>
    </motion.div>
  )
}

function ActionItem({ status, title, cta }: { status: 'red' | 'yellow' | 'blue'; title: string; cta: string }) {
  const colors = {
    red: 'bg-red-500/10 border-red-500/20',
    yellow: 'bg-yellow-500/10 border-yellow-500/20',
    blue: 'bg-blue-500/10 border-blue-500/20',
  }[status]
  
  const dotColor = {
    red: 'bg-red-400',
    yellow: 'bg-yellow-400',
    blue: 'bg-blue-400',
  }[status]

  return (
    <div className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg ${colors} border`}>
      <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${dotColor} flex-shrink-0`} />
      <span className="text-[11px] md:text-sm flex-1 min-w-0 truncate">{title}</span>
      <button className="text-[10px] md:text-xs px-2 py-1 rounded-md bg-white/10 hover:bg-white/15 transition-colors flex-shrink-0">
        {cta}
      </button>
    </div>
  )
}

function VendorsTab() {
  const vendors = [
    { name: 'Sysco Foods', cat: 'Broadline Distributor', status: 'compliant', spend: '$12,450' },
    { name: 'US Foods', cat: 'Broadline Distributor', status: 'compliant', spend: '$8,200' },
    { name: 'Local Produce Co', cat: 'Specialty Supplier', status: 'pending', spend: '$2,100' },
    { name: 'CleanPro Services', cat: 'Maintenance', status: 'expired', spend: '$890' },
  ]

  return (
    <motion.div {...fade}>
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <h2 className="text-base md:text-xl font-semibold">Vendors</h2>
        <button className="text-[10px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-md bg-white text-black font-medium">+ Add</button>
      </div>
      <div className="space-y-1.5 md:space-y-2">
        {vendors.map((v) => (
          <div key={v.name} className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/10 flex items-center justify-center font-medium text-xs md:text-sm flex-shrink-0">
              {v.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
                <p className="font-medium text-xs md:text-sm truncate">{v.name}</p>
                <StatusBadge status={v.status} />
              </div>
              <p className="text-[10px] md:text-xs text-white/40 truncate">{v.cat}</p>
            </div>
            <span className="text-[10px] md:text-sm font-medium text-white/70 flex-shrink-0">{v.spend}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    compliant: 'bg-emerald-500/20 text-emerald-400',
    pending: 'bg-yellow-500/20 text-yellow-400',
    expired: 'bg-red-500/20 text-red-400',
  }[status] || 'bg-white/10 text-white/60'

  return (
    <span className={`text-[9px] md:text-[10px] px-1.5 py-0.5 rounded-full ${styles}`}>
      {status}
    </span>
  )
}

function ObligationsTab() {
  const obligations = [
    { title: 'Health Permit Renewal', cat: 'Regulatory', due: '15 days', priority: 'high' },
    { title: 'Food Handler Certificates', cat: 'Staff Compliance', due: '30 days', priority: 'medium' },
    { title: 'Co-op Q1 Rebate Filing', cat: 'Co-op', due: '7 days', priority: 'high' },
    { title: 'Liquor License Renewal', cat: 'Regulatory', due: '60 days', priority: 'medium' },
    { title: 'Fire Inspection', cat: 'Regulatory', due: '45 days', priority: 'low' },
  ]

  return (
    <motion.div {...fade}>
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <h2 className="text-base md:text-xl font-semibold">Obligations</h2>
        <button className="text-[10px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-md bg-white text-black font-medium">+ Add</button>
      </div>
      <div className="space-y-1.5 md:space-y-2">
        {obligations.map((o) => (
          <div key={o.title} className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0 ${
              o.priority === 'high' ? 'bg-red-400' : o.priority === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'
            }`} />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-xs md:text-sm truncate">{o.title}</p>
              <p className="text-[10px] md:text-xs text-white/40">{o.cat}</p>
            </div>
            <span className={`text-[10px] md:text-xs font-medium flex-shrink-0 ${
              o.priority === 'high' ? 'text-red-400' : 'text-white/70'
            }`}>
              {o.due}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function ContractsTab() {
  return (
    <motion.div {...fade}>
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <h2 className="text-base md:text-xl font-semibold">Contracts</h2>
        <button className="text-[10px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-md bg-white text-black font-medium">+ Upload</button>
      </div>
      
      <div className="p-3 md:p-4 rounded-lg bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 mb-3">
        <div className="flex items-center justify-between mb-2 md:mb-3 flex-wrap gap-2">
          <div>
            <p className="text-xs md:text-sm font-medium">Sysco Foods — Supply Agreement</p>
            <p className="text-[10px] md:text-xs text-white/40">Uploaded March 2024</p>
          </div>
          <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
            Auto-renews in 47 days
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 pt-2 md:pt-3 border-t border-white/5">
          <Extract label="Term" value="3 years" />
          <Extract label="Termination" value="90 days" />
          <Extract label="Min volume" value="$8K/mo" />
          <Extract label="Rebate" value="3.5% tier" />
        </div>
      </div>

      <div className="p-3 md:p-4 rounded-lg bg-white/[0.02] border border-white/5">
        <div className="flex items-center justify-between mb-2 md:mb-3 flex-wrap gap-2">
          <div>
            <p className="text-xs md:text-sm font-medium">CleanPro Services — Master Agreement</p>
            <p className="text-[10px] md:text-xs text-white/40">Uploaded January 2025</p>
          </div>
          <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">
            COI expired
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function Extract({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-[11px] md:text-sm font-medium">{value}</p>
    </div>
  )
}

function CoopTab() {
  return (
    <motion.div {...fade}>
      <h2 className="text-base md:text-xl font-semibold mb-4 md:mb-5">Co-op Program</h2>
      
      <div className="p-4 md:p-5 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 mb-3 md:mb-4">
        <div className="flex items-center justify-between mb-3 md:mb-4 flex-wrap gap-2">
          <div>
            <p className="text-[10px] md:text-xs text-white/50 mb-0.5 uppercase tracking-wide">Membership</p>
            <p className="text-sm md:text-lg font-semibold">Restaurant Supply Co-op</p>
          </div>
          <span className="px-2 py-1 rounded-md bg-yellow-500/20 text-yellow-400 text-[10px] md:text-xs font-medium">
            Gold Tier
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div>
            <p className="text-[10px] md:text-xs text-white/50 mb-1">Earned YTD</p>
            <p className="text-xl md:text-2xl font-bold text-emerald-400">$4,280</p>
          </div>
          <div>
            <p className="text-[10px] md:text-xs text-white/50 mb-1">At Risk (unfiled)</p>
            <p className="text-xl md:text-2xl font-bold text-red-400">$1,200</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
        <ProgressCard label="Purchasing Compliance" value="85%" progress={85} color="emerald" />
        <ProgressCard label="Approved Vendors" value="12/15" progress={80} color="white" />
      </div>
    </motion.div>
  )
}

function ProgressCard({ label, value, progress, color }: { label: string; value: string; progress: number; color: string }) {
  return (
    <div className="p-3 md:p-4 rounded-lg bg-white/[0.03] border border-white/5">
      <p className="text-[10px] md:text-xs text-white/50 mb-2">{label}</p>
      <p className="text-lg md:text-2xl font-bold mb-2">{value}</p>
      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
        <div 
          className={`h-full rounded-full ${color === 'emerald' ? 'bg-emerald-400' : 'bg-white'}`}
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  )
}