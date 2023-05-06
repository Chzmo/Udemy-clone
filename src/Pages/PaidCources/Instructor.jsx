import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { MdStarRate } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link'

function Instructor() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <h2 className="bold font-bold text-2xl">Instructor</h2>
            <div className="space-y-4 ">
                <div className={`w-full flex flex-col ${!isOpen && 'h-64 overflow-y-hidden'}`}>
                    <div>
                        <HashLink 
                            to={`/user/jonasschmedtmann`} 
                            className='text-purple-700 border-b w-auto border-b-black font-bold text-lg'
                        >
                            Jonas Schmedtmann
                        </HashLink>
                    </div>
                    <h2 className='text-slate-700 mt-1'>Web Developer, Designer, and Teacher</h2>
                    <div className="flex gap-3 mt-2">
                        <div className="w-28 h-28 bg-slate-300 rounded-full ">
                            <img 
                                src="" 
                                alt={`Instructor`}
                                className='h-full w-full rounded-full object-cover
                                '
                            />
                        </div>
                        <div className="flex flex-col gap-1 h-full ">
                            <div className="flex gap-3 items-center">
                                <MdStarRate /> <p className='text-slate-700'>4.7 Instructor Rating</p>
                            </div>
                            <div className="flex gap-3">
                                <MdStarRate /> <p className='text-slate-700'>364,773 Reviews</p>
                            </div>
                            <div className="flex gap-3">
                                <MdStarRate /> <p className='text-slate-700'>1,663,500 Students</p>
                            </div>
                            <div className="flex gap-3">
                                <MdStarRate /> <p className='text-slate-700'>6 Courses</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 space-y-2 text-sm'>
                        <p className='text-sm'>Hi, I'm Jonas! I have been identified as one of Udemy's Top Instructors and all my 
                            premium courses have earned the best-selling status for outstanding performance and student satisfaction.
                        </p>
                        <p className='text-sm'>I'm a full-stack web developer and designer with a passion for building beautiful things from 
                            scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.
                        </p>
                        <p className='text-sm'>I discovered my passion for teaching and helping others by sharing all I knew when I was in college,
                             and that passion brought me to Udemy in 2015
                        </p>
                    </div>
                </div>
                <p className=' flex gap-1 items-center' onClick={ ()=> setIsOpen(!isOpen)}>
                    <small className='font-bold text-purple-700 cursor-pointer'>
                        {isOpen ? 'Show less' : 'Show more'}
                    </small>
                    {isOpen ? <BiChevronUp size={20}/> : <BiChevronDown size={20}/>}
                </p>
            </div>
        </>
    )
}

export default Instructor