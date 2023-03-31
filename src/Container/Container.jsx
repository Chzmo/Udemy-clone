import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom';

function Container() {
  return (
    <div className="container">
        <Navbar/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Container