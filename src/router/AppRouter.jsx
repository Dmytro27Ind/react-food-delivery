import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from '@/pages/HomePage';
import AboutUs from '@/pages/AboutUsPage'
import NotFound from '@/pages/NotFound'
import { ABOUT_US, HOME, NOT_FOUND, GIT_PROJECT } from './routesConstants';

function AppRouter() {
  return (
      <Routes>
        <Route exact path={HOME} element={<Navigate to={GIT_PROJECT + "/"}/>}/>
        <Route exact path={ABOUT_US} element={<AboutUs/>}/>
        <Route exact path={GIT_PROJECT + "/"} element={<HomePage/>}/>

        <Route exact path={NOT_FOUND} element={<NotFound/>}/>
        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<Navigate to={NOT_FOUND}/>} />
      </Routes>
  )
}

export default AppRouter