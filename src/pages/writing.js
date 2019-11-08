import React from 'react'
import { Link, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Layout from '../components/Layout'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import ArrowLink from 'src/components/ArrowLink'
import SEO from '../components/seo'
import styles from './Writing.module.scss'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Design journal"
          metaDescription="Notes and essays on product design, React, illustration, typography and user experience"
        />
        <Intro noBanner>
          <Title
            title="A design journal"
            subheader="Notes and essays on product design"
          />
        </Intro>
        <Content noBanner>
          <BodyCopy>
            {posts.map(({ node }) => {
              return (
                <div styleName="post" key={node.fields.slug}>
                  <span className={styles.category}>
                    {node.frontmatter.category}
                  </span>
                  <Link to={node.fields.slug}>
                    <h3 styleName="title">{node.frontmatter.title}</h3>
                  </Link>

                  {/*<small styleName="date">{node.frontmatter.date}</small>*/}
                  <div
                    className={styles.excerpt}
                    dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  />
                </div>
              )
            })}
          </BodyCopy>
        </Content>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 350)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
          }
        }
      }
    }
  }
`
