import React from 'react'
import { Link } from 'gatsby'
import Container from 'src/components/layout/Container'
import BodyCopy from '../BodyCopy'
import styles from './Nav.module.scss'

export default () => (
  <Container>
    <div className={styles.nav}>
      <Link to="/" className={styles.link} activeClassName={styles.active}>
        Home
      </Link>
      <Link to="/work" className={styles.link} activeClassName={styles.active}>
        Work
      </Link>
      <Link
        to="/writing/"
        className={styles.link}
        activeClassName={styles.active}
      >
        Writing
      </Link>
      <Link
        to="/contact/"
        className={styles.link}
        activeClassName={styles.active}
      >
        Contact
      </Link>
    </div>
  </Container>
)
