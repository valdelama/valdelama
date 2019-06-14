import React from 'react'
import BodyCopy from 'src/components/BodyCopy'
import styles from './Job.module.scss'

export default ({ children, company, dates, role }) => (
  <BodyCopy className={styles.wrapper}>
    <div className={styles.company}>{company}</div>
    <div className={styles.content}>
      <div className={styles.meta}>
        <span className={styles.role}>{role}</span>
        <span className={styles.dates}>{dates}</span>
      </div>
      <div className={styles.description}>{children}</div>
    </div>
  </BodyCopy>
)
