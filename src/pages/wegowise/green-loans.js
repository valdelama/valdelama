import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
import Content from 'src/components/layout/Content'
import Role from 'src/components/experience/Role'
import Breadcrumbs from 'src/components/Breadcrumbs'
import SectionCopy from 'src/components/experience/SectionCopy'
import ImageCaption from 'src/components/experience/ImageCaption'
import Img from 'gatsby-image'
import * as styles from '../Projects.module.scss'

export default function Component ({ data }) {
  return (
  <Layout>
    <SEO
      title="WegoWise"
      metaDescription="A web application that would enable financial institutions to assess the eligibility of real estate properties for green loans."
    />
    
    <Content>    
    <Img fixed={data.block.childImageSharp.fixed} />
    <Role
        role="Lead Designer"
        responsibilities="Product design, Front-end development, Marketing design, Illustration"
      >
      <Breadcrumbs backLink="/wegowise" backTitle="WegoWise" title="Green loans" />
      <h2>Helping financial institutions go green</h2>
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
        
      </Role>
      <ImageCaption text="I designed and coded the front-end of a web app to allow property managers to assess the eligibility of their buildings for a green loan.">
          <Img fluid={data.glea.childImageSharp.fluid} />
        </ImageCaption>      
      
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
)}

export const query = graphql`
  query {
    block: file(relativePath: { eq: "ww/city-block.png" }) {
      childImageSharp {
        fixed(width: 454) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
