import React, { useState } from 'react';
import "./envelope.css";

export default function Envelope() {
    const [isFlapOpen, setIsFlapOpen] = useState(false);

    const handleHeartClick = () => {
        setIsFlapOpen(!isFlapOpen);
    };

    return (
        <>
            <div className="container h-full grid place-items-center">
                <div className={`envelope-wrapper ${isFlapOpen ? 'envelope-wrapper flap' : 'envelope-wrapper'}`}>
                    <div className="envelope">
                        <div className="letter">
                            <div className="text flex flex-col justify-center items-center">
                                <strong className='chip text-2xl text-[#A2171C] text-center'>Hackentine's Quest</strong>
                            </div>
                        </div>
                        <div className="overlay">
                            <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#091022] text-white mt-3 px-2 py-1 transition-all hover:scale-95 cursor-pointer'>Enter</button>
                        </div>
                    </div>
                    <div className="heart" onClick={handleHeartClick}></div>
                </div>
            </div>
        </>
    );
}
