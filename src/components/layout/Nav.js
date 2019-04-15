import React from 'react'
import { Link } from 'gatsby'
import BodyCopy from '../BodyCopy'
import styles from './Nav.module.scss'

export default () => (
  <nav className={styles.nav}>
    <BodyCopy>
      <Link to="/" className={styles.link} activeClassName={styles.active}>
        Home
      </Link>
      <Link
        to="/writing/"
        className={styles.link}
        activeClassName={styles.active}
      >
        Writing
      </Link>
    </BodyCopy>
  </nav>
)
