import React, { useState } from 'react';
import "./envelope.css";
import { Link } from "react-router-dom";

export default function Envelope() {
    const [isFlapOpen, setIsFlapOpen] = useState(false);

    const handleHeartClick = () => {
        setIsFlapOpen(!isFlapOpen);
    };

    return (
        <>
            <div className="container h-full grid place-items-center">
            <div className="over"></div>
                <div className={`envelope-wrapper ${isFlapOpen ? 'envelope-wrapper flap' : 'envelope-wrapper'}`}>
                    <div className="envelope">
                        <div className="letter">
                            <div className="flex flex-col justify-center items-center">
                                <strong className='chip text-2xl text-[#A2171C] text-center'>Hackentine's Quest</strong>
                            </div>
                        </div>
                        <div className="overlay">
                            <Link to="/hackentinemain">
                            <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#A2171C] text-white mt-3 px-2 py-1 transition-all hover:scale-95 cursor-pointer'>Enter</button>
                            </Link>
                        </div>
                    </div>
                    <div className="heart" onClick={handleHeartClick}></div>
                </div>
            </div>
        </>
    );
}
