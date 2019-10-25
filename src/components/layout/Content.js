import React from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import Container from 'src/components/layout/Container'
import styles from './Content.module.scss'

export default ({ className, children, noBanner }) => (
  <Container>
    <div className={cn(styles.content, className, noBanner && styles.noBanner)}>
      {children}
    </div>
  </Container>
)
