import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import SectionCopy from 'src/components/experience/SectionCopy'
import Img from 'gatsby-image'
import styles from '../Projects.module.scss'

export default ({ data }) => (
  <Layout>
    <SEO
      title="WegoWise"
      metaDescription="A web application that would enable financial institutions to assess the eligibility of real estate properties for green loans."
    />
    <Intro noBanner>
      <Title
        title="WegoWise"
        subheader="Helping Financial Institutions Go Green"
        backLink="/wegowise"
      />
    </Intro>
    <Content noBanner>
      <SectionCopy>
        <p>
          I led the design and front-end development of a web application that
          would enable financial institutions to assess the eligibility of real
          estate properties for green loans.
        </p>
        <p>
          It was an interesting project to work on as we were pioneering a new
          product in a young, high-growth financial sector. I learned a lot from
          collaborating with some of the largest financial institutions in the
          US.
        </p>

        <h3>Green loan eligibility assessment tool</h3>
        <p>
          The web app allows users to assess the potential eligibility of their
          properties for green loans and adjust various parameters to see how
          that would affect the likelihood of obtaining the loan.
        </p>

        <Img fluid={data.glea.childImageSharp.fluid} />
      </SectionCopy>
      <SectionCopy title="Marketing design">
        <p>
          In addition to the product design I also helped produce the assets for
          a marketing campaign.
        </p>

        <Img fluid={data.marketingScreen.childImageSharp.fluid} />

        <Img fluid={data.flyer2.childImageSharp.fluid} />
      </SectionCopy>
    </Content>
  </Layout>
)

export const query = graphql`
  query {
    glea: file(relativePath: { eq: "ww/glea/glea.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marketingScreen: file(
      relativePath: { eq: "ww/glea/marketing-screen.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flyer2: file(relativePath: { eq: "ww/glea/flyer2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
