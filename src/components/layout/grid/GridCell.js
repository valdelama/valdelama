import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import styles from './GridCell.module.scss'

export default ({ className, kind, span, ...otherProps }) => (
  <div
    className={cn(
      styles.gridCell,
      span && styles[`span${span}`],
      kind && styles[kind],
      className
    )}
    {...otherProps}
  />
)
