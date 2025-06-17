'use client' // ← Добавьте эту директиву в начало файла

import { useState } from 'react'
import './global.scss'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <html lang="en">
      <body>
        <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
