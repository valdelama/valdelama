import React from 'react'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import Footer from './layout/Footer'
import BodyCopy from '../components/BodyCopy'
import styles from './Layout.module.scss'
class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <>
        <div className={styles.siteContent}>
          <PageTransition
            defaultStyle={{
              transitionProperty: 'transform, opacity',
              transitionDuration: '0.5s',
              transitionTimingFunction: 'ease-in-out',
              transform: 'translateY(2px)',
              opacity: 0,
            }}
            transitionStyles={{
              entering: { transform: 'translateY(0)', opacity: 1 },
              entered: { transform: 'translateY(0)', opacity: 1 },
              exiting: { transform: 'translateY(-2px)', opacity: 0 },
            }}
            transitionTime={500}
          >
            {children}
          </PageTransition>
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
