// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { Link } from 'gatsby'
import * as footerStyles from './footer.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Footer = () => {
  return (
    <footer>
      <section className={footerStyles.thanksEnd}>
        <h2><span className={footerStyles.pink}>Thanks</span> for stopping by!</h2>
      </section>
      <section className={footerStyles.footerEnd}>
      <Link to="/"><p>&copy;2022 MeganBurleson.com</p></Link>
      <p>Built with Gatsby and React</p>
      </section>
    </footer>
  )
}

export default Footer