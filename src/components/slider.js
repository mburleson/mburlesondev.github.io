import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./pagination-style.css";
import * as swiperStyles from './slider.module.css';
import { Link } from 'gatsby'

import { Autoplay, Pagination } from "swiper";

const Slider = () => {
  
  return (
      
    <section className={swiperStyles.swiperContainer}>
      <Swiper 
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
        type: "bullets",
        bulletClass:"custom-bullet",
        bulletActiveClass:"custom-bullet-active",
        clickableClass:"custom-bullet-clickable",
      }}
      modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2 className={swiperStyles.green}>Web Design and Development</h2>
                  <p>
                  I spread happiness by designing and developing websites and apps that are attractive, usable, and accessible to everyone. Over the course of my career, I have designed and developed websites and apps for small businesses, e-commerce, blogging platforms, branding/brochure sites, and many more.
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/responsiveweb2.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="constrained"
               width={425}
            />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2 className={swiperStyles.purple}>Graphic Design</h2>
                  <p>I have designed graphics for major retail outlets, print materials for major corporations, and brand design for a variety of different clients.
                    
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/print.png" 
               alt="graphic design" 
               placeholder="blurred"
               layout="constrained"
               width={450}
            />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2 className={swiperStyles.pink}>And More!</h2>
                  <p>I design and develop cool stuff. When I'm not working with a client or agency, I am always working on my own creative projects and coming up with ideas.</p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/andmore2.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="constrained"
               width={425}
            />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     <Link to="/portfolio" rel="noreferrer" aria-label="click to see my portfolio"><button>See My Work</button></Link>
    </section>
  );
}

export default Slider