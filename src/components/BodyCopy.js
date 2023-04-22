import React from 'react'
import cn from 'classnames'
import { Link } from 'gatsby'
import * as styles from './BodyCopy.module.scss'

export default ({ children, className }) => (
  <div className={cn(styles.bodyCopy, className)}>{children}</div>
)
