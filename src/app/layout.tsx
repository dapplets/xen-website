import type { Metadata, Viewport } from 'next'
import './global.scss'
import ClientLayout from './ClientLayout'

export const metadata: Metadata = {
  title: 'XEN: your privacy-first AI assistant',
  description:
    'XEN is a privacy-first, multichannel, customisable AI assistant that utilises a network of thousands of AI agents. Seamlessly integrating into your browser and messenger, it boosts your productivity and improves decision-making.',
  applicationName: 'MyXen.ai',
  keywords: [
    'AI assistant',
    'privacy-first AI',
    'multichannel AI',
    'productivity tools',
  ],

  icons: {
    icon: [
      { url: '/favicons/favicon.svg', type: 'image/svg' },
      { url: '/meta/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/meta/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/meta/512.png', sizes: '512x512' },
      { url: '/meta/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/meta/apple-icon-60x60.png', sizes: '60x60' },
    ],
    other: [{ rel: 'manifest', url: '/manifest.json' }],
  },

  openGraph: {
    title: 'XEN: your privacy-first AI assistant',
    description:
      'XEN is a privacy-first, multichannel, customisable AI assistant...',
    url: '/',
    siteName: 'MyXen.ai',
    images: [
      {
        url: '/meta/og-img.png',
        width: 1920,
        height: 1080,
        alt: 'XEN: your privacy-first AI assistant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'XEN: your privacy-first AI assistant',
    description:
      'XEN is a privacy-first, multichannel, customisable AI assistant...',
    images: ['/meta/og-img.png'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
