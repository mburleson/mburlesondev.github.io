import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitch, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as socialStyles from './socialcontact.module.css'

const SocialContact = () => {
  return (
    <div className={socialStyles.socialContact}>
    <section className={socialStyles.socialSection}>
        <h2>Want to be Friends?</h2>
        <ul>
          <li className={socialStyles.socialSectionItem}> 
          <FontAwesomeIcon icon={faFacebook} size='2x' />
          <Link to="https://www.facebook.com/CreativityandCode" rel="noreferrer" target="_blank" className={socialStyles.pink} title="CreativityandCode on Facebook" alt="CreativityandCode on Facebook"><p>@CreativityandCode</p></Link>  
          </li>
          <li className={socialStyles.socialSectionItem}>
          <FontAwesomeIcon icon={faTwitter} size='2x' />
          <Link to="https://twitter.com/CreativitynCode" target="_blank" className={socialStyles.green} rel="noreferrer" title="CreativitynCode on Twitter" alt="CreativitynCode on Twitter"><p>@CreativitynCode</p></Link>
          </li>
          <li className={socialStyles.socialSectionItem}>
          <FontAwesomeIcon icon={faInstagram} size='2x' />
          <Link to="https://www.instagram.com/creativityandcode/" target="_blank" title="CreativityandCode on Instagram" alt="CreativityandCode on Instagram" rel="noreferrer"className={socialStyles.yellow}><p>@CreativityandCode</p></Link>  
          </li>
          <li className={socialStyles.socialSectionItem}>
          <FontAwesomeIcon icon={faPinterest} size='2x' />
          <Link to="https://www.pinterest.com/creativityandcode" target="_blank"  title="CreativityandCode on Pinterest" alt="CreativityandCode on Pinterest" rel="noreferrer"className={socialStyles.pink}><p>@CreativityandCode</p></Link>  
          </li>
          <li className={socialStyles.socialSectionItem}>
          <FontAwesomeIcon icon={faTwitch} size='2x' />
          <Link to="https://www.twitch.tv/creativityandcode" target="_blank" title="CreativityandCode on Twitch" alt="CreativityandCode on Twitch" rel="noreferrer"><p>@CreativityandCode</p></Link>  
          </li>
        </ul>
      </section>
      <section className={socialStyles.contactSection}>
      <StaticImage src="../images/keyboard.png" 
            alt="megan burleson contact me" 
            placeholder="blurred"
            layout="fixed"
            width={300}
            />
      <h2>Want to Contact Me?</h2>
      <Link to="/contact" alt="Contact Me" aria-label="click to see contact form"><button title="say hi and contact me">Say Hi!</button></Link>
      </section>
    </div>
  )
}

export default SocialContact