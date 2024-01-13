import React, { useEffect } from "react";
import Home from "./pages/Home";
import Team from "./pages/Team";

const App = () => {


  return (
    <div className="bg-white w-full">
      <Team />
      <Home />
    </div>
  );
};

export default App;
