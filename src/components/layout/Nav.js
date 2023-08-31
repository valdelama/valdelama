import React from 'react'
import { Link } from 'gatsby'
import logo from 'src/images/logo-avatar4.png'
import * as styles from './Nav.module.scss'

export default () => (
  <div className={styles.header}>
    <Link to="/" title="Logo" className={styles.logo} width="45px">
      <img src={logo} alt="Home" />
    </Link>
    <div className={styles.nav}>
      <Link to="/#work" className={styles.link} activeClassName={styles.active}>
        Work
      </Link>
      <Link
        to="/resume"
        className={styles.link}
        activeClassName={styles.active}
      >
        About
      </Link>
      <Link
        to="/media"
        className={styles.link}
        activeClassName={styles.active}
        partiallyActive={true}
      >
        Media
      </Link>
    </div>
  </div>
)
