import React, { useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineGlobal } from 'react-icons/ai'
import SideMenu from './SideMenu'

const categories = [
  {'category':'Web Development'},
  {'category':'Personal Transformation'},
  {'category':'Game Development'},
  {'category':'Entrepreneurship'},
  {'category':'Business Analytics & Intellience'},
  {'category':'Digital Marketing'},
  {'category':'Graphic Design & Illustration'},
  {'category':'IT Certifications'},
  {'category':'Personal Transformation'},
  {'category':'All Categories'},
]
function SideNav({isSideNavOpen, setIsSideNavOpen}) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  return (
    <>
      {/* Black Opacity */}
      <div
        className= {
          `static bg-black opacity-40 top-0 left-0 right-0 h-screen
          z-20 fixed ${isSideNavOpen ? '' : 'hidden'}`
         }
         onClick={() => setIsSideNavOpen(false)}
      >
      </div>

      {/* Close icon */}
      <div 
        className={
          `static fixed bg-white  
          right-3 rounded-full flex items-center 
          justify-center z-20 p-3 duration-500
           ${ isSideNavOpen ? 'top-3' : ' -top-12'}`
        }
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <RiCloseFill size={20}/>
      </div>

      {/* Side Nav */}
      <div 
        // style={{left:'-80%'}}
        className={
          `static bg-white h-screen top-0 z-20 overflow-hidden overflow-y-scroll fixed
            w-4/5 duration-500
            ${isSideNavOpen ? ' left-0 ' : ' -left-full'}
          ` 
        }
        onScroll={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
      >
        <div className="relative">
          <SideMenu 
            isSideMenuOpen={isSideMenuOpen}
            setIsSideMenuOpen={setIsSideMenuOpen}
        />
          <div className="flex flex-col gap-2 px-3 mt-4 mb-3">
            <Link to='/login' className='text-purple-800'>Log in</Link>
            <Link to='/register' className='text-purple-800'>Sign up</Link>
          </div>
          <hr />
          
          <div className="flex flex-col gap-2 my-3 px-3"
            onClick={() => setIsSideMenuOpen(true)}
          >
            <small className='text-slate-600 font-bold'>Most popular</small>
            <div className="flex justify-between">
              <p className='w-4/5'>Web Development</p> <BiChevronRight />
            </div>
          </div>
          <hr />

          {/* 4dr5 */}

          <div className="flex flex-col gap-2 my-3 px-3">
            <small className='text-slate-600 font-bold'>Most popular</small>
            <div className="flex justify-between">
              <p className='w-3/4'>Udemy Business</p> <BiChevronRight />
            </div>
            <div className="flex justify-between">
              <p className='w-3/4'>Get the app</p> <BiChevronRight />
            </div>
            <div className="flex justify-between">
              <p className='w-3/4'>Invite Friends</p> <BiChevronRight />
            </div>
            <div className="flex justify-between">
              <p className='w-3/4'>Help</p> <BiChevronRight />
            </div>
          </div>
          <div className="ml-3 mb-3 w-32">
            <Link className='border border-black text-black py-2 text-sm px-4 pr-6 flex gap-1 items-center'> 
            <AiOutlineGlobal size={20}/> English
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNav