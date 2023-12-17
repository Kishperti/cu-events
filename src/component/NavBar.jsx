import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdDoubleArrow } from 'react-icons/md';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-25 max-w-[1240px] mx-auto my-2 px-5 text-white">
        <div><h1 className="text-3xl font-bold text-[#df0000] my--2">CAC.</h1></div>
      <div>
      <ul className="hidden md:flex items-center space-x-4">
        <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Achievements</li>
        <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Events</li>
        <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Partners</li>
        <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">About</li>
        <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Contact Us</li>
      </ul>
      </div>
      <div className="w-45"><button className="bg-red-500 text-white font-bold py-1.5 px-7  w-38 mx-auto my-4 flex flex-col items-start rounded-tr-3xl hover:bg-red-800 transition-all duration-300 ease-in-out cursor-pointer shadow-red-700">Log In</button></div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className=' md:hidden transition duration-200 ease-in-out '>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#df0000] m-4">CAC..</h1>
        <li className="p-4 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700">
          Home
        </li>
        <li className="p-4 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700">
          Achievements
        </li>
        <li className="p-4 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700">
          Events
        </li>
        <li className="p-4 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700">
          About
        </li>
        <li className="p-4 hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700">
          Contact Us
        </li>
        <li className="w-full">
        <button className="bg-red-500 text-white font-bold py-1.5 px-7  w-38 mx-auto my-4 flex flex-col items-start rounded-tr-3xl">Log In
            <span className="text-white mt-1">
              <MdDoubleArrow />
            </span>
          </button>
        </li>
      </ul>

      </div>
      
    </div>
  );
  
};

export default Navbar;
