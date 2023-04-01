import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineGlobal } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import logo from '../assets/logo/logo-udemy.svg'

function TopNav() {
  return (
    <div 
        className="w-full flex py-3 px-6 gap-5 items-center space-between shadow-md"
    >
        <img className='h-8' src={logo} alt="logo" />
        <p>Categories</p>
        <label 
            htmlFor="search"
            className='flex-1 flex gap-3 items-center rounded-full border border-black p-2 px-4' 
        >
           < AiOutlineSearch />
           <input 
                type="text" 
                name='search' 
                placeholder='Seach for anything'
                className=' flex-1 border-transparent outline-white'
            />
        </label>
        <Link >Udemy Business</Link>
        <Link>Teach on Udemy</Link>
        <AiOutlineShoppingCart />
        <Link className='border border-black py-2 px-4'>Log In</Link>
        <Link className='border border-black py-2 px-4'>Sign Up</Link>
        <button className='border border-black p-3'><AiOutlineGlobal /></button>
    </div>
  )
}

export default TopNav