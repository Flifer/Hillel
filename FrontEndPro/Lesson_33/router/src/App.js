import React from 'react';
import Users from './Users/Users';
import Albums from './Users/Albums';
import Photos from './Users/Photos';
import NotFound from './Users/NotFound';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import style from './App.module.css';

export default function App() {
  const active = ({ isActive }) => isActive ? style.active : undefined;

  return (
    <BrowserRouter>
    <NavLink to="/" className={active}>Users</NavLink>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path='/:userId/albums' element={<Albums />} />
        <Route path='/:userId/albums/:albumId/photos' element={<Photos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

