'use client'

import { useState } from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './global.scss'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      {children}
      <Footer />
    </>
  )
}
