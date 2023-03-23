
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as introStyles from './intro.module.css'



const Intro = () => {
  return (
   <section className={introStyles.introContainer}>
      <section className={introStyles.introSectionLeft}>
      <StaticImage src="../images/megangatsbysquareNEW.png"
        alt="megan burleson designer developer" 
        placeholder="blurred"
        layout="constrained"
        width={400}
        />
      </section>
      <section className={introStyles.introSectionRight}>
      <h2>About Megan</h2>
      <p>Hi there! I'm Megan Burleson, a Graphic Designer and Software Engineer who's passionate about spreading happiness with creativity and code!</p>
      <p>Throughout my 20-year professional journey as a creative and detail-oriented designer and developer with experience in designing engaging digital assets for print, web, and social media, I have crafted and launched websites and applications, as well as developed brand designs for a diverse clientele, including small businesses, e-commerce, major retail outlets, and government agencies.</p>
      </section>
   </section>
  )
}

export default Intro