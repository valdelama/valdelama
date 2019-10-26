import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import Role from 'src/components/experience/Role'
import CaseStudyLink from 'src/components/experience/CaseStudyLink'
import ImageCaption from 'src/components/experience/ImageCaption'

import Img from 'gatsby-image'
import styles from './Experience.module.scss'

export default ({ data }) => (
  <Layout>
    <SEO
      title="Watching That"
      metaDescription="My experience as a data visualisation consultant"
    />
    <Intro>
      <Title
        title="Brightfield Group"
        subheader="Predictive consumer and marketing intellgence for the CBD and cannabis industry"
      />
    </Intro>

    <Content>
      <Img
        fluid={data.intro.childImageSharp.fluid}
        className={styles.introImage}
      />
      <Role
        role="Data Visualisation Design Consultant"
        responsibilities="Data visualisation design, Style guide, Power BI development"
        date="August 2019 - Present"
      >
        <p>
          At Brightfield Group I’m helping the company create a professional and
          coherent design language across a wide range of reports and data
          portals. I’m also helping them improve the accessibility and
          efficiency of their products by choosing the right visualisations.
          Unfortunately most of the work can’t be shown due to confidentiality
          reasons.
        </p>
      </Role>

      <ScrollAnimation animateIn="fadeIn">
        <ImageCaption text="Exploring ways to visualise consumer behaviour and habits">
          <Img fluid={data.vis.childImageSharp.fluid} />
        </ImageCaption>
      </ScrollAnimation>
    </Content>
  </Layout>
)

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
  }
`
