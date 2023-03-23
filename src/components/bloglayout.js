import * as React from 'react'
import {useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import * as blogStyles from  './blogstyles.module.css'
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
    <div className={blogStyles.pageContainer}>
      <Header></Header>
      <h1>Creativity & Code</h1>
      <h2>Megan Burleson's Blog</h2>
      <title>{pageTitle} - {data.site.siteMetadata.title} - {data.site.siteMetadata.description}</title>
      <link rel="icon" href={data.site.siteMetadata.icon}/>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default BlogLayout