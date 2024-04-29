import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterMain from "./MainRegister";
import { Header } from './Header';
import Body from "./register/body";

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
