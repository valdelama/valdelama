import React from 'react'
import ArrowLink from 'src/components/ArrowLink'
import SmallTitle from 'src/components/SmallTitle'
import * as styles from './Title.module.scss'

export default ({ subheader, backLink, title }) => (
  <div>
      {!backLink && <SmallTitle content={title} />}
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
