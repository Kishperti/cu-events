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
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide><img src={logo} className='h-20' alt="1" border="0" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="block lg:hidden w-full px-12 py-8 bg-[#E2012D]">
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
