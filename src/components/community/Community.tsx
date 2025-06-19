import cn from 'classnames'
import styles from './Community.module.scss'
import { communityItems } from '@/constants'

const Community = () => {
  return (
    <section className={cn('max-width', styles.wrapper)}>
      <h2 className={cn('consolas', styles.title)}>
        Built by&nbsp;the Community,
        <br />
        for the Community
      </h2>
      <p className={styles.text}>
        Xen isn&rsquo;t a&nbsp;corporate product&nbsp;&mdash; it&rsquo;s
        a&nbsp;growing ecosystem of&nbsp;developers, makers, and users who
        believe in&nbsp;building open, personal&nbsp;AI tools on&nbsp;their own
        terms. Build by&nbsp;request. Deploy by&nbsp;design. Get paid for value.
      </p>
      <ul className={styles.list}>
        {communityItems.map((feature) => (
          <li className={styles.item} key={feature.title}>
            <h3 className={styles.itemTitle}>{feature.title}</h3>
            <p className={styles.itemText}>{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Community
