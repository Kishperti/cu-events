import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import tri from "../assets/tri.png"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import achivBox from "../assets/achiv-box1.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';

const ModuleBox = ({ onClose }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#060414de] shadow-lg shadow-[#ffffff17] z-20 grid place-items-center w-[90%] h-[95%] lg:h-[90%]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between px-7 py-7 lg:px-28">
        <button
          onClick={onClose}
          className="absolute top-4 lg:top-6 lg:text-4xl right-2 lg:right-6 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col w-full lg:w-1/2 pt-4">
          <h1 className='text-white text-3xl lg:text-6xl font-bold font-oswald mb-2 lg:mb-4'>EVENT 1</h1>
          <p className="text-sm mt-2 lg:mt-0 lg:text-xl lg:py-8 text-justify w-full leading-6 lg:leading-8 font-maven text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, consectetur perspiciatis! Quae perferendis ab alias est numquam sapiente, corrupti dolorem laudantium temporibus reprehenderit similique ullam laborum, illum voluptatum consectetur soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, consectetur perspiciatis! Quae perferendis ab alias est numquam sapiente, corrupti dolorem laudantium temporibus reprehenderit similique ullam laborum, illum voluptatum consectetur soluta.
          </p>
          <button className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] lg:w-[45%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
        </div>
        <div className="w-full h-[180px] mb-2 lg:mb-0 lg:w-[500px] lg:h-[350px] rounded-tl-[80px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  );
};

export default function Events() {
  const [isBoxOpen, setBoxOpen] = useState(false);

  const openBox = () => {
    setBoxOpen(true);
  };

  const closeBox = () => {
    setBoxOpen(false);
  };
  return (
    <>
      <div className="h-full w-full bg-[#091022] pt-16 relative">
        <img src={tri} alt="" className='absolute top-0 left-[50%] -translate-x-1/2' />
        <h1 className='text-white text-6xl font-bold font-oswald text-center mb-4'>OUR <span className='text-[#E2012D]'>EVENTS</span></h1>
        <div className='text-[#E2012D] text-4xl flex justify-center items-center'><MdKeyboardDoubleArrowDown /></div>
        <div className="box hidden lg:block">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper px-20 mt-12"
          >
            <SwiperSlide>
              <div className="relative shadow-lg w-[400px] h-[400px] grid place-items-center cursor-pointer transition-all skew-x-6 hover:skew-x-0 hover:shadow-2xl shadow-[#ffffff17]">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Event 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button onClick={openBox} className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all skew-x-6 hover:skew-x-0 hover:shadow-2xl shadow-[#ffffff17]">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Event 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button onClick={openBox} className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all skew-x-6 hover:skew-x-0 hover:shadow-2xl shadow-[#ffffff17]">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Event 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button onClick={openBox} className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all skew-x-6 hover:skew-x-0 hover:shadow-2xl shadow-[#ffffff17]">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Event 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button onClick={openBox} className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Mobile Slider */}
        <div className="box block lg:hidden">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={100}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper px-16 mt-12"
          >
            <SwiperSlide>
              <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all skew-x-6 hover:skew-x-0 hover:shadow-2xl shadow-[#ffffff17]">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Event 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button onClick={openBox} className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all skew-x-6 hover:skew-x-0 hover:shadow-2xl shadow-[#ffffff17]">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Event 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button onClick={openBox} className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all skew-x-6 hover:skew-x-0 hover:shadow-2xl shadow-[#ffffff17]">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Event 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button onClick={openBox} className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all skew-x-6 hover:skew-x-0 hover:shadow-2xl shadow-[#ffffff17]">
                <img src={achivBox} className="absolute top-0 left-0 object-cover" alt="" />
                <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Event 1</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                  </div>
                  <button onClick={openBox} className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {isBoxOpen && <ModuleBox onClose={closeBox} />}
        <div className="w-full border-b-4 border-red-600 overflow-y-hidden mt-28">
          <h1 className="text-6xl lg:text-9xl font-oswald tracking-tight font-bold text-center opacity-30 text-[#E2012D] -mb-3 lg:-mb-6">OUR PARTNERS</h1>
        </div>
      </div>
    </>
  )
}
