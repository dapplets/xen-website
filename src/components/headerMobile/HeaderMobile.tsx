import cn from 'classnames'
import styles from './HeaderMobile.module.scss'
import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock-upgrade'
import Logo from '../../../public/img/logo-icon.svg'
import Close from '../../../public/img/close.svg'
import Stars from '../../../public/img/stars.svg'
import { navHeader } from '@/constants'

const HeaderMobile: FC<{
  isMenuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}> = ({
  isMenuOpen,
  setMenuOpen,
}: {
  isMenuOpen?: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isMenuOpen) {
      const bodyElement = document.querySelector('body')

      disableBodyScroll(bodyElement as HTMLElement)

      return () => {
        clearAllBodyScrollLocks()
      }
    }
  }, [isMenuOpen])
  return (
    <dialog ref={modalRef} tabIndex={0} className={styles.wrapper} open>
      <header className={styles.header}>
        <Logo />
        <Close onClick={setMenuOpen} />
      </header>
      <div className={styles.content}>
        <nav className={styles.nav}>
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
          <a
            className={cn(styles.navItem, styles.button)}
            href="/"
            target="_blank"
          >
            <Stars /> Try now
          </a>
        </nav>
      </div>
    </dialog>
  )
}

export default HeaderMobile
