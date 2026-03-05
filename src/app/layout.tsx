import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Acore | Compliance Management for Small Business',
  description: 'Acore helps small businesses manage compliance across expenses, utilities, and vendor relationships. Simplify your monthly compliance without an HR team.',
  keywords: ['compliance', 'small business', 'expense management', 'utilities', 'vendor management'],
  openGraph: {
    title: 'Acore | Compliance Management for Small Business',
    description: 'Simplify your monthly compliance without an HR team.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-surface text-white min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
