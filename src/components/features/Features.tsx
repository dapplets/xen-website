import cn from 'classnames'
import styles from './Features.module.scss'
import { featuresPromo } from '@/constants'

const Features = () => {
  return (
    <section className={cn('max-width', styles.wrapper)}>
      <h2 className={cn('title-hilight', styles.title)}>
        Privacy isn&rsquo;t a&nbsp;feature.
      </h2>
      <h2 className={cn('title-hilight', styles.title)}>
        {' '}
        It&rsquo;s the foundation.
      </h2>
      <ul className={styles.list}>
        {featuresPromo.map((feature) => (
          <li className={styles.item} key={feature.title}>
            <p className={styles.itemTitle}>{feature.title}</p>
            <p className={styles.itemText}>{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Features
