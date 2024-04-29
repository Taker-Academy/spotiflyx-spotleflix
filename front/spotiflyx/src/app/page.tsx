'use client'

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterMain from "../pages/MainRegister";
import { Header } from '../pages/Header';
import Body from "../pages/register/body";

export default function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<RegisterMain/>} />
            <Route path="/register" element={<RegisterMain/>} />
          </Routes>
        </div>
    </Router>
  );
}
