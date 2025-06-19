import cn from 'classnames'
import styles from './Supported.module.scss'
import { supported } from '@/constants'

const Supported = () => {
  const doubledSupported = [...supported, ...supported]
  return (
    <section className={cn(styles.wrapper)}>
      <h2 className={cn('consolas', styles.title)}>Supported&nbsp;by</h2>

      <div className={styles.marqueeContainer}>
        <ul className={styles.list}>
          {doubledSupported.map(({ icon: Icon, id }, index) => (
            <li className={styles.item} key={`${id}-${index}`}>
              <Icon className={styles.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Supported
