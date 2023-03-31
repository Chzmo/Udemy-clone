import React from 'react'
import logo from '../assets/logo/logo-udemy.svg'
function Navbar() {
  return (
    <div id="Navbar">
        <div className="flex">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Navbar