import * as React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from "prop-types"
import BlogLayout from '../../components/bloglayout'

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { totalCount } = data.allMdx
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`
  return (
    <BlogLayout pageTitle="Tags">
      <h1>{tagHeader}</h1>
      <ul>
        {data.allMdx.nodes.map(({ node }) => {
          return (
            <li  key={node.id}>
            <Link to={`/blog/${node.slug}`}></Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </BlogLayout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export const query = graphql`
  query($tag: String) {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date
          excerpt
          tags
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
      group(field: frontmatter___tags) {
        tags: {in:${tag}}
        totalCount
      }
    }
  }  
`

export default Tags