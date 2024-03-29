import React from 'react'
import ArrowLink from 'src/components/ArrowLink'
import * as styles from './Job.module.scss'

export default ({ children, company, dates, role, url }) => (
  <div className={styles.wrapper}>
    <div className={styles.company}>{company}</div>
    <div className={styles.content}>
      <div className={styles.meta}>
        <span className={styles.role}>{role}</span>
        <span className={styles.dates}>{dates}</span>
      </div>
      <div>{children}</div>
      {url && (
        <a href={url} className={styles.link}>Read more</a> 
      )}
    </div>
  </div>
)
