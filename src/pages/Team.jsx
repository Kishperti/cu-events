import React from 'react';
import Teampage from '../component/Teampage';
import Teamcards from '../component/Teamcards';

export default function Team() {
  return (
    <div className="bg-[rgb(14,13,13)] teamcard flex flex-col items-center justify-start w-full">
        <Teampage />
        <Teamcards />
    </div>
  )
}
