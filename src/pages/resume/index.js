import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'
import Job from 'src/components/Job'
import CV from './resume-dan-winer.pdf'
import Img from 'gatsby-image'

export default ({data}) => (
  <Layout>
    <SEO
      title="Work"
      metaDescription="Check out what I've been working on for the last few years"
    />
    <Intro noBanner>
      <Title title="Dan Winer" subheader="About me" />
    </Intro>
    <Content noBanner>
    <GridRow style={{alignItems: 'center'}}>
    <GridCell>
      <p>
        I live in Southern Spain with my wife and twin daughters.
        I got started in 2007 as a freelancer designing and building websites
        for small businesses. I went on to work as a consultant for a large
        company, as an operations manager and as a developer. For the last few
        years I've been leading small design teams and helping other designers 
        do their best work. My resume is available below or as a{' '}
        <a href={CV} title="PDF version of my CV">
          PDF
        </a>
        .
      </p>
      </GridCell>
      <GridCell span="4">
      <Img fixed={data.about.childImageSharp.fixed} />
      </GridCell>
      </GridRow>
      
      <Job
        company="Smile.io"
        dates="2019 - Present"
        role="Head of Design"
        url="/smile"
      >
        <p>
        Smile is used by over 60k brands and millions of shoppers, I lead a small design team building the loyalty infrastructure of the internet. My role has included hiring and retaining top design talent, increasing the role of user-behaviour data and research in design decisions, and improving the collaboration between design and engineering. 
        </p>        
      </Job>

      <Job
        company="Brightfield Group"
        dates="2019 - Present"
        role="Design Consultant"
        url="/bfg"
      >
        <p>
        Brightfield is an industry leader in predictive consumer and market intelligence for the CBD and Cannabis industry. I provide them data visualisation expertise.
        </p>
      </Job>

      <Job 
        company="Watching That" 
        dates="2018 - Present" 
        role="Lead Designer" 
        url="/watching-that">
        <p>
          A video intelligence platform handling millions of streaming data points per day that I helped design from the ground up. The role included research, product design, data visualisation design, establishing a design system and React UI development.
        </p>
      </Job>
    
      <Job company="WegoWise" dates="2013 - 2018" role="Lead Designer" url="/wegowise">
        <p>
        The largest database of multifamily utility data in the US. I was responsible for product and marketing design, managing the design team and implementing a ‘design first’ culture. Created and oversaw a scalable approach to developing front-end components.
        </p>
      </Job>
      <Job company="Create Today" dates="2009 - 2013" role="Operations Manager">
      A web to print startup and artist community (now offline). Led a diverse, distributed team building complex software to tight deadlines. Helped take the business from concept through to successful acquisition. 
      </Job>
      <Job company="IGT" dates="2009 - 2012" role="Design Consultant">
      Designed and coded the player portal area of various state lottery sites, developed a reusable front-end framework in HTML, CSS and Javascript. The work also included usability, accessibility and inclusion analysis and iOS design.
      </Job>
    </Content>
  </Layout>
)


export const query = graphql`
  query {
    about: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`