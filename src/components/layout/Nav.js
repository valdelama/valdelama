import React from 'react'
import { Link } from 'gatsby'
import Container from 'src/components/layout/Container'
import logo from 'src/images/logo.svg'
import styles from './Nav.module.scss'

export default () => (
  <div className={styles.header}>
    <Link to="/" title="Logo" className={styles.logo}>
      <img src={logo} alt="Home" />
    </Link>
    <div className={styles.nav}>
      <Link to="/" className={styles.link} activeClassName={styles.active}>
        Home
      </Link>
      <Link
        to="/resume"
        className={styles.link}
        activeClassName={styles.active}
      >
        Resume
      </Link>
      <Link
        to="/writing"
        className={styles.link}
        activeClassName={styles.active}
        partiallyActive={true}
      >
        Writing
      </Link>
      <Link
        to="/contact"
        className={styles.link}
        activeClassName={styles.active}
      >
        Contact
      </Link>
    </div>
  </div>
)
