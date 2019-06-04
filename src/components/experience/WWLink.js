import React from 'react'
import { Link } from 'gatsby'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import BodyCopy from 'src/components/BodyCopy'
import styles from './SectionLink.module.scss'

export default () => (
  <GridRow>
    <GridCell>
      <Link to="/experience/wegowise/" className={styles.link}>
        <span className={styles.intro}>
          Want to see what I was doing before this?
        </span>
        <span className={styles.company}>Read about design at WegoWise</span>
      </Link>
    </GridCell>
    <GridCell>
      <div className={styles.crossLinkPanel}>
        <span className={styles.intro}>
          Read more about my time at Watching That
        </span>
        <div className={styles.contextualLinks}>
          <Link
            to="/experience/watching-that"
            className={styles.crossLink}
            activeClassName={styles.active}
          >
            Watching That overview
          </Link>
          <Link
            to="/experience/watching-that/dashboard"
            className={styles.crossLink}
            activeClassName={styles.active}
          >
            A customisable, card-based dashboard
          </Link>
          <Link
            to="/experience/watching-that/website"
            className={styles.crossLink}
            activeClassName={styles.active}
          >
            Marketing design - a new website
          </Link>
        </div>
      </div>
    </GridCell>
  </GridRow>
)
