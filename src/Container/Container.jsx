import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Home from '../Pages/Home'
import { Outlet, useNavigate } from 'react-router-dom';

function Container() {
  return (
    <div className="container">
        <Navbar/>
        <Outlet />
        {/* <Home /> */}
        <Footer />
    </div>
  )
}

export default Container