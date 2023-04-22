import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from 'src/components/layout/Content'
import Container from 'src/components/layout/Container'
import PortfolioItem from 'src/components/index/PortfolioItem'
import WtImg from 'src/pages/index/watchingthat.svg'
import WegoImg from 'src/pages/index/wegowise.svg'
import BFGImg from 'src/pages/index/bfg.svg'
import SmileImg from 'src/pages/index/smile.svg'
import WTDeco from 'src/pages/index/wtDeco.svg'
import SEO from 'src/components/seo'
import * as styles from './index/index.module.scss'

class Home extends React.Component {
  render() {
    const { data } = this.props    


    return (
      <Layout noNav>
        <SEO
          title="Home"
          metaDescription="The online home of Dan Winer, a multi-disciplinary product designer."
        />

        <Container>
            <div className={styles.indexIntro}>            
              <span className={styles.salutation}>Hi, I’m Dan 👋</span>
              <span className={styles.aboutMe}>A UX leader and product designer, currently head of design at Smile.io</span>
            </div>
          </Container>
        

        <Content>
          <div className={styles.portfolioWrapper} id="work">

              <img src={WTDeco} className={styles.wtDeco} />

              <PortfolioItem
                image={SmileImg}
                kind="smile"
                url="/smile"
                company="Smile.io"
                lead=""
                description="I lead a small design team building the ecommerce loyalty infrastructure of the internet. Our work reaches over 100k brands and millions of shoppers."
              />
              
              <PortfolioItem
                image={WtImg}
                kind="watchingthat"
                url="/watching-that"
                company="Watching That"
                lead="Designing the future of video revenue analytics"
                description="I helped media teams navigate and interpret large sets of complex data to optimize their video advertising technology stack."
              />
            
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
              description="As a data visualisation consultant at Brightfield Group I helped them achieve a more professional and coherent design language across their suite of reports and data portals."
            />
        </Content>
      </Layout>
    )
  }
}

export default Home
export const Head = () => <body className="gradient" />
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
