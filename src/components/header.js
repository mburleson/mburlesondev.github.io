import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as headerStyles from './header.module.css'

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = "350px";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <header>
      <div className={headerStyles.siteTitle}>
        <Link to="/">
          <StaticImage src="../images/mblogotype.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={175}
           />    
        </Link>
        <Link title="link to meganburleson.com" to ="/">
          <StaticImage src="../images/mblogo.png" 
            alt="megan burleson logo" 
            placeholder="blurred"
            layout="constrained"
            width={75}
            />
        </Link>
      </div>
      <button
            title="menu dropdown"
            value="menu dropdown"
            className={headerStyles.navToggle}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FontAwesomeIcon icon={faBars} size='2x' />
          </button>
      <nav className={headerStyles.linksContainer} ref={linksContainerRef}>
        <ul className={headerStyles.navLinks} ref={linksRef}>
        <li className={headerStyles.navLinkItem}>
          <Link to="/about" className={headerStyles.navLinkText} title="About Megan" alt="About Megan">
            About Me
          </Link>
        </li>
        <li className={headerStyles.navLinkItem}>
          <AnchorLink title="what I do" to="/#projects" alt="what I do">
            <span className={headerStyles.navLinkText}>What I Do</span>
          </AnchorLink>
        </li>
        <li className={headerStyles.navLinkItem}>
          <Link to="/portfolio" title="Portfolio" alt="Portfolio">
            <span className={headerStyles.navLinkText}>Portfolio</span>
          </Link>
        </li>
        <li className={headerStyles.navLinkItem}>
          <AnchorLink to="/#testimonials" title="Testimonials" alt="Testimonials">
            <span className={headerStyles.navLinkText}>Testimonials</span>
          </AnchorLink>
        </li>
        <li className={headerStyles.navLinkItem}>
          <Link to="/contact" className={headerStyles.navLinkText} title="Contact Megan" alt="Contact Megan">
            Contact
          </Link>
        </li>
 <li className={headerStyles.navLinkItem}>
          <a href="https://www.patreon.com/MeganBurleson/posts?filters%5Btag%5D=blog" target="_blank" rel="noreferrer" className={headerStyles.navLinkText}  title="Blog" alt="Blog">
            Blog
          </a>
        </li> 

      </ul>

    </nav>
  </header>

  )
}

export default Header