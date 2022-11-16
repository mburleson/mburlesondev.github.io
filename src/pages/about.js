import * as React from 'react'
import Seo from '../components/seo'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCube, faPallet} from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import * as aboutStyles from '../components/about.module.css'


const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <section className={aboutStyles.aboutSection}>
        <h1>About Me</h1>
        <div className={aboutStyles.aboutSectionTop}>
          <div className={aboutStyles.aboutSectionTopItem}>
            <p>I was raised with science fiction movies, books, and video games. So, it wasn’t a surprise to my parents when after getting my first computer when I was 5 – a Commodore 64 – I exclaimed that I was going to be a <span className={aboutStyles.pink}>graphic designer</span> when I grew up. I really liked <span className={aboutStyles.green}>Print Shop</span> and <span className={aboutStyles.yellow}>Color Me</span>. After drawing my way through high school, I went on to college to earn my degree in Graphic Design.</p>
           <StaticImage src="../images/c64.png" 
              alt="megan burleson designer developer" 
              placeholder="blurred"
              layout="fixed"
             width={250}/>
            </div>
           <div className={aboutStyles.aboutSectionTopItem2}>
           <p>After college, I started my career as a graphic designer by designing stationery for major retail outlets, and print materials for the corporate world, and then I became fascinated by web design and development. I fired up my left brain and taught myself <span className={aboutStyles.pink}>HTML</span>, <span className={aboutStyles.purple}>CSS</span>, and <span className={aboutStyles.yellow}>JavaScript</span>.</p>
           <StaticImage src="../images/books.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={250}/>
        </div>
        <h2>Now, I spread happiness with</h2>
        <div className={aboutStyles.cncImageContainer}>
        <StaticImage src="../images/cnc2.png" 
            alt="creativity and code" 
            placeholder="blurred"
            layout="constrained"
            width={550}
           />
        </div>       
        </div> 
        <div className={aboutStyles.aboutSectionLearning}>
       <h1>What I'm Up To Now</h1>
            <ul>
            <li className={aboutStyles.aboutSectionLearningItem}><FontAwesomeIcon className={aboutStyles.green} icon={faReact} size='2x' /><p>Working on various coding projects using JavaScript, and React frameworks.</p></li>
            <li className={aboutStyles.aboutSectionLearningItem}><FontAwesomeIcon className={aboutStyles.purple} icon={faCube} size='2x' /><p>Currently, I am learning 3D modeling with Blender to use with 3D printing projects.</p></li>
            <li className={aboutStyles.aboutSectionLearningItem}><FontAwesomeIcon className={aboutStyles.yellow} icon={faPallet} size='2x' /><p>I am also making a bunch of art, and posting it on Instagram.</p></li>
            <li className={aboutStyles.aboutSectionLearningItem}><FontAwesomeIcon className={aboutStyles.pink} icon={faHeart} size='2x' /><p>I love what I do, and I keep myself up to date with current design and coding trends and practices on a regular basis.</p></li>
            </ul>
        </div>
      </section>
        <div className={aboutStyles.aboutSectionSkills}>
          <h1>Skills</h1>
          <div className={aboutStyles.aboutSectionSkillsItem}>
          <StaticImage src="../images/star2.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={50}/>
            <h2 className={aboutStyles.green}>Web Design and Development</h2>
            <p>Experienced using and working with HTML, CSS, JavaScript, CMS frameworks, and more for responsive web development.</p>
            <p>I work with tools like Adobe XD and Photoshop to wireframe and conceptualize multi-fidelity website comps.</p>
            <p>I can translate layered comps into pixel perfect code and make anything look great across a variety of devices.</p>
            <p>I utilize open source tools, api’s, and frameworks according to project needs and to maintain frontend code structure.</p>
          </div>
            <div className={aboutStyles.aboutSectionSkillsItem}>
          <StaticImage src="../images/star2.png" 
            alt="megan burleson designer developer" 
            placeholder="blurred"
            layout="fixed"
            width={50}/>
            <h2 className={aboutStyles.pink}>Graphic Design</h2>
            <p>I use digital illustration tools including Adobe Illustrator and Photoshop to design graphic assets for use across a variety of multimedia that inspires and informs.</p>
            <p>Experience developing both digital / print design projects (brochures, logos, posters, infographics, advertisements)</p>
            <p>I am also adept in setting up files for production, photo editing and color correction.</p>
            </div>
            
        </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => {
  return <Seo title="About Me | Megan Burleson"/>;
  };