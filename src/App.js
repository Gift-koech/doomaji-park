import React from "react";

import Home from "./components/Home";
import Rides from "./components/Rides";
import './App.css'
import {Route,Routes } from "react-router-dom";
import Pricing from "./pages/Pricing";

import Themepark from "./pages/Themeparks";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Activities from "./pages/Activities";

function App() {
  return (
    <div>
      <h1>DOOMANJI</h1>
      <Navbar />
      <HeroSection/>
      <Home />
      <Rides />
      <div className="container" >
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Themepark" element={<Themepark/> }/>
        </Routes>
        <Footer />
     
      </div>

    </div>
  );
}

export default App;
