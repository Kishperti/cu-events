// OurTeam.js
import React from 'react';

// const teamMembers = [
//   {
//     name: 'Member 1',
//     role: 'Role 1',
//   },
//   {
//     name: 'Member 2',
//     role: 'Role 2',
//   },
//   {
//     name: 'Member 3',
//     role: 'Role 3',
//   },
//   {
//     name: 'Member 4',
//     role: 'Role 4',
//   },
// ];

const OurTeam = () => {
  return (
    <div className="min-h-screen relative">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('src/assets/bgteam.png')` }}
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  );
};

export default OurTeam;
