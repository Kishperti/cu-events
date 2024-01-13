import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import img from '../assets/image1.jpg'

const GlassCard = ({ image, title, details, name, designation, socialLinks }) => {
  return (
    <div className="group relative rounded-lg shadow-lg p-6 transition-transform transform hover:-rotate-6 hover:scale-105 cursor-pointer w-[250px] h-[250px] ">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center rounded-md mb-4 group-hover:opacity-100 absolute inset-0"
      />
      <div className="bg-[#091022a9] w-full absolute bottom-0 left-0 z-20 p-2">

        <h3 className="text-white opacity-70 text-lg font-semibold z-50">{name}</h3>
        <p className="text-white opacity-80 text-sm">{designation}</p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 group-hover:rotate-6 absolute inset-0 bg-[#091022] bg-opacity-25 z-50 backdrop-blur-md rounded-lg p-6 transition-opacity flex flex-col justify-center font-maven">
        <p className="text-white font-oswald text-lg">{name}</p>
        <p className="text-white uppercase text-xs mb-2">{designation}</p>
        <p className="text-white text-sm mb-2">{details}</p>
        <div className="flex mt-2">
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white transition-all hover:text-[#DC2626] text-lg mr-4">
            <FaTwitter />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white transition-all hover:text-[#DC2626] text-lg mr-4">
            <FaLinkedin />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white transition-all hover:text-[#DC2626] text-lg mr-4">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

const GlassCardGrid = () => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      image: img,
      name: "John Doe",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com/in",
        instagram: "https://www.instagram.com",
      },
    },
    {
      id: 2,
      title: "Card 2",
      image: img,
      name: "John Doe",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com/in",
        instagram: "https://www.instagram.com",
      },
    },
    {
      id: 3,
      title: "Card 3",
      image: img,
      name: "John Doe",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com/in",
        instagram: "https://www.instagram.com",
      },
    },
    {
      id: 4,
      title: "Card 4",
      image: img,
      name: "John Doe",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com/in",
        instagram: "https://www.instagram.com",
      },
    },
    {
      id: 5,
      title: "Card 5",
      image: img,
      name: "John Doe",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com/in",
        instagram: "https://www.instagram.com",
      },
    },
    {
      id: 6,
      title: "Card 6",
      image: img,
      name: "John Doe",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com/in",
        instagram: "https://www.instagram.com",
      },
    },
    // Add similar entries for other cards
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-4 px-32 pb-32 z-20 place-items-center w-full lg:w-[95%] -mt-16 md:-mt-28 lg:-mt-32">
      {cardData.map((card) => (
        <GlassCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default GlassCardGrid;
