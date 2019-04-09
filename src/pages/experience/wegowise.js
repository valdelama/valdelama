import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Layout from 'src/components/Layout'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Title from 'src/components/experience/Title'
import SectionCopy from 'src/components/experience/SectionCopy'
import Img from 'gatsby-image'
import styles from './Experience.module.scss'

export default ({ data }) => (
  <Layout>
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
    <div styleName="expBlock1 intro">
      <div styleName="expBlock1Left">
        <SectionCopy title="Solving an Information Architecture Puzzle">
          <p>
            The dashboard at WegoWise had become a dumping ground for links to
            miscellaneous pages as the site continued to grow and the result was
            an unwieldy, long navigation menu with lots of unrelated links
            sitting side-by-side.
          </p>

          <Link to="experience/wegowise/information-architecture">
            Read more →
          </Link>
        </SectionCopy>
      </div>
      <div styleName="expBlock1Right">
        <div styleName="expBlock1Img">
          <Img fixed={data.nav.childImageSharp.fixed} />
        </div>
      </div>
    </div>
    <ScrollAnimation animateIn="fadeIn">
      <div className={styles.expBlock2}>
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
        <div styleName="expBlock2Img">
          <Img fixed={data.dash.childImageSharp.fixed} />
        </div>
      </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <div styleName="expBlock1">
        <div styleName="expBlock1Left">
          <SectionCopy title="Helping Financial Institutions Go Green">
            <p>
              I led the design and front-end development of a web application
              that would enable financial institutions to assess the eligibility
              of real estate properties for green loans.
            </p>
            <p>
              It was an interesting project to work on as we were pioneering a
              new product in a very young, growing sector of the financial
              technology world. I learned a lot from my collaboration with
              business development and calls with customers from some of the
              largest financial institutions in the US.
            </p>
            <p>
              The product was very well received and continues to be a success.
            </p>
          </SectionCopy>
        </div>
        <div styleName="expBlock1Right">
          <div styleName="expBlock1Img greenLoansImg">
            <Img
              fixed={data.greenLoans.childImageSharp.fixed}
              style={{ boxShadow: '0 8px 20px rgba(0, 70, 140, 0.08)' }}
            />
          </div>
        </div>
      </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <div styleName="expBlock2">
        <SectionCopy title="Channel insights">
          <p>
            A feature that allows users to track campaigns across various
            channels (social media networks and domains) to compare and
            aggregate performance data.
          </p>
        </SectionCopy>
        <div styleName="expBlock2Img">
          <Img fixed={data.channels.childImageSharp.fixed} />
        </div>
      </div>
    </ScrollAnimation>
  </Layout>
)

export const query = graphql`
  query {
    channels: file(relativePath: { eq: "wt/channels.png" }) {
      childImageSharp {
        fixed(width: 770) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    dash: file(relativePath: { eq: "ww/dash.png" }) {
      childImageSharp {
        fixed(width: 759) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    greenLoans: file(relativePath: { eq: "ww/green-loans.png" }) {
      childImageSharp {
        fixed(width: 800) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    greenLoans2: file(relativePath: { eq: "ww/green-loans2.png" }) {
      childImageSharp {
        fixed(width: 720) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    nav: file(relativePath: { eq: "ww/nav.png" }) {
      childImageSharp {
        fixed(width: 760) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
