import React from 'react'
import "./hackabout.css"
export default function HackAbout() {
  return (
    <div id={'hackabout'} className="grid grid-cols-1 relative lg:grid-cols-2 bg-[#55141F] w-full h-full py-[150px] lg:pb-[200px] lg:pt-[270px]">
    <div className="about-clouds z-20"></div>
    <div className="over2"></div>
        <div className="about-container h-full grid place-items-center cursor-pointer transition-all hover:translate-y-[-10px]">
                <div className="about-envelope-wrapper about-flap">
                    <div className="about-envelope">
                        <div className="about-letter">
                            <div className="about-text flex flex-col justify-center items-center">
                                <div className="about-cont flex flex-col items-start justify-start">
                                <strong className='chip text-lg w-full text-[#A2171C] text-center mb-2'>About CU & CAC</strong>
                                <p className="text-[#444] text-justify">Chandigarh University ranked #27 in the National Ranking Framework (NRF), is proud to host Hackentine’s Quest 2024. With an expansive community of over 50,000 students, Chandigarh University stands as a beacon of academic excellence and a hub for knowledge exchange and professional growth. Renowned as one of the premier institutions in the country, our unwavering commitment is to cultivate an ecosystem that nurtures the seeds of creativity, fosters groundbreaking innovation, and fosters holistic development in every individual. CAC (CU Academic Competitions) orchestrates transformative events like Hackentine’s Quest, fostering a culture of creativity, collaboration, and excellence among participants.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="about-heart"></div>
                </div>
            </div>
            <div className="about-container mt-[120px] lg:mt-0 h-full grid place-items-center cursor-pointer transition-all hover:translate-y-[-10px]">
                <div className="about-envelope-wrapper about-flap">
                    <div className="about-envelope">
                        <div className="about-letter">
                            <div className="about-text flex flex-col justify-center items-center">
                                <div className="about-cont flex flex-col items-start justify-start">
                                <strong className='chip text-lg w-full text-[#A2171C] text-center mb-2'>About Hackentine's Quest</strong>
                                <p className="text-[#444] text-justify">Chandigarh University is a full-fledged university established by the Punjab State Legislature and is recognized by University Grants Commission under Section 2(f) with the right to confer degrees as per Section 22(1) of the UGC Act, 1956.Chandigarh University is a full-fledged university established by the Punjab State Legislature and is recognized by University Grants Commission under Section 2(f) with the right to confer degrees as per Section 22(1) of the UGC Act, 1956.Chandigarh University is a full-fledged university established by the Punjab State Legislature and is recognized by University Grants Commission under Section 2(f) with the right to confer degrees as per Section 22(1) of the UGC Act, 1956.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="about-heart"></div>
                </div>
            </div>
    </div>
  )
}
