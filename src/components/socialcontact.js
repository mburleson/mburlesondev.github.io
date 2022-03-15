// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as socialStyles from './socialcontact.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const SocialContact = () => {
  return (
    <div className={socialStyles.socialContact}>
    <section className={socialStyles.socialSection}>
        <h2>Want to be Friends?</h2>
        <ul>
          <li className={socialStyles.socialSectionItem}> 
          <FontAwesomeIcon icon={faFacebook} size='2x' />
          <Link to="https://www.facebook.com/CreativityandCode" target="_blank" className={socialStyles.pink} alt="CreativityandCode on Facebook"><p>@CreativityandCode</p></Link>  
          </li>
          <li className={socialStyles.socialSectionItem}>
          <FontAwesomeIcon icon={faTwitter} size='2x' />
          <Link to="https://twitter.com/CreativitynCode" target="_blank" className={socialStyles.green}  alt="CreativitynCode on Twitter"><p>@CreativitynCode</p></Link>
          </li>
          <li className={socialStyles.socialSectionItem}>
          <FontAwesomeIcon icon={faInstagram} size='2x' />
          <Link to="https://www.instagram.com/creativityandcode/" target="_blank" alt="CreativityandCode on Instagram" className={socialStyles.yellow}><p>@CreativityandCode</p></Link>  
          </li>
          <li className={socialStyles.socialSectionItem}>
          <FontAwesomeIcon icon={faTwitch} size='2x' />
          <Link to="https://www.twitch.tv/codeandcreativity" target="_blank" alt="CreativityandCode on Instagram"><p>@CodeAndCreativity</p></Link>  
          </li>
        </ul>
      </section>
      <section className={socialStyles.contactSection}>
      <StaticImage src="../images/keyboard.png" 
            alt="megan burleson contact me" 
            placeholder="blurred"
            layout="fixed"
            width={150}/>
      <h2>Want to Work Together?</h2>
      <Link to="/contact" alt="Contact Me To Get Started!"><button>Let's get started!</button></Link>
      </section>
    </div>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default SocialContact