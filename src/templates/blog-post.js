import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BodyCopy from 'src/components/BodyCopy'
import SEO from '../components/seo'
import Title from 'src/components/Title'
import './BlogPost.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <BodyCopy>
          <Title
            title={post.frontmatter.category}
            subheader={post.frontmatter.title}
          />
        </BodyCopy>
        <div className="blog-post">
          {/* <p>{post.frontmatter.date}</p> */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
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
