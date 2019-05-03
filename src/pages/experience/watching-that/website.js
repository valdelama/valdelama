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
import styles from '../Experience.module.scss'

export default ({ data }) => (
  <Layout>
    <Container>
      <BodyCopy>
        <Title
          title="Watching That"
          subheader="Creating a new marketing site, from concept to production"
          backLink="/experience/watching-that"
        />
        <p>
          I do marketing design as well! I lead the content creation, design and
          development of Watching That's new website. It was really satisfying
          taking this project from start to finish.
        </p>
      </BodyCopy>
      <SectionCopy title="Setting the right tone">
        <p>
          Once there was a solid content map in place outlining the different
          pages and sections we would need the first thing I worked on was
          figuring out what we wanted the public image of the company to be.
        </p>
        <p>
          I encouraged the meeting attendees to throw out some phrases that they
          thought describes us well and also labels that we don't want to be
          stuck with.
        </p>
        <p>
          We summarised that into five adjective that everybody agreed
          represented what we strive for as a company:
          <ul>
            <li>Human</li>
            <li>Expert</li>
            <li>Approachable</li>
            <li>Friendly</li>
            <li>Experienced</li>
          </ul>
        </p>
      </SectionCopy>
      <div className={cn(styles.expImage, styles.expImageWT)}>
        <Img
          fluid={data.website.childImageSharp.fluid}
          className={styles.shadow}
        />
      </div>
    </Container>
    <WWLink />
  </Layout>
)

export const query = graphql`
  query {
    website: file(relativePath: { eq: "wt/website1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
