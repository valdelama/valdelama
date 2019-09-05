import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Layout from '../components/Layout'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import Title from 'src/components/Title'
import PortfolioItem from '../components/index/PortfolioItem'
import WtImg from '../pages/index/watchingthat.svg'
import WegoImg from '../pages/index/wegowise.svg'
import SEO from '../components/seo'
import styles from './index/index.module.scss'

class Home extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location={this.props.location}>
        <Container>
          <SEO
            title="Home"
            metaDescription="The online home of Dan Winer, a multi-disciplinary product designer."
          />
          <BodyCopy>
            <div className={styles.indexContent}>
              <span className={styles.intro}>hi! I'm</span>
              <div className={styles.name}>Dan</div>
              <span className={styles.about}>
                a multi-disciplinary product designer{' '}
              </span>
              <p>
                Check out what I'm working on currently for the video analytics
                platform{' '}
                <Link to="/experience/watching-that/">Watching That</Link> and
                previously as the lead designer at{' '}
                <Link to="/experience/wegowise">WegoWise</Link>. I love getting
                involved in all aspects of the design cycle and I’m particularly
                interested in data visualisation and scalable design systems.
              </p>
            </div>
          </BodyCopy>
          <GridRow>
            <GridCell>
              <PortfolioItem
                image={WtImg}
                imgClass="watchingthat"
                url="/experience/watching-that/"
                company="Watching That"
                description="Helping to create the future of video revenue analytics."
              />
            </GridCell>
            <GridCell>
              <PortfolioItem
                image={WegoImg}
                imgClass="wegowise"
                url="/experience/wegowise"
                company="WegoWise"
                description="The leading analytics platform in the US for utility data."
              />
            </GridCell>
          </GridRow>
        </Container>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
