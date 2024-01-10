import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay } from 'swiper/modules';
import { FaLongArrowAltRight } from "react-icons/fa";
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';


export default function App() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper relative w-full"
            >
                <SwiperSlide className='w-full h-[90vh] flex flex-col swiper-slide1'>
                    <img className='w-full h-full' src={event1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='w-full h-[90vh] flex flex-col swiper-slide1'>
                    <img className='w-full h-full' src={event2} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
