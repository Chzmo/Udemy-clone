import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function PaidCourseHeader() {
  return (
    <>
        <div className="bg-black ">
            <div className="flex gap-12 m-auto w-4/5 text-white py-5">
                <div 
                    className={`
                    w-4/5 m-auto 
                    `}
                >
                    <div className="flex w-3/4 gap-2 items-center">
                        <Link>Development</Link><BiChevronRight/>   
                        <Link>Programming Languages</Link><BiChevronRight/>     
                        <Link>Python</Link>
                    </div>
                    <h1 
                        className='font-bold text-[2rem]'
                    >
                        The Complete Python Bootcamp From Zero to Hero in Python
                    </h1>
                    <h2 className='text-[1.5rem]'>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</h2>
                </div>
                <div className="w-1/4">
                    <p>The Complete Python Bootcamp From Zero to Hero in Python</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default PaidCourseHeader