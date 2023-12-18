import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const eventsData = [
    {
      title: 'Event 1',
      description: '🚀🌌 Dreaming of reaching the stars? Join us for the Space Hackathon 2023 under the guidance of ISRO! 🛰️✨ Let your space innovation take flight and win a chance for ISRO\'s sponsorship 🌟 Hurry, last date for submission: 20th Dec, 2023.',
      image:'src/assets/medium-shot-man-wearing-vr-glasses.jpg',
    },
    {
      title: 'Event 2',
      description: '🚨👩‍💻 Ready to revolutionize society? 🌟 Join the Haryana Police Hackathon with Chandigarh University! 💡 Craft immersive digital solutions, compete nationwide, and make a lasting impact. Don\'t miss out on the chance to win big, network with leaders, and drive change! 🏆💰🌐🇮🇳.',
      image:'src/assets/27Z_2105.w023.n001.481B.p1.481.jpg',
    },
    {
      title: 'Event 3',
      description: '📣 Vimarsh 2023 5G Hackathon Announcement🚀 Welcome, Innovators! Join the Ministry of Home Affairs for "Vimarsh 2023 5G Hackathon," solving critical issues in Law Enforcement with innovative 5G solutions!',
      image:'src/assets/1203.jpg',
    },
    // {
    //   title: 'Event 4',
    //   description: '🚨👩‍💻 Ready to revolutionize society? 🌟 Join the Haryana Police Hackathon with Chandigarh University! 💡 Craft immersive digital solutions, compete nationwide, and make a lasting impact. Don\'t miss out on the chance to win big, network with leaders, and drive change! 🏆💰🌐🇮🇳.',
    //   image:'src/assets/27Z_2105.w023.n001.481B.p1.481.jpg',
    // },
    // {
    //   title: 'Event 5',
    //   description: '🚀🌌 Dreaming of reaching the stars? Join us for the Space Hackathon 2023 under the guidance of ISRO! 🛰️✨ Let your space innovation take flight and win a chance for ISRO\'s sponsorship 🌟 Hurry, last date for submission: 20th Dec, 2023.',
    //   image:'src/assets/medium-shot-man-wearing-vr-glasses.jpg',
    // },
    // {
    //   title: 'Event 5',
    //   description: '🚀🌌 Dreaming of reaching the stars? Join us for the Space Hackathon 2023 under the guidance of ISRO! 🛰️✨ Let your space innovation take flight and win a chance for ISRO\'s sponsorship 🌟 Hurry, last date for submission: 20th Dec, 2023.',
    //   image:'src/assets/medium-shot-man-wearing-vr-glasses.jpg',
    // },
  
  ];


const EventCard = ({ title, description, image }) => {
  return (
    
    <div className="swiper-slide relative overflow-hidden bg-black p-5 rounded-lg shadow-lg">
      <img src={image} alt="Event Image" className="w-full h-28 object-cover mb-4" />
      <h3 className="text-xl font-bold mb-2 text-red-50">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline hover:bg-red-500 transition duration-300 ease-in-out">Know More</button>
    </div>
  );
};

function App() {
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
    <div className="max-w-[1240px] mx-auto p-5 w-full">
    <div className="App mt-1 h-screen p-32 w-full">
      <h1 className='text-white text-6xl  font-bold italic text-center'>OUR <span className='text-red-600'>EVENTS</span></h1>
      <div className='text-red-600 text-4xl flex justify-center items-center'><MdKeyboardDoubleArrowDown /></div>
      <div className="swiper-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="swiper-wrapper">
          {eventsData.map((event, index) => (
            <EventCard key={index} title={event.title} description={event.description} image={event.image} />
          ))}
        </div>
        <div className="swiper-button-next "></div>
        <div className="swiper-button-prev "></div>
      </div>
    </div>
    </div>
  );
}


export default App;


