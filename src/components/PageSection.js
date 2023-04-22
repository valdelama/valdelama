import React from 'react'
import * as styles from './PageSection.module.scss'

export default ({ children }) => (
  <div className={styles.pageSection}>{children}</div>
)
