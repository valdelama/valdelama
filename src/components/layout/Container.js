import React from 'react'
import cn from 'classnames'
import * as styles from './Container.module.scss'

export default ({ children, className }) => (
  <div className={cn(styles.container, className)}>
    {children}
  </div>
)
