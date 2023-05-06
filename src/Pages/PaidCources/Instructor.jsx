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
                <div className={`w-full flex flex-col ${!isOpen && 'h-60 overflow-y-hidden'}`}>
                    <div>
                        <HashLink 
                            to={`/user/jonasschmedtmann`} 
                            className='text-purple-700 border-b w-auto border-b-black font-bold text-lg'
                        >
                            Jonas Schmedtmann
                        </HashLink>
                    </div>
                    <h2 className='text-slate-700'>Web Developer, Designer, and Teacher</h2>
                    <div className="flex gap-3 items-center mt-2">
                        <div className="w-32 h-32 bg-slate-300 rounded-full ">
                            <img 
                                src="" 
                                alt={`Instructor`}
                                className='h-full w-full rounded-full object-cover
                                '
                            />
                        </div>
                        <div className="flex flex-col gap-2 h-full ">
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