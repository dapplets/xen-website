import cn from 'classnames'
import styles from './Products.module.scss'
import { availableisItems } from '@/constants'
import ArrowIcon from '../../../public/img/arrow.svg'

const Products = () => {
  return (
    <section className={cn('max-width', styles.wrapper)}>
      <h2 className={cn('title-hilight', styles.title)}>
        Available Everywhere
      </h2>
      <ul className={styles.list}>
        {availableisItems.map((feature, i) => (
          <li className={styles.item} key={feature.title}>
            <div className={styles.top}>
              <figure className={styles.icon}>
                <feature.icon />
              </figure>
              <div className={styles.titleBlock}>
                <h3 className={styles.itemTitle}> {feature.title}</h3>
                <span className={styles.itemSubtitle}> {feature.subtitle}</span>
              </div>
              {(i === 0 || i == 1) && (
                <ArrowIcon className={styles.iconArrow} />
              )}
            </div>
            <p className={styles.text}>{feature.text}</p>
            {feature.title !== 'Native app' && (
              <a
                className={styles.link}
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {feature.linkText}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Products
