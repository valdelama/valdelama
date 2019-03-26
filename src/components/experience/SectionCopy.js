import React from 'react'
import SectionTitle from './SectionTitle'
import './SectionCopy.module.scss'

export default ({ title, children }) => (
  <div styleName="sectionCopy">
    <SectionTitle title={title} />
    {children}
  </div>
)
