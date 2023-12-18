import React, { useEffect } from 'react';
import 'swiper/css';
import { RxArrowTopRight } from 'react-icons/rx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

const eventsData = [
  {
    title: 'Event 1',
    description:
      '🚀🌌 Dreaming of reaching the stars? Join us for the Space Hackathon 2023 under the guidance of ISRO! 🛰️✨ Let your space innovation take flight and win a chance for ISRO\'s sponsorship 🌟 Hurry, last date for submission: 20th Dec, 2023.',
    image: 'src/assets/medium-shot-man-wearing-vr-glasses.jpg',
  },
  {
    title: 'Event 2',
    description:
      '🚨👩‍💻 Ready to revolutionize society? 🌟 Join the Haryana Police Hackathon with Chandigarh University! 💡 Craft immersive digital solutions, compete nationwide, and make a lasting impact. Don\'t miss out on the chance to win big, network with leaders, and drive change! 🏆💰🌐🇮🇳.',
    image: 'src/assets/27Z_2105.w023.n001.481B.p1.481.jpg',
  },
  {
    title: 'Event 3',
    description:
      '📣 Vimarsh 2023 5G Hackathon Announcement🚀 Welcome, Innovators! Join the Ministry of Home Affairs for "Vimarsh 2023 5G Hackathon," solving critical issues in Law Enforcement with innovative 5G solutions!',
    image: 'src/assets/1203.jpg',
  },
];

const EventCard = ({ title, description, image }) => {
  return (
    <div className="swiper-slide relative overflow-hidden bg-gray-800 p-5 rounded-lg shadow-lg">
      <img src={image} alt="Event Image" className="w-full h-32 object-cover mb-4" />
      <h3 className="text-xl font-bold mb-2 text-red-50">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline hover:bg-red-500 transition duration-300 ease-in-out">Know More</button>
    </div>
  );
};

const ActiveSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {eventsData.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard title={event.title} description={event.description} image={event.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
