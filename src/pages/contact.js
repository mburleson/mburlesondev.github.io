import * as React from 'react'
import Layout from '../components/layout'
import * as contactStyles from '../components/contact.module.css'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Me">
     <section className={contactStyles.contactTop}>
       <h1>Contact Me</h1>
       <p>Chances are, you have perused my site, and decided you would like to work with me. 
         Great! I would love the chance to hear about your project, and see if we make a good team. 
         Fill out the form below, and I will get back to as soon as I can!</p>
     </section>
      <section className={contactStyles.contactSection}>
        <form className={contactStyles.contactForm} method="post" action="https://getform.io/f/6f774ec7-0073-4a1b-b83b-8f6fe7a885eb}">
         <h2>About You</h2>
         <label>
            Name
           <input type="text" name="name" id="name" />
        </label>
        <label>
            Email
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </section>
  </Layout>
  )
}

export default ContactPage