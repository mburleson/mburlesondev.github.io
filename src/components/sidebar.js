import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { faFacebook, faInstagram, faTwitch, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import * as blogStyles from  './blogstyles.module.css'

const Sidebar = () => {
  return (
<section className={blogStyles.sidebar}>
<section className={blogStyles.sidebarImage}>
<StaticImage src="../images/megangatsbysquareNEW.png"
        alt="megan burleson designer developer" 
        placeholder="blurred"
        layout="fixed"
        width={250}
        />
        </section>        
  <ul>
  <li><Link to="https://www.facebook.com/CreativityandCode" rel="noreferrer" target="_blank" alt="CreativityandCode on Facebook"> <FontAwesomeIcon icon={faFacebook} size='2x' /></Link></li>
  <li><Link to="https://twitter.com/CreativitynCode" target="_blank" rel="noreferrer" alt="CreativitynCode on Twitter"><FontAwesomeIcon icon={faTwitter} size='2x' /></Link></li>
  <li><Link to="https://www.instagram.com/creativityandcode/" target="_blank" alt="CreativityandCode on Instagram" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='2x' /></Link></li>
  <li><Link to="https://www.pinterest.com/creativityandcode" target="_blank" alt="CreativityandCode on Pinterest" rel="noreferrer"><FontAwesomeIcon icon={faPinterest} size='2x' /></Link></li>
  <li><Link to="https://www.twitch.tv/creativityandcode" target="_blank" alt="CreativityandCode on Twitch" rel="noreferrer"><FontAwesomeIcon icon={faTwitch} size='2x' /></Link></li>
  <li><Link to="https://www.linkedin.com/in/meganburleson/" target="_blank" alt="Megan Burleson on LinkedIn" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' /></Link></li>
  </ul>
  <hr/>
  <h2>about me</h2>
  <p>Hi there! I'm Megan Burleson, a Graphic Designer and Software Engineer who's passionate about spreading happiness with creativity and code!

Throughout my 20-year professional journey as a creative and detail-oriented designer and developer with experience in designing engaging digital assets for print, web, and social media, I have crafted and launched websites and applications, as well as developed brand designs for a diverse clientele, including small businesses, e-commerce, major retail outlets, and government agencies.</p>
  <Link to="/about"><button>read more</button></Link>
</section>
  )
}

export default Sidebar