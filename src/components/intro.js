
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as introStyles from './intro.module.css'
import 'animate.css'


const Intro = () => {
  return (
    <section className={introStyles.introSection}>
    <div className={introStyles.sideStar}>
    <div className={introStyles.sideStarEnd} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease">
    <StaticImage src="../images/pinkstar.png" 
                  alt="code and creativity" 
                  placeholder="blurred"
                  layout="constrained"
                  width={80}
                />
    </div>
    <div className={introStyles.sideStarMiddle} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease" >
    <StaticImage src="../images/yellowstar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={80}
               />
    </div>

    <div className={introStyles.sideStarMiddle} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease">
    <StaticImage src="../images/purplestar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={60}
               />
    </div>
    <div className={introStyles.sideStarEnd} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/greenstar.png" 
                  alt="code and creativity" 
                  placeholder="blurred"
                  layout="constrained"
                  width={80}
                />
    </div>
    <div className={introStyles.sideStarMiddle} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/pinkstar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={40}
               />
    </div>

    <div className={introStyles.sideStarStart} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/yellowstar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={80}
               />
    </div>
    <div className={introStyles.sideStarEnd} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/purplestar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={60}
               />
    </div>
    </div>
    <div className={introStyles.middleText}>
    <h1 className={introStyles.yellow}>Hi!</h1>
   <p data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
   My Name is <span className={introStyles.pink}>Megan Burleson</span></p>
    <p data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    I am a <span className={introStyles.purple}>Designer <span className={introStyles.yellow}>&</span> Developer</span></p>
    <p data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">and I Spread Happiness with</p>
    <div data-sal="slide-right" data-sal-delay="1000" data-sal-duration="2000" data-sal-easing="easeInOutBack">   
    <StaticImage src="../images/cnc2.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={600}
               />
               </div> 
    </div>    
    <div className={introStyles.sideStar}>

    <div className={introStyles.sideStarStart} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/greenstar.png" 
                  alt="code and creativity" 
                  placeholder="blurred"
                  layout="constrained"
                  width={80}
                />
    </div>
    <div className={introStyles.sideStarMiddle} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/pinkstar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={40}
               />
    </div>

    <div className={introStyles.sideStarStart} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/yellowstar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={80}
               />
    </div>
    <div className={introStyles.sideStarEnd} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/purplestar.png" 
                  alt="code and creativity" 
                  placeholder="blurred"
                  layout="constrained"
                  width={60}
                />
    </div>
    <div className={introStyles.sideStarMiddle} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/greenstar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={80}
               />
    </div>

    <div className={introStyles.sideStarStart} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/pinkstar.png" 
                alt="code and creativity" 
                placeholder="blurred"
                layout="constrained"
                width={40}
               />
    </div>
    <div className={introStyles.sideStarEnd} data-sal="fade-in" data-sal-duration="2000" data-sal-delay="500" data-sal-easing="ease">
    <StaticImage src="../images/yellowstar.png" 
                  alt="code and creativity" 
                  placeholder="blurred"
                  layout="constrained"
                  width={80}
                />
    </div>
    </div>
    </section>

  )
}

export default Intro