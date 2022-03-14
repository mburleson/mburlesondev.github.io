// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as introStyles from './intro.module.css'


/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Intro = () => {
  return (
    <section className={introStyles.introSection}>
      <h1 className={introStyles.yellow}>Hi!</h1>
      <p>My Name is <span className={introStyles.purple}>Megan Burleson</span><br></br>
    I am a <span className={introStyles.green}>Designer</span> <span className={introStyles.yellow}>&</span> <span className={introStyles.pink}>Developer</span></p>
    <p>and I Spread <span className={introStyles.yellow}>Happiness</span> with</p>
    <StaticImage src="../images/cnc2.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={600}
               />
    </section>

  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Intro