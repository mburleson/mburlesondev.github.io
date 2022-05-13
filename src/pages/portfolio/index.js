import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PortfolioLayout from '../../components/portfoliolayout'
import * as portfolioStyles from  '../../components/portfoliostyles.module.css'

const PortfolioPage = ({ data }) => {
  return (
    <PortfolioLayout pageTitle="Portfolio">
    <section className={portfolioStyles.articleContainer}>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <Link to={`/portfolio/${node.slug}`}>
              <GatsbyImage
                alt={node.frontmatter.thumbnail_alt} 
                image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                className={portfolioStyles.thumbnail_img}
                layout="constrained"
                />
            </Link>
            <section className={portfolioStyles.articleContent}>
            <h2>
              <Link to={`/portfolio/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.frontmatter.excerpt}</p>
            <Link to={`/portfolio/${node.slug}`}><button>read more</button></Link>
            </section>
          </article>
        ))
      }
      </section>
    </PortfolioLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}filter: {fileAbsolutePath: {regex: "/portfolio/"}}) {
      nodes {
        frontmatter {
          title
          excerpt
          date
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          thumbnail_alt
        }
        id
        slug
      }
    }
  }
`

export default PortfolioPage