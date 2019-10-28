import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import SectionCopy from 'src/components/experience/SectionCopy'
import Img from 'gatsby-image'
import DashInteraction from './dashboard-interaction.gif'
import styles from '../Projects.module.scss'

export default ({ data }) => (
  <Layout>
    <SEO
      title="Watching That"
      metaDescription="Creating a card-based, customisable dashboard"
    />
    <Intro noBanner>
      <Title
        title="Watching That"
        subheader="Creating a card-based, customisable dashboard"
        backLink="/watching-that"
      />
    </Intro>
    <Content noBanner>
      <SectionCopy>
        <p>
          The goal was to build a flexible dashboard that, through
          personalisation, would become invaluable to users from across all
          roles in the organisation.
        </p>
        <p>
          Feedback has been very positive with customers relying on it daily for
          a top-level view of the metrics they care about it.
        </p>
        <h3>The personas</h3>
        <p>
          We have four well defined personas that we worked towards on the first
          release of our customisable dashboard:
        </p>
        <ul>
          <li>CTO</li>
          <li>VP of sales</li>
          <li>Product manager</li>
          <li>Ad operations</li>
        </ul>
        <Img
          fluid={data.personas.childImageSharp.fluid}
          className={styles.shadow}
        />
      </SectionCopy>

      <SectionCopy title="Early design explorations">
        <p>
          To begin with I tried to focus the information around a handful of our
          key metrics spread across some of the most popular dimensions. This
          lead to a screen where we could visualise <em>views</em>,{' '}
          <em>ad impressions</em> and <em>fill rate</em> across <em>videos</em>,{' '}
          <em>domains</em> and <em>devices</em>.
        </p>
        <p>
          The information was useful but the approach had some serious flaws:
          our data is so multi-dimensional and the interest of the different
          personas so varied that this was never going to satisfy everyone.
        </p>
        <Img fluid={data.dashv1.childImageSharp.fluid} />
      </SectionCopy>

      <SectionCopy title="A card-based approach">
        <p>
          Based on early impressions and feedback we realised we needed a system
          whereby different members of an organisation could view different data
          on their dashboards. A customisable, card-based approach made the most
          sense for our next design exploration.
        </p>
        <Img fluid={data.dashv2.childImageSharp.fluid} />
      </SectionCopy>
      <SectionCopy title="Keep it simple">
        <p>
          We were getting closer but the cards were too complicated and started
          to go against one of the main objectives of a dashboard: they were
          becoming analytical tools themselves rather than just serving as
          signals that point to areas that might require deeper analysis.
        </p>
        <p>
          Also having date pickers, filters and settings per card meant that,
          not only were they visually cluttered, but it would be very tedious to
          analyse a specific dimension, eg. <em>mobile performance</em>, across
          multiple metrics in one go.
        </p>
        <img src={DashInteraction} />
      </SectionCopy>
      <SectionCopy title="Current status">
        <p>
          This is going to be a long, ongoing project but the first full version
          that we're aiming for allows users to have multiple boards and to
          resize and reorder the cards on each board. So far we have a public
          release where users can have one board and they can choose which cards
          to display.
        </p>
        <p>
          Feedback so far has been very positive, the dashboard has started to
          replace multiple tools that were being used previously and is proving
          accesible to various persona types.
        </p>
        <Img
          fluid={data.dashv3.childImageSharp.fluid}
          className={styles.shadow}
        />
      </SectionCopy>
    </Content>
  </Layout>
)

export const query = graphql`
  query {
    personas: file(relativePath: { eq: "wt/dashboard/personas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dashv1: file(relativePath: { eq: "wt/dashboard/dashv1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dashv2: file(relativePath: { eq: "wt/dashboard/dashv2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dashv3: file(relativePath: { eq: "wt/dashboard/dashv3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
