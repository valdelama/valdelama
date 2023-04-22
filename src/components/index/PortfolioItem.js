import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import SmallTitle from 'src/components/SmallTitle'
import * as styles from './PortfolioItem.module.scss'

export default ({ kind, image, company, lead, url, description }) => (
  <Link className={cn(styles.wrapper, styles[kind])} to={url}>      
    <div className={styles.copy}>
      <SmallTitle className={styles.title} content={company} />
      <span className={styles.description}>{description}</span>
    </div>
    <div className={styles.imageWrapper}>
      <img src={image} alt={company} />
    </div>
  </Link>
)
