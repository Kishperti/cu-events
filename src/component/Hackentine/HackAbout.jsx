import React from 'react'
import "./hackabout.css"
export default function HackAbout() {
  return (
    <div className="grid grid-cols-1 relative lg:grid-cols-2 bg-[#55141F] w-full h-full border-t-6 border-t-[#55141F] py-[150px] lg:pb-[200px] lg:pt-[270px]">
    <div class="about-clouds"></div>
        <div className="about-container h-full grid place-items-center cursor-pointer transition-all hover:translate-y-[-10px]">
                <div className="about-envelope-wrapper about-flap">
                    <div className="about-envelope">
                        <div className="about-letter">
                            <div className="about-text flex flex-col justify-center items-center">
                                <div className="about-cont flex flex-col items-start justify-start">
                                <strong className='chip text-lg w-full text-[#A2171C] text-center mb-2'>About Chandigarh University</strong>
                                <p className="text-[#444] text-justify">Chandigarh University is a full-fledged university established by the Punjab State Legislature and is recognized by University Grants Commission under Section 2(f) with the right to confer degrees as per Section 22(1) of the UGC Act, 1956.Chandigarh University is a full-fledged university established by the Punjab State Legislature and is recognized by University Grants Commission under Section 2(f) with the right to confer degrees as per Section 22(1) of the UGC Act, 1956.Chandigarh University is a full-fledged university established by the Punjab State Legislature and is recognized by University Grants Commission under Section 2(f) with the right to confer degrees as per Section 22(1) of the UGC Act, 1956.</p>
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
                                <strong className='chip text-lg w-full text-[#A2171C] text-center mb-2'>About CAC</strong>
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
