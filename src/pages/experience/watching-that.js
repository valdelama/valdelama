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
import WWLink from 'src/components/experience/WWLink'
import Img from 'gatsby-image'
import styles from './Experience.module.scss'

export default ({ data }) => (
  <Layout>
    <Container>
      <SEO
        title="Watching That"
        metaDescription="My experience as Head of Design at Watching That, a data analytics platform for video media."
      />
      <BodyCopy>
        <Title
          title="Watching That"
          subheader="Designing the Future of Video Analytics"
        />
        <p>
          As head of design at Watching That, a data analytics platform for
          video media, I am responsible for finding ways for our customers to
          navigate and interpret large sets of complex data so that they can
          optimize their video advertising technology stack. The role combines
          product strategy, data exploration, UX design, data visualisation
          design, marketing design, and UI development (using React).
        </p>
      </BodyCopy>
      <SectionCopy title="Video Intelligence Dashboard">
        <p>
          The goal was to build a flexible dashboard that, through
          personalisation, would become invaluable to users from across all
          roles in the organisation.
        </p>
        <p>
          Feedback has been very positive with customers relying on it daily for
          a top-level view of the metrics they care about it.
        </p>
      </SectionCopy>
      <div className={cn(styles.expImage, styles.expImageWT)}>
        <Img fluid={data.widgets.childImageSharp.fluid} />
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <SectionCopy title="Content Performance">
          <p>
            The content performance feature allows our customers to understand
            what kind of content is engaging their users in order to try and
            recreate that success. At the same time it enables them to spot
            opportunities where engaging content is not receiving the sort of
            exposure it deserves—pinpointing where to direct promotional
            efforts.
          </p>
        </SectionCopy>

        <div className={cn(styles.expImage, styles.expImageWT)}>
          <Img
            fluid={data.cp.childImageSharp.fluid}
            className={styles.shadow}
          />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <SectionCopy title="Troubleshooting Analysis">
          <p>
            The most advanced interface available for understanding and
            resolving video advertising errors.
          </p>
        </SectionCopy>

        <div className={cn(styles.expImage, styles.expImageWT)}>
          <Img
            fluid={data.errors.childImageSharp.fluid}
            className={styles.shadow}
          />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <SectionCopy title="Channel insights">
          <p>
            A feature that allows users to track campaigns across various
            channels (social media networks and domains) to compare and
            aggregate performance data.
          </p>
        </SectionCopy>
        <div
          className={cn(
            styles.expImage,
            styles.expImageWT,
            styles.expImageBottom
          )}
        >
          <Img fluid={data.channels.childImageSharp.fluid} />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <SectionCopy title="A new website">
          <p>
            I do marketing design as well! I lead the content creation, design
            and development of Watching That's new website. It was really
            satisfying taking this project from start to finish.
          </p>
          <Link to="experience/watching-that/website">Read more →</Link>
        </SectionCopy>
        <div className={cn(styles.expImage, styles.expImageWT)}>
          <Link to="experience/watching-that/website">
            <Img
              fluid={data.website.childImageSharp.fluid}
              className={styles.shadow}
            />
          </Link>
        </div>
      </ScrollAnimation>
    </Container>
    <WWLink />
  </Layout>
)

export const query = graphql`
  query {
    channels: file(relativePath: { eq: "wt/channels.png" }) {
      childImageSharp {
        fluid(maxWidth: 1497) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cp: file(relativePath: { eq: "wt/cp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1379) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    errors: file(relativePath: { eq: "wt/errors.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    widgets: file(relativePath: { eq: "wt/widgets.png" }) {
      childImageSharp {
        fluid(maxWidth: 2410) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    website: file(relativePath: { eq: "wt/website1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
