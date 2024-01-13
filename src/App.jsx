import React, { useEffect } from "react";
import NavBar from "./component/NavBar";
import About from "./component/About";
import Footer from "./component/Footer";
import Events from "./component/Events";
import Landing from "./component/Landing";
import Achievements from "./component/Achievements";
import Partner from "./component/Partner";
import axios from "axios";
import Stats from "./component/Stats";
import Teampage from "./component/Teampage";

const App = () => {
 

  return (
    <div className="bg-white">
      <NavBar />
      <Landing />
      <Stats/>
      <About />
      <Events />
      <Achievements />
      <Partner />
      <Footer />
      <Teampage/>
    </div>
  );
};

export default App;
