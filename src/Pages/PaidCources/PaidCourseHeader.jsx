import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Rating from '../../Components/Rating'

function PaidCourseHeader() {
  return (
    <>
        <div 
            className="fixed flex flex-col justify-center px-4 top-0 static h-[66px] w-screen bg-[#1c1d1f] -z-10 text-white shadow-lg"
        >

        </div>
        <div className="bg-[#1c1d1f] relative -z-20">
            <div className="flex gap-12 m-auto w-[81%] text-white py-7">
                <div 
                    className={`
                    w-4/5 m-auto gap-2
                    `}
                >
                    <small className="flex w-3/4 gap-2 items-center text-purple-300 font-bold">
                        <Link>Development</Link><BiChevronRight/>   
                        <Link>Programming Languages</Link><BiChevronRight/>     
                        <Link>Python</Link>
                    </small>
                    <h1 
                        className='font-bold text-[2rem]'
                    >
                        The Complete Python Bootcamp From Zero to Hero in Python
                    </h1>
                    <h2 className='text-[1.4rem] pr-5 '>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</h2>
                    <div className="flex gap-1 py-2">
                        <Rating 
                            gap={1}
                        />
                        <Link className='text-purple-300'>(458,574 ratings)</Link>
                        <p>1,702,710 students</p>
                    </div>
                    <div className="flex gap-2"><p>Created by </p><Link className='text-purple-300'><small>Zaliro</small></Link></div>
                    <div className="flex gap-4 items-center">
                    <small> Last updated 03/2021 </small>
                    <small> English</small>
                    </div>
                </div>


                <div className="w-1/4">
                    <p>The Complete Python Bootcamp From Zero to Hero in Python</p>
                </div>
            </div>
        </div>
        <div className="flex h-screen"></div>
    </>
  )
}

export default PaidCourseHeader