import React from 'react'
import { Link } from 'gatsby'
import Container from 'src/components/layout/Container'
import * as styles from './Footer.module.scss'

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
        <div className={styles.copy}>
          <span className={styles.codeIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>
          </span>
          I love to code, I built this website with Gatsby (React) and Netlify
        </div>

        <div className={styles.email}>
          <span className={styles.emailIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path></svg>
          </span>
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%64%61%6E%74%61%72%69%66%61%40%67%6D%61%69%6C%2E%63%6F%6D">Email me</a>
        </div>
      </div>
    </Container>
  </footer>
)
