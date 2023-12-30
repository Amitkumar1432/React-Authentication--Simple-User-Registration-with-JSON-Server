import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
