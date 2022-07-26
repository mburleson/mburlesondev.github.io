import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as linkStyles from '../components/links.module.css'

const Links = () => {
  return (
    <Layout pageTitle="Links">
      <section className={linkStyles.container}>
      <h1>Freebies</h1>
      <section className={linkStyles.linkSection}>
        <Link to="https://unique-composer-7271.ck.page/a734f1c63a">
        <StaticImage
          src="../images/freesummerprintable.png"
          alt="Megan Burleson"
          layout="constrained"
          placeholder="blurred"
          quality={100}
          className={linkStyles.freeimg}
        />
        </Link>
        </section>
        <hr></hr>
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
    </section>
    </Layout>
  )
}

export default Links