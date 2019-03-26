import React from 'react'
import { Link } from 'gatsby'
import styles from './BodyCopy.module.scss'

export default ({ children }) => (
  <div className={styles.bodyCopy}>{children}</div>
)
