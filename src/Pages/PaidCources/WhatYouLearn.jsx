import React from 'react'
import { BiCheck } from 'react-icons/bi'

function WhatYouLearn() {
  return (
    <>
        <div className="flex -z-20 md:flex-row mt-3.5 gap-4 w-[90%] md:flex md:gap-6 m-auto md:w-[81%]">
            <div 
                className={`
                    w-full lg:w-4/5 gap-2 border flex flex-col py-7
                `}
            >
                <p className="px-4">What You Will Learn</p>
                <div className="grid grid-cols-2 gap-4 px-5">
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

            <div className="w-full hidden  sticky lg:flex md:w-2/5">
                <div className="flex flex-col w-full bg-transparent">
                    <div className="z-30  sticky top-32  bg-white md:w-full text-black">
                        <div className='-mt-24 z-30 w-full bg-white'>
                            <p>sdsadadaasdasdad</p>
                            <p>sdsadadaasdasdad</p>
                            <p>sdsadadaasdasdad</p>
                            <p>sdsadadaasdasdad</p>
                            <p>sdsadadaasdasdad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhatYouLearn