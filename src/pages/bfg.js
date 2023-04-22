import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
import Content from 'src/components/layout/Content'
import Breadcrumbs from 'src/components/Breadcrumbs'
import Role from 'src/components/experience/Role'
import ImageCaption from 'src/components/experience/ImageCaption'
import Img from 'gatsby-image'
import * as styles from './Projects.module.scss'

export default function Component ({ data }) {
  return (
  <Layout>
    <SEO
      title="Brightfield Group"
      metaDescription="My experience as a data visualisation consultant"
    />

    <Content>
      <Img
        fluid={data.intro.childImageSharp.fluid}
        className={styles.introImage}
      />
      <Breadcrumbs backLink="/#work" backTitle="Work" title="Brightfield Group" />      
      <Role
        role="Data visualisation designer"
        responsibilities="Data visualisation design, Style guides, Power BI development"
        date="August 2019 - May 2022"
      >
      <h2>Predictive consumer and marketing intelligence for the CBD and cannabis industry</h2>
        <p>
          At Brightfield Group I’m helping the company create a professional and
          coherent design language across a wide range of reports and data
          portals. I’m also helping them improve the accessibility and
          efficiency of their products by choosing the right visualisations.
          Unfortunately most of the work can’t be shown due to confidentiality
          reasons.
        </p>
      </Role>

        <ImageCaption text="Exploring ways to visualise consumer behaviour and habits">
          <Img fluid={data.vis.childImageSharp.fluid} />
        </ImageCaption>
      
        <ImageCaption text="Detailed styleguides to help scale a coherent visual language across the products">
          <Img fluid={data.styleguide.childImageSharp.fluid} />
        </ImageCaption>
      
    </Content>
  </Layout>
)}

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "bfg/intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vis: file(relativePath: { eq: "bfg/bfg-vis.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    styleguide: file(relativePath: { eq: "bfg/styleguide.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
