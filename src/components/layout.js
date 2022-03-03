import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import {
  container
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <Header></Header>
      <title>{pageTitle} | {data.site.siteMetadata.title} - {data.site.siteMetadata.description}</title>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout