import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./pagination-style.css";
import * as swiperStyles from './slider.module.css';

import { Autoplay, Pagination } from "swiper";

const Slider = () => {
  
  return (
      
    <section className={swiperStyles.swiperContainer}>
      <Swiper 
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
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
                <h2>Web Design and Development</h2>
                  <p>
                    I spread happiness by designing and developing websites and apps 
                    that that are attractive, usable and accessible to everyone.
                    Over the course of my career, I have been lucky enough to work for small businesses, entreprenuers, design agencies, 
                    as well as corporations doing what I love. 
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/responsiveweb.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={460}    
            />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2>Graphic Design for Print and Web</h2>
                  <p>I have a degree in graphic design, and have experience with 
                    brand design, package design, brochure design -- you name it! 
                    I've probably done it! 
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/graphicdesign.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={500}    
            />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2>And More!</h2>
                  <p>Snazzy E-mail template? Need help designing your Facebook page? Are you a streamer in need of some awesome graphics?
                  Does your team need a unicorn? I can help!
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/andmore.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={500}    
            />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     <Link to="https://www.behance.net/meganburleson"><button>see more on Behance</button></Link>
    </section>
  );
}

export default Slider