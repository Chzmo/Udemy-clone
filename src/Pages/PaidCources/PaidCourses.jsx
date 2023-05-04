import Header from './Header'
import { MdOndemandVideo } from 'react-icons/md'

import WhatYouLearn from './WhatYouLearn'
import Companies from '../../Components/Companies/Companies'

function PaidCourses() {
    return (
        <>
            <Header />
            <div className="flex   md:flex-row mt-3.5 gap-4 w-[90%] md:flex md:gap-6 m-auto md:w-[81%] ">
                <div className="flex flex-col w-full lg:w-4/5 gap-5">
                    <WhatYouLearn />  
                    <Companies />
                    <WhatYouLearn />  
                </div>  
                <div className="w-full hidden  sticky lg:flex md:w-2/5">
                    <div className="flex flex-col w-full bg-transparent">
                        <div className="z-30  sticky top-32  bg-white md:w-full text-black">
                            <div className='-mt-24 z-30 w-full h-max border bg-white p-4 px-7 space-y-3'>
                                <div className="flex gap-2">
                                    <p className='font-bold text-[2rem] '>{`$88.99`}</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button 
                                        className='py-3 border border-slate-300 px-16 bg-purple-600 text-white font-bold'
                                    >
                                        Add to cart
                                    </button>
                                    <button 
                                        className='py-3 border border-slate-700 px-16 text-black font-bold'
                                    >
                                        Buy Now
                                    </button>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <small>30-Day Money-Back Guarantee </small>
                                    <small> Full Lifetime Access</small>
                                </div>
                                <p className='font-bold text-slate-600'>This course includes</p>
                                <div className='flex gap-2 items-center'>
                                    <MdOndemandVideo className=''/>
                                    <p>14.5 hours on-demand video</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <MdOndemandVideo className=''/>
                                    <p>14.5 hours on-demand video</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <MdOndemandVideo className=''/>
                                    <p>14.5 hours on-demand video</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className='underline font-bold p-1 hover:cursor-pointer'>Share</p>
                                    <p className='underline font-bold p-1 hover:cursor-pointer'>Gift this course</p>
                                    <p className='underline font-bold p-1 hover:cursor-pointer'>Apply Coupon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-screen"></div>
        </>
    )
}

export default PaidCourses