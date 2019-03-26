import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Layout from '../components/Layout'
import BodyCopy from '../components/BodyCopy'
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
        <BodyCopy>
          <div className={styles.indexContent}>
            <span className={styles.intro}>hi! I'm</span>
            <div className={styles.name}>Dan</div>
            <span className={styles.about}>a multi-disciplinary designer </span>
            <p>
              I design and build digital products. I’m particularly interested
              in data visualisation design and scalable design systems.
            </p>
            <p>
              I enjoy connecting with the people that use the products I design
              to make sure that I understand their needs and keep them at the
              forefront of my decision making process.
            </p>
            <p>
              I believe that good design has the potential to transform
              businesses and I help ensure that the right processes and assets
              are in place to harness that potential.
            </p>
          </div>
        </BodyCopy>
        <ScrollAnimation animateIn="fadeIn">
          <PortfolioItem
            image={WtImg}
            url="/experience/watching-that/"
            company="Watching That"
            description="Currently Head of Design at Watching That helping to create the future of video revenue analytics. "
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <PortfolioItem
            image={WegoImg}
            imgClass="wegowise"
            url="#2"
            company="WegoWise"
            description="For five years I was Head of Design at WegoWise, the leading analytics platform in the US for multifamily real estate utility data. "
          />
        </ScrollAnimation>
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