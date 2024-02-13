import React from 'react';
import './sponsors.css';
import icp from "../../assets/icp.png"
import polygon from "../../assets/polygon.png"
import ethereum from "../../assets/ethereum.png"

export default function Sponsors() {
    return (
        <div id={'hacksponsors'} className="main relative min-h-screen w-full bg-[#091022] flex flex-col items-center justify-start pt-[120px] pb-[200px]">
            <div className="schedule-clouds z-40"></div>
            <div className="chip text-center text-5xl text-[#A2171C] lg:text-8xl text">
                Our Sponsors
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 px-8 lg:px-40 w-full mt-24">
                {renderSponsorCards()}
            </div>
        </div>
    );

    function renderSponsorCards() {
        const sponsorLogos = [
            "https://hack2skill.com/brandguidelines/assets/images/H2S_Gradient_Logo.svg",
            "https://raw.githubusercontent.com/devfolioco/brand-assets/f523906e2faeabd9e9f12d4ba62f53aa5b45b385/Logo%20+%20Text%20-%20Colored/Devfolio%20-%20Normal.svg",
            icp,
            polygon,
            ethereum,
        ];

        return sponsorLogos.map((logo, index) => (
            <div key={index} className="postcard w-full p-3 h-44 bg-[#ffe8e8] transition-all hover:scale-105 cursor-pointer shadow-2xl rounded-md">
                <div className="w-full h-full p-5 border-dashed border-4 border-[#A2171C]">
                    <img src={logo} className='w-full h-full' alt="" />
                </div>
            </div>
        ));
    }
}
