'use client'
import cn from 'classnames'
import styles from './Promo.module.scss'
import { FC, useEffect, useRef } from 'react'
// import { optionsBadge } from '@/constants'
// import Image from 'next/image'
import GithubIcon from '../../../public/img/github-white.svg'
import gsap from 'gsap'

const road = ['local', 'convenient', 'fast']

const Promo: FC = () => {
  const itemsRef = useRef<HTMLLIElement[]>([])

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    })

    tl.to(
      itemsRef.current,
      {
        color: '#7949FF',
        duration: 1.5,
        stagger: 0.3,
        ease: 'power1.inOut',
      },
      0
    )

    const secondItem = itemsRef.current[1]
    if (secondItem) {
      tl.to(
        secondItem,
        {
          color: '#7949FF',
          duration: 1.5,
          ease: 'power1.inOut',
        },
        0
      )
    }

    return () => {
      tl.kill()
      if (secondItem) {
        secondItem.classList.remove(styles.active)
      }
    }
  }, [])

  const addToRefs = (el: HTMLLIElement | null, index: number) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current[index] = el
    }
  }
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
          {/* <div className={styles.options}>
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
          </div> */}
          {/* <p className={styles.label}>*limited-time offer</p>     */}
        </div>
      </div>

      <ul className={styles.road}>
        {road.map((item, index) => (
          <li
            className={styles.roadItem}
            key={item}
            ref={(el) => addToRefs(el, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Promo
