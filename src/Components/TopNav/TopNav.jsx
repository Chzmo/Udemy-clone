import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import { useMediaQuery } from '@mantine/hooks';

import logo from '../../assets/logo/logo-udemy.svg'
import SideNav from '../SideNav/SideNav'

function TopNav() {
    // const matches = useMediaQuery('(min-width: 1600px)');

    const [isSideNavOpen, setIsSideNavOpen] = useState(false)

    const handleSearchSubmit = (e) =>{
        e.preventDefault()
        alert()
    }



    return (
        <>
            <div 
                className="w-full flex py-3 px-6 gap-5 items-center justify-between shadow-lg relative"
            >
                <SideNav 
                    isSideNavOpen={isSideNavOpen}
                    setIsSideNavOpen={setIsSideNavOpen}
                />
                <div 
                    className='sm:hidden'
                    onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                >
                    < RxHamburgerMenu />
                </div>
                <img className='h-6' 
                    src={logo} alt="logo" 
                />
                <p className='hidden sm:flex'>Categories</p>
                <label 
                    htmlFor="search"
                    className='
                        hidden sm:flex
                        flex-1 
                        flex 
                        gap-3 
                        items-center 
                        rounded-full 
                        border 
                        border-slate-700 
                        py-2 px-4
                        bg-slate-100' 
                >
                    < AiOutlineSearch />
                    <form 
                        onSubmit={handleSearchSubmit}
                        className='w-full'
                    >
                        <input 
                            type="text" 
                            name='search' 
                            placeholder='Seach for anything'
                            className=' flex-1 border-none outline-none w-full bg-transparent text-sm'
                            tabIndex={1}
                        />
                    </form>
                </label>
                <Link className='hidden md:flex'>Udemy Business</Link>
                <Link className='hidden lg:flex'> Teach on Udemy</Link>
                <MdOutlineShoppingCart size={23} className='hidden font-semibold sm:flex'/>
                <div className="flex gap-2 items-center hidden sm:flex">
                    <Link className='border border-black py-1.5 font-semibold px-4'>Log In</Link>
                    <Link className='border border-black py-1.5 px-4 bg-black font-semibold text-white'>Sign Up</Link>
                    <button className='border border-black p-2.5'><AiOutlineGlobal /></button>
                </div>
                <div className="flex items-center gap-2 sm:hidden">
                    <AiOutlineSearch size={20}/>
                    <div className="flex items-center">
                        <MdOutlineShoppingCart size={23} className='font-semibold'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav