'use client'

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterMain from "@/pages/main_pages/MainRegister";
import LoginMain from '@/pages/main_pages/MainLogin';
import HomeMusicMain from "@/pages/main_pages/HomeMusicMain";
import HomeSearchMain from '@/pages/main_pages/HomeSearch';
import { MainProfile } from '@/pages/main_pages/MainProfile';
import { MainFavorite } from '@/pages/main_pages/MainFavorite';

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
            <Route path="/profile" element={<MainProfile/>} />
            <Route path="/favorite" element={<MainFavorite/>} />
          </Routes>
        </div>
    </Router>
  );
}
