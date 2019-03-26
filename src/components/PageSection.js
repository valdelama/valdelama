import React from 'react'
import styles from './PageSection.module.scss'

export default ({ children }) => (
  <div className={styles.pageSection}>{children}</div>
)
