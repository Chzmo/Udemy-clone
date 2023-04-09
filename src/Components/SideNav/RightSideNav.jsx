import React from 'react'
import Filter from '../Filter/Filter'

function RightSideNav({isRightNavOpen, setIsRightNavOpen}) {
  return (
    <>
        <div 
            onClick={()=> setIsRightNavOpen(!isRightNavOpen)}
            className={`
                sm:hidden
                static fixed z-20 ${isRightNavOpen? '':'hidden'} 
                top-0 left-0 right-0 h-screen bg-black 
                opacity-40 overflow-hidden
            `}
        >
        </div>
        <div className={`
            static fixed w-4/5 top-0 ${isRightNavOpen? 'right-0':'-right-full'}
            bg-white z-20 h-screen duration-500 overflow-y-scroll
        `}>
            <div className="w-full p-3 shadow-md">
                1 result
            </div>
            <div className="h-screen duration-500 relative h-full w-full px-3 ">
                <Filter />
            </div>
        </div>
    </>
  )
}

export default RightSideNav