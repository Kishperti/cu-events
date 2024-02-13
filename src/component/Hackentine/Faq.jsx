import React, { useState } from 'react';
import './faq.css'
const Faq = () => {
    const faqData = [
        { question: 'What will be covered in the Basics + Hands-on Smart Contract Dev Session?', answer: 'The session will cover fundamental concepts of smart contracts, providing a hands-on experience for participants to delve into the development process.' },
        { question: 'Do I need any prior coding experience to attend the workshop?', answer: 'While basic coding knowledge is beneficial, the workshop is designed to accommodate participants at various skill levels, including beginners.' },
        { question: 'What tools or software will be required for the hands-on session?', answer: 'Detailed instructions on required tools and software will be provided prior to the session. Participants are encouraged to come prepared with the necessary installations.' },
        { question: 'Will there be opportunities for interactive learning and asking questions during the workshop?', answer: 'Absolutely! The workshop is structured to encourage participant engagement, including Q&A sessions and interactive discussions to ensure a comprehensive learning experience.' },
        { question: 'Is there a specific coding language covered in the hands-on session?', answer: 'The session will primarily focus on a language commonly used for smart contract development, ensuring participants gain practical insights and skills applicable to real-world scenarios.' },
        { question: 'Can I bring my own project idea to work on during the hands-on session?', answer: 'While the workshop will have a structured curriculum, participants are encouraged to apply their learnings to personal projects. Mentors will be available to provide guidance and support.' },
        { question: 'Will there be any follow-up resources or materials provided after the workshop?', answer: 'Yes, participants will receive post-workshop resources, including reference materials, code samples, and additional learning materials to support their ongoing development journey.' },
        { question: 'How can I register for the Basics + Hands-on Smart Contract Dev Session?', answer: 'Registration details will be available on our event website. Keep an eye out for announcements and secure your spot for this hands-on coding experience.' },
        // Add more FAQ items as needed
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div id='hackfaq' className="main relative min-h-screen w-full bg-[#55141F] flex flex-col items-center justify-start pt-[80px] lg:pt-[100px] pb-[200px]">
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
