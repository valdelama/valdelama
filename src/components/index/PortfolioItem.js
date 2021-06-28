import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import SmallTitle from 'src/components/SmallTitle'
import ArrowLink from 'src/components/ArrowLink'
import styles from './PortfolioItem.module.scss'

export default ({ kind, image, company, lead, url, description }) => (
  <div className={cn(styles.wrapper, styles[kind])}>
    <SmallTitle className={styles.title} content={company} />
    <div className={styles.content}>
      <Link to={url} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={company} />
        </div>
      </Link>

      <div className={styles.copy}>
        <span className={styles.description}>{description}</span>
        {url && <ArrowLink url={url} text="Explore" className={styles.explore} /> }
      </div>
    </div>
  </div>
)
