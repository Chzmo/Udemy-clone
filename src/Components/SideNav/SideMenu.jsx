import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'

function SideMenu({isSideMenuOpen, setIsSideMenuOpen, categories}) {
  return (
    <div 
      className={
        `absolute bg-white h-screen -top-5 overflow-hidden overflow-y-scroll
          w-full duration-500
          ${isSideMenuOpen ? ' left-0' : ' left-full'}
        ` 
      }
      onScroll={e => e.stopPropagation()}
      onTouchMove={e => e.stopPropagation()}
    >
      <div 
        className="flex items-center gap-5 bg-gray-100 w-full p-4"
        onClick={() => setIsSideMenuOpen(false)}
      >
        <BiChevronLeft size={20}/><p className='w-4/5'>Menu</p>
      </div>

      {categories && (
        categories.map((category, index) => {
          return (
            <p 
              key={index}
              className='w-4/5'
            >
              {category}
            </p>
          )
        })
      )}
    </div>
  )
}

export default SideMenu