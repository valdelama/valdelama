import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import BodyCopy from '../BodyCopy'
import styles from './PortfolioItem.module.scss'

export default ({ kind, image, imgClass, company, url, description }) => (
  <div className={cn(styles.portfolioItem, styles[kind])}>
    <Link to={url} className={cn(styles.imageWrapper, styles[imgClass])}>
      <img src={image} alt={company} className={styles.image} />
    </Link>
    <div className={styles.copy}>
      <Link className={styles.company} to={url}>
        {company}
      </Link>
      <span className={styles.description}>{description}</span>
    </div>
  </div>
)
