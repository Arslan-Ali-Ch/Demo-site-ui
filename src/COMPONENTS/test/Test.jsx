import React from 'react'

import { useSwiper } from 'swiper/react';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

import 'swiper/css/virtual';

const Test = () => {
    const swiper = useSwiper();
    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
      );
  return (
    <div>
          {/* <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
   */}
     <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3,4,5,6,7,8,9].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>;
      })}
    </Swiper>
    </div>
  )
}

export default Test
