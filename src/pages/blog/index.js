import * as React from 'react'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import BlogLayout from '../../components/bloglayout'
import * as blogStyles from  '../../components/blogstyles.module.css'
import Sidebar from '../../components/sidebar'

const BlogPage = ({ data }) => {
  return (
    <BlogLayout pageTitle="Megan Burleson's Blog">
    <section className={blogStyles.blogPageContainer}>
    <section className={blogStyles.articleContainer}>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              <GatsbyImage 
                alt={node.frontmatter.thumbnail_alt} 
                image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                className={blogStyles.thumbnail_img}
                layout="constrained"
                />
            </Link>
            <section className={blogStyles.articleContent}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.frontmatter.excerpt}</p>
            <Link to={`/blog/${node.slug}`}><button>read more</button></Link>
            </section>
          </article>
        ))
      }
      </section>
      <Sidebar></Sidebar>
      </section>
    </BlogLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}filter: {fileAbsolutePath: {regex: "/blog/"}}) {
      nodes {
        frontmatter {
          title
          date
          excerpt
          tags
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          thumbnail_alt
        }
        id
        slug
      }
    }
  }
`

export default BlogPage

export const Head = () => {
  return <Seo title="Blog | Megan Burleson"/>;
  };