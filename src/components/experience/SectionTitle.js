import React from 'react'
import styles from './SectionTitle.module.scss'

export default ({ title }) => (
  <span className={styles.sectionHeader}>{title}</span>
)
