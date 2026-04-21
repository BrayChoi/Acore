import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Acore — The compliance layer for your restaurant',
  description: 'Centralize every vendor contract, COI, permit, and co-op obligation in one control plane. Built for independent restaurant operators.',
  openGraph: {
    title: 'Acore — The compliance layer for your restaurant',
    description: 'Centralize every vendor contract, COI, permit, and co-op obligation in one control plane.',
    url: 'https://acorehq.com',
    siteName: 'Acore',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acore — The compliance layer for your restaurant',
    description: 'Centralize every vendor contract, COI, permit, and co-op obligation in one control plane.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}