import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Navigation } from "./Components/Navigation";
import { Hero } from "./Pages/Hero";
import { Festivals } from "./Pages/Festivals";
import { Discover } from "./Pages/Discover";
import { Gallery } from "./Pages/Gallery";
import { ContactUs } from "./Pages/ContactUs";
import { Updates } from "./Pages/Updates";
import { Login } from "./Pages/Login";
import {Chatbot} from "./Components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Festivals" element={<Festivals />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Updates" element={<Updates />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Chatbot/>
    </BrowserRouter>
  );
}

export default App;
