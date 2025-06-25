import cn from 'classnames'
import styles from './Contacts.module.scss'
import { contacts } from '@/constants'
import React from 'react'
import BgIcon from '../../../public/img/lines-circles-stars.svg'

const Contacts = () => {
  return (
    <section className={cn('max-width', styles.wrapper)}>
      <h2 className={cn('consolas', styles.title)}>
        Maintained by&nbsp;the Community
      </h2>
      <p className={styles.text}>
        Xen is&nbsp;not just a&nbsp;product&nbsp;&mdash; it&rsquo;s
        a&nbsp;movement. Built and shaped by&nbsp;people like you: developers,
        privacy enthusiasts, artists, tinkerers.Join&nbsp;us, fork&nbsp;us,
        or&nbsp;just run a&nbsp;local Xen. Your Xen is&nbsp;yours
        alone&nbsp;&mdash; but built together, for you.
      </p>
      <ul className={styles.list}>
        {contacts.map((item) => (
          <li className={styles.item} key={item.id}>
            <a
              title={item.id === 'XDark' ? 'coming soon' : ''}
              className={styles.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>

      <BgIcon className={styles.bgImg} />
    </section>
  )
}

export default Contacts
