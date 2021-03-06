import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Layout from '../components/Layout'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import PortfolioItem from 'src/components/index/PortfolioItem'
import WtImg from 'src/pages/index/watchingthat.svg'
import WegoImg from 'src/pages/index/wegowise.svg'
import BFGImg from 'src/pages/index/bfg.svg'
import WTDeco from 'src/pages/index/wtDeco.svg'
import WWDeco from 'src/pages/index/wwDeco.svg'
import WWDisc from 'src/pages/index/wwDisc.svg'
import SEO from 'src/components/seo'
import styles from './index/index.module.scss'

class Home extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          metaDescription="The online home of Dan Winer, a multi-disciplinary product designer."
        />

        <Intro>
          <div className={styles.indexIntro}>
            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.3}
              delay={150}
              animateOnce
            >
              <span className={styles.salutation}>Hi, I'm Dan</span>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              duration={0.3}
              delay={350}
              animateOnce
            >
              <p>
                A product designer that likes to code,
                <br />
                check out some of my work below.
              </p>
            </ScrollAnimation>
          </div>
        </Intro>

        <Content>
          <div className={styles.portfolioWrapper}>
            <ScrollAnimation
              animateIn="wwDecoFade"
              duration={1}
              delay={750}
              animateOnce
            >
              <img src={WTDeco} className={styles.wtDeco} />
            </ScrollAnimation>
            <PortfolioItem
              image={WtImg}
              kind="watchingthat"
              url="/watching-that"
              company="Watching That"
              lead="Designing the future of video revenue analytics"
              description="I help people navigate and interpret large sets of complex data so that they can optimize their video advertising technology stack."
            />
          </div>
          <div className={styles.portfolioWrapper}>
            <PortfolioItem
              image={WegoImg}
              kind="wegowise"
              url="/wegowise"
              company="WegoWise"
              lead="Enabling people to make smarter decisions about how they invest in buildings"
              description="For five years I was responsible for product and marketing design at WegoWise, the largest database of multifamily utilty data in the US."
            />
            {/* <img src={WWDeco} className={styles.wwDeco} /> */}
            {/* <img src={WWDisc} className={styles.wwDisc} /> */}
          </div>
          <PortfolioItem
            image={BFGImg}
            kind="bfg"
            url="/bfg"
            company="Brightfield Group"
            lead="Predictive consumer and marketing intellgence for the CBD and cannabis industry"
            description="As a data visualisation design consultant at Brightfield Group I am helping them achieve a more professional and coherent design language across their suite of reports and data portals."
          />
        </Content>
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
