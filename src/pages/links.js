import * as React from 'react'
import Seo from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"
import * as linkStyles from '../components/links.module.css'

const Links = () => {
  return (
      <section className={linkStyles.container}>
        <StaticImage
          src="../images/megangatsbysquare.jpg"
          alt="Megan Burleson"
          layout="constrained"
          placeholder="blurred"
          quality={100}
          width={200}
          height={200}
          className={linkStyles.meganimg}
        />
        <h1>Megan Burleson</h1>
        <h2>Graphic Designer & Developer</h2>
        <p>Hello! My name is Megan Burleson and I spread happiness by combining code and creativity to design graphics and build websites, apps and digital products that are fun, usable and accessible to everyone. Basically, I like to create art and code fun things!</p>
        <hr></hr>
        <h1>Freebies</h1>
      <section className={linkStyles.linkSection}>
       <p>None Available Right Now</p>
        </section>
        <hr></hr>
    </section>
  )
}

export const Head = () => {
  return <Seo title="Links | Megan Burleson"/>;
  };

export default Links