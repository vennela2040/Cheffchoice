import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Html from "./Html";
import Contact from "./Contact";
import {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Sign from "./Sign";
import Login from "./Login";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Html />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

