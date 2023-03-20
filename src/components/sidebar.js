import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import { faFacebook, faInstagram, faTwitch, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import * as blogStyles from  './blogstyles.module.css'

const Sidebar = () => {
  return (
<section className={blogStyles.sidebar}>
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
  <p>Hello! My name is Megan Burleson, and I am a Designer and Developer residing in Michigan.
    I spread happiness by combining code and creativity to design graphics and build websites, apps and digital products that are fun, usable and accessible to everyone. Basically, I like to create art and code fun things!</p>
  <Link to="/about"><button>read more</button></Link>
</section>
  )
}

export default Sidebar