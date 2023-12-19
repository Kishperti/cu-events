import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bg-white w-full">
      <div className="z-50 absolute w-[55%] bg-[#E2012D] py-4 text-left text-4xl font-extrabold font-maven text-white transform -translate-y-3/4 left-[25%] flex h-[140px] items-center ">
        <div className="ml-[30px]">
          <span className="">MORE THAN 10K MEMBERS</span>
          <br />
          <span className="text-[#091022]">JOIN OUR GUILD!</span>
        </div>
        <div>
          {" "}
          <button
            type="submit"
            className="bg-[#091022] text-white py-2 px-6 rounded-tr-full ml-[60%] lg:w-[150px] lg:mt-0 hover:bg-[#121f2e]"
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className=" bg-[#091022] mt-[12%]">
        <div className="max-w-[1240px] mx-auto py-12 mt-40 lg:grid lg:grid-cols-3 gap-4 text-gray-300">
          <div className="lg:col-span-2">
            <h1 className="w-full text-3xl text-[#E2012D]">
              <img
                src="src/assets/c_a_c__2_-removebg-preview.png"
                alt=""
                className="w-[25%] h-[10%px]"
              />
            </h1>
            <p className="text-white text-[15px] font-maven">
              Subscribe to Chandigarh University Competitions Newsletters!!
            </p>
            <div className="left-0 flex p-8 cursor-pointer md:w-[30%] my-6 mt-12 lg:mt-0">
              <FaFacebookSquare size={30} className="mr-4" />
              <FaInstagram size={30} className="mr-4" />
              <FaTwitterSquare size={30} className="mr-4" />
              <FaGithubSquare size={30} className="mr-4" />
              <FaDribbbleSquare size={30} />
            </div>
          </div>
          <div className="lg:col-span flex flex-col lg:flex-row justify-between mt-6">
            <div className="mb-6 lg:mb-0">
              <h1 className="font-bold text-white font-oswald">
                QUICK <span className="text-[#E2102d]">LINKS</span>
              </h1>
              <ul className="font-maven">
                <li className="py-2 text-sm">HOME</li>
                <li className="py-2 text-sm">NEWS</li>
                <li className="py-2 text-sm">EVENTS</li>
                <li className="py-2 text-sm">PARTNERS</li>
                <li className="py-2 text-sm">ACHIEVEMENTS</li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h2 className="font-bold text-white font-oswald">CONTACT</h2>
              <ul className="font-maven text-xl">
                <li className="py-2 text-sm flex items-center">
                  <FaPhone className="mr-2 text-xl" />
                  (406) 555-0120
                </li>
                <li className="py-2 text-sm flex items-center">
                  <IoMail className="mr-2 text-xl" /> support@cac-cuchd.in
                </li>
                <li className="py-2 text-sm flex items-center">
                  <IoLocation className="mr-2 text-xl" /> Chandigarh University,
                  NH-5 <br /> Chandigarh-Ludhiana Highway
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#E2012D] py-4 text-center text-white">
          COPYRIGHT CAC. ALL RIGHT RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
