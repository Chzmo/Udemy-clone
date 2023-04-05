import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'

function SideNav(props) {
  return (
    <>
      <div
        onScroll={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
        className='static bg-black top-0 left-0 w-screen h-screen z-20 opacity-40 fixed' 
      >

      </div>
        <div 
          className='
            static bg-white h-screen top-0 left-0 z-20 overflow-hidden overflow-y-scroll fixed
            w-4/5
          '
          >
            <div className="flex flex-col gap-2 px-3 mt-4 mb-3">
              <Link to='/login' >Log in</Link>
              <Link to='/login' >Sign Up</Link>
            </div>
            <hr />
            
            <div className="flex flex-col gap-2 my-3 px-3">
            <div className="flex justify-between">
                <p className='w-3/4'>Web Development</p> <BiChevronRight />
              </div>
              <div className="flex justify-between">
                <p className='w-3/4'>Mobile Development</p> <BiChevronRight />
              </div>
              <div className="flex justify-between">
                <p className='w-3/4'>Game Development</p> <BiChevronRight />
              </div>
              <div className="flex justify-between">
                <p className='w-3/4'>Entrepreneurship</p> <BiChevronRight />
              </div>
              <div className="flex justify-between">
                <p className='w-3/4'>Business Analytics & Intellience</p> <BiChevronRight />
              </div>
              <div className="flex justify-between">
                <p className='w-3/4'>Digital Marketing</p> <BiChevronRight />
              </div>
              
            </div>
            <hr />
        </div>
        <div 
          className='static fixed bg-white top-3 right-3 rounded-full flex items-center justify-center z-20 p-3'
        >
          <RiCloseFill size={20}/>
        </div>
    </>
  )
}

export default SideNav