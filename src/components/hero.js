// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as heroStyles from './hero.module.css'

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.heroItem1}>
        <div className={heroStyles.cncContainer}>
          <StaticImage src="../images/cnc.svg" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                quality={100}
                width={600}
               />
        </div>
      </div>
      <div className={heroStyles.heroItem2}>
        <div>
          <StaticImage src="../images/bigunicorn.svg" 
                alt="unicorn" 
                placeholder="blurred"
                layout="constrained"
                quality={100}
                width={375}
               />
        </div>
      </div>
    </div>
  )
}


export default Hero