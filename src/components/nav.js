// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './nav.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Nav = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }  
  `)
  return (
    <nav>
      <header className={siteTitle}>
        <Link to="/">{data.site.siteMetadata.title} {data.site.siteMetadata.description}</Link>
      </header>
        <ul className={navLinks}>
          <li className={navLinkItem}>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Nav