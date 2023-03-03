import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Laptops from '../pages/Laptops';
import Accessories from '../pages/Accessories';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import Basket from '../pages/Basket';
import Sign_in from '../pages/Sign_in';

const Layout = () => {
  return (
    <>
        <Routes>
            <Route path="*" element={<Laptops />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/Sign_in" element={<Sign_in />} />
        </Routes>
    </>
  );
};

export default Layout;