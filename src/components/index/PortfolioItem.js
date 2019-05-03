import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import BodyCopy from '../BodyCopy'
import styles from './PortfolioItem.module.scss'

export default ({ kind, image, imgClass, company, url, description }) => (
  <Link to={url} className={cn(styles.portfolioItem, styles[kind])}>
    <div className={cn(styles.imageWrapper, styles[imgClass])}>
      <img src={image} alt={company} className={styles.image} />
    </div>
    <div className={styles.copy}>
      <div className={styles.company} to={url}>
        {company}
      </div>
      <span className={styles.description}>{description}</span>
    </div>
  </Link>
)
