'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type TabType = 'dashboard' | 'vendors' | 'compliance' | 'documents' | 'coop'

const vendors = [
  { id: 1, name: 'Sysco Foods', category: 'Broadline Distributor', status: 'compliant', docs: 4, docsTotal: 4, lastOrder: '2 days ago', spend: '$12,450' },
  { id: 2, name: 'US Foods', category: 'Broadline Distributor', status: 'compliant', docs: 4, docsTotal: 4, lastOrder: '5 days ago', spend: '$8,200' },
  { id: 3, name: 'Local Produce Co', category: 'Specialty Supplier', status: 'pending', docs: 2, docsTotal: 4, lastOrder: '1 day ago', spend: '$2,100' },
  { id: 4, name: 'Pacific Seafood', category: 'Seafood', status: 'compliant', docs: 4, docsTotal: 4, lastOrder: '3 days ago', spend: '$4,800' },
  { id: 5, name: 'CleanPro Services', category: 'Maintenance', status: 'expired', docs: 3, docsTotal: 4, lastOrder: '1 week ago', spend: '$890' },
]

const obligations = [
  { id: 1, title: 'Health Permit Renewal', category: 'Regulatory', due: '15 days', priority: 'high', status: 'pending' },
  { id: 2, title: 'Food Handler Certificates', category: 'Staff Compliance', due: '30 days', priority: 'medium', status: 'in-progress' },
  { id: 3, title: 'Fire Safety Inspection', category: 'Safety', due: '45 days', priority: 'low', status: 'scheduled' },
  { id: 4, title: 'Liquor License Renewal', category: 'Regulatory', due: '60 days', priority: 'medium', status: 'pending' },
  { id: 5, title: 'Co-op Q1 Rebate Filing', category: 'Co-op', due: '7 days', priority: 'high', status: 'action-required' },
]

const documents = [
  { id: 1, name: 'W-9 Form', vendor: 'Sysco Foods', uploaded: 'Jan 15, 2026', expires: 'Never', status: 'valid' },
  { id: 2, name: 'Certificate of Insurance', vendor: 'CleanPro Services', uploaded: 'Dec 1, 2025', expires: 'Mar 1, 2026', status: 'expiring' },
  { id: 3, name: 'Food Safety Certificate', vendor: 'Local Produce Co', uploaded: 'Nov 20, 2025', expires: 'Nov 20, 2026', status: 'valid' },
  { id: 4, name: 'Business License', vendor: 'Pacific Seafood', uploaded: 'Jan 5, 2026', expires: 'Jan 5, 2027', status: 'valid' },
  { id: 5, name: 'COI - General Liability', vendor: 'US Foods', uploaded: 'Feb 1, 2026', expires: 'Feb 1, 2027', status: 'valid' },
]

const coopData = {
  membership: 'Restaurant Supply Co-op (RSCS)',
  tier: 'Gold Member',
  rebateEarned: '$4,280',
  rebatePending: '$1,200',
  complianceScore: 94,
  spendThreshold: 85,
  approvedVendors: 12,
  totalVendors: 15,
}

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')
  const [selectedVendor, setSelectedVendor] = useState<number | null>(null)

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: '📊' },
    { id: 'vendors' as TabType, label: 'Vendors', icon: '🏢' },
    { id: 'compliance' as TabType, label: 'Obligations', icon: '✓' },
    { id: 'documents' as TabType, label: 'Documents', icon: '📄' },
    { id: 'coop' as TabType, label: 'Co-op', icon: '🤝' },
  ]

  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      <div className="glow-orb glow-orb-soft w-[600px] h-[600px] top-1/4 -right-40" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="divider-glow mb-20" />
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-sm text-white/70 font-medium">Interactive Demo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-satoshi)' }}
          >
            See Acore
            <br />
            <span className="gradient-text">in action</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-white/50 text-lg"
          >
            Explore how Acore centralizes vendor relationships, tracks compliance obligations, 
            and manages co-op commitments — all in one place.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-white/5 rounded-[40px] blur-3xl" />
          
          <div className="relative rounded-3xl overflow-hidden dashboard-glow bg-surface-50">
            <div className="flex items-center gap-2 px-5 py-4 bg-surface-100 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 mx-6">
                <div className="max-w-sm mx-auto h-8 rounded-lg bg-surface-200 flex items-center justify-center border border-white/5">
                  <span className="text-xs text-white/40">app.acore.io/dashboard</span>
                </div>
              </div>
            </div>

            <div className="flex min-h-[500px]">
              <div className="w-56 bg-surface-100 border-r border-white/5 p-4 hidden md:block">
                <div className="flex items-center gap-3 mb-8 px-2">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                    <span className="text-black font-bold text-sm">A</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sunrise Bistro</p>
                    <p className="text-xs text-white/40">3 locations</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                        activeTab === tab.id
                          ? 'bg-white/10 text-white'
                          : 'text-white/50 hover:text-white/70 hover:bg-white/5'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs text-white/40 mb-2">Compliance Score</p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold">94%</span>
                    <span className="text-xs text-green-400 mb-1">↑ 3%</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[94%] rounded-full bg-white" />
                  </div>
                </div>
              </div>

              <div className="md:hidden w-full border-b border-white/5 p-2 flex gap-1 overflow-x-auto bg-surface-100">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? 'bg-white/10 text-white'
                        : 'text-white/50'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 p-6 overflow-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'dashboard' && <DashboardTab key="dashboard" />}
                  {activeTab === 'vendors' && <VendorsTab key="vendors" vendors={vendors} selectedVendor={selectedVendor} setSelectedVendor={setSelectedVendor} />}
                  {activeTab === 'compliance' && <ComplianceTab key="compliance" obligations={obligations} />}
                  {activeTab === 'documents' && <DocumentsTab key="documents" documents={documents} />}
                  {activeTab === 'coop' && <CoopTab key="coop" data={coopData} />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Vendor Management', desc: 'Track all supplier relationships, documents, and terms in one place' },
            { title: 'Obligation Tracking', desc: 'Never miss a renewal, permit, or compliance deadline again' },
            { title: 'Co-op Optimization', desc: 'Maximize rebates and meet purchasing thresholds automatically' },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/50">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DashboardTab() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
      <h2 className="text-xl font-semibold mb-6">Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Active Vendors', value: '24', change: '+3' },
          { label: 'Pending Tasks', value: '7', change: '-2' },
          { label: 'Documents', value: '89', change: '+12' },
          { label: 'Co-op Savings', value: '$4.2K', change: '+$800' },
        ].map((stat) => (
          <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/5">
            <p className="text-xs text-white/40 mb-1">{stat.label}</p>
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-xs text-green-400">{stat.change}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-white/70">Action Required</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-sm flex-1">CleanPro Services COI expires in 3 days</span>
            <button className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">Request</button>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-sm flex-1">Co-op Q1 rebate filing due in 7 days</span>
            <button className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">Review</button>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-sm flex-1">Local Produce Co missing 2 documents</span>
            <button className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">Chase</button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3 text-white/70">Recent Activity</h3>
        <div className="space-y-2">
          {[
            { action: 'Document uploaded', detail: 'W-9 from Sysco Foods', time: '2 hours ago' },
            { action: 'Vendor onboarded', detail: 'Pacific Seafood added', time: '1 day ago' },
            { action: 'Compliance updated', detail: 'Health permit renewed', time: '2 days ago' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs">✓</div>
              <div className="flex-1">
                <p className="text-sm">{activity.action}</p>
                <p className="text-xs text-white/40">{activity.detail}</p>
              </div>
              <span className="text-xs text-white/30">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function VendorsTab({ vendors, selectedVendor, setSelectedVendor }: { vendors: typeof vendors, selectedVendor: number | null, setSelectedVendor: (id: number | null) => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Vendors</h2>
        <button className="text-xs px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">+ Add Vendor</button>
      </div>
      <div className="space-y-2">
        {vendors.map((vendor) => (
          <div key={vendor.id} onClick={() => setSelectedVendor(selectedVendor === vendor.id ? null : vendor.id)} className={`p-4 rounded-xl border transition-all cursor-pointer ${selectedVendor === vendor.id ? 'bg-white/10 border-white/20' : 'bg-white/[0.02] border-white/5 hover:bg-white/5'}`}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-medium">{vendor.name.charAt(0)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-medium">{vendor.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${vendor.status === 'compliant' ? 'bg-green-500/20 text-green-400' : vendor.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{vendor.status}</span>
                </div>
                <p className="text-xs text-white/40">{vendor.category}</p>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{vendor.spend}</p>
                <p className="text-xs text-white/40">Last: {vendor.lastOrder}</p>
              </div>
            </div>
            <AnimatePresence>
              {selectedVendor === vendor.id && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="mt-4 pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div><p className="text-xs text-white/40 mb-1">W-9</p><p className="text-sm text-green-400">✓ On file</p></div>
                    <div><p className="text-xs text-white/40 mb-1">COI</p><p className={`text-sm ${vendor.status === 'expired' ? 'text-red-400' : 'text-green-400'}`}>{vendor.status === 'expired' ? '✗ Expired' : '✓ Valid'}</p></div>
                    <div><p className="text-xs text-white/40 mb-1">License</p><p className={`text-sm ${vendor.status === 'pending' ? 'text-yellow-400' : 'text-green-400'}`}>{vendor.status === 'pending' ? '⏳ Pending' : '✓ Valid'}</p></div>
                    <div><p className="text-xs text-white/40 mb-1">ACH/Banking</p><p className="text-sm text-green-400">✓ Verified</p></div>
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">View Details</button>
                    <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">Request Docs</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function ComplianceTab({ obligations }: { obligations: typeof obligations }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Compliance Obligations</h2>
        <button className="text-xs px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">+ Add Task</button>
      </div>
      <div className="space-y-2">
        {obligations.map((item) => (
          <div key={item.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-all">
            <div className="flex items-center gap-4 flex-wrap">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.priority === 'high' ? 'bg-red-400' : item.priority === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'}`} />
              <div className="flex-1 min-w-0">
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-white/40">{item.category}</p>
              </div>
              <p className={`text-sm font-medium ${item.due.includes('7') || item.due.includes('15') ? 'text-red-400' : 'text-white/70'}`}>Due in {item.due}</p>
              <span className={`text-xs px-2 py-1 rounded-lg ${item.status === 'action-required' ? 'bg-red-500/20 text-red-400' : item.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white/60'}`}>{item.status.replace('-', ' ')}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function DocumentsTab({ documents }: { documents: typeof documents }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Document Vault</h2>
        <button className="text-xs px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">+ Upload</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-white/5 border border-white/5"><p className="text-xs text-white/40 mb-1">Total</p><p className="text-2xl font-bold">89</p></div>
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20"><p className="text-xs text-green-400 mb-1">Valid</p><p className="text-2xl font-bold text-green-400">84</p></div>
        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20"><p className="text-xs text-yellow-400 mb-1">Expiring</p><p className="text-2xl font-bold text-yellow-400">5</p></div>
      </div>
      <div className="space-y-2">
        {documents.map((doc) => (
          <div key={doc.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <span className="text-xl">📄</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium">{doc.name}</p>
                <p className="text-xs text-white/40">{doc.vendor}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-lg ${doc.status === 'valid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{doc.status === 'valid' ? '✓ Valid' : '⚠ Expiring'}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function CoopTab({ data }: { data: typeof coopData }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
      <h2 className="text-xl font-semibold mb-6">Co-op Management</h2>
      <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <p className="text-xs text-white/50 mb-1">Active Membership</p>
            <p className="text-lg font-semibold">{data.membership}</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium">{data.tier}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><p className="text-xs text-white/50 mb-1">Rebates Earned (YTD)</p><p className="text-2xl font-bold text-green-400">{data.rebateEarned}</p></div>
          <div><p className="text-xs text-white/50 mb-1">Pending Rebates</p><p className="text-2xl font-bold">{data.rebatePending}</p></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <p className="text-xs text-white/50 mb-2">Purchasing Compliance</p>
          <div className="flex items-end gap-2 mb-2"><span className="text-2xl font-bold">{data.spendThreshold}%</span></div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden"><div className="h-full rounded-full bg-green-400" style={{ width: `${data.spendThreshold}%` }} /></div>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
          <p className="text-xs text-white/50 mb-2">Approved Vendors</p>
          <div className="flex items-end gap-2 mb-2"><span className="text-2xl font-bold">{data.approvedVendors}/{data.totalVendors}</span></div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden"><div className="h-full rounded-full bg-white" style={{ width: `${(data.approvedVendors / data.totalVendors) * 100}%` }} /></div>
        </div>
      </div>
    </motion.div>
  )
}
