import React from 'react'
import './hacklanding.css'
import calendar from '../../assets/calendar.png'
import venue from '../../assets/venue.png'
export default function HackLanding() {
    return (
        <div className='lg:h-[110vh] h-screen flex justify-center items-center w-full'>
            <div class="happy-valentines w-full h-full">
                <div class="valentines-day-card grid place-items-center">
                    <div class="clouds"></div>
                    <div class="hearts">
                        <div className="heartZero hidden lg:block">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartOne">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartTwo">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartThree hidden lg:block">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartFour">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartFive">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartSix hidden lg:block">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartSeven hidden lg:block">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartEight">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartNine">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartTen">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartEleven hidden lg:block">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>

                    </div>
                    <div class="text-cont z-50 flex flex-col justify-center items-center">
                        <p className="chip text-center text-[3.5rem] px-4 lg:text-8xl text opacity-0">Hackentine's Quest</p>
                        <a className='z-20' href="">
                            <button className=' bg-[#A2171C] text-[#ffe8e8] z-20 mt-8 px-5 opacity-0 btn py-3 text-2xl lg:text-3xl transition-all hover:scale-95 cursor-pointer'>Register with Devfolio</button>
                        </a>
                    <div className="details mt-12 w-full h-16 flex justify-between items-center opacity-0 z-50">
                        <div className="flex items-center w-[50%] justify-around h-full mr-6">
                            <img className='h-full' src={calendar} alt="" />
                            <p className='chip text-[#ffe8e8] text-4xl ml-3 opacity-75'>27 <sup>th</sup> Feb, 2024</p>
                        </div>
                        <div className="flex items-center w-[50%] justify-around h-full ml-6">
                            <img className='h-full' src={venue} alt="" />
                            <p className='chip text-[#ffe8e8] text-4xl opacity-75'>D1 Auditorium</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
