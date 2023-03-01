import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Laptops from '../pages/Laptops';
import Accessories from '../pages/Accessories';
import Contact from '../pages/Contact';
import Stores from '../pages/Stores';
import Login from '../pages/Login';
import Basket from '../pages/Basket';

const Layout = () => {
  return (
    <>
        <Routes>
            <Route path="*" element={<Laptops />} />
            <Route path="/Accessories" element={<Accessories />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Stores" element={<Stores />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Basket" element={<Basket />} />
        </Routes>
    </>
  );
};

export default Layout;