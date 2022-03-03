// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { Link } from 'gatsby'
import {
  socialSection,
  contactSection,
} from './footer.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Footer = () => {
  return (
    <footer>
      <section className={socialSection}>
        text
      </section>
      <section className={contactSection}>
        teext
      </section>
    </footer>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Footer