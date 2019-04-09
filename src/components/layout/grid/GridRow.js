import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import styles from './GridRow.module.scss'

export default ({ className, ...otherProps }) => (
  <div className={cn(styles.grid, className)} {...otherProps} />
)
