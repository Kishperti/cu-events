import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import footerlogo from "../../assets/logonav.png";
import { Link } from "react-router-dom";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";

const HackFooter = () => {
  return (
    <div id={"hackcontact"} className="relative w-full mt-0">
      <div className="bg-[#091022]">
        <div className="w-full px-3 mx-auto lg:mt-0 py-12 pt-24 flex flex-col lg:flex-row gap-4 text-gray-300">
          <div className="w-full lg:pl-8 lg:w-[60%]">
            <Link to="/"> 
            <h1 className="w-full text-3xl text-[#A2171C]">
              <img
                src={footerlogo}
                alt=""
                className="w-[25%] h-[10%px]"
              />
            </h1>
            </Link>
            <p className="text-white text-[15px] font-maven mt-4 text-justify lg:mr-12">
              "CAC - The Face of Chandigarh University", 
              Public & Student Relations Community, CU <br/>
              #Letspromotecu

            </p>
            <div className="flex cursor-pointer my-8">
              <a href="https://www.youtube.com/@CAC-Podcast"><FaYoutube size={30} className="mr-4" /></a>
              <a href="https://www.instagram.com/cac.cuchd/"><FaInstagram size={30} className="mr-4" /></a>
              <a href="https://www.linkedin.com/in/cac-cu-academic-competitions-a9b4932a0/"><FaLinkedin size={30} className="mr-4" /></a>
              {/* <FaTwitterSquare size={30} className="mr-4" /> */}
              {/* <FaGithubSquare size={30} className="mr-4" /> */}
              {/* <FaDribbbleSquare size={30} /> */}
            </div>
          </div>
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0">
            <h1 className="font-bold text-white text-xl my-2 font-oswald">
              QUICK <span className="text-[#A2171C]">LINKS</span>
            </h1>
            <div className="font-maven cursor-pointer flex flex-col justify-start items-start">
              <a href="#hackhome" className="py-2 text-sm hover:text-[#A2171C]">HOME</a>
              <a href="#hackabout" className="py-2 text-sm hover:text-[#A2171C]">ABOUT</a>
              <a href="#hackschedule" className="py-2 text-sm hover:text-[#A2171C]">SCHEDULE</a>
              <a href="#attractions" className="py-2 text-sm hover:text-[#A2171C]">EVENTS</a>
              <a href="#hacksponsors" className="py-2 text-sm hover:text-[#A2171C]">SPONSORS</a>
              <a href="#hackfaq" className="py-2 text-sm hover:text-[#A2171C]">FAQ'S</a>
            </div>
          </div>
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0 cursor-pointer">
            <h2 className="font-bold text-white font-oswald text-xl my-2">CONTACT</h2>
            <ul className="font-maven text-xl">
              {/* <li className="py-3 text-sm flex items-center ">
                <FaPhone className="mr-2 text-xl" />
                (406) 555-0120
              </li> */}
              <li className="py-3 text-sm flex items-center">
                <IoMail className="mr-2 text-xl" /> support@cac-cuchd.in
              </li>
              <li className="py-3 text-sm flex items-center">
                <IoLocation className="mr-2 text-xl" /> Chandigarh University,
                NH-5 <br /> Chandigarh-Ludhiana Highway
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-[#A2171C] py-4 text-center text-white">
          COPYRIGHT CAC. ALL RIGHT RESERVED
        </div>
      </div>
    </div>
  );
};

export default HackFooter;
