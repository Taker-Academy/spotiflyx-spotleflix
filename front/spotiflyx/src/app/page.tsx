'use client'

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterMain from "@/pages/MainRegister";
import LoginMain from '@/pages/MainLogin';
import HomeMusicMain from "@/pages/HomeMusicMain";
import HomeSearchMain from '@/pages/HomeSearch';

export default function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginMain/>} />
            <Route path="/login" element={<LoginMain/>} />
            <Route path="/register" element={<RegisterMain/>} />
            <Route path="/home" element={<HomeMusicMain/>} />
            <Route path="/home/search/video" element={<HomeSearchMain/>} />
          </Routes>
        </div>
    </Router>
  );
}
