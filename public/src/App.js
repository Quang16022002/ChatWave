import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Slider from "./pages/Slider_bar/index";
import Slide_bar from "./pages/Slider_bar/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Slide_bar />} />
       
      </Routes>
      
    </BrowserRouter>
  );
}
