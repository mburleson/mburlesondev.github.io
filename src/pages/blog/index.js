import * as React from 'react'
import { Link, graphql } from 'gatsby'
import BlogLayout from '../../components/bloglayout'
import * as blogStyles from  '../../components/blogstyles.module.css'

const BlogPage = ({ data }) => {
  return (
    <BlogLayout pageTitle="My Blog Posts">
    <section className={blogStyles.articleContainer}>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className={blogStyles.meta}>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </section>
    </BlogLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage