import cn from 'classnames'
import styles from './Promo.module.scss'
import { FC } from 'react'
import { optionsBadge } from '@/constants'
import Image from 'next/image'
import GithubIcon from '../../../public/img/github-white.svg'

const road = ['local', 'convenient', 'fast']

const Promo: FC = () => {
  return (
    <section className={cn('max-width', styles.wrapper)}>
      <div className={styles.top}>
        <div className={cn(styles.titleBlock)}>
          <h1 className={cn(styles.title)}>
            Powerful
            <br />{' '}
            <span className={cn(styles.title, styles['title--hilight'])}>
              personal ai
            </span>
            <br />
            assistant in <br /> your pocket
          </h1>
          <a
            className={styles.link}
            href="http://github.com/dapplets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            Learn more
          </a>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Xen is&nbsp;a&nbsp;locally running, privacy-focused
            AI&nbsp;assistant designed to&nbsp;integrate seamlessly into your
            digital life. Built by&nbsp;a&nbsp;global community
            of&nbsp;developers and privacy advocates, Xen isn&rsquo;t just
            another chatbot&nbsp;&mdash; it&rsquo;s your trusted co-pilot
            in&nbsp;the age of&nbsp;intelligent automation.
          </p>
          <p className={cn('consolas', styles.subText)}>
            Run it&nbsp;locally.
            <br /> Integrate it&nbsp;anywhere.
            <br /> Keep your data private.
          </p>
          <div className={styles.options}>
            <h2 className={cn(styles.optionsTitle)}>
              three
              <br /> subscription
              <br /> options
            </h2>
            <ul className={styles.optionsList}>
              {optionsBadge.map((opt) => (
                <li className={styles.item} key={opt.text}>
                  <figure className={styles.itemImg}>
                    <Image src={opt.img} alt={opt.text} />
                  </figure>
                  <span className={styles.itemText}>{opt.text}</span>
                  <span className={cn('consolas', styles.itemLabel)}>
                    {opt.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.label}>*limited-time offer</p>
        </div>
      </div>

      <ul className={styles.road}>
        {road.map((item) => (
          <li className={styles.roadItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Promo
