import { PropsWithChildren, FC } from 'react'
import styles from "./list-layout.module.css";

export const ListLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h2>Hello from List page</h2>
      <div className={styles.listUserListContainer}>{children}</div>
    </div>
  )
}
