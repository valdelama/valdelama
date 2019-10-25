import React from 'react'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'
import Job from 'src/components/Job'
import ArrowLink from 'src/components/ArrowLink'
import CV from './dan-winer-resume.pdf'
import styles from './Work.module.scss'

export default () => (
  <Layout>
    <SEO
      title="Work"
      metaDescription="Check out what I've been working on for the last few years"
    />
    <Intro noBanner>
      <Title title="Dan Winer" subheader="Work Experience" />
    </Intro>
    <Content noBanner>
      <p>
        I've worked as a freelancer designing and building websites for small
        businesses, as a consultant for large companies, as an operations
        manager and as a developer. For the last 6+ years I've been leading the
        design effort for data analytics platforms. My resume is available below
        or as a{' '}
        <a href={CV} title="PDF version of my CV">
          PDF
        </a>
        .
      </p>

      <Job company="Watching That" dates="2018 - Present" role="Lead Designer">
        <p>
          A video intelligence platform handling millions of streaming data
          points per day that I’ve helped design from the ground up. The role
          includes research, product design, data visualisation design,
          establishing a scalable design system and UI development.
        </p>
        <ArrowLink url="experience/watching-that" text="Read more" />
      </Job>
      <Job company="WegoWise" dates="2013 - 2018" role="Lead Designer">
        <p>
          The largest database of multifamily utility data in the US. I was
          responsible for product and marketing design and for the hiring and
          managing of designers. Instrumental in various aspects of an evolving
          design process:
        </p>
        <ul>
          <li>
            Collaborated with business development to explore early-stage
            product concepts.
          </li>
          <li>
            Established and promoted a 'design first' company culture with an
            emphasis on validating ideas via interviews and testing.
          </li>
          <li>
            Implemented and oversaw a scalable, documented approach to
            developing front-end components.
          </li>
        </ul>
        <ArrowLink url="experience/wegowise" text="Read more" />
      </Job>
      <Job company="Create Today" dates="2009 - 2013" role="Operations Manager">
        A web to print startup and artist community (now offline). Lead a
        diverse, distributed team building complex software to tight deadlines.
        I gained a wealth of experience in various aspects of agile development
        and project management. Helped take the business from concept through to
        successful acquisition.
      </Job>
      <Job company="IGT" dates="2009 - 2012" role="Design Consultant">
        Designed and coded the player portal area of various state lottery
        sites, developed a reusable front-end framework in HTML, CSS and
        Javascript. The work also included some ios design and usability/
        accessibility analysis.
      </Job>
    </Content>
  </Layout>
)
