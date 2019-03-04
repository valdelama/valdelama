import React from 'react'
import { Link } from 'gatsby'
import styles from './Nav.module.scss'

export default () => (
  <nav className={styles.nav}>
    <Link to="/" className={styles.link} activeClassName={styles.active}>
      Home
    </Link>
    <Link to="/blog/" className={styles.link} activeClassName={styles.active}>
      Blog
    </Link>
  </nav>
)
