// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
 introSection,
} from './intro.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Intro = () => {
  return (
    <section className={introSection}>
    <h1>Hi!</h1>
    <h2>My Name is Megan Burleson,</h2>
    <h2>and I am a Designer & Developer</h2>
    <h3>I spread happiness by combining</h3>
    <StaticImage src="../images/cnc2.svg" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="fixed"
                width={600}
                breakpoints={[320, 375, 750, 1080, 1366, 1920]}>
          </StaticImage>
    </section>

  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Intro