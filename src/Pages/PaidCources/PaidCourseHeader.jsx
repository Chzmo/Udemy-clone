import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function PaidCourseHeader() {
  return (
    <>
        <div className="bg-black">
            <div className="flex gap-20 flex-start">
                <div 
                    className={`
                    w-4/5 m-auto py-5 text-white 
                    `}
                >
                    <div className="flex w-3/4 gap-2 items-center">
                        <Link>Development</Link><BiChevronRight/>   
                        <Link>Programming Languages</Link><BiChevronRight/>     
                        <Link>Python</Link>
                    </div>

                </div>
                <div className="flex w-1/4">

                </div>
            </div>
        </div>
    </>
  )
}

export default PaidCourseHeader