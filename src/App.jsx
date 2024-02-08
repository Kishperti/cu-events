import React, { useEffect } from "react";
import Home from "./pages/Home";
import Team from "./pages/Team";
// React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Hackentine from "./pages/Hackentine";

const App = () => {
  return (
    <div className="bg-white w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/hackentine" element={<Hackentine />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
