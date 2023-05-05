import React from 'react'
import { MdStarRate } from 'react-icons/md';

function Related() {
    return (
        <>
            <h2 className="bold font-bold text-2xl">Students also bought</h2>
            <div className="flex flex-col gap-4 w-full">
                {[1,2,3,4,5,6,7].map((index)=>{
                    return (
                        <div key={`related-${index}`} className="flex gap-2 w-full">
                            <div className="h-20 w-20">
                                <img className='h-full w-full object-cover' src="" alt="related" />
                            </div>
                            <div className="flex-1 flex flex-wrap justify-between w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <h2>Master NextJs 9 - Node.js Framework 2023</h2>
                                    <small className="flex gap-3 items-center">
                                        <span className='text-green-900 font-semibold'>12 total hours</span>
                                        <span className=''>Updated 1/2023</span>
                                    </small>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className='flex items-center'><p>4.4</p> <p><MdStarRate /></p></div> 
                                    <div className='flex items-center'><span><MdStarRate /></span> <span>3,455</span></div> 
                                    <div className="font-bold">{`$64.99`}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Related