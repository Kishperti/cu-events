import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import tri from "../assets/tri.png"
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import achivBox from "../assets/achiv-box1.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import './styles.css';
import { FaTimes } from 'react-icons/fa';
import axios from "axios";

const ModuleBox = ({ onClose, title, description, imageUrl }) => {
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
          <h1 className='text-white text-3xl lg:text-6xl font-bold font-oswald mb-2 lg:mb-4'>{title}</h1>
          <p className="text-sm mt-2 lg:mt-0 lg:text-xl lg:py-8 text-justify w-full leading-6 lg:leading-8 font-maven text-white">
            {description}
          </p>
          <button className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] lg:w-[45%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
        </div>
        <div className="w-full h-[180px] mb-2 lg:mb-0 lg:w-[500px] lg:h-[350px] rounded-tl-[80px] overflow-hidden">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};
export default function Achievements() {
  const [isBoxOpen, setBoxOpen] = useState(false);

  const openBox = (index) => {
    setBoxOpen(true);
    setCurrentIndex(index);
  };

  const closeBox = () => {
    setBoxOpen(false);
  };
  const [num, setNum] = useState([]);
  const [imgurl, setimgurl] = useState([]);
  const [des, setdes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [boxData, setBoxData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await axios.get("http://localhost:3000/cac/v1/getOngoingEvents/all");
        const achievements = await axios.get("http://localhost:3000/cac/v1/getAchivments/all");

        setNum(achievements.data.data.map(item => item.title));
        setdes(achievements.data.data.map(item => item.description));
        setimgurl(achievements.data.data.map(item => item.imageUrl));
        setBoxData(achievements.data.data.map(item => ({ title: item.title, description: item.description, imageUrl: item.imageUrl })));
        setLoading(false);

       
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div id={"achievements"}  className="h-full w-full bg-[#091022] pt-16 relative">
          <img src={tri} alt="" className='absolute top-0 left-[50%] -translate-x-1/2' />
          <h1 className='text-[#dddddd] text-6xl font-bold text-cente font-oswald text-center mb-4'>OUR <span className='text-[#E2012D]'>FEATS</span></h1>
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
              {num.map((title, index) => (
                <SwiperSlide key={index} >
                  <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all hover:scale-105 hover:shadow-2xl">
                    <img src={imgurl[index]} onClick={() => openBox(index)} className="absolute top-0 left-0 object-cover" alt="" />
                    {/* <div className="flex flex-col z-30 w-full bg-[#00000081] py-2 px-4">
                  <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>{title}</h1>
                  <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                    {des[index]}
                  </div>
                  <button className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest">Know More &nbsp; &nbsp; <FaLongArrowAltRight /> </button>
                </div> */}
                  </div>

                </SwiperSlide>

              ))}
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
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="mySwiper px-16 mt-12"
            >
               {num.map((title, index) => (
              <SwiperSlide key={index} >
                <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                  <img src={imgurl[index]} onClick={() => openBox(index)} className="absolute top-0 left-0 object-cover" alt="" />
                  {/* <div className="flex flex-col z-20 w-full bg-[#00000081] py-8 px-4">
                    <h1 className='text-2xl font-normal text-[#ffffff] font-oswald  uppercase'>Achievement 1</h1>
                    <div className="text-base font-light text-white font-maven w-full mt-4 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                    </div>
                    <button className="bg-[#E2012D] text-white py-2 w-[60%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-base uppercase tracking-widest">Know More<FaLongArrowAltRight /> </button>
                  </div> */}
                </div>
              </SwiperSlide>
               ))}
            </Swiper>
          </div>
          {isBoxOpen && <ModuleBox onClose={closeBox}  {...boxData[currentIndex]} />}
          <div className="w-full border-b-4 border-red-600 overflow-y-hidden mt-28">
            
          </div>

        </div>
      )}
    </>

  )
}

