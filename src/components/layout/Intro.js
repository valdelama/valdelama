import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import ScrollAnimation from 'react-animate-on-scroll'
import Container from 'src/components/layout/Container'
import Nav from 'src/components/layout/Nav'
import styles from './Intro.module.scss'

export default ({ className, children, noBanner }) => (
  <div className={cn(styles.intro, className, noBanner && styles.noBanner)}>
    <Container>
      <Nav />
      <ScrollAnimation animateIn="fade" duration={0.3} animateOnce>
        <div className={styles.content}>{children}</div>
      </ScrollAnimation>
    </Container>
  </div>
)
