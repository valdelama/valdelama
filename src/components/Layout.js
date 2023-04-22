import React from 'react'
import * as styles from './Layout.module.scss'
import Container from 'src/components/layout/Container'
import Nav from 'src/components/layout/Nav'
import Footer from './layout/Footer'
class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className={styles.site}>    
      <Container>
      <Nav />
      </Container>  
        <div className={styles.siteContent}>        
        {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
