import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as headerStyles from './header.module.css'

const Header = () => {

  
  return (
    <header>
      <div className={headerStyles.siteTitle}>
        <Link to="/">
          <StaticImage src="../images/mblogotype.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={300}
           />    
        </Link>
        <Link to ="/">
          <StaticImage src="../images/mblogo.png" 
            alt="meganburlesonlogo" 
            placeholder="blurred"
            layout="fixed"
            width={60}
            height={60}
            />
        </Link>
      </div>
      <nav>
       <ul className={headerStyles.navLinks}>
       <li className={headerStyles.navLinkItem}>
        <AnchorLink to="/#projects" title="projects">
          <span className={headerStyles.navLinkText}>Projects</span>
         </AnchorLink>
       </li>
       <li className={headerStyles.navLinkItem}>
         <AnchorLink to="/#testimonials" title="projects">
           <span className={headerStyles.navLinkText}>Testimonials</span>
         </AnchorLink>
       </li>
       <li className={headerStyles.navLinkItem}>
         <Link to="/about" className={headerStyles.navLinkText}>
           About Me
         </Link>
       </li>
{/*        <li className={headerStyles.navLinkItem}>
         <Link to="/blog" className={headerStyles.navLinkText}>
           Blog
         </Link>
       </li> */}
       <li className={headerStyles.navLinkItem}>
         <Link to="/contact" className={headerStyles.navLinkText}>
           Contact
         </Link>
       </li>
     </ul>
    </nav>
  </header>

  )
}

export default Header