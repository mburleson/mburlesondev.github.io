import * as React from 'react'
import { Link } from 'gatsby'
import * as blogStyles from  './blogstyles.module.css'

const Breadcrumb = ({ data }) => {
  return (
    <section className={blogStyles.breadcrumbContainer}><p className={blogStyles.postBreadcrumb}><Link to={`/blog`}>Blog</Link> / <Link to={`/blog/${data.mdx.slug}`}>{data.mdx.frontmatter.title}</Link></p></section>
  )
}

export default Breadcrumb
