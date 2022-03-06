import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import * as swiperStyles from './slider.module.css';

const Slider = () => {
  return (
    <section className={swiperStyles.swiperContainer}>
      <Swiper 
        pagination={pagination}
        modules={[Pagination]}
        
      >
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2>Blog Design</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. 
              At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, 
              no sea takimata sanctus est Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/sliderplaceholder.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={450}    
            />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2>Blog Design</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. 
              At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, 
              no sea takimata sanctus est Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/sliderplaceholder.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={450}    
            />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2>Blog Design</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. 
              At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, 
              no sea takimata sanctus est Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/sliderplaceholder.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={450}    
            />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={swiperStyles.swiperSlideContainer}>
            <div className={swiperStyles.slideLeft}>
                <div className={swiperStyles.slideLeftContent}>
                <h2>Blog Design</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. 
              At vero eos et accusam et justo duo dolores 
              et ea rebum. Stet clita kasd gubergren, 
              no sea takimata sanctus est Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            <div className={swiperStyles.slideRight}>
            <StaticImage 
               src="../images/sliderplaceholder.png" 
               alt="code and creativity" 
               placeholder="blurred"
               layout="fixed"
               width={450}    
            />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Slider