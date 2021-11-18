import React from 'react'
import { Link } from 'gatsby'
import Container from 'src/components/layout/Container'
import styles from './Footer.module.scss'

const FooterLink = props => (
  <Link
    className={styles.link}
    to={props.to}
    activeClassName={styles.active}
    partiallyActive={true}
  >
    {props.children}
  </Link>
)

export default () => (
  <footer>
    <Container>
      <div className={styles.content}>
        <div className={styles.external}>
        </div>
        <div className={styles.copy}>
          There's nothing more to see here, have a look at these projects:
          <div className={styles.links}>
          <FooterLink to="/smile">Smile</FooterLink>
            <FooterLink to="/watching-that">Watching That</FooterLink>
            <FooterLink to="/wegowise">WegoWise</FooterLink>
            <FooterLink to="/bfg">Brightfield Group</FooterLink>
          </div>
        </div>
      </div>
    </Container>
  </footer>
)
