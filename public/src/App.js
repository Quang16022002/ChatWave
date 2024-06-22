import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Slider from "./pages/Slider_bar/index";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/" element={<Slider />} />
      </Routes>
    </BrowserRouter>
  );
}
