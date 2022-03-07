import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
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
            width={300}/>    
        </Link>
        <Link to ="/">
          <StaticImage src="../images/mblogo.png" 
            alt="meganburlesonlogo" 
            placeholder="blurred"
            layout="fixed"
            width={60}
            height={60}/>
        </Link>
      </div>
      <nav>
       <ul className={headerStyles.navLinks}>
       <li className={headerStyles.navLinkItem}>
         <Link to="/about" className={headerStyles.navLinkText}>
           About
         </Link>
       </li>
       <li className={headerStyles.navLinkItem}>
         <Link to="https://www.behance.net/meganburleson" className={headerStyles.navLinkText}>
           Projects
         </Link>
       </li>
       <li className={headerStyles.navLinkItem}>
         <Link to="/blog" className={headerStyles.navLinkText}>
           Blog
         </Link>
       </li>
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