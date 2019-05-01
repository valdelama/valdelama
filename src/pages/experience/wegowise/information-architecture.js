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
import WTLink from 'src/components/experience/WTLink'
import Img from 'gatsby-image'
import styles from '../Experience.module.scss'

export default ({ data }) => (
  <Layout>
    <Container>
      <BodyCopy>
        <Title
          title="WegoWise"
          subheader="Solving an Information Architecture Puzzle"
          backLink="/experience/wegowise"
        />
        <p>
          The dashboard at WegoWise had become a dumping ground for links to
          miscellaneous pages as the site continued to grow and the result was
          an unwieldy, long navigation menu with lots of unrelated links sitting
          side-by-side.
        </p>
        <p>
          To solve this, I created a multi-stage process to ensure that the
          information architecture changes that I implemented were thoroughly
          verified via user testing at various stages.
        </p>
      </BodyCopy>
      <SectionCopy title="Card sorting">
        <p>
          The first stage was to print out every screen of the app onto a card
          and get groups of users to put them into buckets. Post-its were used
          to create the buckets and the cards were placed in lists underneath.
        </p>
      </SectionCopy>
      <div className={styles.expImageFluid}>
        <Img fluid={data.cardSorting.childImageSharp.fluid} />
      </div>
      <SectionCopy>
        <p>
          During the exercise, I conducted interviews to understand the
          reasoning behind the various bucket types and took photos of the
          arrangement to be able to look through them later and check for
          overlaps.
        </p>
      </SectionCopy>
      <div className={styles.expImageFluid}>
        <Img fluid={data.cardSorting2.childImageSharp.fluid} />
      </div>
      <SectionCopy title="Exposing common patterns">
        <p>
          A few common patterns emerged, these were plotted into a tree diagram
          to make sense of the findings and some definitive category names were
          chosen.
        </p>
      </SectionCopy>
      <div className={styles.expImageFluid}>
        <Img fluid={data.iaMap.childImageSharp.fluid} />
      </div>
      <SectionCopy title="Verifying the new structure">
        <p>
          In the next stage, users were asked to move cards into the categories
          that we had defined in the previous step. For this stage we used
          Trello cards and lists and the idea was to verify that the categories
          we had defined made sense to a wider audience.
        </p>
      </SectionCopy>
      <div className={styles.expImageFluid}>
        <Img fluid={data.trello.childImageSharp.fluid} />
      </div>
      <SectionCopy title="Testing the interface">
        <p>
          In the final stage of testing (before starting development), users
          clicked around interactive prototypes (created in Sketch and InVision)
          to see if they arrived at the desired destinations in the expected
          number of clicks.
        </p>
      </SectionCopy>
      <div className={styles.expImageFluid}>
        <Img fluid={data.nav.childImageSharp.fluid} />
      </div>
    </Container>
    <WTLink />
  </Layout>
)

export const query = graphql`
  query {
    cardSorting: file(relativePath: { eq: "ww/card-sorting.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardSorting2: file(relativePath: { eq: "ww/card-sorting2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iaMap: file(relativePath: { eq: "ww/ia-map.png" }) {
      childImageSharp {
        fluid(maxWidth: 1540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trello: file(relativePath: { eq: "ww/trello.png" }) {
      childImageSharp {
        fluid(maxWidth: 1129) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nav: file(relativePath: { eq: "ww/nav.png" }) {
      childImageSharp {
        fluid(maxWidth: 1520) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
