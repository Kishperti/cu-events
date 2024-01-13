import React, { useEffect } from "react";
import Home from "./pages/Home";
import Team from "./pages/Team";
// React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-white w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
