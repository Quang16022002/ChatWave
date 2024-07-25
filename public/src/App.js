import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Slide_bar from "./pages/Slider_bar/index";
import Robot from "../src/assets/Robot2.gif";
export default function App() {
  return (
  <div>
      <BrowserRouter>
        <Routes>
       
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Slide_bar />} />
         
        </Routes>
      </BrowserRouter>
  </div>
  );
}
