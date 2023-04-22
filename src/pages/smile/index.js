import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
import Content from 'src/components/layout/Content'
import Breadcrumbs from 'src/components/Breadcrumbs'
import Role from 'src/components/experience/Role'
import CaseStudyLink from 'src/components/experience/CaseStudyLink'
import ImageCaption from 'src/components/experience/ImageCaption'
import Img from 'gatsby-image'
import * as styles from '../Projects.module.scss'

export default function Component ({ data }) {
  return (
  <Layout>
    <SEO
      title="Smile.io"
      metaDescription="My experience as Head of Design at Smile.io, the loyalty layer of the internet."
    />

    <Content>
    <Img
        fluid={data.intro.childImageSharp.fluid}
        className={styles.introImageSmile}
      />
      <Breadcrumbs backLink="/#work" backTitle="Work" title="Smile" />
      <Role
        role="Head of Design"
        responsibilities="Design leadership, product design, product planning, vision and strategy"
        date="Dec 2019 - Present"
      >
      <h2>Creating sustainable growth for small businesses</h2>
      
        <p>
        Smile.io is one of the largest loyalty platforms in the world. I lead a small design and research team building both merchant and shopper facing experiences. Our work reaches over 100k brands, and millions of shoppers. 
        </p>
        <p>
        My focus has been on building aligment between design, product and engineering; improving design culture and process; and ensuring we balance user needs with business objectives. Here are some of my key areas of focus:
        </p> 
        <ul>
          <li>Ensuring my team are happy, supported, and growing their skills and career.</li>
          <li>Incorporating user research into strategic thinking.</li>
          <li>Implementing systems that make design work efficient, thoughtful, and cohesive.</li>
          <li>Creating a shared vision of how design helps us achieve our mission.</li>
          <li>Defining success for the team, and for individuals, and helping track progress towards it.</li>
          </ul>
      </Role>

        <CaseStudyLink
          title="Optimising merchant onboarding"
          description="An updated onboarding experience that made it easier for merchants to choose optimal settings for their rewards program, and better understand the impact to their business."
          url="/smile/onboarding"
          className="smileOnboarding"
        >
          <Img fluid={data.onboarding.childImageSharp.fluid} />
        </CaseStudyLink>


      
        <ImageCaption text="Updated integration page for Smile merchants.">
          <Img
            fluid={data.integrations.childImageSharp.fluid}
          />
        </ImageCaption>
      
      
      
        <ImageCaption text="Promotional material for the Wix marketplace.">
          <Img
            fluid={data.wixPromo.childImageSharp.fluid}
          />
        </ImageCaption>
      
      
      
        <ImageCaption text="Concept design for our shopper-facing loyalty program.">
          <Img
            fluid={data.smileUI.childImageSharp.fluid}
          />
        </ImageCaption>
      

    </Content>
  </Layout>
)}

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "smile/smile-intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    onboarding: file(relativePath: { eq: "smile/onboarding.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    integrations: file(relativePath: { eq: "smile/integrations.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wixPromo: file(relativePath: { eq: "smile/wix-promo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smileUI: file(relativePath: { eq: "smile/smile-ui-concept.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
