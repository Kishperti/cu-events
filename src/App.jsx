
import React from "react";
import NavBar from "./component/NavBar";
import About from './component/About';
import Footer from "./component/Footer";
import Events from './component/Events';

const App = () => {
  return (
    <div>
      <NavBar/>
      <About/>
      <Events/>
      <Footer/>
    </div>
  );
};

export default App;
