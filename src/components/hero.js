// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
  hero,
  heroItem1,
  heroItem2,
  cncContainer,
} from './hero.module.css'

const Hero = () => {
  return (
    <div className={hero}>
      <div className={heroItem1}>
        <div className={cncContainer}>
          <StaticImage src="../images/cnc.svg" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="fixed"
                width={600}
                breakpoints={[320, 375, 750, 1080, 1366, 1920]}>
          </StaticImage>
        </div>
      </div>
      <div className={heroItem2}>
        <div>
          <StaticImage src="../images/bigunicorn.svg" 
                alt="unicorn" 
                placeholder="blurred"
                layout="fixed"
                width={380}
                breakpoints={[320, 375, 750, 1080, 1366, 1920]}>
          </StaticImage>
        </div>
      </div>
    </div>
  )
}


export default Hero