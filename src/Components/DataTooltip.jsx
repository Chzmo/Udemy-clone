import React from 'react'
import { BiCheck } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';

function DataTooltip({isOpen, setIsOpen, tooltipData}) {
  
  return (
    <Tooltip 
        id={`my-tooltip`}
        place={"right"}
        className='
            hidden
            md:flex
            p-5 bg-white border border-slate-300
            absolute z-10
        '
        classNameArrow='hello'
        isOpen={isOpen}
    >
        <div 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(!isOpen)}
            className='flex flex-col gap-1'
        >
          {tooltipData && (
            <>
              <h2 className='w-72 font-bold text-lg text-slate-600'>{tooltipData[0]?.heading}</h2>
              <small className='text-xsm text-emerald-700'>Updated <span className='font-bold'>{tooltipData[1]?.updatedAt}</span></small>
              <small className='text-xsm text-slate-600'>{tooltipData[2]?.level}</small>
              {console.log(tooltipData)}
              <p className='text-md w-72'>
                {tooltipData[3]?.subHeading}
              </p>

              {tooltipData[4]?.objectives?.map((objective, index) => {
                return (
                  <div key={index} className="div flex w-72">
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