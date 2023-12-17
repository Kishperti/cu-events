
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdDoubleArrow } from "react-icons/md";


const Navbar = () =>{
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
    return(

      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#df0000]'>CAC.</h1>
      <ul className='hidden md:flex'>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Home</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Achievements</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Events</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Partners</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">About</li>
          <li className="p-4 hover:text-[#df0000] transition duration-300 ease-in-out cursor-pointer">Contact Us</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#df0000] m-4'>CAC..</h1>
      <li className='p-4  hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700 '>Home</li>
      <li className='p-4  hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700'>Achievements</li>
      <li className='p-4  hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700'>Events</li>
      <li className='p-4  hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700'>About</li>
      <li className='p-4  hover:transition-opacity duration-500 ease-in-out border-b border-white-600 hover:border-l-4 hover:border-red-700'>Contact</li>
      <button className="bg-gradient-to-r from-black via-red-500 to-black text-white font-bold py-2 px-4 rounded w-60 mx-auto my-4 flex flex-col items-center">
  Log In
  <span className='text-white mt-1'><MdDoubleArrow /></span>
</button>

    </ul>
    </div>
      
      
    );
}
export default Navbar;