import React from 'react'
import styles from './Container.module.scss'

export default ({ children, className }) => (
  <div styleName="container" className={className}>
    {children}
  </div>
)
