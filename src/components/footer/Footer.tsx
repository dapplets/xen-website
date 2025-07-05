import cn from 'classnames'
import styles from './Footer.module.scss'
import Logo from '../../../public/img/footer-logo.svg'
import Contacts from '../contacts/Contacts'

const Footer = () => {
  return (
    <footer className={cn('max-width', styles.wrapper)}>
      <div>
        <Contacts />
      </div>

      <div className={styles.bottom}>
        <Logo className={styles.logo} />
        <p className={styles.text}>
          Xen uses Mutable Web technology for web integration. This technology
          enables website data to&nbsp;be&nbsp;collected and processed
          by&nbsp;agents, with the results embedded back into the webpage. All
          of&nbsp;this happens in&nbsp;real time in&nbsp;the user&rsquo;s
          browser.<br></br> Visit{' '}
          <a
            className={cn(styles.text, styles['text--link'])}
            target="_blank"
            href="http://dapplets.org"
          >
            Mutable Web is a customization layer built on top of the existing
            web
          </a>{' '}
          for more information.
        </p>
      </div>
    </footer>
  )
}

export default Footer
