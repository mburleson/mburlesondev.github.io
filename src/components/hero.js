// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as heroStyles from './hero.module.css'
import 'animate.css'

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.heroItem1}>
        <div className={heroStyles.cncContainer}>
          <StaticImage src="../images/cnc.png" 
                alt="code and creativity" 
                layout="constrained"
                placeholder="blurred"
                loading="eager"
                quality={100}
                width={600}
                class="animate__animated animate__slideInLeft"
               />
        </div>
      </div>
      <div className={heroStyles.heroItem2}>
        <div>
          <StaticImage src="../images/bigunicorn.png" 
                alt="unicorn" 
                layout="constrained"
                loading="eager"
                quality={100}
                width={480}
                class="animate__animated animate__slideInUp animate__delay-1s"
               />
        </div>
      </div>
    </div>
  )
}


export default Hero