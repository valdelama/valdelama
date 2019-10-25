import React from 'react'
import SectionTitle from './SectionTitle'
import styles from './SectionCopy.module.scss'

export default ({ title, children }) => (
  <div className={styles.sectionCopy}>
    {title && <SectionTitle title={title} />}
    {children}
  </div>
)
