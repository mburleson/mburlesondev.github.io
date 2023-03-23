import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as whatStyles from './whatstyles.module.css';
import 'animate.css'

const WhatIDo = () => {
  return (
    <section className={whatStyles.whatContainer}>
      <article className={whatStyles.whatContainerItem} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
<StaticImage 
               src="../images/keyboard.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={150}
            /> 
      <h2 className={whatStyles.green}>Web Design and Development</h2>
                  <p>
                    I have designed and developed websites and apps for small businesses, e-commerce, blogging platforms, branding/brochure sites, and many more.
                  </p>
      </article>
      <article className={whatStyles.whatContainerItem} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
      <StaticImage 
               src="../images/projectseye.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={150}
          /> 
      <h2 className={whatStyles.pink}>Graphic Design</h2>
                  <p>
                  I have designed graphics and have created artwork for major retail outlets, print materials for major corporations, and brand designs for various clients.
                  </p>
      </article>
      <article className={whatStyles.whatContainerItem} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
      <StaticImage 
               src="../images/book.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={100}
          /> 
          <h2 className={whatStyles.purple}>And More!</h2>
          <p>When I'm not collaborating with clients or firms, I enjoy keeping up with industry standards, learning new things and pursuing my own creative projects by exploring new ideas.</p>
      </article>
    </section>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default WhatIDo