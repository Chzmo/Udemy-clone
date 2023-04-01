import React from 'react'
import { Outlet } from 'react-router-dom';

import Footer from '../Components/Footer'
import TopNav from '../Components/TopNav';

function Container() {
  return (
    <div className="container">
        <TopNav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Container