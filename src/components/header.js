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
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <header>
      <nav>
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
      <button
            className={headerStyles.navToggle}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FontAwesomeIcon icon={faBars} size='2x' />
          </button>
      <div className={headerStyles.linksContainer} ref={linksContainerRef}>
        <ul className={headerStyles.navLinks} ref={linksRef}>
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
     </div>
    </nav>
  </header>

  )
}

export default Header