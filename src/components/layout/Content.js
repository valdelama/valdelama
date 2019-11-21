import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import Container from 'src/components/layout/Container'
import styles from './Content.module.scss'

export default ({ className, children, noBanner }) => (
  <PageTransition
    defaultStyle={{
      transitionProperty: 'transform, opacity',
      transitionDuration: '0.3s',
      transitionDelay: '0.45s',
      transitionTimingFunction: 'ease-in-out',
      transform: 'translateY(5px)',
      opacity: 0,
    }}
    transitionStyles={{
      entering: { transform: 'translateY(0)', opacity: 1 },
      entered: { transform: 'translateY(0)', opacity: 1 },
      exiting: { transform: 'translateY(-1px)', opacity: 0 },
    }}
    transitionTime={300}
  >
    <Container>
      <div
        className={cn(styles.content, className, noBanner && styles.noBanner)}
      >
        {children}
      </div>
    </Container>
  </PageTransition>
)
