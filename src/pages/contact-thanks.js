import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import * as contactStyles from '../components/contact.module.css'

const ContactThanksPage = () => {
  return (
    <Layout pageTitle="Contact Me">
     <section className={contactStyles.contactThanksTop}> 
      <StaticImage src="../images/smile.png" 
                alt="smile" 
                placeholder="blurred"
                layout="constrained"
                quality={100}
                width={200}
               />
        <h1>Thanks!</h1>
        <p>I have recieved your lovely note. Please feel free to look around! Talk to you soon!</p>
    </section>
  </Layout>
  )
}

export default ContactThanksPage