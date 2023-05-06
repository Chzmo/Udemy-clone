import React from 'react'
import { MdStarRate } from 'react-icons/md';
import Rating from '../../Components/Rating';

function ReviewCourse() {
    return (
        <>
            <div className="flex gap-2 items-center">
                <MdStarRate size={25} color='#e59819'/> 
                <h2 className="bold font-bold text-2xl">4.7 <span className='hidden sm:flex'>course rating</span> 18K ratings</h2>
            </div>
            <div className="flex gap-4 overflow-x-scroll sm:grid sm:grid-cols-2 sm:gap-7 w-full">
                {[0, 1,2,3,4,5,6].map((index)=>{
                    return((index < 4) &&
                        <div className='flex flex-col border sm:border-none w-full p-4 sm:p-0'>
                            <dvi className="sm:border-t py-4  gap-3 min-w-[17rem] sm:w-full flex justify-between items-center">
                                <div className="flex flex-row-reverse sm:flex-row sm:w-auto justify-between items-center gap-3 w-full">
                                    <div className="rounded-full w-10 h-10 bg-black text-white font-bold flex items-center justify-center">
                                        <p className='text-sm'>WP</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2>Issa D.</h2>
                                        <p className='flex items-center gap-1'>
                                            <Rating size={15} starNum={4} gap={0} color={`#e59819`}/> <small>5 days ago</small>
                                        </p>
                                    </div>
                                </div>
                                <MdStarRate className='hidden sm:flex'/>
                            </dvi>
                            <p className='w-full'>I tried many courses with various instructors, but Jonas is one of the best. I want to thank you for 
                                all of your amazing courses, in which you provide all the knowledge and information required to build a 
                                strong foundation to
                            </p>
                            <div className='w-full'>
                                <p className="font-bold text-sm underline mt-2 pb-1 hover:cursor-pointer">Show more</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ReviewCourse