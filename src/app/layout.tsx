import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/landing.css'

export const metadata: Metadata = {
  title: 'NikeX Store',
  description: 'Premium Nike-inspired e-commerce platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}