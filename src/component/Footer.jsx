import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='relative bg-white w-full'>
         <div className="z-50 absolute w-[55%] bg-[#E2012D] py-4 text-left text-4xl font-extrabold font-maven text-white transform -translate-y-3/4 left-[25%] flex h-[140px] items-center ">
            <div className='ml-[30px]'>
            <span className=''>MORE THAN 10K MEMBERS</span>
            <br />
            <span className='text-[#091022]'>JOIN OUR GUILD!</span>
            </div>
               <div> <button
                    type="submit"
                    className="bg-[#091022] text-white py-2 px-6 rounded-tr-full ml-[60%] lg:w-[150px] lg:mt-0 hover:bg-[#121f2e]" >
                    <FaLongArrowAltRight />
                </button></div>
            </div>
        <div className=' bg-[#091022] mt-[12%]'>
            
            <div className="max-w-[1240px] mx-auto py-12 px-4 mt-40 lg:grid lg:grid-cols-3 gap-4 text-gray-300">
                <div className="lg:col-span-2">
                    <h1 className="w-full text-3xl text-[#E2012D]">
                        <span className='text-white font-extrabold'> CAC </span> EVENTS
                        <p className='text-white text-[15px] font-maven'>Subscribe to Chandigarh University Competitions Newsletters!!</p>
                    </h1>
                    <form className="mt-4">
                        <label className="sr-only" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full lg:w-[40%] py-2 px-4 border border-indigo-500 focus:outline-none focus:border-[#E2012D]"
                        />
                        <button
                            type="submit"
                            className="bg-[#E2012D] text-white py-2 px-6 rounded-tr-full lg:w-[150px] mt-2 lg:mt-0"
                        >
                            SEND
                        </button>
                    </form>
                    <div className="left-0 flex  p-8 cursor-pointer md:w-[30%] my-6 mt-12 lg:mt-0">
                    <FaFacebookSquare size={30} className="mr-4" />
                    <FaInstagram size={30} className="mr-4" />
                    <FaTwitterSquare size={30} className="mr-4" />
                    <FaGithubSquare size={30} className="mr-4" />
                    <FaDribbbleSquare size={30} />
                    </div>
  

                </div>
                <div className="lg:col-span-1 flex flex-col lg:flex-row justify-between mt-6">
                    <div className="mb-6 lg:mb-0">
                        <h1 className="font-bold text-white font-oswald">QUICK <span className='text-[#E2102d]'>LINKS</span></h1>
                        <ul className='font-maven'>
                            <li className="py-2 text-sm">HOME</li>
                            <li className="py-2 text-sm">NEWS</li>
                            <li className="py-2 text-sm">EVENTS</li>
                            <li className="py-2 text-sm">PARTNERS</li>
                            <li className="py-2 text-sm">ACHIEVEMENTS</li>
                        </ul>
                    </div>
                    <div className="mb-6 lg:mb-0">
                        <h2 className="font-bold text-white font-oswald">MEMBE<span className='text-[#E2102d]'>RSHIP</span></h2>
                        <ul className='font-maven'>
                            <li className="py-2 text-sm">JOINS</li>
                            <li className="py-2 text-sm">PRICING</li>
                            <li className="py-2 text-sm">JOBS</li>
                            <li className="py-2 text-sm">CAREERS</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-white font-oswald">TEAMS</h2>
                        <ul className='font-maven'>
                            <li className="py-2 text-sm">VAlorant</li>
                            <li className="py-2 text-sm">PUBG</li>
                            <li className="py-2 text-sm">C:GO</li>
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
}

export default Footer;
