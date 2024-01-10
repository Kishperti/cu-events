import React from 'react'

export default function Stats() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-full py-[50px] px-[20px] bg-[#0e0d0d]">
            <div className="flex flex-col w-full items-center justify-center">
                <h1 className='text-xl md:text-5xl font-medium text-[#E2012D] font-oswald'>10k +</h1>
                <div className="text-base md:text-2xl font-light text-white font-maven w-full mt-4 text-center">Total Participation</div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <h1 className='text-xl md:text-5xl font-medium text-[#E2012D] font-oswald'>300 +</h1>
                <div className="text-base md:text-2xl font-light text-white font-maven w-full mt-4 text-center">Achievements</div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <h1 className='text-xl md:text-5xl font-medium text-[#E2012D] font-oswald'>7k +</h1>
                <div className="text-base md:text-2xl font-light text-white font-maven w-full mt-4 text-center">National Participation</div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <h1 className='text-xl md:text-5xl font-medium text-[#E2012D] font-oswald'>3k +</h1>
                <div className="text-base md:text-2xl font-light text-white font-maven w-full mt-4 text-center">International Participation</div>
            </div>
        </div>
    )
}
