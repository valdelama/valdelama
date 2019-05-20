import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import PortfolioItem from 'src/components/index/PortfolioItem'
import WtImg from 'src/pages/index/watchingthat.svg'
import WegoImg from 'src/pages/index/wegowise.svg'
import CV from './dan-winer-resume.pdf'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'
import styles from './Work.module.scss'

export default () => (
  <Layout>
    <Container>
      <SEO
        title="Work"
        metaDescription="Check out what I've been working on for the last few years"
      />
      <BodyCopy>
        <Title
          title="Work"
          subheader="Design, development and leadership experience"
        />
        <p>
          I've worked as a freelancer designing and building websites for small
          businesses, as a consultant for large companies, as an operations
          manager and as a developer. For the last 6+ years I've been leading
          the design effort for data analytics platforms. For a complete
          timeline please take a look at{' '}
          <a href={CV} title="PDF version of my CV">
            my cv
          </a>
          .
        </p>
      </BodyCopy>
      <div className={styles.companies}>
        <GridRow>
          <GridCell>
            <ScrollAnimation animateIn="fadeIn">
              <PortfolioItem
                image={WtImg}
                imgClass="watchingthat"
                url="/experience/watching-that/"
                company="Watching That"
                description="Helping to create the future of video revenue analytics."
                kind="wt"
              />
            </ScrollAnimation>
          </GridCell>
          <GridCell>
            <PortfolioItem
              image={WegoImg}
              imgClass="wegowise"
              url="/experience/wegowise"
              company="WegoWise"
              description="The leading analytics platform in the US for utility data."
            />
          </GridCell>
        </GridRow>
      </div>
      <BodyCopy>
        <p>
          I've always been interested in turning my designs into code. Recently
          I have been working with React components and before that I was using
          Sass and BEM.
        </p>
        <p>
          My experience and working knowledge of both visual design and
          front-end code helps me implement and oversee consistent design
          systems that facilitate both the design and development process.
        </p>
      </BodyCopy>
    </Container>
  </Layout>
)
