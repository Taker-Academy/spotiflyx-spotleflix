'use client'

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterMain from "../pages/MainRegister";
import LoginMain from '@/pages/MainLogin';

export default function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginMain/>} />
            <Route path="/register" element={<RegisterMain/>} />
          </Routes>
        </div>
    </Router>
  );
}
