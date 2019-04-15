import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Layout from 'src/components/Layout'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'
import SectionCopy from 'src/components/experience/SectionCopy'
import Img from 'gatsby-image'
import styles from '../Experience.module.scss'
import glStyles from './GreenLoans.module.scss'

export default ({ data }) => (
  <Layout>
    <BodyCopy>
      <Title
        title="WegoWise"
        subheader="Helping Financial Institutions Go Green"
      />
      <p>
        I led the design and front-end development of a web application that
        would enable financial institutions to assess the eligibility of real
        estate properties for green loans.
      </p>
      <p>
        It was an interesting project to work on as we were pioneering a new
        product in a young, high-growth financial sector. I learned a lot from
        collaborating some of the largest financial institutions in the US.
      </p>
    </BodyCopy>
    <div styleName="styles.expSection">
      <BodyCopy>
        <h3>Green loan eligibility assessment tool</h3>
        <p>
          The web app allows users to assess the potential eligibility of their
          properties for green loans and adjust various parameters to see how
          that would affect the likelihood of obtaining the loan.
        </p>
      </BodyCopy>
      <div styleName="styles.expSectionImg">
        <Img
          fixed={data.glea.childImageSharp.fixed}
          styleName="styles.shadowImg"
        />
      </div>
    </div>
    <div styleName="styles.expSection">
      <BodyCopy>
        <h3>Marketing design</h3>
        <p>
          In addition to the product design I also helped produce the assets for
          a marketing campaign.
        </p>
      </BodyCopy>
      <div styleName="styles.expSectionImg">
        <Img fixed={data.marketingScreen.childImageSharp.fixed} />
      </div>
      <div styleName="glStyles.flyerSection">
        <Img fixed={data.flyer2.childImageSharp.fixed} />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    glea: file(relativePath: { eq: "ww/glea/glea.png" }) {
      childImageSharp {
        fixed(width: 1440) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    marketingScreen: file(
      relativePath: { eq: "ww/glea/marketing-screen.png" }
    ) {
      childImageSharp {
        fixed(width: 760) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    flyer2: file(relativePath: { eq: "ww/glea/flyer2.png" }) {
      childImageSharp {
        fixed(width: 1264) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
