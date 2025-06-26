import Promo from '@/components/promo/Promo'
import styles from './Page.module.scss'
import Features from '@/components/features/Features'
import Options from '@/components/options/Options'
import Community from '@/components/community/Community'
import Supported from '@/components/supported/Supported'
import Products from '@/components/products/Products'
import Contacts from '@/components/contacts/Contacts'
import cn from 'classnames'

import Circles from '../../public/img/circles.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={cn(styles.bg, styles['bg--color'], styles['bg--top'])}>
        <Promo />
        <Features />
        <Options />
      </div>
      <div className={cn(styles.bg, styles['bg--white'])}>
        <Community />
        <Supported />
        <Circles className={cn(styles.bgImg, styles['bgImg--medium'])} />
      </div>
      <div className={cn(styles.bg, styles['bg--color'], styles['bg--bottom'])}>
        <Products />
        <Contacts />
      </div>
    </main>
  )
}
