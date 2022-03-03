import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import {
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
} from './header.module.css'


const Header = () => {
  return (
    <header>
      <div className={siteTitle}>
        <Link to="/">
          <StaticImage src="../images/mblogotype.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={300}/>    
          <StaticImage src="../images/mblogo.png" 
            alt="meganburlesonlogo" 
            placeholder="blurred"
            layout="fixed"
            width={60}
            height={60}/>
        </Link>
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

export default Header