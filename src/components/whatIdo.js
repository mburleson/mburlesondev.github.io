import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as whatStyles from './whatstyles.module.css';

const WhatIDo = () => {
  return (
    <section className={whatStyles.whatContainer}>
      <article className={whatStyles.whatContainerItem}>
      <StaticImage 
               src="../images/responsiveweb2.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={250}
            />
      <h2 className={whatStyles.green}>Web Design and Development</h2>
                  <p>
                    I have designed and developed websites and apps for small businesses, e-commerce, blogging platforms, branding/brochure sites, and many more.
                  </p>
      </article>
      <article className={whatStyles.whatContainerItem}>
      <StaticImage 
               src="../images/print.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={300}
            />
      <h2 className={whatStyles.purple}>Graphic Design</h2>
                  <p>
                  I have designed graphics and have created artwork for major retail outlets, print materials for major corporations, and brand designs for various clients.
                  </p>
      </article>
      <article className={whatStyles.whatContainerItem}>
          <StaticImage 
               src="../images/andmore2.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={280}
          />
          <h2 className={whatStyles.pink}>And More!</h2>
          <p>When I'm not working with a client or agency, I am always working on my own creative projects and coming up with ideas.</p>
      </article>
    </section>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default WhatIDo