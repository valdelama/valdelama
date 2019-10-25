import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from 'src/components/layout/Container'
import { GridRow, GridCell } from 'src/components/layout/grid/index'
import BodyCopy from 'src/components/BodyCopy'
import SEO from '../components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
// Template styles
import styles from './BlogPost.scss'
// General styles for article content
import './BlogContent.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Intro noBanner>
          <Title
            title="Writing"
            subheader={post.frontmatter.title}
            backLink="/writing"
          />
        </Intro>
        <Content noBanner>
          <div className="blog-post">
            {/* <p>{post.frontmatter.date}</p> */}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <h3 className={styles.prevNextTitle}>More articles…</h3>
          <GridRow>
            {previous && (
              <GridCell className={styles.prevNext}>
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  className={styles.prevNextLink}
                >
                  ← {previous.frontmatter.title}
                </Link>
              </GridCell>
            )}
            {next && (
              <GridCell className={styles.prevNext}>
                <Link
                  to={next.fields.slug}
                  rel="next"
                  className={styles.prevNextLink}
                >
                  {next.frontmatter.title} →
                </Link>
              </GridCell>
            )}
          </GridRow>
        </Content>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
      }
    }
  }
`
