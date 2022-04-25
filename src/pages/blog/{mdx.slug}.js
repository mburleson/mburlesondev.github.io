import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import BlogLayout from '../../components/bloglayout'
import * as blogStyles from '../../components/blog.module.css'

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <BlogLayout pageTitle={data.mdx.frontmatter.title}>
    <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
    <section className={blogStyles.blogPostContent}> 
    <h1>{data.mdx.frontmatter.title}</h1>
      <p className={blogStyles.meta}>{data.mdx.frontmatter.date} | {data.mdx.frontmatter.tags} | {data.mdx.frontmatter.category}</p> 
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      </section>
    </BlogLayout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
        tags
        category
        thumbnail {
          absolutePath
        }
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost