import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../Components/Footer/Footer'

import eventbrite from './../../assets/icons/eventbrite-dark.svg'
import boxd from './../../assets/icons/box-dark.svg'
import volkswagen from './../../assets/icons/volkswagen-dark.svg'
import netapp from './../../assets/icons/netapp-dark.svg'
import nasdaq from './../../assets/icons/nasdaq-dark.svg'
import logo from './../../assets/logo/logo-udemy-inverted.svg'
import HeadFree from './HeadFree'
import FreeContent from './FreeContent'

function FreeCourses() {
    return (
        <>
            <div className="px-7">
                <HeadFree />
                {/* COOURSE CONTENT */}
                <div className="flex flex-col sm:w-4/5 xsm:mx-auto xsm:grid lg:w-3/5 px-2 lg:mx-0">
                    <FreeContent />
                </div>
            </div>
            
            <div className="flex flex-col gap-4 md:flex-row justify-between mt-7 px-7 py-7 border-b border-slate-500 bg-[#1c1d1f]">
                <div>
                    <p className='text-xl font-bold text-white'>
                        Top companies choose <Link className="text-purple-300 hover:underline">Udemy Business</Link> to build in-demand career skills.
                    </p>
                </div>
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
            {/* ENROLL NOW */}
            <div className="flex py-2 px-7 sticky bottom-0 justify-between shadow-lg items-center bg-white sm:hidden gap-5">
                <p className='font-bold text-xl'>{`Free`}</p>
                <button 
                    className='py-3 border flex-1 px-16 bg-purple-600 text-white font-bold'
                >
                    Enroll now
                </button>
            </div>
        </>
    )
}

export default FreeCourses