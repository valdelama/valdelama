import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import styles from './ArrowLink.module.scss'

export default ({ back, className, text, url }) => (
  <Link
    to={url}
    className={cn(styles.arrowLink, className, back && styles.back)}
  >
    {text}
  </Link>
)
