import React from 'react'
import { Link } from 'gatsby'
import BodyCopy from '../BodyCopy'
import styles from './PortfolioItem.module.scss'

export default ({ image, imgClass, company, url, description }) => (
  <div className={styles.portfolioItem}>
    <BodyCopy>
      <div className={styles.copy}>
        <Link className={styles.company} to={url}>
          {company}
        </Link>
        <span className={styles.description}>
          {description} <Link to={url}>More…</Link>
        </span>
      </div>
    </BodyCopy>
    <Link to={url} styleName="imageWrapper" className={styles[imgClass]}>
      <img src={image} alt={company} className={styles.image} />
    </Link>
  </div>
)
