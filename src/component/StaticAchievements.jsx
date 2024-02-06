import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaLongArrowAltRight } from "react-icons/fa";
import './styles.css';
import { FaTimes } from 'react-icons/fa';
import sachiv1 from "../assets/sachiv1.png";
import sachiv2 from "../assets/sachiv2.png";
import sachiv3 from "../assets/sachiv3.png";
import sachiv4 from "../assets/sachiv4.png";
import sachiv5 from "../assets/sachiv5.png";
import sachiv6 from "../assets/sachiv6.png";


const achivData = [
  {
    title: "DD Robocon",
    description: "🤖🎉 Chandigarh University brings you Exciting news! Introducing DD Robocon India 2024, powered by IIT Delhi! 🚀 Get ready for an exhilarating showdown as robots race against time to conquer complex tasks. This event isn't just about competition; it's about forging lasting bonds and propelling engineering and broadcasting technologies to unprecedented heights! Join us at Thyagraj Stadium, New Delhi, on Sat-Sun, 13-14 July 2024, for an unforgettable celebration of innovation and unity! Don't miss out on this opportunity to shape the future! 🌟",
    imageUrl: sachiv1,
  },
  {
    title: "Autodesk Fusion",
    description: "🌱 Chandigarh University Academic Competitions Calling all design visionaries! 🎨 Dive into the Autodesk Fusion 360 Digital Design Challenge 2024 and unleash your creativity to shape the future of agriculture. 🚜💡 Prepare your students to master Fusion 360, the industry-leading 3D modeling software, and stand a chance to win big! 🏆 Register now and empower your students to showcase their innovative solutions and compete against the brightest minds. 💻✨ #AutodeskDesignChallenge #letspromotecu",
    imageUrl: sachiv2,
  },
  {
    title: "Autodesk Fusion",
    description: "🌱 Chandigarh University Academic Competitions Calling all design visionaries! 🎨 Dive into the Autodesk Fusion 360 Digital Design Challenge 2024 and unleash your creativity to shape the future of agriculture. 🚜💡 Prepare your students to master Fusion 360, the industry-leading 3D modeling software, and stand a chance to win big! 🏆 Register now and empower your students to showcase their innovative solutions and compete against the brightest minds. 💻✨ #AutodeskDesignChallenge #letspromotecu",
    imageUrl: sachiv3,
  },
  {
    title: "Autodesk Fusion",
    description: "🌱 Chandigarh University Academic Competitions Calling all design visionaries! 🎨 Dive into the Autodesk Fusion 360 Digital Design Challenge 2024 and unleash your creativity to shape the future of agriculture. 🚜💡 Prepare your students to master Fusion 360, the industry-leading 3D modeling software, and stand a chance to win big! 🏆 Register now and empower your students to showcase their innovative solutions and compete against the brightest minds. 💻✨ #AutodeskDesignChallenge #letspromotecu",
    imageUrl: sachiv4,
  },
  {
    title: "Autodesk Fusion",
    description: "🌱 Chandigarh University Academic Competitions Calling all design visionaries! 🎨 Dive into the Autodesk Fusion 360 Digital Design Challenge 2024 and unleash your creativity to shape the future of agriculture. 🚜💡 Prepare your students to master Fusion 360, the industry-leading 3D modeling software, and stand a chance to win big! 🏆 Register now and empower your students to showcase their innovative solutions and compete against the brightest minds. 💻✨ #AutodeskDesignChallenge #letspromotecu",
    imageUrl: sachiv5,
  },
  {
    title: "Autodesk Fusion",
    description: "🌱 Chandigarh University Academic Competitions Calling all design visionaries! 🎨 Dive into the Autodesk Fusion 360 Digital Design Challenge 2024 and unleash your creativity to shape the future of agriculture. 🚜💡 Prepare your students to master Fusion 360, the industry-leading 3D modeling software, and stand a chance to win big! 🏆 Register now and empower your students to showcase their innovative solutions and compete against the brightest minds. 💻✨ #AutodeskDesignChallenge #letspromotecu",
    imageUrl: sachiv6,
  },
];

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
          <button className="bg-[#E2012D] text-white py-2 lg:py-3 w-[65%] lg:w-[45%] mt-7 flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest"> Register&nbsp; &nbsp; <FaLongArrowAltRight /> </button>
        </div>
        <div className="w-full h-[180px] mb-2 lg:mb-0 lg:w-[470px] lg:h-[380px] rounded-tl-[80px] overflow-hidden">
          <img src={imageUrl} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};
const StaticAchievements = () => {
  const [isBoxOpen, setBoxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openBox = (index) => {
    setBoxOpen(true);
    setCurrentIndex(index);
  };

  const closeBox = () => {
    setBoxOpen(false);
  };

  return (
    <>
      <div id={"sachievements"} className="h-full w-full bg-[#091022] pt-16 relative">
        {/* ... (previous code) */}
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
            {achivData.map((achiv, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all hover:scale-105 hover:shadow-2xl">
                  <img
                    src={achiv.imageUrl}
                    onClick={() => openBox(index)}
                    className="absolute top-0 left-0 object-cover"
                    alt=""
                  />
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
            {achivData.map((achiv, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all -skew-x-6 hover:skew-x-0 hover:shadow-2xl">
                  <img
                    src={achiv.imageUrl}
                    onClick={() => openBox(index)}
                    className="absolute top-0 left-0 object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {isBoxOpen && <ModuleBox onClose={closeBox} {...achivData[currentIndex]} />}

        <div className="w-full border-b-4 border-red-600 overflow-y-hidden mt-28"></div>
      </div>
    </>
  );
}

export default StaticAchievements;