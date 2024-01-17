import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import ieee from "../assets/ieee.png";
import gfg from "../assets/gfg.png";
import grownity from "../assets/grownity.png";
import rotaract from "../assets/rotaract.png";
import gdsc from "../assets/gdsc.png";
import alexa from "../assets/alexa.png";


export default function Partner() {
  return (
    <>
      <div id={"partner"}  className="hidden lg:block w-full px-20 py-8 bg-[#E2012D]">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={ieee} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={gfg} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={gdsc} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
         
        </Swiper>
      </div>
      <div className="block lg:hidden w-full px-12 py-8 bg-[#ffffff]">
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img src={ieee} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={gfg} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={grownity} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={rotaract} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={gdsc} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={alexa} className='h-20' alt="1" border="0" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
