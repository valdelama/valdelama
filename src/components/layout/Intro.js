import React from 'react'
import cn from 'classnames'
import Container from 'src/components/layout/Container'
import Nav from 'src/components/layout/Nav'
import * as styles from './Intro.module.scss'

export default ({ className, children, noBanner }) => (
  <div className={cn(styles.intro, className, noBanner && styles.noBanner)}>
    <Container>
      <div className={styles.content}>{children}</div>
    </Container>
  </div>
)
