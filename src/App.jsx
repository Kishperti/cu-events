
import React from "react";
import NavBar from "./component/NavBar";
import About from './component/About';
import Footer from "./component/Footer";
import Events from './component/Events';
import Landing from "./component/Landing";
import Achievements from "./component/Achievements";
import Partner from "./component/Partner";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <About/>
      <Achievements/>
      <Events/>
      <Partner/>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
