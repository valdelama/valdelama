import React from 'react'
import cn from 'classnames'
import styles from './SmallTitle.module.scss'

export default ({ content, className }) => (
  <span className={cn(styles.smallTitle, className)}>{content}</span>
)
