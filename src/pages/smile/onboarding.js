import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import ImageCaption from 'src/components/experience/ImageCaption'
import Layout from 'src/components/Layout'
import SectionCopy from 'src/components/experience/SectionCopy'
import SEO from 'src/components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import Role from 'src/components/experience/Role'
import Img from 'gatsby-image'
import styles from '../Projects.module.scss'

export default ({ data }) => (
  <Layout>
    <SEO
      title="Onboarding case study"
      metaDescription="Optimising the onboarding experience at Smile"
    />
    <Intro noBanner>
      <Title
        title="Smile.io"
        subheader="Optimising merchant onboarding"
        backLink="/smile"
      />
    </Intro>

    <Content noBanner>
    <SectionCopy>
    <h3 className={styles.firstTitle}> Problem</h3>
          <p>One of the problems we were seeing with our merchant onboarding is that configuring the value of the points that customers earn was challenging. Users were exposed to a complicated experience that led to an under-performing program.</p> 
          <p>The knock-on effect to the business was that users see less value in their subscription if their program is not performing well, and are more likley to churn. </p>
          <p>We also decided to try and address another problem that had come up during user testing, which is that the participants were not able to accurately explain what changes would be made to their store after launching the program, or how their customers would interact with it. </p>
        <p>The previous configuration screen tried to explain the entire customer journey whilst also allowing merchants to change their program settings. Changing the settings also meant editing both earning and rewarding actions separately, with no guidance as to what values to choose.</p>
</SectionCopy>
        <ImageCaption text="The previous screen for program configuration">
        <Img
            fluid={data.onboardingOld.childImageSharp.fluid}  className={styles.shadowImg}
          />  
        </ImageCaption>
                    
      
      <SectionCopy title="Solution">
      
          <p>In the new screen we switched to a slider that communicated their program settings as a percentage amount. Depending on what amount merchants chose they were given guidance as to what kind of business would benefit from those settings.</p> 
          <Img
            fluid={data.onboardingNew.childImageSharp.fluid}  className={styles.shadowImg}
          />
      </SectionCopy>
      <SectionCopy>
      <p>We also added a pre-launch screen to help merchants understand what they were committing to.</p>      
          <Img
            fluid={data.preLaunch.childImageSharp.fluid}  className={styles.shadowImg}
          />
        </SectionCopy>
        <SectionCopy title="Results">
          <p>Apart from the screens shown above, we also added a new screen at the beginning of onboarding to explain the value that Smile provides, and updated some of the screens where merchants are able to customise the theme of their program to include clearer instructions on how their customers would interact with their new loyalty program. </p>
          <p>In moderated user tests we found that the number of participants that knew what was going to change on their store, and how users would participate with their loyalty program, had risen from around ~20% to ~80%.</p>
          <p>When tracking the change to optimised programs we saw a dramatic decrease in the time it took for customers to get their first redemption when a merchant has been through the new onboarding experience.</p>
          
          <Img
            fluid={data.firstRedemption.childImageSharp.fluid}  className={styles.shadowImg}
          />
        </SectionCopy>
    </Content>
  </Layout>
)

export const query = graphql`
  query {
    onboardingOld: file(relativePath: { eq: "smile/onboarding-old3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    onboardingNew: file(relativePath: { eq: "smile/onboarding-new.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    preLaunch: file(relativePath: { eq: "smile/pre-launch.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    firstRedemption: file(relativePath: { eq: "smile/first-redemption.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
