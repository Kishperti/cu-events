import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import tri from "../assets/tri.png"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import achivBox from "../assets/achiv-box1.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import './styles.css';
import { Pagination } from 'swiper/modules';
export default function Achievements() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#d9d9d9] py-16 relative">
        <img src={tri} alt="" className='absolute top-0 left-[50%] -translate-x-1/2' />
        <h1 className='text-[#141414] text-6xl font-bold text-cente font-oswald text-center mb-4'>OUR <span className='text-[#E2012D]'>FEATS</span></h1>
        <div className='text-[#E2012D] text-4xl flex justify-center items-center'><MdKeyboardDoubleArrowDown /></div>
        <div className="box hidden lg:block">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper px-20 mt-12"
          >
            <SwiperSlide>
              <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Mobile Slider */}
        
        <div className="box block lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={100}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper px-16 mt-12"
          >
            <SwiperSlide>
              <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
