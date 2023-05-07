import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { MdOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom'
import Rating from '../../Components/Rating'

const randomImage1 = "https://source.unsplash.com/600x499/?learing"

function HeadFree() {
    return (
        <>
            <div 
                className="flex flex-col py-3 bg-white"
            >
                <small className="flex text-sm gap-2 items-center font-bold text-purple-900">
                    <Link>IT & Software</Link><BiChevronRight className='mt-1'/> 
                    <Link>Network & Security</Link><BiChevronRight className='mt-1 hidden sm:flex'/> 
                    <Link className='hidden sm:flex'>Amazon AWS</Link>
                </small>
            </div>

            <div className="flex flex-col sm:w-4/5 xsm:mx-auto xsm:grid xsm:grid-cols-1 gap-3 lg:grid lg:grid-cols-2 lg:w-full lg:gap-6 lg:px-2 mt-1">
                <div className="w-full  h-full">
                    <img 
                        src={randomImage1} 
                        alt={`course`}
                        className='h-52 w-full sm:h-[23rem] bg-slate-100 object-cover'
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="bold font-bold  text-2xl sm:text-[2rem]">Amazon AppStream 2.0 - Introduction</h2>
                    <p className='text-xl'>An introduction to Amazon AppStream 2.0 and how to quickly leverage this AWS service</p>
                    <div className="flex flex-col gap-2">
                        <small className="flex flex-wrap items-center text-sm gap-2">
                            <span className="p-1 px-2 bg-[#fcaea0]">Free tutorial</span>
                            <span className='flex items-center'>
                                <strong className='text-[#BB7725]'>4.5</strong> <Rating />  (193 ratings) 10,416 students
                            </span>
                            <span className="flex gap-2 items-center"><span><MdOndemandVideo size={20}/></span> 1hr 17min of on-demand video</span>
                        </small>
                        <small className='text-sm'>Created by <Link to={`/user/james`} className='text-purple-900 font-semibold'>James Scanlon | Masters Of Cloud</Link></small>
                        <small className='flex gap-2 text-sm'>
                            <span ><MdOndemandVideo size={20}/></span> English
                            <span ><MdOndemandVideo size={20}/></span> English [Auto]
                        </small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-xl">
                            Free
                        </h2>
                        <button className='hidden md:inline-block bg-black text-white py-2'>
                            Enroll now
                        </button>
                        <button className=' md:hidden border border-black text-black bg-white py-2 text-sm font-bold'>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadFree