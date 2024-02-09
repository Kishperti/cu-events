import React from 'react';
import valen1 from "../../assets/valen1.png";
import './schedule.css';

export default function Schedule() {
    return (
        <div className="main relative min-h-screen w-full bg-[#091022] flex flex-col items-center justify-start pt-[120px] pb-[200px]">
            <div class="schedule-clouds z-40"></div>
            <div className="chip text-center text-5xl text-[#A2171C] lg:text-8xl text">
                Event Calendar
            </div>
            <div className="grid overflow-x-hidden grid-cols-1 w-full h-full mt-24 px-4 lg:px-40">
                <div className="flex flex-row my-6 bg-[#ffe8e8] rounded-r-full">
                    <div className="w-[30%] lg:w-[40%] bg-[#A2171C] relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-full before:h-4 before:bg-[#A2171C] shadow-2xl before:-translate-x-full rounded-r-full flex items-center justify-center lg:justify-between flex-row lg:p-2">
                        <h1 className='lg:text-4xl text-lg pl-4 font-black text-[#091022] chip'>Feburary 22, 2024</h1>
                        <div className="img lg:grid place-items-center p-3 hidden w-24 h-24 rounded-full bg-[#ffe8e8]">
                            <img className='h-full w-full object-cover' src={valen1} alt="" />
                        </div>
                    </div>
                    <div className="w-[70%] lg:w-[60%] flex flex-col justify-center py-8 lg:items-start pl-2 lg:pl-0 lg:py-4">

                        <h1 className='lg:text-3xl text-lg lg:pl-4 font-black text-[#A2171C] chip'>Registration starts</h1>
                        <div className="text-[#444] text-xs lg:px-4 text-justify mt-2 font-medium w-[90%] lg:w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita impedit distinctio sunt aut rem delectus veritatis, iusto voluptatem ex est sapiente minima consectetur odio, enim.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row my-6 bg-[#ffe8e8] rounded-l-full">

                    <div className="w-[70%] lg:w-[60%] flex flex-col justify-center py-8 lg:items-start pl-8 lg:pl-8 lg:py-4">

                        <h1 className='lg:text-3xl chip text-lg lg:pr-4 font-black text-[#A2171C]'>Registration starts</h1>
                        <div className="text-[#444] text-xs text-justify mt-2 font-medium w-[90%] lg:w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita impedit distinctio sunt aut rem delectus veritatis, iusto voluptatem ex est sapiente minima consectetur odio, enim.
                        </div>
                    </div>
                    <div className="w-[30%] lg:w-[40%] bg-[#A2171C] relative before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:w-full before:h-4 before:bg-[#A2171C] shadow-2xl before:translate-x-full rounded-l-full flex items-center justify-center lg:justify-between flex-row lg:p-2">
                        <div className="img lg:grid place-items-center p-3 hidden w-24 h-24 rounded-full bg-[#ffe8e8]">
                            <img className='h-full w-full object-cover' src={valen1} alt="" />
                        </div>
                        <h1 className='lg:text-4xl chip text-lg pl-4 lg:pl-0 lg:pr-4 font-black text-[#091022]'>Feburary 22, 2024</h1>
                    </div>
                </div>
                <div className="flex flex-row my-6 bg-[#ffe8e8] rounded-r-full">
                    <div className="w-[30%] lg:w-[40%] bg-[#A2171C] relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-full before:h-4 before:bg-[#A2171C] shadow-2xl before:-translate-x-full rounded-r-full flex items-center justify-center lg:justify-between flex-row lg:p-2">
                        <h1 className='lg:text-4xl text-lg pl-4 font-black text-[#091022] chip'>Feburary 22, 2024</h1>
                        <div className="img lg:grid place-items-center p-3 hidden w-24 h-24 rounded-full bg-[#ffe8e8]">
                            <img className='h-full w-full object-cover' src={valen1} alt="" />
                        </div>
                    </div>
                    <div className="w-[70%] lg:w-[60%] flex flex-col justify-center py-8 lg:items-start pl-2 lg:pl-0 lg:py-4">

                        <h1 className='lg:text-3xl text-lg chip lg:pl-4 font-black text-[#A2171C]'>Registration starts</h1>
                        <div className="text-[#444] text-xs lg:px-4 text-justify mt-2 font-medium w-[90%] lg:w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita impedit distinctio sunt aut rem delectus veritatis, iusto voluptatem ex est sapiente minima consectetur odio, enim.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row my-6 bg-[#ffe8e8] rounded-l-full">

                    <div className="w-[70%] lg:w-[60%] flex flex-col justify-center py-8 lg:items-start pl-8 lg:pl-8 lg:py-4">

                        <h1 className='lg:text-3xl chip text-lg lg:pr-4 font-black text-[#A2171C]'>Registration starts</h1>
                        <div className="text-[#444] text-xs text-justify mt-2 font-medium w-[90%] lg:w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita impedit distinctio sunt aut rem delectus veritatis, iusto voluptatem ex est sapiente minima consectetur odio, enim.
                        </div>
                    </div>
                    <div className="w-[30%] lg:w-[40%] bg-[#A2171C] relative before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 before:w-full before:h-4 before:bg-[#A2171C] shadow-2xl before:translate-x-full rounded-l-full flex items-center justify-center lg:justify-between flex-row lg:p-2">
                        <div className="img lg:grid place-items-center p-3 hidden w-24 h-24 rounded-full bg-[#ffe8e8]">
                            <img className='h-full w-full object-cover' src={valen1} alt="" />
                        </div>
                        <h1 className='lg:text-4xl chip text-lg pl-4 lg:pl-0 lg:pr-4 font-black text-[#091022]'>Feburary 22, 2024</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
