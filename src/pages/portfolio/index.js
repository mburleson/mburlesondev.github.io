import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PortfolioLayout from '../../components/portfoliolayout'
import * as portfolioStyles from  '../../components/portfoliostyles.module.css'

const PortfolioPage = ({ data }) => {
  return (
    <PortfolioLayout pageTitle="Portfolio">
    <section className={portfolioStyles.articleContainer}>
    <h1>Portfolio</h1>
    <nav className={portfolioStyles.tagContainer}>
      {data.allMdx.group.map(({ fieldValue }) => (
        <button>
         <Link key={fieldValue} to={`/portfolio/${(fieldValue)}`}>
            {fieldValue}
          </Link>
          </button>
      ))}
      </nav>
      {
        data.allMdx.nodes.map(node => (
          <article className={portfolioStyles.article} key={node.id}>
          <section className={portfolioStyles.articleContent}>
            <Link to={`/portfolio/${node.slug}`}>
              <GatsbyImage
                alt={node.frontmatter.thumbnail_alt} 
                image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                className={portfolioStyles.thumbnail_img}
                layout="constrained"
                />
            </Link>
            </section>
            <section className={portfolioStyles.articleContent}>
            <h2>
              <Link to={`/portfolio/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <ul className={portfolioStyles.tagList}>
            {node.frontmatter.tags.map((tag) => (
              <li><Link key={tag} to={`/portfolio/${tag}`}>{tag}</Link></li>
          ))}
          </ul>
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
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/portfolio/"}}
    ) {
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
          tags
        }
        id
        slug
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }  
`

export default PortfolioPage