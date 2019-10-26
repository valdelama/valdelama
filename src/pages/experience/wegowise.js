import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import Role from 'src/components/experience/Role'
import CaseStudyLink from 'src/components/experience/CaseStudyLink'
import ImageCaption from 'src/components/experience/ImageCaption'
import SectionCopy from 'src/components/experience/SectionCopy'

import Img from 'gatsby-image'
import styles from './Experience.module.scss'

export default ({ data }) => (
  <Layout>
    <SEO
      title="WegoWise"
      metaDescription="My experience as Head of Design for WegoWise, the largest database of multifamily utilty data in the US"
    />
    <Intro>
      <Title
        title="WegoWise"
        subheader="Enabling people to make smarter decisions about how they invest in buildings"
      />
    </Intro>
    <Content>
      <Img
        fluid={data.intro.childImageSharp.fluid}
        className={styles.introImage}
      />
      <Role
        role="Lead Designer"
        responsibilities="Product design, product planning, UI development, marketing design, illustration"
        date="June 2013 - April 2018"
      >
        <p>
          For five years I was responsible for product and marketing design at
          WegoWise, the largest database of multifamily utilty data in the US.
          During that time I established and promoted a design-first company
          culture that emphasised validating early-stage designs through user
          testing.
        </p>
        <p>
          I also created and maintained a styleguide driven development process
          for UI components that helped speed up the time it took to deploy new
          features whilst increasing aesthetic coherence.
        </p>
      </Role>

      <ScrollAnimation animateIn="fadeIn">
        <CaseStudyLink
          title="Helping Financial Institutions Go Green"
          description="I led the design and front-end development of a web application that would enable financial institutions to assess the eligibility of real estate properties for green loans."
          url="experience/wegowise/green-loans"
        >
          <Img
            fluid={data.glea.childImageSharp.fluid}
            className={styles.paddedCaseStudyImg}
          />
        </CaseStudyLink>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <ImageCaption text="Tool for benchmarking against similar buildings.">
          <Img fluid={data.buildingSummary.childImageSharp.fluid} />
        </ImageCaption>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <ImageCaption text="Illustrations for WegoWise product launches.">
          <div className={styles.wegoIllustrations}>
            <Img fixed={data.wegopower.childImageSharp.fixed} />
            <Img fixed={data.windows.childImageSharp.fixed} />
            <Img fixed={data.wegohome.childImageSharp.fixed} />
          </div>
        </ImageCaption>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <CaseStudyLink
          title="Solving an Information Architecture Puzzle"
          description="The dashboard at WegoWise had become a dumping ground for miscellaneous links, I used card sorting to determine new navigation patterns."
          url="experience/wegowise/information-architecture"
        >
          <Img fluid={data.cardSort.childImageSharp.fluid} />
        </CaseStudyLink>
      </ScrollAnimation>
    </Content>
  </Layout>
)

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "ww/intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    glea: file(relativePath: { eq: "ww/glea.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    buildingSummary: file(relativePath: { eq: "ww/building-summary.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wegohome: file(relativePath: { eq: "ww/wegohome.png" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    windows: file(relativePath: { eq: "ww/windows.png" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wegopower: file(relativePath: { eq: "ww/wegopower.png" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cardSort: file(relativePath: { eq: "ww/card-sort.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
