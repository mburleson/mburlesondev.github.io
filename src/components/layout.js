import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Nav from '../components/nav'
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
      <Nav></Nav>
      <title>{pageTitle} | {data.site.siteMetadata.title} - {data.site.siteMetadata.description}</title>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout