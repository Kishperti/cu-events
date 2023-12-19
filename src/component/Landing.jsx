import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay } from 'swiper/modules';
import { FaLongArrowAltRight } from "react-icons/fa";


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
                className="mySwiper"
            >
                <SwiperSlide className=' w-full min-h-screen flex flex-col pl-[20px] lg:pl-[100px] lg:pr-[25px] swiper-slide1'>
                    <div className='w-full flex flex-col mt-6 lg:mt-20 justify-center items-start'>
                        <h1 className='text-[2rem] lg:text-6xl font-bold text-[#E2012D] font-oswald'>EVENT 1</h1>
                        <h1 className='text-[2rem] lg:text-6xl font-bold text-[#ffffff] font-oswald mt-1 lg:mt-2 w-full'>LOREM IPSUM</h1>
                        <div className="lg:text-2xl text-lg md:text-[1rem] font-extralight text-white font-maven w-[90%] lg:w-[50%] mt-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, . Luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                        <button className="bg-[#E2012D] text-white py-2 lg:py-3 px-12 w-68 lg:w-80 mt-6 lg:mt-12 flex justify-between items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-2xl lg:text-3xl uppercase tracking-widest">Join Event &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-11 lg:gap-24 w-full py-[50px] mt-8 lg:mt-20 px-[20px] lg:px-12 mb-[50px] bg-[#00000081]">
                        <div className="flex flex-col w-full">
                            <h1 className='text-3xl lg:text-5xl font-medium text-[#ffffff] font-oswald opacity-[0.5]'>EVENT 1</h1>
                            <div className="text-lg font-light text-white opacity-[0.5] font-maven w-full mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</div>
                        </div>
                        <div className="flex flex-col w-full">
                            <h1 className='text-3xl lg:text-5xl font-medium text-[#ffffff] font-oswald opacity-[0.5]'>EVENT 2</h1>
                            <div className="text-lg font-light text-white opacity-[0.5] font-maven w-full mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</div>
                        </div>
                        <div className="flex flex-col w-full">
                            <h1 className='text-3xl lg:text-5xl font-medium text-[#ffffff] font-oswald opacity-[0.5]'>EVENT 3</h1>
                            <div className="text-lg font-light text-white opacity-[0.5] font-maven w-full mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</div>
                        </div>
                        <div className="flex flex-col w-full">
                            <h1 className='text-3xl lg:text-5xl font-medium text-[#E2012D] font-oswald'>EVENT 4</h1>
                            <div className="text-lg font-light text-white font-maven w-full mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
