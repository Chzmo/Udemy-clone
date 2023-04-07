import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'

function SideMenu({isSideMenuOpen, setIsSideMenuOpen, subCategories}) {
  return (
    <div 
      className={
        `absolute bg-white h-screen -top-5 overflow-hidden overflow-y-scroll
          w-full h-full duration-500
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

      <div className="flex flex-col gap-2 my-3 px-3">
        {subCategories && (
          subCategories?.map((subCategory, index) => {
            return (
              <p 
                key={index}
                className='w-4/5'
              >
                {subCategory.name}
              </p>
            )
          })
        )}
      </div>
    </div>
  )
}

export default SideMenu