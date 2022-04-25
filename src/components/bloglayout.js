import * as React from 'react'
import {useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'
import * as layoutStyles from './layout.module.css'
import * as blogStyles from './blog.module.css'

const BlogLayout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          icon
        }
      }
    }
  `)
  return (
    <div className={layoutStyles.container}>
      <Header></Header>
      <title>{pageTitle} - {data.site.siteMetadata.title} - {data.site.siteMetadata.description}</title>
      <link rel="icon" href={data.site.siteMetadata.icon}/>
      <div className={blogStyles.blogPostPageContainer}>
      <main>
        {children}
      </main>
      <section className={blogStyles.sideBar}>
      
      </section>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogLayout