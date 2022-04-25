import * as React from 'react'
import {useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import * as layoutStyles from './layout.module.css'



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
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default BlogLayout