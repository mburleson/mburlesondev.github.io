import * as React from 'react'
import {useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialContact from '../components/socialcontact'
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
      <SocialContact></SocialContact>
      <Footer></Footer>
    </div>
  )
}

export default Layout