// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./main/login";
import Home from "./home/home";
import Signup from "./main/signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Signup" element={<Signup/>} />
        


      </Routes>
    </Router>
  );
}

export default App;
