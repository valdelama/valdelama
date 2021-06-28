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
import styles from '../Projects.module.scss'

export default ({ data }) => (
  <Layout>
    <SEO
      title="Watching That"
      metaDescription="My experience as Head of Design at Watching That, a data analytics platform for video media."
    />
    <Intro>
      <Title
        title="Watching That"
        subheader="Designing the Future of Video Analytics"
      />
    </Intro>

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
      <ScrollAnimation animateIn="fadeIn">
        <CaseStudyLink
          title="Video Intelligence Dashboard"
          description="A customisable dashboard that caters to users from across all roles in the organisation."
          url="/watching-that/dashboard"
        >
          <Img fluid={data.widgets.childImageSharp.fluid} />
        </CaseStudyLink>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <ImageCaption text="The content performance feature allows our customers to understand what kind of content is engaging their users.">
          <Img
            fluid={data.cp.childImageSharp.fluid}
            className={styles.shadow}
          />
        </ImageCaption>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <ImageCaption text="The error analysis feature gives users powerful tools to increase their revenue by helping them understand and resolve video advertising errors.">
          <Img
            fluid={data.errors.childImageSharp.fluid}
            className={styles.shadow}
          />
        </ImageCaption>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <CaseStudyLink
          title="A new website"
          description="I led the content creation, design and development of Watching That's new website."
          url="/watching-that/website"
        >
          <Img
            fluid={data.website.childImageSharp.fluid}
            className={styles.paddedCaseStudyImg}
          />
        </CaseStudyLink>
      </ScrollAnimation>
    </Content>
  </Layout>
)

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "wt/intro.png" }) {
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
