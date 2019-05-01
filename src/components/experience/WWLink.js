import React from 'react'
import { Link } from 'gatsby'
import BodyCopy from 'src/components/BodyCopy'
import styles from './SectionLink.module.scss'

export default () => (
  <div className={styles.wrapper}>
    <BodyCopy>
      <Link to="/experience/wegowise/" className={styles.link}>
        <span className={styles.intro}>
          Want to see what I was doing before this?
        </span>
        <span className={styles.company}>Read about design at WegoWise</span>
      </Link>
    </BodyCopy>
  </div>
)
