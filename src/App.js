import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rides from "./components/Rides";
import './App.css'
import {Route,Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Themepark from "./pages/Themepark";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <h1>DOOMANJI</h1>
      <Navbar />
      <Home />
      <HeroSection/>
      <Rides />
     
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Themepark" element={<Themepark/> }/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
