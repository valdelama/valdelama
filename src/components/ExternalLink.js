import React from 'react'
import * as styles from './ExternalLink.module.scss'

export default ({ url, title, type, location, date, unreleased }) => (
  <div className={styles.wrapper}>
    <div className={styles.details}>
      <span className={styles.type}>{type}</span>
      <span className={styles.divider}>|</span>
      <span className={styles.location}>{location}</span>
      {date && (<>
        <span className={styles.divider}>|</span>
        <span className={styles.date}>{date}</span>
      </>)}
      {unreleased && (<>
        <span className={styles.divider}>|</span>
        <span className={styles.comingSoon}>Coming soon</span>
      </>)}
    </div>
    <a href={url} className={styles.link}>
      {title}       
      <span className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </svg>
      </span>      
    </a>
  </div>
)
