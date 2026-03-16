import { FC, PropsWithChildren } from 'react'
import styles from "./center-layout.module.css";

export const CenterLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layoutCenter}>
      {children}
    </div>
  )
}
