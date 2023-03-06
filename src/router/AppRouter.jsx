import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from '@/pages/HomePage';
import Menu from '@/pages/MenuPage'
import NotFound from '@/pages/NotFound'

function AppRouter() {
  return (
      <Routes>
        <Route exact path="/home" element={<Navigate to="/"/>}/>
        <Route exact path="/menu" element={<Menu/>}/>
        <Route exact path="/" element={<HomePage/>}/>

        <Route exact path="not-found" element={<NotFound/>}/>
        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<Navigate to="not-found"/>} />
      </Routes>
  )
}

export default AppRouter