import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
import Breadcrumbs from 'src/components/Breadcrumbs'
import Content from 'src/components/layout/Content'
import Role from 'src/components/experience/Role'
import CaseStudyLink from 'src/components/experience/CaseStudyLink'
import ImageCaption from 'src/components/experience/ImageCaption'
import Img from 'gatsby-image'
import * as styles from '../Projects.module.scss'

export default function Component ({ data }) {
  return (
  <Layout>
    <SEO
      title="Watching That"
      metaDescription="My experience as Head of Design at Watching That, a data analytics platform for video media."
    />

    <Content>
      <Img
        fluid={data.intro.childImageSharp.fluid}
        className={styles.introImage}
      />
      <Role
        role="Lead Product Designer"
        responsibilities="Product design, product planning, UI development"
        date="April 2018 - November 2019"
      >

      <Breadcrumbs backLink="/#work" backTitle="Work" title="Watching That" />
      <h2>Designing the future of video analytics</h2>
        <p>
          Watching That is a video intelligence platform that helps content
          creators and publishers optimise their video advertising revenue.
        </p>
        <p>
          My role as the lead product designer in a small startup was very varied
          and ranged from product strategy to wireframing and all the way
          through to UI development in React.
        </p>
        <p>
          The platform provides insight into quite complex, real-time data
          streams and relies heavily on data visualisation and data analytics
          tools.
        </p>
      </Role>
      
        <ImageCaption text="A customisable dashboard that caters to users from across all roles in the organisation.">
      
          <Img fluid={data.widgets.childImageSharp.fluid} />
        </ImageCaption>
      

      
        <ImageCaption text="The content performance feature allows customers to understand what kind of content is engaging their users.">
          <Img
            fluid={data.cp.childImageSharp.fluid}
            
          />
        </ImageCaption>
      

      
        <ImageCaption text="The error analysis feature gives users powerful tools to increase their revenue by helping them understand and resolve video advertising errors.">
          <Img
            fluid={data.errors.childImageSharp.fluid}
            
          />
        </ImageCaption>

        <ImageCaption text="Illustration work for a marketing flyer.">
          <Img
            fluid={data.flyer.childImageSharp.fluid}
            
          />
        </ImageCaption>
      

      
        {/* <CaseStudyLink
          title="A new website"
          description="I led the content creation, design and development of Watching That's new website."
          url="/watching-that/website"
        >
          <Img
            fluid={data.website.childImageSharp.fluid}
            className={styles.paddedCaseStudyImg}
          />
        </CaseStudyLink> */}
      
    </Content>
  </Layout>
)}

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "wt/intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    flyer: file(relativePath: { eq: "wt/flyer.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cp: file(relativePath: { eq: "wt/cp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    errors: file(relativePath: { eq: "wt/errors.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    widgets: file(relativePath: { eq: "wt/widgets.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    website: file(relativePath: { eq: "wt/website1.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
