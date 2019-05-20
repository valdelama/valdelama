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
import styles from './Experience.module.scss'

export default ({ data }) => (
  <Layout>
    <Container>
      <SEO
        title="WegoWise"
        metaDescription="My experience as Head of Design for WegoWise, the largest database of multifamily utilty data in the US"
      />
      <BodyCopy>
        <Title
          title="WegoWise"
          subheader="Enabling people to make smarter decisions about how they build and invest in buildings"
        />
        <p>
          For five years I was responsible for product and marketing design at
          WegoWise, the largest database of multifamily utilty data in the US.
          During that time I established and promoted a design-first company
          culture that emphasised validating early-stage designs through user
          testing.
        </p>
      </BodyCopy>
      <ScrollAnimation animateIn="fadeIn">
        <SectionCopy title="A Dashboard to Optimize Utility Consumption">
          <p>
            The challenge was to design a dashboard that would be the initial
            screen that all WegoWise users would see after logging in.
          </p>
          <p>
            We needed to create something that would be useful to all customer
            types, that is configurable, and that is able to clearly display a
            high density of information. The information on display had to be
            both high-level summary data and also detailed data, specific to
            individual properties.
          </p>
        </SectionCopy>
        <div
          className={cn(
            styles.expImage,
            styles.expImageWW,
            styles.expImageBottom
          )}
        >
          <Img fluid={data.dash.childImageSharp.fluid} />
        </div>
      </ScrollAnimation>
      <SectionCopy title="Solving an Information Architecture Puzzle">
        <p>
          The dashboard at WegoWise had become a dumping ground for links to
          miscellaneous pages as the site continued to grow and the result was
          an unwieldy, long navigation menu with lots of unrelated links sitting
          side-by-side.
        </p>
        <Link to="experience/wegowise/information-architecture">
          Read more →
        </Link>
      </SectionCopy>
      <div className={cn(styles.expImage, styles.expImageLinkAbove)}>
        <Link to="experience/wegowise/information-architecture">
          <Img fluid={data.nav.childImageSharp.fluid} />
        </Link>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <SectionCopy title="Helping Financial Institutions Go Green">
          <p>
            I led the design and front-end development of a web application that
            would enable financial institutions to assess the eligibility of
            real estate properties for green loans.
          </p>
          <Link to="experience/wegowise/green-loans">Read more →</Link>
        </SectionCopy>
        <div className={cn(styles.expImage, styles.expImageLinkAbove)}>
          <Link to="experience/wegowise/green-loans">
            <Img
              fluid={data.greenLoans.childImageSharp.fluid}
              className={styles.shadow}
            />
          </Link>
        </div>
      </ScrollAnimation>
    </Container>
    <WTLink />
  </Layout>
)

export const query = graphql`
  query {
    dash: file(relativePath: { eq: "ww/dash.png" }) {
      childImageSharp {
        fluid(maxWidth: 1497) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    greenLoans: file(relativePath: { eq: "ww/green-loans.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    greenLoans2: file(relativePath: { eq: "ww/green-loans2.png" }) {
      childImageSharp {
        fluid(maxWidth: 3042) {
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
