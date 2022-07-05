import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import img1 from '../../images/img1.jfif'
import img2 from '../../images/img2.jfif'
import img3 from '../../images/img3.jfif'
import img4 from '../../images/img4.jfif'
import img5 from '../../images/img5.jfif'
import img6 from '../../images/img6.jfif'
import twitter from '../../images/twitter.png'
import whatsapp from '../../images/whatsapp.png'
import './Portfolio.css';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";


const Portfolio = () => {
    const swiper = useSwiper();

    return (
    <div className='portfolio'>
        <span className='pspan'> Recent Projects</span>
        <span className='pspan'> Portfolio</span>
     <Swiper 
    slidesPerView={3}
    
     grabCursor={true}
     className="mySwiper">
      <SwiperSlide className='swipe'>
         <div className='sdiv'> <img className='simg' src={img1} alt="" /></div>
      </SwiperSlide>
      <SwiperSlide  className='swipe'>
      <img className='simg'  src={img2} alt="" />
      
      </SwiperSlide>
      <SwiperSlide  className='swipe'>
      <img className='simg' src={img3} alt="" />
      
      </SwiperSlide>
      <SwiperSlide  className='swipe'>
      <img className='simg' src={img4} alt="" />
      
      </SwiperSlide>
      <SwiperSlide  className='swipe'>
      <img className='simg' src={img5} alt="" />
      
      </SwiperSlide>
      <SwiperSlide  className='swipe'>
      <img className='simg' src={img6} alt="" />
      
      </SwiperSlide>
      
    </Swiper>
   
    </div>
  )
}

export default Portfolio
