import cn from 'classnames'
import styles from './Header.module.scss'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import LogoIcon from '../../../public/img/logo.svg'
import Logo from '../../../public/img/logo-icon.svg'
import { navHeader } from '@/constants'
import QRGenerator from '@/utils/qrGenerator'
import BurgerIcon from '../../../public/img/burger.svg'
import HeaderMobile from '../headerMobile/HeaderMobile'
import Link from 'next/link'

const Header: FC<{
  isMenuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}> = ({
  isMenuOpen,
  setMenuOpen,
}: {
  isMenuOpen?: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [isNavFixed, setIsNavFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsNavFixed(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn('max-width', styles.wrapper)}>
      <Link href="/" className={styles.logoBlock}>
        <Logo /> <LogoIcon className={styles.logo} />
      </Link>

      <nav className={cn(styles.nav, { [styles.navFixed]: isNavFixed })}>
        {navHeader.map((nav, i) => (
          <a
            className={styles.navItem}
            href={nav.link}
            target={i === 0 ? '_self' : '_blank'}
            key={nav.linkText}
          >
            {nav.linkText}
          </a>
        ))}
      </nav>

      <div className={styles.qr}>
        <QRGenerator url={'https://t.me/yourxenbot'} />
      </div>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!isMenuOpen)}
        type="button"
      >
        <BurgerIcon />
      </button>
      {isMenuOpen && (
        <HeaderMobile
          isMenuOpen={isMenuOpen}
          setMenuOpen={() => setMenuOpen(!isMenuOpen)}
        />
      )}
    </header>
  )
}

export default Header
