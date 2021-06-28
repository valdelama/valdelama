import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import SEO from 'src/components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import Role from 'src/components/experience/Role'
import CaseStudyLink from 'src/components/experience/CaseStudyLink'
import ImageCaption from 'src/components/experience/ImageCaption'
import Img from 'gatsby-image'
import styles from '../Projects.module.scss'

export default ({ data }) => (
  <Layout>
    <SEO
      title="Smile.io"
      metaDescription="My experience as Head of Design at Smile.io, the loyalty layer of the internet."
    />
    <Intro>
      
    </Intro>

    <Content>
      <div className={styles.introImageFixed}>
        <Img fixed={data.intro.childImageSharp.fixed} />
      </div>
      <Role
        role="Head of Design"
        responsibilities="Product design, product planning, design management"
        date="Dec 2019 - Present"
      >
      <Title
        title="Smile.io"
        subheader="Creating sustainable growth for small businesses"
      />
        <p>
        Smile.io is the largest loyalty platform in the world. I lead a small design team building both merchant and customer facing experiences. Our work reaches over 60,000 brands, and millions of shoppers. 
        </p>        
      </Role>



    </Content>
  </Layout>
)

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "smile/intro.png" }) {
      childImageSharp {
        fixed(width: 584) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cp: file(relativePath: { eq: "wt/cp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    errors: file(relativePath: { eq: "wt/errors.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    widgets: file(relativePath: { eq: "wt/widgets.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    website: file(relativePath: { eq: "wt/website1.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
