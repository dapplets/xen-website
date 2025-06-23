import cn from 'classnames'
import styles from './Header.module.scss'
import React, { Dispatch, FC, SetStateAction } from 'react'
import LogoIcon from '../../../public/img/logo.svg'
import Logo from '../../../public/img/logo-icon.svg'
import { navHeader } from '@/constants'
import QRGenerator from '@/utils/qrGenerator'
import BurgerIcon from '../../../public/img/burger.svg'
import HeaderMobile from '../headerMobile/HeaderMobile'

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
  return (
    <header className={cn('max-width', styles.wrapper)}>
      <div className={styles.logoBlock}>
        <Logo /> <LogoIcon className={styles.logo} />
      </div>

      <nav className={styles.nav}>
        {navHeader.map((nav) => (
          <a
            className={styles.navItem}
            href={nav.link}
            target="_blank"
            key={nav.linkText}
          >
            {nav.linkText}
          </a>
        ))}
      </nav>

      <div className={styles.qr}>
        {/* todo: need link */}
        <QRGenerator url={'/'} />
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
