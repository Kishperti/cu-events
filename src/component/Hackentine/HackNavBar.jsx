import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdDoubleArrow } from "react-icons/md";
import navlogo from "../../assets/logonav.png";

const HackNavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#091022] text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="lg:ml-[50px] ml-0 text-2xl font-bold">
          <a href="/">
            <img
              src={navlogo}
              alt=""
              className="w-[30%] h-[10%px]"
            />
          </a>
        </div>
        <div className="hidden lg:flex items-center mr-[20%]">
          <ul className="flex ">
            <li>
              <a
                href="#hackhome"
                className="p-4 mr-4 font-maven uppercase hover:text-[#A2171C] transition-all cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#hackabout"
                className="p-4 mr-4 font-maven uppercase hover:text-[#A2171C] transition-all cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#hackschedule"
                className="p-4 mr-4 font-maven uppercase hover:text-[#A2171C] transition-all cursor-pointer"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="#attractions"
                className="p-4 mr-4 font-maven uppercase hover:text-[#A2171C] transition-all cursor-pointer"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#hacksponsors"
                className="p-4 mr-4 font-maven uppercase hover:text-[#A2171C] transition-all cursor-pointer"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#hackfaq"
                className="p-4 font-maven uppercase transition-all hover:text-[#A2171C] cursor-pointer"
              >
                Faq's
              </a>
            </li>
            <li>
              <a
                href="#hackcontact"
                className="p-4 font-maven uppercase transition-all hover:text-[#A2171C] cursor-pointer"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>

        {/* Login button for laptop/desktop */}
        <a href="https://drive.google.com/file/d/1HJYaFVWZCinxJSF3DI-cQnbwgagul3x8/view?usp=sharing">
          <button className="w-[145px] justify-center font-bold hidden lg:block bg-[#A2171C] text-[#FFE8E8] text-center cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded hover:bg-[#A45053] hover:text-[#FFE8E8] rounded-tr-full">
          GUIDELINES
          </button>
        </a>

        {/* Mobile navigation button */}
        <button className="lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <AiOutlineClose size={20} className="" />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black p-4 space-y-4 text-xl mt-3 hover: text-white hover:transition-opacity duration-500 ease-in-out border-b border-white hover:[#A2171C]">
          <ul>
            <a href="#hackhome">
              <li className="font-maven uppercase p-4 mt-3 hover:[#A2171C] hover:transition-opacity duration-500 ease-in-out border-b border-whit border-l-8 hover:[#A2171C]">
                HOME
              </li>
            </a>
            <a href="#hackabout">
              <li className="font-maven uppercase p-4 mt-3 hover:[#A2171C] hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:[#A2171C]">
                ABOUT
              </li>
            </a>
            <a href="#hackschedule">
              <li className="font-maven uppercase p-4 mt-3 hover:[#A2171C] hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:[#A2171C]">
                SCHEDULE
              </li>
            </a>
            <a href="#attractions">
              <li className="font-maven uppercase p-4 mt-3 hover:[#A2171C] hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:[#A2171C]">
                EVENTS
              </li>
            </a>
            <a href="#hacksponsors">
              <li className="font-maven uppercase p-4 mt-3 hover:[#A2171C] hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:[#A2171C]">
                SPONSORS
              </li>
            </a>
            <a href="#hackfaq">
              <li className="font-maven uppercase p-4 mt-3 hover:[#A2171C] hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:[#A2171C]">
                FAQ'S
              </li>
            </a>
            <a href="#hackcontact">
              <li className="font-maven uppercase p-4 mt-3 hover:[#A2171C] hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:[#A2171C]">
                CONTACT US
              </li>
            </a>
            <a href="https://drive.google.com/file/d/1HJYaFVWZCinxJSF3DI-cQnbwgagul3x8/view?usp=sharing">
            <button className="bg-[#A2171C] text-white py-2 lg:py-3 px-12 w-80 mt-12 flex justify-between items-center rounded-tr-full hover:bg-white hover:text-[#A2171C] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-2xl lg:text-3xl uppercase tracking-widest">
            GUIDELINES &nbsp; &nbsp; <MdDoubleArrow />{" "}
            </button>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default HackNavBar;
