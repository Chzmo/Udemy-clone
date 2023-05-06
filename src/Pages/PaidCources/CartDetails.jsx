import React from 'react'
import { MdOndemandVideo } from 'react-icons/md'

function CartDetails() {
    return (
        <div className="w-full hidden z-30 sticky lg:flex md:w-2/5">
            <div className="flex flex-col w-full bg-transparent">
                <div className="z-50  sticky top-32  bg-white md:w-full text-black shadow-lg">
                    <div className='-mt-24 w-full h-max border bg-white p-4 px-7 space-y-3'>
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
                    <div className="border-x border-b px-7 py-4 flex flex-col gap-4 items-center">
                        <h2>Training 5 or more people?</h2>
                        <small className='text-sm text-slate-700 font-semibold'>Get your team access to 19,000+ top Udemy courses anytime, anywhere.</small>
                        <button 
                                className='border border-slate-700 w-full py-1.5 text-black font-bold'
                            >
                                Try Udemy Business
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetails