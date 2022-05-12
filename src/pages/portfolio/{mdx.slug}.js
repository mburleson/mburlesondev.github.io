import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import PortfolioLayout from '../../components/portfoliolayout'
import * as portfolioStyles from  '../../components/portfoliostyles.module.css'

const PortfolioPost = ({ data }) => {

  return (
    <PortfolioLayout pageTitle={data.mdx.frontmatter.title}>
    <section className={portfolioStyles.breadcrumbContainer}><p className={portfolioStyles.postBreadcrumb}><Link to={`/portfolio`}>Portfolio</Link> / <Link to={`/portfolio/${data.mdx.slug}`}>{data.mdx.frontmatter.title}</Link></p></section>
    <section className={portfolioStyles.postContainer}>
      <section className={portfolioStyles.post}>
            
      <h2>{data.mdx.frontmatter.title}</h2>
        <section className={portfolioStyles.postContent}>
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </section>  
        </section>
        </section>
    </PortfolioLayout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

export default PortfolioPost