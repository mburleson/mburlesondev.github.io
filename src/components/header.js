// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import MbLogo from '../components/mblogo'
import MbLogoType from '../components/mblogotype'
import {
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
} from './header.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Header = () => {
  return (
    <header>
      <div className={siteTitle}>
      <Link to="/"><MbLogoType></MbLogoType></Link>
      <Link to ="/"><MbLogo></MbLogo></Link>
      </div>
      <nav>
       <ul className={navLinks}>
       <li className={navLinkItem}>
         <Link to="/about" className={navLinkText}>
           About
         </Link>
       </li>
       <li className={navLinkItem}>
         <Link to="/projects" className={navLinkText}>
           Projects
         </Link>
       </li>
       <li className={navLinkItem}>
         <Link to="/blog" className={navLinkText}>
           Blog
         </Link>
       </li>
       <li className={navLinkItem}>
         <Link to="/contact" className={navLinkText}>
           Contact
         </Link>
       </li>
     </ul>
    </nav>
  </header>

  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Header