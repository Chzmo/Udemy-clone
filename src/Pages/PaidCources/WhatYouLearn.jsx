import React from 'react'
import { BiCheck } from 'react-icons/bi'

function WhatYouLearn() {
  return (
    <>
        <div 
            className={`
                w-full gap-2 border flex flex-col py-7 sticky -z-20
            `}
        >
            <p className="px-4 bold font-bold text-2xl">What You Will Learn</p>
            <div className="flex flex-col justify-start gap-2 sm:grid sm:grid-cols-2 sm:gap-4 px-5">
                {[1,2,3,4,5,6,7,8,9,10].map((index)=>{
                    return(
                        <div key={index} className='flex gap-4 items-start'>
                            <BiCheck size={50} className='w-9'/>
                            <p>Master the entire modern back-end stack: Node, Express, MongoDB and Mongoose (MongoDB JS driver)</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default WhatYouLearn