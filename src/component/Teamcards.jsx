import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import img from '../assets/image1.jpg';
import bhavya from '../assets/bhavya.png';
import bhuvan from '../assets/bhuvan.png';
import sarthak from '../assets/Sarthak.png';
import harshit from '../assets/harshit.png';
import gurdeep from '../assets/Gurdeep.png';
import atul from '../assets/atul.png';
import raghav from '../assets/Raghav.png';
import shivansh from '../assets/Shivansh.png';
import anshika from '../assets/anshika.png';
import aryan from '../assets/aryann.png';

const GlassCard = ({ image, title, details, name, designation, socialLinks }) => {
  const visibleSocialLinks = Object.keys(socialLinks).filter(
    (link) => socialLinks[link]
  );
  return (
    <div className="group relative rounded-lg shadow-lg p-6 transition-transform transform hover:-rotate-6 hover:scale-105 cursor-pointer w-[250px] h-[250px] ">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center rounded-md mb-4 group-hover:opacity-100 absolute inset-0"
      />
      <div className="bg-[#091022a9] w-full absolute bottom-0 left-0 z-20 p-2">

        <h3 className="text-white opacity-70 text-lg font-semibold z-50">{name}</h3>
        {/* <p className="text-white opacity-80 text-sm">{designation}</p> */}
      </div>
      <div className="opacity-0 group-hover:opacity-100 group-hover:rotate-6 absolute inset-0 bg-[#091022] bg-opacity-25 z-50 backdrop-blur-md rounded-lg p-6 transition-opacity flex flex-col justify-center font-maven">
        <p className="text-white font-oswald text-lg">{name}</p>
        {/* <p className="text-white uppercase text-xs mb-2">{designation}</p> */}
        <p className="text-white text-sm mb-2">{details}</p>
        <div className="flex mt-2">
        {visibleSocialLinks.map((link) => (
          <a
            key={link}
            href={socialLinks[link]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all hover:text-[#DC2626] text-lg mr-4"
          >
            {link === "linkedin" && <FaLinkedin />}
            {link === "instagram" && <FaInstagram />}
            {link === "github" && <FaGithub />}
          </a>
        ))}
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
      image: bhuvan,
      name: "Bhuvan Sharma",
      details: "Hello i am bhuvan i am bouncer professionally",
      designation: "Development Executive",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/bhuvan-sharma-a0a470232",
        instagram: "https://www.instagram.com/sharma_.bhuvan?igsh=MXA5Z2d4YnZqNDZwYQ==",
        github: "https://github.com/Bhuvansharma0908",
      },
    },
    {
      id: 2,
      title: "Card 2",
      image: anshika,
      name: "Anshika",
      details: "Frontend sorceress weaving digital dreams, introverted melody enthusiast, and moonlit code composer.",
      designation: "Development Executive",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/anshika75/",
        instagram: "https://www.instagram.com/demilune75?igsh=MWoxaWVscXBveGpqeg==",
        github: "https://github.com/Anshika75",
      },
    },
    {
      id: 3,
      title: "Card 3",
      image: bhavya,
      name: "Bhavya",
      details: "Experienced leader with a track record of fostering team synergy. Contributing to societal betterment through meaningful connections.",
      designation: "Branding Executive",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/bhavya-kapoor-580294223/",
        instagram: "",
      },
    },
    {
      id: 4,
      title: "Card 4",
      image: sarthak,
      name: "Sarthak",
      details: "Looking forward to bolster Chandigarh University Academic Competitions in making more data driven decisions & Strategy. ",
      designation: "Data Strategy & Sponsorship Ex.",
      socialLinks: {
        linkedin: "",
        instagram: "",
      },
    },
    {
      id: 5,
      title: "Card 5",
      image: harshit,
      name: "Harshit",
      details: "Passionate about using data-driven insights to fuel business expansion.",
      designation: "HR team",
      socialLinks: {
        linkedin: "https://www.instagram.com/harshit_simbal?igsh=MTliM3FrZjA5bnN2ag%3D%3D&utm_source=qr",
        instagram: "",
      },
    },
    {
      id: 6,
      title: "Card 6",
      image: gurdeep,
      name: "Gurdeep",
      details: "",
      designation: "Media lead",
      socialLinks: {
        linkedin: "",
        instagram: "",
      },
    },
    // {
    //   id: 7,
    //   title: "Card 7",
    //   image: raghav,
    //   name: "Raghav",
    //   details: "Elevating brands through strategic marketing magic as a results-driven executive.",
    //   designation: "Marketing Executive",
    //   socialLinks: {
    //     linkedin: "https://www.linkedin.com/in/atul-kumar-2a5b1a1b6",
    //     instagram: "",
    //     github: "",
    //   },
    // },
    {
      id: 8,
      title: "Card 7",
      image: atul,
      name: "Atul",
      details: "Enthusiastic tech undergrad, product design innovator, event coordinator of 10+, driven by curiosity and determination.",
      designation: "HR",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/atul-raj-095322229/",
        instagram: "https://www.instagram.com/atul_raj_7146/",
        github: "",
      },
    },
    {
      id: 9,
      title: "Card 7",
      image: shivansh,
      name: "Shivansh",
      details: "Thrives on creative problem-solving, leveraging technical skills and imaginative ideas for innovative solutions. Committed to meaningful progress and growth.",
      designation: "Social Media & Outreach Lead",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/shivansh-tiwari-48894924a/",
        instagram: "",
        github: "",
      },
    },
    {
      id: 10,
      title: "Card 7",
      image: aryan,
      name: "Aryan",
      details: "",
      designation: "Collaboration & Outreach Executive",
      socialLinks: {
        linkedin: "http://www.linkedin.com/in/manastiwari27",
        instagram: "",
        github: "",
      },
    },
    // Add similar entries for other cards
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-4 px-32 pb-32 z-20 place-items-center w-full lg:w-[95%] -mt-4 md:-mt-28 lg:-mt-32">
      {cardData.map((card) => (
        <GlassCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default GlassCardGrid;
