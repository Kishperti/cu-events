// Header.js

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdDoubleArrow } from 'react-icons/md';
import { FaLongArrowAltRight } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4 ">
      <div className="container mx-auto flex justify-between mr-10 items-center">
        {/* Logo */}
        <div className="ml-[50px] text-2xl font-bold"><img src="src/assets/c_a_c__2_-removebg-preview.png" alt="" className='w-[30%] h-[10%px]'/></div>
        <div>
        <ul className="hidden md:flex items-center space-x-12">
          <a href=""><li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Home</li></a>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Achievements</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Events</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Partners</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">About</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Contacts</li>
        </ul>
      </div>

        {/* Login button for laptop/desktop */}
        <button className=" w-[145px]  justify-center font-bold hidden md:block bg-[#E2012D] text-white text-center cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded hover:bg-white hover:text-red-600 rounded-tr-full">Login</button>

        {/* Mobile navigation button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
  {isMobileMenuOpen ? (
    <AiOutlineClose size={20} className='' />
  ) : (
    <AiOutlineMenu size={20} />
  )}
</button>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black p-4 space-y-4 text-xl  mt-3 hover: text-white hover:transition-opacity duration-500 ease-in-out border-b border-white hover:border-red-700">
          <ul>
           <li className="p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-whit border-l-8 hover:border-red-700">
                HOME
              </li>
              <li className="p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:border-red-700">
                ACHIEVEMENTS
              </li>
              <li className="p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:border-red-700">
                EVENTS
              </li>
              <li className="p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:border-red-700">
                ABOUT
              </li>
              <li className="p-4 mt-3 hover:text-red-600 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 border-l-8 hover:border-red-700">
                CONTACT US
              </li>
              <li className="w-full">
                <button className="bg-[#E2012D] w-[75%] p-12 text-white font-bold py-1.5 px-7 w-38 mx-auto my-12 flex justify-center rounded-tr-3xl transition-all duration-300 ease-in-out hover:shadow-md hover:ring-4 hover:ring-red-700 hover:bg-white hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-red-700 focus:bg-red-600">
                  LOGIN<span>
                    <MdDoubleArrow />
                  </span>
                </button>
              </li>

         
          </ul>
        </div>
      )}
    </header>
  );
};


export default NavBar;
