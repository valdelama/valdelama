import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import * as styles from './ArrowLink.module.scss'

export default ({ back, className, text, url }) => (
  <Link
    to={url}
    className={cn(styles.arrowLink, className, back && styles.back)}
  >
    <span className={styles.content}>{text}</span>
    <span className={styles.bg}></span>
  </Link>
)
