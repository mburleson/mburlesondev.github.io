import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'
import PortfolioLayout from '../../components/portfoliolayout'
import * as portfolioStyles from  '../../components/portfoliostyles.module.css'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const tagHeader = `${tag}`;
  return (
    <PortfolioLayout pageTitle="Portfolio">
        <h1>{tagHeader}</h1>
    <nav className={portfolioStyles.tagContainer}>
    <Link alt="back to portfolio" to={`/portfolio/`}><button name="back to portfolio">Back to Portfolio</button></Link>
    </nav>
    <section className={portfolioStyles.articleContainer}>
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
              <li><Link name={tag} to={`/portfolio/${tag}`}>{tag}</Link></li>
          ))}
          </ul>
            <p>{node.frontmatter.excerpt}</p>
            </section>
          </article>
        ))
      }
      </section>
    </PortfolioLayout>
  )
  }

  export const query = graphql`
query($tag: String){
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {fileAbsolutePath: {regex: "/portfolio/"}, frontmatter: { tags: { in: [$tag] } } }
  )
  {
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

  export default Tags;

  export const Head = () => {
    return <Seo />;
    };