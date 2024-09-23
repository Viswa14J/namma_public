import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./main/login";
import Home from "./home/home";
import Signup from "./main/signup";
import NextPageFlow from "./home/nextpageflow"; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/next" element={<NextPageFlow />} /> {/* New route for the 3-click sequence */}
      </Routes>
    </Router>
  );
}

export default App;
