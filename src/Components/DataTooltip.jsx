import React from 'react'
import { BiCheck } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';

function DataTooltip({tooltipID, place, isOpen, setIsOpen, data}) {
  return (
    <Tooltip 
        id={tooltipID}
        place={place || "right"}
        className='
            hidden
            md:flex
            p-5 bg-white border border-slate-300
            absolute z-10
        '
        isOpen={isOpen}
    >
        <div 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className='flex flex-col gap-1'
        >
          {data && (
            <>
              <h2 className='w-72 font-bold text-lg text-slate-600'>Automate the boring stuff with Python Programming</h2>
              <small className='text-xsm text-emerald-700'>Updated <span className='font-bold'>February 2023</span></small>
              <small className='text-xsm text-slate-600'>42.5 total hours All Levels Subtitles</small>
              <p className='text-md w-72'>
                  Learn to create Machine Learning Algorithms in Python and R 
              </p>

              {data?.objectives.map((objective) => {
                return (
                    <div className="div flex w-72">
                      <BiCheck size={24} className='w-9'/>
                      <p className="text-md w-60">{objective?.name}</p>
                    </div>
                )
              })}
            </>
          )}
          
          <div className="flex gap-2 mt-2">
              <button className='py-3 border border-slate-300 px-16 bg-purple-700 text-white font-bold'>Add to cart</button>
              <button className='rounded-full border border-slate-600 p-4'><BsHeart /></button>
          </div>
        </div>
    </Tooltip>
  )
}

export default DataTooltip