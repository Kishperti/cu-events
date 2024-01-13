import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const GlassCard = ({ image, title, details, name, designation, socialLinks }) => {
  return (
    <div className="group relative overflow-hidden bg-[#df0000] rounded-lg shadow-lg p-6 m-4 transition-transform transform hover:scale-105 hover:rotate-6 w-[250px] h-[250px] ">
      <img
        src={image}
        alt={title}
        className="w-full h-[75%] object-cover object-center rounded-md mb-4 group-hover:opacity-100 absolute inset-0"
      />
      <h3 className="text-white text-lg font-semibold mt-50 z-50">{name}</h3>
      <p className="text-white opacity-80 text-sm">{details}</p>
      <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-white bg-opacity-25 backdrop-blur-md rounded-lg p-6 transition-opacity flex flex-col justify-center font-maven">
        <p className="text-white text-sm mb-2 ml-4">{details}</p>
        <p className="text-white text-sm mb-2 ml-4">{name}</p>
        <p className="text-white text-sm mb-2 ml-4">{designation}</p>
        <div className="flex space-x-2">
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white ml-4">
            <FaTwitter />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white ml-4">
            <FaLinkedin />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white ml-4">
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
    //   details: "Details for Card 1",
      image: "src/assets/image1.jpg",
      name: "ARYANN SINGH",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com/aryansingh",
        linkedin: "https://www.linkedin.com/in/aryansingh",
        instagram: "https://www.instagram.com/aryansingh",
      },
    },
    {
      id: 2,
      title: "Card 2",
    //   details: "Details for Card 1",
      image: "src/assets/image1.jpg",
      name: "ARYANN SINGH",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com/aryansingh",
        linkedin: "https://www.linkedin.com/in/aryansingh",
        instagram: "https://www.instagram.com/aryansingh",
      },
    },
    {
      id: 3,
      title: "Card 3",
    //   details: "Details for Card 1",
      image: "src/assets/image1.jpg",
      name: "ARYANN SINGH",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com/aryansingh",
        linkedin: "https://www.linkedin.com/in/aryansingh",
        instagram: "https://www.instagram.com/aryansingh",
      },
    },
    {
      id: 4,
      title: "Card 4",
    //   details: "Details for Card 1",
      image: "src/assets/image1.jpg",
      name: "ARYANN SINGH",
      designation: "Front End Developer",
      socialLinks: {
        twitter: "https://twitter.com/aryansingh",
        linkedin: "https://www.linkedin.com/in/aryansingh",
        instagram: "https://www.instagram.com/aryansingh",
      },
    },
    // Add similar entries for other cards
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card) => (
        <GlassCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default GlassCardGrid;
