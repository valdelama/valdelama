import React from 'react'
import styles from './Title.module.scss'

export default ({ title, subheader }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.subheader}>{subheader}</h2>
  </div>
)
