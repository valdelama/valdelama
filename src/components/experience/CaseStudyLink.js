import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import ArrowLink from 'src/components/ArrowLink'
import styles from './CaseStudyLink.module.scss'

export default ({ className, title, description, children, url }) => (
  <div className={cn(styles.wrapper, styles[className])}>
    <div className={styles.copy}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ArrowLink url={url} text="Explore" />
    </div>
    <Link to={url} className={styles.imageWrapper}>
      {children}
    </Link>
  </div>
)
