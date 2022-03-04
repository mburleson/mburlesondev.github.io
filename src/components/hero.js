// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
  hero,
  heroItem1,
  heroItem2,
  cncContainer,
  uniContainer,
} from './hero.module.css'

const Hero = () => {
  return (
    <div className={hero}>
      <div className={heroItem1}>
        <div className={cncContainer}>
          <StaticImage src="../images/cnc.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="fixed"
                width={600}>
          </StaticImage>
        </div>
      </div>
      <div className={heroItem2}>
        <div className={uniContainer}>
          <StaticImage src="../images/bigunicorn.png" 
                alt="unicorn" 
                placeholder="blurred"
                layout="fixed"
                width={380}>
          </StaticImage>
        </div>
      </div>
    </div>
  )
}


export default Hero