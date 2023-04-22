import React from 'react'
import * as styles from './Role.module.scss'

export default ({ responsibilities, role, date, children }) => (
  <div className={styles.role}>
    <div className={styles.copy}>{children}</div>
    <div className={styles.sidebar}>
      {role && (
        <div className={styles.sidebarItem}>
          <div className={styles.sidebarItemTitle}>Role</div>
          {role}
        </div>
      )}
      {responsibilities && (
        <div className={styles.sidebarItem}>
          <div className={styles.sidebarItemTitle}>Responsibilities</div>
          {responsibilities}
        </div>
      )}
      {date && (
        <div className={styles.sidebarItem}>
          <div className={styles.sidebarItemTitle}>When</div>
          {date}
        </div>
      )}
    </div>
  </div>
)
