import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import logo from "../assets/logo.png";

export default function Partner() {
  return (
    <>
      <div id={"partner"}  className="hidden lg:block w-full px-20 py-16 bg-[#E2012D]">
        <Swiper
          slidesPerView={7}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img src={'src/assets/GFG CU logo png.png'} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={'src/assets/HackOverFlow.png'} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={'src/assets/Grownity new logo.png'} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={'src/assets/Rotaract logo Updated..png'} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={'src/assets/LOGO WHITE.png'} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={'src/assets/Copy of GDSC Logo chapter lockup centered template.png'} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={'src/assets/Alexa Logo.png'} className='h-20' alt="1" border="0" /></SwiperSlide>
          {/* <SwiperSlide><img src={'src/assets/achiv-box1.png'} className='h-20' alt="1" border="0" /></SwiperSlide> */}
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
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
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-16' alt="1" border="0" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
