import cn from 'classnames'
import styles from './HeaderMobile.module.scss'
import React, { Dispatch, FC, SetStateAction } from 'react'

const HeaderMobile: FC<{
  isMenuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}> = ({
  isMenuOpen,
  setMenuOpen,
}: {
  isMenuOpen?: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <dialog className={styles.wrapper}>
      <div className={cn(styles.content)}>mobile</div>
    </dialog>
  )
}

export default HeaderMobile
