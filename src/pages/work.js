import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import PortfolioItem from '../components/index/PortfolioItem'
import WtImg from '../pages/index/watchingthat.svg'
import WegoImg from '../pages/index/wegowise.svg'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'
import styles from './Work.module.scss'

export default () => (
  <Layout>
    <Container>
      <BodyCopy>
        <Title
          title="Work"
          subheader="I've been doing this for over 12 years"
        />
        <p>
          I've worked as a freelancer designing and building websites for small
          businesses, as a consultant for large companies, as an operations
          manager and as a developer. For the last 6+ years I've been leading
          the design effort for data analytics platforms.
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
          I have been workign with React components and before that I was using
          Sass and BEM to create and maintain fairly large codebases.
        </p>
        <p>
          My experience and working knowledge of both visual design and
          front-end code helps me implement consistent design systems that
          facilitate both the design and development process.
        </p>
      </BodyCopy>
    </Container>
  </Layout>
)
