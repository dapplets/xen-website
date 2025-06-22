import cn from 'classnames'
import styles from './Header.module.scss'
import React, { Dispatch, FC, SetStateAction } from 'react'
import LogoIcon from '../../../public/img/logo.svg'
import { navHeader } from '@/constants'
import QRGenerator from '@/utils/qrGenerator'

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
      <LogoIcon className={styles.logo} />
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
    </header>
  )
}

export default Header
