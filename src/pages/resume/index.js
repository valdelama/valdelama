import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import Content from 'src/components/layout/Content'
import SEO from 'src/components/seo'
import Job from 'src/components/Job'
import Img from 'gatsby-image'

export default function Component ({ data }) {
  return(
  <Layout>
    <SEO
      title="Work"
      metaDescription="Check out what I've been working on for the last few years"
    />
    <Content>
    <Img
        fluid={data.about.childImageSharp.fluid}
      />
    
    <h2>About me</h2>
      <p>
        I live in Spain with my family. I've been designing professionally since 2007. During that time, I worked predominantly as a product designer and UX manager, but I also ran an agency designing and building websites for small businesses, consulted for enterprise clients, worked as a data visualisation designer, as an operations manager, and as a developer. For the last few years, I've led design and research teams and helped designers do their best work. 
      </p>
    
      
      <Job
        company="Smile.io"
        dates="2019 - Present"
        role="Head of Design"
        url="/smile"
      >
        <p>
        Smile is used by over 100k brands and millions of shoppers, I lead a small design and research team building the loyalty infrastructure of the internet. My role has included hiring and retaining top design talent, increasing the role of user-behaviour data and research in design decisions, and improving the collaboration between design and engineering. 
        </p>        
      </Job>

      <Job
        company="Brightfield Group"
        dates="2019 - 2022"
        role="Data vis consultant"
        url="/bfg"
      >
        <p>
        Brightfield is an industry leader in predictive consumer and market intelligence for the CBD and Cannabis industry. I provide them data visualisation expertise.
        </p>
      </Job>

      <Job 
        company="Watching That" 
        dates="2018 - 2019" 
        role="Founding designer"
        url="/watching-that"
        >
        <p>
          A video intelligence platform handling millions of streaming data points per day that I helped design from the ground up. The role included research, product design, data visualisation design, establishing a design system and React UI development.
        </p>
      </Job>
    
      <Job company="WegoWise" dates="2013 - 2018" role="Lead Designer" url="/wegowise">
        <p>
        The largest database of multifamily utility data in the US. I was responsible for product and marketing design, managing the design team and implementing a ‘design first’ culture. Created and oversaw a scalable approach to developing front-end components.
        </p>
      </Job>
      <Job company="Create Today" dates="2009 - 2013" role="Senior product designer">
      A web to print startup and artist community (now offline). I helped take the business from concept through to successful acquisition. Wore many hats and contributed as a designer, engineer and operations manager. 
      </Job>
      <Job company="IGT" dates="2009 - 2012" role="Design Consultant">
      Designed and coded the player portal area of various state lottery sites, developed a reusable front-end framework in HTML, CSS and Javascript. The work also included usability, accessibility and inclusion analysis and iOS design.
      </Job>
    </Content>
  </Layout>
)}

export const Head = () => <body className="gradient" />
export const query = graphql`
  query {
    about: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`