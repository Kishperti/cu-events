import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import ieee from "../assets/ieee.png";
import gfg from "../assets/gfg.png";
import grownity from "../assets/grownity.png";
import rotaract from "../assets/rotaract.png";
import gdsc from "../assets/gdsc.jpg";
import alexa from "../assets/alexa.png";
import cu from "../assets/cu.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import tri from "../assets/tri.png"


export default function Partner() {
  return (
    <>
      <div id={"partner"}  className="hidden lg:block w-full px-20 py-8 relative">
        <img src={tri} alt="" className='absolute top-0 left-[50%] -translate-x-1/2' />
        <h1 className='text-[#091022] text-6xl font-bold font-oswald text-center mb-4'>ONGOING <span className='text-[#E2012D]'>EVENTS</span></h1>
        <div className='text-[#E2012D] text-4xl flex justify-center items-center'><MdKeyboardDoubleArrowDown /></div>
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
          <SwiperSlide className='h-28 w-80 p-2 transition-all hover:scale-105'><img src={cu} className='h-full w-full scale-90' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 transition-all hover:scale-105'><img src={ieee} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 transition-all hover:scale-105'><img src={gfg} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 transition-all hover:scale-105'><img src={gdsc} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 transition-all hover:scale-105'><img src={rotaract} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-4 transition-all hover:scale-105'><img src={alexa} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 transition-all hover:scale-105'><img src={grownity} className='h-full w-full' alt="1" border="0" /></SwiperSlide>

         
        </Swiper>
      </div>
      <div className="block lg:hidden w-full px-12 py-8 bg-[#E2012D]">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={cu} className='h-full w-full scale-90' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={ieee} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={gfg} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={gdsc} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={rotaract} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-4 bg-white rounded-md shadow-md grid place-items-center'><img src={alexa} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
          <SwiperSlide className='h-28 w-80 p-2 bg-white rounded-md shadow-md grid place-items-center'><img src={grownity} className='h-full w-full' alt="1" border="0" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
