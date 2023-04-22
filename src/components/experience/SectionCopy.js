import React from 'react'
import SectionTitle from './SectionTitle'
import * as styles from './SectionCopy.module.scss'

export default ({ title, children }) => (
  <div className={styles.sectionCopy}>
    {title && <SectionTitle title={title} />}
    {children}
  </div>
)
