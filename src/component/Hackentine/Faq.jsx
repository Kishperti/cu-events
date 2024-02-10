import React, { useState } from 'react';
import './faq.css'
const Faq = () => {
    const faqData = [
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ', answer: 'Expedita impedit distinctio sunt aut rem delectus veritatis, iusto voluptatem ex est sapiente minima consectetur odio, enim.' },
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ', answer: 'Expedita impedit distinctio sunt aut rem delectus veritatis, iusto voluptatem ex est sapiente minima consectetur odio, enim.' },
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ', answer: 'Expedita impedit distinctio sunt aut rem delectus veritatis, iusto voluptatem ex est sapiente minima consectetur odio, enim.' },
        { question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ', answer: 'Expedita impedit distinctio sunt aut rem delectus veritatis, iusto voluptatem ex est sapiente minima consectetur odio, enim.' },
        // Add more FAQ items as needed
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="main relative min-h-screen w-full bg-[#55141F] flex flex-col items-center justify-start pt-[80px] lg:pt-[100px] pb-[200px]">
            <div className="over"></div>
            <div className="about-clouds z-40"></div>
            <div className="chip gif text-center text-5xl lg:text-8xl text-alt-white">
                FAQ's
            </div>
            <ul className='w-full z-20 mt-12 lg:mt-16 px-4 lg:px-40'>
                {faqData.map((item, index) => (
                    <li key={index} className={`mb-5 z-20 bg-[#FFE8E8] rounded-lg cursor-pointer p-2 ${index === expandedIndex ? 'gif2' : ''}`}>
                        <div className={` w-full px-2 lg:ppx-5 py-1 lg:py-3 rounded-lg ${index === expandedIndex ? 'bg-[#fcf2f2]' : ''}`}>
                        <button
                            onClick={() => handleToggle(index)}
                            className={`w-full z-20 flex justify-between items-start text-left text-base lg:text-xl chip text-[#1e1012]`}
                        >
                            <p>{item.question}</p>
                            <p className='text-base lg:text-xl z-20 text-[#1e1012]'>
                                <i className={`fa-solid ${index === expandedIndex ? 'fa-heart-circle-minus' : 'fa-heart-circle-plus'} text-[#1e1012]`}></i>
                            </p>
                        </button>
                        {expandedIndex === index && <p className="text-[#444] font-medium text-sm lg:text-lg mt-2">{item.answer}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Faq;
