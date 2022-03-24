// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as introStyles from './intro.module.css'


/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Intro = () => {
  return (
    <section className={introStyles.introSection}>
      <h1 className={introStyles.yellow}>Hi!</h1>
      <p>My Name is <span className={introStyles.pink}>Megan Burleson</span><br></br>
    I am a <span className={introStyles.purple}>Designer & Developer</span></p>
    <p>and I Spread Happiness with</p>
    <StaticImage src="../images/cnc2.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={600}
               />
    <Link to="/about"><button aria-label="click to read more">Read More About Me</button></Link>
    </section>

  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Intro