import React from 'react';
// import './events.css';

const eventsData = [
  {
    title: 'Event 1',
    description: '🚀🌌 Dreaming of reaching the stars? Join us for the Space Hackathon 2023 under the guidance of ISRO! 🛰️✨ Let your space innovation take flight and win a chance for ISRO\'s sponsorship 🌟 Hurry, last date for submission: 20th Dec, 2023.',
    image:'src/assets/SL-091319-23410-12.jpg',
  },
  {
    title: 'Event 2',
    description: '🚨👩‍💻 Ready to revolutionize society? 🌟 Join the Haryana Police Hackathon with Chandigarh University! 💡 Craft immersive digital solutions, compete nationwide, and make a lasting impact. Don\'t miss out on the chance to win big, network with leaders, and drive change! 🏆💰🌐🇮🇳.',
    image:'src/assets/SL-091319-23410-12.jpg',
  },
  {
    title: 'Event 3',
    description: '📣 Vimarsh 2023 5G Hackathon Announcement🚀 Welcome, Innovators! Join the Ministry of Home Affairs for "Vimarsh 2023 5G Hackathon," solving critical issues in Law Enforcement with innovative 5G solutions!',
    image:'src/assets/SL-091319-23410-12.jpg',
  },

];

const EventCard = ({ title, description }) => {
  return (
    <div className="event-card relative overflow-hidden bg-gray-800 p-5 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:transform hover:scale-125 hover:z-10">
      <img src="src/assets/SL-091319-23410-12.jpg" alt="Event Image" className="w-full h-32 object-cover mb-4" />
      <h3 className="text-xl font-bold mb-2 text-red-50">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline hover:bg-red-500 transition duration-300 ease-in-out">Know More</button>
    </div>
  );
};

function App() {
  return (
    <div className="App mt-10 h-screen p-32">
      <h1 className='text-white text-3xl font-bold italic text-center'>ONGOING <span className='text-red-600'>EVENTS</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {eventsData.map((event, index) => (
          <EventCard key={index} title={event.title} description={event.description} image={event.image} />
        ))}
      </div>
    </div>
  );
}

export default App;

