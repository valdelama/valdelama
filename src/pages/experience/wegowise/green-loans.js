import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'
import SectionCopy from 'src/components/experience/SectionCopy'
import Img from 'gatsby-image'
import styles from '../Experience.module.scss'
import glStyles from './GreenLoans.module.scss'

export default ({ data }) => (
  <Layout>
    <Container>
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

      <SectionCopy title="Green loan eligibility assessment tool">
        <p>
          The web app allows users to assess the potential eligibility of their
          properties for green loans and adjust various parameters to see how
          that would affect the likelihood of obtaining the loan.
        </p>
      </SectionCopy>
      <div className={cn(styles.expImage, styles.expImageNoBg)}>
        <Img
          fixed={data.glea.childImageSharp.fixed}
          className={styles.shadowImg}
        />
      </div>

      <SectionCopy title="Marketing design">
        <p>
          In addition to the product design I also helped produce the assets for
          a marketing campaign.
        </p>
      </SectionCopy>
      <div className={cn(styles.expImage, styles.expImageWW)}>
        <Img fixed={data.marketingScreen.childImageSharp.fixed} />
      </div>
      <div className={cn(styles.expImage, styles.expImageNoBg)}>
        <Img fixed={data.flyer2.childImageSharp.fixed} />
      </div>
    </Container>
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
        fixed(width: 650) {
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
