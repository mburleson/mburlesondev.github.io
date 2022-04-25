import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import * as blogStyles from '../../components/blog.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Creativity and Code">
    <section className={blogStyles.blogTop}>
      <h1>Creativity & Code: The Blog</h1>
      <p>Here is a brief hello.</p>
    </section>
    <section className={blogStyles.articleContainer}>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
          <Link to={`/blog/${node.slug}`}>
          <img src={node.frontmatter.thumbnail.publicURL} alt={node.frontmatter.thumbmail_alt} />
          </Link>
          <section className={blogStyles.articleContent}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <Link to={`/blog/${node.slug}`}>
            <p className={blogStyles.meta}>
              {node.frontmatter.date} | {node.frontmatter.tags} | {node.frontmatter.category}</p>
              </Link> 
              </section>
          </article>
        ))
      }
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        slug
        frontmatter {
          date
          title
          tags
          category
          thumbnail {
            publicURL
          }
        }
        excerpt
      }
    }

  }
`

export default BlogPage