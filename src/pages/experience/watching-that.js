import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Layout from 'src/components/Layout'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'
import SectionCopy from 'src/components/experience/SectionCopy'
import Img from 'gatsby-image'
import styles from './Experience.module.scss'

export default ({ data }) => (
  <Layout>
    <Container>
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
          data exploration, UX design, data visualisation design, marketing
          design, and front-end development (using React).
        </p>
      </BodyCopy>
      <div styleName="expBlock1 intro">
        <div styleName="expBlock1Left">
          <SectionCopy title="Video Intelligence Dashboard">
            <p>
              The goal was to build a flexible dashboard that, through
              personalisation, would become invaluable to users from across all
              roles in the organisation.
            </p>
            <p>
              Feedback has been very positive with customers relying on it daily
              for a top-level view of the metrics they care about it.
            </p>
          </SectionCopy>
        </div>
        <div styleName="expBlock1Right">
          <div styleName="expBlock1Img">
            <Img fixed={data.widgets.childImageSharp.fixed} />
          </div>
        </div>
      </div>
    </Container>
    <ScrollAnimation animateIn="fadeIn">
      <div className={styles.expBlock2}>
        <SectionCopy title="Content Performance">
          <p>
            The content performance feature allows users to understand what kind
            of content is engaging their users in order to try and recreate that
            success. At the same time it enables them to spot opportunities
            where engaging content is not receiving the sort of exposure it
            deserves—pinpointing where to direct promotional efforts.
          </p>
        </SectionCopy>

        <div styleName="expBlock2Img">
          <Img fixed={data.cp.childImageSharp.fixed} />
        </div>
      </div>
    </ScrollAnimation>
    <Container>
      <ScrollAnimation animateIn="fadeIn">
        <div styleName="expBlock1">
          <div styleName="expBlock1Left">
            <SectionCopy title="Troubleshooting Analysis">
              <p>
                The most advanced interface available for understanding and
                resolving video advertising errors.
              </p>
            </SectionCopy>
          </div>
          <div styleName="expBlock1Right">
            <div styleName="expBlock1Img">
              <Img
                fixed={data.errors.childImageSharp.fixed}
                style={{ boxShadow: '0 8px 20px rgba(0, 70, 140, 0.08)' }}
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
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
    cp: file(relativePath: { eq: "wt/cp.png" }) {
      childImageSharp {
        fixed(width: 770) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    errors: file(relativePath: { eq: "wt/errors.png" }) {
      childImageSharp {
        fixed(width: 720) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    widgets: file(relativePath: { eq: "wt/widgets.png" }) {
      childImageSharp {
        fixed(width: 709) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
