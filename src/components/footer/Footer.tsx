import cn from 'classnames'
import styles from './Footer.module.scss'
import Logo from '../../../public/img/logo-dap.svg'
import { navHeader } from '@/constants'

const Footer = () => {
  return (
    <footer className={cn('max-width', styles.wrapper)}>
      <Logo className={styles.logo} />
      <div className={styles.bottom}>
        <p className={styles.text}>
          In&nbsp;enim a&nbsp;massa habitant placerat lectus maecenas auctor
          vitae. Quisque auctor at&nbsp;et&nbsp;eu&nbsp;vitae tempor
          et&nbsp;porta.
        </p>
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
      </div>
    </footer>
  )
}

export default Footer
