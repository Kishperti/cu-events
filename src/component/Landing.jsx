import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import Events from "./Events";
import axios from "axios";

export default function App() {
  const [banner, setbackBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await axios.get(
          "http://localhost:3000/cac/v1/getOngoingEvents/all"
        );
     

        // Check if there are events
        if (events.data.data.length > 0) {
          // Use the backgroundBanner of the first event
          const firstEventBackgrounds = events.data.data[0].backgroundBanner;
          setbackBanner(firstEventBackgrounds);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        id={"home"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-[30vh] md:h-[60vh] lg:h-[90vh]"
      >
        {banner.map((background, index) => (
          <SwiperSlide className="w-full h-full flex flex-col swiper-slide1">
            <img className="w-full h-full" src={banner[0][0]} alt="" />
          </SwiperSlide>
        ))}
        {Array.isArray(banner) &&
          banner.map((background, index) => (
            <SwiperSlide className="w-full h-full flex flex-col swiper-slide1">
              <img className="w-full h-full" src={banner[0][1]} alt="" />
            </SwiperSlide>
          ))}
        {Array.isArray(banner) &&
          banner.map((background, index) => (
            <SwiperSlide className="w-full h-full flex flex-col swiper-slide1">
              <img className="w-full h-full" src={banner[0][2]} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
