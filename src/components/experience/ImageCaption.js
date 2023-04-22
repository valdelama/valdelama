import React from 'react'
import * as styles from './ImageCaption.module.scss'

export default ({ text, children }) => (
  <div className={styles.wrapper}>
    <div className={styles.caption}>{text}</div>
    {children}
  </div>
)
