import React from 'react'
import { AiFillPlayCircle, AiOutlineLeft } from 'react-icons/ai'

import quote from '../assets/icons/quote.svg'
import { Link } from 'react-router-dom'

function Testimonial() {
  return (
    <div id='testimonial' className='p-7 bg-slate-100 h-32rem '>
      <h2 className='font-bold text-xl pt-6'>How learners like you are achieving their goals</h2>
        <div className='mt-7 h-full relative overflow-x-hidden z-50'>
          <div className="flex gap-3 absolute top-0 left-0">
            <div className="p-5 border border-slate-400 bg-white">
              <div className='w-5 h-5'><img src={quote} alt="icon" /></div>
              <p className="pt-7 h-32">
                I took this course...I passed my 
                exam and am now an AWS Certified Cloud Practitioner! This content was exactly
                what the CCP exam covered.
              </p>
              <div className="flex gap-3 my-6">
                <div className="rounded-full bg-black text-white font-bold flex items-center justify-center p-1"><p>WP</p></div>
                <p>William Pope</p>
              </div>
              <hr />
              <Link className="flex gap-2 text-violet-600 pt-6 items-center">
                <div className="flex"><AiFillPlayCircle size={30}/></div>
                <p className='w-72 font-bold'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2023</p>
              </Link>
            </div>
            <div className="p-5 border border-slate-400 bg-white">
              <div className='w-5 h-5'><img src={quote} alt="icon" /></div>
              <p className="pt-7 h-32">
                I am proud to say that after taking this course...I passed my 
                exam and am now an AWS Certified Cloud Practitioner! This content was exactly
                what the CCP exam covered.
              </p>
              <div className="flex gap-3 my-6">
                <div className="rounded-full bg-black text-white font-bold flex items-center justify-center p-1"><p>WP</p></div>
                <p>William Pope</p>
              </div>
              <hr />
              <Link className="flex gap-2 text-violet-600 pt-6 items-center">
                <div className="flex"><AiFillPlayCircle size={30}/></div>
                <p className='w-72 font-bold'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2023</p>
              </Link>
            </div>
            <div className="p-5 border border-slate-400 bg-white">
              <div className='w-5 h-5'><img src={quote} alt="icon" /></div>
              <p className="pt-7 h-32">
                I am proud to say that after taking this course...I passed my 
                exam and am now an AWS Certified Cloud Practitioner! This content was exactly
                what the CCP exam covered.
              </p>
              <div className="flex gap-3 my-6">
                <div className="rounded-full bg-black text-white font-bold flex items-center justify-center p-1"><p>WP</p></div>
                <p>William Pope</p>
              </div>
              <hr />
              <Link className="flex gap-2 text-violet-600 pt-6 items-center">
                <div className="flex"><AiFillPlayCircle size={30}/></div>
                <p className='w-72 font-bold'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2023</p>
              </Link>
            </div>
            <div className="p-5 border border-slate-400 bg-white">
              <div className='w-5 h-5'><img src={quote} alt="icon" /></div>
              <p className="w-80 pt-7 h-32">
                I am proud to say that after taking this course...I passed my 
                exam and am now an AWS Certified Cloud Practitioner! This content was exactly
                what the CCP exam covered.
              </p>
              <div className="flex gap-3 my-6">
                <div className="rounded-full bg-black text-white font-bold flex items-center justify-center p-1"><p>WP</p></div>
                <p>William Pope</p>
              </div>
              <hr />
              <Link className="flex gap-2 text-violet-600 pt-6 items-center">
                <div className="flex"><AiFillPlayCircle size={30}/></div>
                <p className='w-72 font-bold'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2023</p>
              </Link>
            </div>
          </div>
          <div 
            className="flex items-center justify-center absolute z-20 top-36 -left-4 bg-black text-white font-bold rounded-full p-2 text-lg"
            >
            <AiOutlineLeft size={20} />
          </div>
      </div>
    </div>
  )
}

export default Testimonial