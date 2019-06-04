import React from 'react'
import { Link } from 'gatsby'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import BodyCopy from 'src/components/BodyCopy'
import styles from './SectionLink.module.scss'

export default () => (
  <GridRow>
    <GridCell>
      <Link to="/experience/watching-that/" className={styles.link}>
        <span className={styles.intro}>Want to switch to something else?</span>
        <span className={styles.company}>
          Check out what I'm doing at Watching That.
        </span>
      </Link>
    </GridCell>
    <GridCell>
      <div className={styles.crossLinkPanel}>
        <span className={styles.intro}>
          Read more about my time at WegoWise
        </span>
        <div className={styles.contextualLinks}>
          <Link
            to="/experience/wegowise"
            className={styles.crossLink}
            activeClassName={styles.active}
          >
            WegoWise overview
          </Link>
          <Link
            to="/experience/wegowise/information-architecture"
            className={styles.crossLink}
            activeClassName={styles.active}
          >
            Solving an Information Architecture Puzzle
          </Link>
          <Link
            to="/experience/wegowise/green-loans"
            className={styles.crossLink}
            activeClassName={styles.active}
          >
            Helping Financial Institutions Go Green
          </Link>
        </div>
      </div>
    </GridCell>
  </GridRow>
)
