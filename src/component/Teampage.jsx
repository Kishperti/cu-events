import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay } from 'swiper/modules';
import { FaLongArrowAltRight } from "react-icons/fa";
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

const OurTeam = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper w-full h-[30vh] md:h-[60vh] lg:h-[90vh] relative"
    >
      <SwiperSlide className='w-full h-full flex flex-col swiper-slide1'>
        <img className='w-full h-full' src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full flex flex-col swiper-slide1'>
        <img className='w-full h-full' src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full flex flex-col swiper-slide1'>
        <img className='w-full h-full' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <div className="absolute overlay top-0 left-0 h-full w-full z-20 grid place-items-center">
        <div className="font-oswald text-[#ffffff7d] text-5xl md:text-8xl lg:text-9xl font-black relative after:absolute after:-bottom-3 after:right-2 after:h-1 after:w-80 after:bg-[#ffffff7d] before:absolute before:-top-1 before:left-2 before:h-1 before:w-80 before:bg-[#ffffff7d]">MEET OUR TEAM</div>
      </div>
    </Swiper>
  );
};

export default OurTeam;
