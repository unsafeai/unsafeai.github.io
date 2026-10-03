import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'Unsafe AI — Conscious intelligence',
  description:
    'Unsafe AI is an independent organization dedicated to conscious intelligence and to questioning inherited assumptions about mind, agency, and control.',
}

export const viewport: Viewport = {
  themeColor: '#080909',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main>{children}</main>
        <footer className="site-footer">
          <span>UNSAFE·AI / CONSCIOUS INTELLIGENCE</span>
          <span>© 2026 UNSAFE AI</span>
        </footer>
      </body>
    </html>
  )
}
