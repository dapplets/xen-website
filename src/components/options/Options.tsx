import cn from 'classnames'
import styles from './Options.module.scss'
import { optionsPromo } from '@/constants'

const Options = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Local-First, Cloud-Optional</h2>
      <ul className={styles.list}>
        {optionsPromo.map((feature) => (
          <li className={styles.item} key={feature.text}>
            <p className={styles.itemTitle}>{feature.text}</p>
            <feature.icon />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Options
