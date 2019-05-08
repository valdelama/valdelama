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
      <SEO
        title="Watching That"
        metaDescription="Designing a new website for Watching That."
      />
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
          Once there was a solid content map in place, outlining the different
          pages and sections we would need, the first thing I worked on was
          figuring out what we wanted the public image of the company to be.
        </p>
        <p>
          I encouraged the meeting attendees to throw out some phrases that they
          thought describe us well and also the labels that we don't want to be
          stuck with.
        </p>
        <p>
          We summarised the results as five adjectives that everybody agreed
          represented what we strive for as a company:
          <ul>
            <li>Human</li>
            <li>Expert</li>
            <li>Approachable</li>
            <li>Friendly</li>
            <li>Experienced</li>
          </ul>
        </p>
        <p>
          I used those as guiding principles to set the right tone for both the
          copy and the aesthetics to achieve a blend of a clean and professional
          feel without being overly corporate. At least that's what I hope we
          achieved.
        </p>
      </SectionCopy>
      <SectionCopy title="The Great Gatsby">
        <p>
          This was my first time building a site in{' '}
          <a href="https://www.gatsbyjs.org/" title="Gatsby.js website">
            Gatsby
          </a>{' '}
          and I have to say it was pretty awesome. I'm already used to creating
          components in React (because that's what we use for the Watching That
          web application) but this was my first time getting into GraphQL,
          which can be used to loop through markdown files.
        </p>
        <p>
          It really makes it easy to build blazingly fast websites, our{' '}
          <a
            href="https://developers.google.com/web/tools/lighthouse/"
            title="Google Lighthouse website"
          >
            lighthouse score
          </a>{' '}
          for performance is 99 and that's really without trying very hard
          because Gatsby kind of does that for you 'out of the box'.
        </p>
        <p>
          Take a look at the{' '}
          <a href="https://www.watchingthat.com/" title="Watching That website">
            live website
          </a>
          .
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
