import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Layout from 'src/components/Layout'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'
import SectionCopy from 'src/components/experience/SectionCopy'
import Img from 'gatsby-image'
import styles from '../Experience.module.scss'

export default ({ data }) => (
  <Layout>
    <BodyCopy>
      <Title
        title="WegoWise"
        subheader="Solving an Information Architecture Puzzle"
      />
      <p>
        The dashboard at WegoWise had become a dumping ground for links to
        miscellaneous pages as the site continued to grow and the result was an
        unwieldy, long navigation menu with lots of unrelated links sitting
        side-by-side.
      </p>
      <p>
        To solve this, I created a multi-stage process to ensure that the
        information architecture changes that I implemented were thoroughly
        verified via user testing at various stages.
      </p>
    </BodyCopy>
    <div styleName="expSection">
      <BodyCopy>
        <h3>Card sorting</h3>
        <p>
          The first stage was to print out every screen of the app onto a card
          and get groups of users to put them into buckets. Post-its were used
          to create the buckets and the cards were placed in lists underneath.
        </p>
      </BodyCopy>
      <div styleName="expSectionImg">
        <Img fluid={data.cardSorting.childImageSharp.fluid} />
      </div>
      <BodyCopy>
        <p>
          During the exercise, I conducted interviews to understand the
          reasoning behind the various bucket types and took photos of the
          arrangement to be able to look through them later and check for
          overlaps.
        </p>
      </BodyCopy>
      <div styleName="expSectionImg">
        <Img fluid={data.cardSorting2.childImageSharp.fluid} />
      </div>
    </div>
    <div styleName="expSection">
      <BodyCopy>
        <h3>Exposing common patterns</h3>
        <p>
          A few common patterns emerged, these were plotted into a tree diagram
          to make sense of the findings and some definitive category names were
          chosen.
        </p>
      </BodyCopy>
      <div styleName="expSectionImg">
        <Img fluid={data.iaMap.childImageSharp.fluid} />
      </div>
    </div>
    <div styleName="expSection">
      <BodyCopy>
        <h3>Verifying the new structure</h3>
        <p>
          In the next stage, users were asked to move cards into the categories
          that we had defined in the previous step. For this stage we used
          Trello cards and lists and the idea was to verify that the categories
          we had defined made sense to a wider audience.
        </p>
      </BodyCopy>
      <div styleName="expSectionImg">
        <Img fluid={data.trello.childImageSharp.fluid} />
      </div>
    </div>
    <div styleName="expSection">
      <BodyCopy>
        <h3>Testing the interface</h3>
        <p>
          In the final stage of testing (before starting development), users
          clicked around interactive prototypes (created in Sketch and InVision)
          to see if they arrived at the desired destinations in the expected
          number of clicks.
        </p>
      </BodyCopy>
      <div styleName="expSectionImg">
        <Img fluid={data.nav.childImageSharp.fluid} />
      </div>
    </div>
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
