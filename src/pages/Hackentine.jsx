import React from 'react'
import HackLanding from '../component/Hackentine/HackLanding'
import HackAbout from '../component/Hackentine/HackAbout'
import Schedule from '../component/Hackentine/Schedule'
import Attractions from '../component/Hackentine/Attractions'
import Sponsors from '../component/Hackentine/Sponsors'
import Faq from '../component/Hackentine/Faq'
import HackNavBar from '../component/Hackentine/HackNavBar'
import Footer from '../component/Footer';

export default function Hackentine() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#55141F] '>
        <HackNavBar/>
        <HackLanding id="hackhome"/>
        <HackAbout id="hackabout"/>
        <Schedule id="hackschedule"/>
        <Attractions id="attractions"/>
        <Sponsors id="hacksponsors"/>
        <Faq id="hackfaq"/>
    </div>
  )
}
