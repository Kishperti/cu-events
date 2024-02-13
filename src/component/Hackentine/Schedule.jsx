import React from 'react';
import valen1 from "../../assets/valen1.png";
import valen2 from "../../assets/valen2.png";
import valen3 from "../../assets/valen3.png";
import valen4 from "../../assets/valen4.png";
import valen5 from "../../assets/valen5.png";
import valen6 from "../../assets/valen6.png";
import valen7 from "../../assets/valen7.png";   
import './schedule.css';

const eventData = [
    {
        date: 'Feburary 14, 2024',
        title: 'Registration Extravaganza',
        description: 'Dive into the world of coding as registrations kick off for an epic journey. Brace yourself for a coding competition, engaging workshops, and the unveiling of the grand hackathon challenge.',
        image: valen2,
    },
    {
        date: 'Feburary 21, 2024',
        title: 'Code Unleashed',
        description: 'Embark on Round 1 of coding challenges and delve into the world of technology with an introductory workshop. It`s not just about code; it`s about decoding the challenges that lie ahead.',
        image: valen1,
    },    
    {
        date: 'Feburary 22, 2024',
        title: 'Coding Odyssey Continues',
        description: 'Level up in Round 2 of coding challenges and deepen your understanding with a workshop on "Getting Started with Advanced Technologies." Unleash your coding prowess and technological wizardry!',
        image: valen3,
    },
    {
        date: 'February 23, 2024',
        title: 'Tech Exploration Day',
        description: 'Immerse yourself in a hands-on workshop exploring various facets of technology. From coding finesse to the intricacies of development, this day is all about expanding your technological horizons.',
        image: valen4,
    },
    {
        date: 'February 24, 2024',
        title: 'Results Day Extravaganza',
        description: 'The moment of truth arrives! Round 1 and Round 2 results will be revealed. Find out if your code has what it takes to emerge victorious in this coding spectacle.',
        image: valen5,
    },
    {
        date: 'February 27, 2024',
        title: 'Hackathon Ignition',
        description: 'The Hackathon ignition sparks creativity! Teams unite, ideas flow, and the coding marathon begins. Get ready for an intense session of collaborative coding.',
        image: valen6,
    },
    {
        date: 'February 28, 2024',
        title: 'Coding Finale Celebration',
        description: 'Immerse yourself in Round 3, unveiling hackathon results, and be captivated by a spirited cultural performance. Join us for the spectacular grand culmination of Hackentine Quest, where coding meets celebration!',
        image: valen7,
    },
];

export default function Schedule() {
  return (
    <div id="hackschedule" className="main relative min-h-screen w-full bg-[#091022] flex flex-col items-center justify-start pt-[120px] pb-[200px]">
      <div className="schedule-clouds z-40"></div>
      <div className="chip text-center text-5xl text-[#A2171C] lg:text-8xl text">
        Event Calendar
      </div>
      <div className="grid overflow-x-hidden grid-cols-1 w-full h-full mt-24 px-4 lg:px-40">
        {eventData.map((event, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} my-8 ${index % 2 === 0 ? 'bg-[#ffe8e8] rounded-r-full' : 'bg-[#ffe8e8] rounded-l-full'} transition-all cursor-pointer hover:translate-x-${index % 2 === 0 ? '[10px]' : '[-10px]'}`}>
            <div className={`w-[30%] lg:w-[40%] bg-[#A2171C] relative before:absolute before:top-1/2 before:${index % 2 === 0 ? 'left-0' : 'right-0'} before:-translate-y-1/2 before:w-full before:h-4 before:bg-[#A2171C] shadow-2xl ${index % 2 === 0 ? 'before:-translate-x-full rounded-r-full' : 'before:translate-x-full rounded-l-full'} flex items-center justify-center lg:justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}  lg:p-2`}>
              <h1 className={`lg:text-4xl text-lg ${index % 2 === 0 ? 'pl-4' : 'pl-4 lg:pl-0 lg:pr-4'} font-black text-[#091022] chip`}>{event.date}</h1>
              <div className="img lg:grid place-items-center p-3 hidden w-24 h-24 rounded-full bg-[#ffe8e8]">
                <img className="h-full w-full object-cover" src={event.image} alt="" />
              </div>
            </div>
            <div className={`w-[70%] lg:w-[60%] flex flex-col justify-center py-8 lg:items-start pl-${index % 2 === 0 ? '2' : '8'} lg:pl-${index % 2 === 0 ? '0' : '8'} lg:py-4`}>
              <h1 className="lg:text-3xl text-base lg:pl-4 font-black text-[#A2171C] chip">{event.title}</h1>
              <div className="text-[#444] text-xs lg:px-4 text-justify mt-2 font-medium w-[90%] lg:w-full">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
