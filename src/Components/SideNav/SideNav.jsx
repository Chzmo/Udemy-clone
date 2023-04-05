import React from 'react'
import { RiCloseFill } from 'react-icons/ri'

function SideNav(props) {
  return (
    <>
      <div
        className='static bg-black top-0 left-0 bottom-0 right-0 z-20 opacity-40 fixed' 
      >

      </div>
        <div 
          className='
            static bg-white h-screen top-0 left-0 z-20 overflow-y-scroll fixed
            w-4/5 py-4 px-3
          '
          >
          side nav
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