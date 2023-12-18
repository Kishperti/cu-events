
import React from "react";
import NavBar from "./component/NavBar";
import About from './component/About';
import Footer from "./component/Footer";
import Events from './component/Events';
import Landing from "./component/Landing";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <About/>
      <Events/>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
