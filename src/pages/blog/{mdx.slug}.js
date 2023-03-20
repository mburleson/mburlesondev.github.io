import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { } from '@fortawesome/free-solid-svg-icons'
import BlogLayout from '../../components/bloglayout'
import Sidebar from '/src/components/sidebar'
import * as blogStyles from  '../../components/blogstyles.module.css'


const BlogPost = ({ data }) => {
  const hero = getImage(data.mdx.frontmatter.hero_image)
  return (
    <BlogLayout>
    <section className={blogStyles.breadcrumbContainer}><p className={blogStyles.postBreadcrumb}><Link to={`/blog`}>Blog</Link> / <Link to={`/blog/${data.mdx.slug}`}>{data.mdx.frontmatter.title}</Link></p></section>
    <section className={blogStyles.postContainer}>
      <section className={blogStyles.post}>
      <GatsbyImage
          image={hero}
          alt={data.mdx.frontmatter.hero_image_alt}
          className={blogStyles.hero_image}
        />
      <h2>{data.mdx.frontmatter.title}</h2>
        <section className={blogStyles.postContent}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </section>  
        </section>
        <Sidebar></Sidebar>
        </section>
    </BlogLayout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        date
        image{
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        sidebar_image {
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

export const Head = () => {
  return <Seo />;
  };