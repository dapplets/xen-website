import cn from 'classnames'
import styles from './Footer.module.scss'
import Logo from '../../../public/img/logo.svg'
import { navHeader } from '@/constants'

const Footer = () => {
  return (
    <footer className={cn('max-width', styles.wrapper)}>
      <Logo className={styles.logo} />
      <div className={styles.bottom}>
        <p className={styles.text}>
          Xen uses Mutable Web technology for web integration. This technology
          enables website data to&nbsp;be&nbsp;collected and processed
          by&nbsp;agents, with the results embedded back into the webpage. All
          of&nbsp;this happens in&nbsp;real time in&nbsp;the user&rsquo;s
          browser. Visit{' '}
          <a
            className={cn(styles.text, styles['text--link'])}
            target="_blank"
            href="http://dapplets.org"
          >
            http://dapplets.org
          </a>{' '}
          for more information.
        </p>
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
        </nav>
      </div>
    </footer>
  )
}

export default Footer
