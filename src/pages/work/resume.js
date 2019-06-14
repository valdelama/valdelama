import React from 'react'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import Job from 'src/components/Job'
import CV from './dan-winer-resume.pdf'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'

export default () => (
  <Layout>
    <Container>
      <SEO title="Resume" metaDescription="Dan Winer's resume/CV" />
      <BodyCopy>
        <Title title="Work" subheader="Résumé" backLink="/work" />
        Download a{' '}
        <a href={CV} title="PDF version of my CV">
          PDF version
        </a>
      </BodyCopy>
      <Job company="Watching That" dates="2018 - Present" role="Lead Designer">
        A video intelligence platform handling millions of streaming data points
        per day that I’ve helped design from the ground up. The role includes
        research, product design, data visualisation design, establishing a
        scalable design system and UI development.
      </Job>

      <Job company="WegoWise" dates="2013 - 2018" role="Lead Designer">
        The largest database of multifamily utility data in the US. I was
        responsible for product and marketing design and for the hiring and
        managing of designers. Instrumental in various aspects of an evolving
        design process:
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
    </Container>
  </Layout>
)
