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
    <Title
        title="Smile.io"
        subheader="Creating sustainable growth for small businesses"
      />
    </Intro>

    <Content>
    <Img
        fluid={data.intro.childImageSharp.fluid}
        className={styles.introImageSmile}
      />
      <Role
        role="Head of Design"
        responsibilities="Design leadership, product design, product planning"
        date="Dec 2019 - Present"
      >
      
        <p>
        <a href="https://smile.io/">Smile.io</a> is the largest loyalty platform in the world. I lead a small design team building both merchant and customer facing experiences. Our work reaches over 60,000 brands, and millions of shoppers. 
        </p>
        <p>
        During my time at Smile I have been building a small design and research team and trying to improve design culture and process. Here are some of my key areas of focus:
        </p> 
        <ul>
          <li>Looking after my team to make sure they are happy, supported, and growing their skills and career.</li>
          <li>Implementing systems that make design work efficient, thoughtful, and cohesive.</li>
          <li>Helping create a shared vision of how design helps us achieve our mission.</li>
          <li>Defining success for the team, and for individuals, and helping track progress towards it.</li>
          </ul>

        <p>I manage a small team so I also have time to be hands-on and help design new features. </p>
      </Role>

    </Content>
  </Layout>
)

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "smile/smile-intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
