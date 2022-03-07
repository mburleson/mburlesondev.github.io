import * as React from 'react'
import * as testimonalsStyles from './testimonials.module.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Testimonials = () => {
  return (
    <section className={testimonalsStyles.testimonialsSection}>
      <h2>Testimonials</h2>
      <blockquote>Megan is a pleasure to work with. She listens to your 
ideas, and turns them into reality. I am thrilled with the work she did 
on my website, and continue to use her on an as needed basis. I would 
highly recommend her work to anyone looking for a fun and quality 
design.</blockquote>
    </section>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Testimonials