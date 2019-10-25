import React from 'react'
import { Link } from 'gatsby'
import Container from 'src/components/layout/Container'
import dribbble from 'src/images/dribbble.svg'
import linkedin from 'src/images/linkedin.svg'
import styles from './Footer.module.scss'

export default () => (
  <footer>
    <Container>
      <div className={styles.content}>
        <div className={styles.external}>
          <a href="https://dribbble.com/dantarifa" className={styles.iconLink}>
            <img src={dribbble} alt="Dribbble" />
          </a>
          <a
            href="https://www.linkedin.com/in/danwiner/"
            className={styles.iconLink}
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>
        <div className={styles.copy}>
          There's nothing more to see here, have a look at these projects:
          <div className={styles.links}>
            <Link
              to="/experience/watching-that"
              className={styles.link}
              activeClassName={styles.active}
              partiallyActive={true}
            >
              Watching That
            </Link>
            <Link
              to="/experience/wegowise"
              className={styles.link}
              activeClassName={styles.active}
              partiallyActive={true}
            >
              WegoWise
            </Link>
            <Link
              to="/experience/bfg"
              className={styles.link}
              activeClassName={styles.active}
              partiallyActive={true}
            >
              Brightfield Group
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </footer>
)
