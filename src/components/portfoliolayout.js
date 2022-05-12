import * as React from 'react'
import {useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import * as portfolioStyles from  '../components/portfoliostyles.module.css'

const PortfolioLayout = ({ pageTitle, children }) => {

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
    <div className={portfolioStyles.pageContainer}>
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

export default PortfolioLayout