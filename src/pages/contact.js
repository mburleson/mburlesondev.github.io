import * as React from 'react'
import Layout from '../components/layout'
import * as contactStyles from '../components/contact.module.css'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Me">
     <section className={contactStyles.contactTop}>
       <h1>Contact Me</h1>
       <p>You have some questions? I would love the chance to speak with you. Just want to gab? Gab away!
         Fill out the form below, and I will get back to as soon as I can!</p>
     </section>
      <section className={contactStyles.contactFormSection}>
        <form className={contactStyles.contactForm} method="post" action="https://getform.io/f/6f774ec7-0073-4a1b-b83b-8f6fe7a885eb">
         <h2>About You</h2>
         <label>
            <h3>First Name:</h3>
           <input type="text" name="firstname" id="firstname" required/>
        </label>
        <label>
            <h3>Last Name:</h3>
           <input type="text" name="lastname" id="lastname" />
        </label>
        <label>
            <h3>Email:</h3>
          <input type="email" name="email" id="email" required/>
        </label>
        <h2>Message</h2>
        <label>
    <h3>Subject:</h3>
    <input type="text" name="subject" id="subject" />
  </label>
        <label>
        <h3>Your Message:</h3>
          <textarea name="message" id="message" rows="10" required/>
        </label>
        <div
  class="g-recaptcha"
  data-sitekey="6Ld2QckfAAAAAHz637JKzd-JE-yQ_WREldzTgL-P"
/>
        <button type="submit" aria-label="click to send message">Send</button>
        
      </form>
    </section>
  </Layout>
  )
}

export default ContactPage