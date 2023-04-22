import React from 'react'
import {Link} from 'gatsby'
import * as styles from './Breadcrumbs.module.scss'


export default ({ backLink, backTitle, title }) => (
  <div className={styles.wrapper}>
    <Link to={backLink}>{backTitle}</Link>
    <div className={styles.divider}>
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
    </div>
    <span className={styles.title}>{title}</span>
  </div>
)