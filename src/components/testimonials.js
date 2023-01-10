import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import * as testimonalsStyles from './testimonials.module.css'
import 'animate.css'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Testimonials = () => {
  return (
    <section className={testimonalsStyles.testimonialsSection}>
      <StaticImage src="../images/star2.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={50}/>
      <h2 id="testimonials">Testimonials</h2>
      <blockquote data-sal="slide-right" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      <p>Megan is a pleasure to work with. She listens to your 
ideas, and turns them into reality. I am thrilled with the work she did 
on my website, and continue to use her on an as needed basis. I would 
highly recommend her work to anyone looking for a fun and quality 
design</p>
      <FontAwesomeIcon icon={faQuoteRight} size="2x" />
      <p className={testimonalsStyles.quoteAuthor}>Emily Knight</p>
     </blockquote>
     <blockquote data-sal="slide-left" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      <p>As a client, I am every designer's worst nightmare: last minute, 
frequent changes, not sure of what I need - you get the picture. Megan 
put it all together on time, on budget, and on trend for the look I had 
to have. My office will continue to use her services, as long as she'll 
have us!</p>
      <FontAwesomeIcon icon={faQuoteRight} size="2x" />
      <p className={testimonalsStyles.quoteAuthor}>Joel Rash</p>
     </blockquote>
     <blockquote data-sal="slide-right" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      <p>Not only is Megan a design whiz, she codes like a demon – and delivers on time and under budget. She asked great questions to get clarity on what I wanted, and used her mad creative skills to give me the best website I’ve ever owned. Plus, she was professional, friendly, and knew her stuff – everything I needed in a web designer.</p>
      <FontAwesomeIcon icon={faQuoteRight} size="2x" />
      <p className={testimonalsStyles.quoteAuthor}>Lisa Robbin Young</p>
     </blockquote>
     <blockquote data-sal="slide-right" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      <p>Megan helped create a website for my business that is very user-friendly and attractive. I was overwhelmed when thinking about designing my own website since I am not computer savvy and had unique needs as a healthcare provider. With Megan’s help the process was smooth and stress-free. Even after the designing process was over and on to this day she continues to help me troubleshoot and update. I receive comments on the website design and functionality weekly. Megan went above and beyond in creating everything that I had asked for and I am confident that she will do the same for you!</p>
      <FontAwesomeIcon icon={faQuoteRight} size="2x" />
      <p className={testimonalsStyles.quoteAuthor}>Ashley Lucas, PhD, RD</p>
     </blockquote>
    </section>
  )
}

export default Testimonials