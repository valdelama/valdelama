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
          Built with Gatsby and Netlify
        </div>

        <div className={styles.email}>
          <span className={styles.emailIcon}>            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path></svg>
          </span>
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%64%61%6E%74%61%72%69%66%61%40%67%6D%61%69%6C%2E%63%6F%6D">Get in touch</a>
        </div>
      </div>
    </Container>
  </footer>
)
