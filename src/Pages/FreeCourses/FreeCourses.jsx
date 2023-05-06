import React from 'react'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'

import Footer from '../../Components/Footer/Footer'

import eventbrite from './../../assets/icons/eventbrite-dark.svg'
import boxd from './../../assets/icons/box-dark.svg'
import volkswagen from './../../assets/icons/volkswagen-dark.svg'
import netapp from './../../assets/icons/netapp-dark.svg'
import nasdaq from './../../assets/icons/nasdaq-dark.svg'
import logo from './../../assets/logo/logo-udemy-inverted.svg'

function FreeCourses() {
  return (
    <>
        <div 
            className="flex flex-col px-7 py-3 mt-16 w-full bg-[#1c1d1f] text-white"
        >
            <small className="flex md:hidden gap-2 items-center text-purple-300 font-bold">
                <Link>Programming Languages</Link><BiChevronRight/> 
                <Link>Python</Link>xzxzxzx
            </small>
        </div>
        <div className="h-screen"></div>
        <div className="flex flex-col gap-4 md:flex-row justify-between px-7 py-7 border-b border-slate-500 bg-[#1c1d1f]">
            <p className='text-xl font-bold text-white'>
                Top companies choose <Link className="text-purple-300 hover:underline">Udemy Business</Link> to build in-demand career skills.
            </p>
            <div className="flex flex-1 items-start justify-evenly sm:justify-between flex-wrap">
                <img src={nasdaq} alt="" />
                <img src={volkswagen} alt="" />
                <img src={boxd} alt="" />
                <img src={netapp} alt="" />
                <img src={eventbrite} alt="" />
            </div>
        </div>
        <Footer/>
        <div className="flex flex-col gap-4 md:flex-row justify-between p-7 bg-[#1c1d1f]">
            <div className='w-24'>
                <img 
                    src={logo} 
                    alt="logo"
                    className='w-full h-full'
                />
            </div>
            <small className='text-white'>© 2023 chzmo.</small>
        </div>
    </>
  )
}

export default FreeCourses