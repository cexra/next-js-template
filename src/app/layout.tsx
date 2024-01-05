import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  authors: { name: 'Prave Inc.' },
  title: {
    template: '%s | your-project',
    default: 'your-project',
  },
  description: 'a brief description',
  metadataBase: new URL(`https://${process.env.HOST}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: {
      template: '%s | your-project',
      default: 'your-project',
    },
    description: 'a brief description',
    url: '/',
    siteName: 'your-project',
    locale: 'en_EN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
