import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Course from './pages/Course';
import Teaching from './pages/Teaching';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
    </Router>
  );
}

export default App;
