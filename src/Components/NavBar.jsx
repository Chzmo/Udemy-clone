import React from 'react'
import logo from '../assets/logo/logo-udemy.svg'
function Navbar() {
  return (
    <div id="Navbar">
        <div className="flex p-2">
            <img className='h-8' src={logo} alt="" />
            <p>Category</p>
            <p>Category</p>
            <label htmlFor="search">
              
            </label>
        </div>
    </div>
  )
}

export default Navbar