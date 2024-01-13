import React from 'react';
import NavBar from '../component/NavBar';
import Landing from '../component/Landing';
import Stats from '../component/Stats';
import About from '../component/About';
import Events from '../component/Events';
import Achievements from '../component/Achievements';
import Partner from '../component/Partner';
import Footer from '../component/Footer';

export default function Home() {
    return (
        <div className="bg-white">
            <NavBar/>
            <Landing />
            <Stats />
            <About />
            <Events />
            <Achievements />
            <Partner />
            <Footer />
        </div>
    )
}
