import cn from 'classnames'
import styles from './Options.module.scss'
import { optionsPromo } from '@/constants'

const Options = () => {
  return (
    <section className={cn('max-width', styles.wrapper)}>
      <h2 className={cn('title-hilight', styles.title)}>
        Local-First, Cloud-Optional
      </h2>
      <ul className={styles.list}>
        {optionsPromo.map((feature) => (
          <li className={styles.item} key={feature.text}>
            <feature.icon className={styles.icon} />
            <p className={styles.itemTitle}>{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Options
