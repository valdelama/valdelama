import React from 'react'
import { Link, graphql } from 'gatsby'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import Container from 'src/components/layout/Container'
import SEO from 'src/components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import SectionCopy from 'src/components/experience/SectionCopy'
import Img from 'gatsby-image'
import * as styles from '../Projects.module.scss'

export default function Component ({ data }) {
  return (
  <Layout>
    <SEO
      title="Watching That"
      metaDescription="Designing a new website for Watching That."
    />
    <Intro noBanner>
      <Title
        title="Watching That"
        subheader="Creating a new marketing site, from concept to production"
        backLink="/watching-that"
      />
    </Intro>
    <Content noBanner>
      <p>
        I do marketing design as well! I led the content creation, design and
        development of Watching That's new website. It was really satisfying
        taking this project from start to finish.
      </p>

      <h3>Setting the right tone</h3>
      <p>
        Once there was a comprehensive content map in place, outlining the
        different pages and sections we would need, the first thing I worked on
        was assessing what we wanted the public image of the company to be.
      </p>
      <p>
        I held a meeting where attendees were encouraged to come up with phrases
        that they thought describe the company well or describe its aspirations.
      </p>
      <p>
        We summarised the results as five adjectives that everybody agreed
        represented what we strive for:
      </p>
      <ul>
        <li>Human</li>
        <li>Expert</li>
        <li>Approachable</li>
        <li>Friendly</li>
        <li>Experienced</li>
      </ul>
      <p>
        I used those as guiding principles to set the right tone for both the
        copy and the aesthetics. I think the result is clean, professional and
        friendly whilst avoiding an overly corporate image. At least that's what
        I hope we achieved.
      </p>
      <h3>The Great Gatsby</h3>
      <p>
        This was my first time using the{' '}
        <a href="https://www.gatsbyjs.org/" title="Gatsby.js website">
          Gatsby
        </a>{' '}
        framework and I have to say it was quite amazing. I'm already used to
        creating components in React (because that's what we use for the
        Watching That web application) but this was my first time getting into
        GraphQL—which in this context is being used to loop through markdown
        files.
      </p>
      <p>
        It really makes it easy to build blazingly fast websites, our{' '}
        <a
          href="https://developers.google.com/web/tools/lighthouse/"
          title="Google Lighthouse website"
        >
          lighthouse score
        </a>{' '}
        for performance is 99 and that's really without trying very hard because
        Gatsby and its plugins pretty much provide that for you 'out of the
        box'.
      </p>
      <p>
        Continuous integration, hosting and CMS functionality are all done via{' '}
        <a href="https://www.netlify.com/" title="Netlify">
          Netlify
        </a>
        .
      </p>


        <Img
          fluid={data.website.childImageSharp.fluid}
          className={styles.shadow}
        />

    </Content>
  </Layout>
)}

export const query = graphql`
  query {
    website: file(relativePath: { eq: "wt/website1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
