import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import styles from './Title.module.scss'

export default ({ title, subheader, backLink }) => (
  <div className={styles.wrapper}>
    {!backLink && <h1 className={styles.title}>{title}</h1>}
    {backLink && (
      <Link to={backLink}>
        <h1 className={styles.titleBackLink}>{title}</h1>
      </Link>
    )}
    <h2 className={cn(styles.subheader, backLink && styles.subheaderBackLink)}>
      {subheader}
    </h2>
  </div>
)
