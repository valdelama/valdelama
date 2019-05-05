import React from 'react'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Title from 'src/components/Title'

export default () => (
  <Layout>
    <Container>
      <BodyCopy>
        <Title
          title="Thanks!"
          subheader="Thanks for getting in touch, I'll get back to you soon"
        />
      </BodyCopy>
    </Container>
  </Layout>
)
