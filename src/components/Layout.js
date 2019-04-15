import React from 'react'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import Nav from './layout/Nav'
import Footer from './layout/Footer'
import BodyCopy from '../components/BodyCopy'
import styles from './Layout.module.scss'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return (
      <>
        <Nav />
        <div className={styles.siteContent}>
          {header}
          <PageTransition transitionTime={500}>{children}</PageTransition>
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
