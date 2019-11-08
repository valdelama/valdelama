import React from 'react'
import { Link } from 'gatsby'
import Footer from './layout/Footer'
import BodyCopy from '../components/BodyCopy'
import styles from './Layout.module.scss'
class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className={styles.site}>
        <div className={styles.siteContent}>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
