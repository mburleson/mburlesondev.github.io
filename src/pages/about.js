import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faWheelchair, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import * as aboutStyles from '../components/about.module.css'


const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <section className={aboutStyles.aboutSection}>
        <h1>About Me</h1>
        <div className={aboutStyles.aboutSectionTop}>
          <h2>how my story began...</h2>
          <p>I was raised on science fiction movies, books and video games. So, it wasn’t a surprise to my parents when after getting my first computer when I was 5 – a Commodore 64 – I exclaimed that I was going to be a <span className={aboutStyles.pink}>graphic designer</span> when I grew up. I really liked <span className={aboutStyles.green}>Print Shop</span> and <span className={aboutStyles.green}>Color Me</span>.  After drawing my way through high school, I went on to college to earn my degree in Graphic Design.</p>
          <StaticImage src="../images/c64.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={250}/>
           <div className={aboutStyles.books}>
           <p>After college, while starting my career as a <span className={aboutStyles.pink}>graphic designer</span> designing stationary for major retail outlets, and print materials for the corporate world — I became fascinated by the web design and development. I fired up my left brain and taught myself a little bit of <span className={aboutStyles.pink}>HTML</span>, <span className={aboutStyles.purple}>CSS</span>, and <span className={aboutStyles.yellow}>JavaScript</span>.</p>
           <StaticImage src="../images/books.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={250}/>
        </div>
        <h3><span className={aboutStyles.yellow}>Then, in 2006, I landed my first web development job and
 I was able to use my design skills too! </span></h3><h3>
I began designing and developing professionally and never looked back.</h3>
        </div> 
        <div className={aboutStyles.aboutSectionSkills}>
          <h1>Skills</h1>
          <div className={aboutStyles.aboutSectionSkillsItem}>
          <StaticImage src="../images/star2.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={50}/>
            <h2 className={aboutStyles.green}>frontend development</h2>
            <p>10+ years experience using and working with  HTML, CSS, and JavaScript 
for responsive web development.</p>
            <p>I have the ability to translate layered comps into HTML and CSS, and I can make anything look great across a variety of devices.</p>
          <p>I utilize  open source tools, api’s and frameworks according to project needs and to maintain frontend code structure.</p>
          </div>
          <div className={aboutStyles.aboutSectionSkillsItem}>
          <StaticImage src="../images/star2.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={50}/>
            <h2 className={aboutStyles.purple}>web design</h2>
            <p>I work with Figma, Adobe XD, Photoshop, to wireframe and conceptualize high fidelity comps.</p>
            </div>
            <div className={aboutStyles.aboutSectionSkillsItem}>
          <StaticImage src="../images/star2.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={50}/>
            <h2 className={aboutStyles.pink}>graphic design</h2>
            <p>I use digital illustration tools Adobe Illustrator, Photoshop and Procreate to design and create graphic assets for use across a variety of media.</p>
            </div>
            <div className={aboutStyles.aboutSectionSkillsItem}>
          <StaticImage src="../images/star2.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={50}/>
            <h2>And More!</h2>
            <p>From one on one, to a meeting room full of people, I have extensive experience 
 gathering project requirements, presenting ideas and receiving feedback.</p>
            <p>I work well within a team of designers and programmers and am
able to communicate clearly and consistently within a team environment.
</p>
<p>I have great multi-tasking skills able to prioritize under the tightest of
deadlines.</p>
            </div>
        </div>
        <div className={aboutStyles.aboutSectionLearning}>
            <h1>Always Learning</h1>
            <ul>
              <li className={aboutStyles.aboutSectionLearningItem}><FontAwesomeIcon className={aboutStyles.yellow} icon={faWheelchair} size='2x' /><p>Right now I am working on earning a certificate in web accessibility</p></li>
              <li className={aboutStyles.aboutSectionLearningItem}><FontAwesomeIcon className={aboutStyles.purple} icon={faReact} size='2x' /><p>I am teaching myself Reactjs and Gatsbyjs by building this site!</p></li>
              <li className={aboutStyles.aboutSectionLearningItem}><FontAwesomeIcon className={aboutStyles.green} icon={faGamepad} size='2x' /><p>Next, I want to design and build games with three.js and blender.</p></li>
              <li className={aboutStyles.aboutSectionLearningItem}><FontAwesomeIcon className={aboutStyles.pink} icon={faHeart} size='2x' /><p>I love what I do, and I keep myself up to date with current design and coding trends and practices on a regular basis.</p></li>
            </ul>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage