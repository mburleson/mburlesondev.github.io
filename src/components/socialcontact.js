// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
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
         <Link to="/">
          <StaticImage src="../images/facebook-icon.png" 
            alt="megan burleson facebook" 
            placeholder="blurred"
            layout="fixed"
            width={25}
            />
          </Link>
          <Link to="/"><p>@CodeandCreativity</p></Link>  
          </li>
          <li className={socialStyles.socialSectionItem}>
          <Link to="/">
          <StaticImage src="../images/instagram-icon.png" 
            alt="megan burleson instagram" 
            placeholder="blurred"
            layout="fixed"
            width={25}/>
          </Link>
          <Link to="/"><p>@CreativityandCode</p></Link>
          </li>
          <li className={socialStyles.socialSectionItem}>
          <Link to="/">
          <StaticImage src="../images/twitter-icon.png" 
            alt="megan burleson twitter" 
            placeholder="blurred"
            layout="fixed"
            width={25}
            padding={20}
            />
          </Link>
          <Link to="/"><p>@CreativityandCode</p></Link>  
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
      <Link to="/contact"><button>Let's get started!</button></Link>
      </section>
    </div>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default SocialContact