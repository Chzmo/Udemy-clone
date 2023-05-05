import React from 'react'
import Filter from '../Filter/Filter'
import { RiCloseFill } from 'react-icons/ri';

function RightSideNav({isRightNavOpen, setIsRightNavOpen}) {
  return (
    <>
        <div 
            onClick={()=> setIsRightNavOpen(!isRightNavOpen)}
            className={`
                sm:hidden
                fixed z-40 ${isRightNavOpen? '':'hidden'} 
                top-0 left-0 right-0 h-screen bg-black 
                opacity-40 overflow-hidden
            `}
        >
        </div>
        <div className={`
             fixed w-4/5 top-0 ${isRightNavOpen? 'right-0':'-right-full'}
            bg-white z-40 h-screen duration-500 overflow-y-scroll
        `}>
            <div 
                className={
                `fixed bg-white 
                rounded-full flex items-center 
                justify-center z-30 p-3 duration-500 left-3
                ${ isRightNavOpen ? 'top-3' : '-top-12'}`
                }
                onClick={() => {setIsRightNavOpen(false);} }
            >
                <RiCloseFill size={20}/>
            </div>
            <div className="h-screen duration-500 relative w-full ">
                <div className="w-full p-3 shadow-md">
                    1 result
                </div>
                <div className="px-3">
                    <Filter />
                </div>
            </div>
        </div>
    </>
  )
}

export default RightSideNav