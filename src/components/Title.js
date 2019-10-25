import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import ArrowLink from 'src/components/ArrowLink'
import SmallTitle from 'src/components/SmallTitle'
import styles from './Title.module.scss'

export default ({ title, subheader, backLink }) => (
  <div className={styles.wrapper}>
    {!backLink && <SmallTitle className={styles.title} content={title} />}
    {backLink && (
      <ArrowLink
        url={backLink}
        text={title}
        className={styles.titleBackLink}
        back
      />
    )}
    <h2 className={styles.subheader}>{subheader}</h2>
  </div>
)
