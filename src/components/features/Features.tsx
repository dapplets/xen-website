import cn from 'classnames'
import styles from './Features.module.scss'
import { featuresPromo } from '@/constants'

const Features = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Privacy isn&rsquo;t a&nbsp;feature.
        <br />
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
