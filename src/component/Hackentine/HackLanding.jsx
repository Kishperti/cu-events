import React from 'react'
import './hacklanding.css'
export default function HackLanding() {
    return (
        <div className='h-screen flex justify-center items-center w-full'>
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
                    <div class="text flex flex-col justify-center items-center ">
                        <p className="chip text-center text-[3.5rem] px-4 lg:text-8xl">Hackentine's Quest</p>
                        <div className="text-white mt-2 text-lg lg:text-3xl">Join us on 24 <sup>th</sup> Feb, 2024</div>
                        <a href="">
                            <button className=' bg-[#A2171C] text-white mt-8 px-5 opacity-0 btn py-3 text-2xl lg:text-3xl transition-all hover:scale-95 cursor-pointer'>Register with Devfolio</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
