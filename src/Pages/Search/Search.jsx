import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TbPointFilled } from 'react-icons/tb'
import { BiChevronDown, BiFilter } from 'react-icons/bi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Spinner from '../../Components/Spinner';
import SearchCard from './SearchCard';
import Filter from '../../Components/Filter/Filter';

function Search() {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isRightNavOpen, setIsRightNavOpen] = useState(false)
  
  return (
    <>
      <div className=" sm:min-h-screen pt-12">

        { (!searchResults && !isLoading) &&
          <div className="flex flex-col px-7 gap-5">
            <div className="flex flex-col pb-4">
              <p className='text-[1.7rem] font-bold text-slate-800'>Sorry, we couldn't find any results for </p>
              <p className='text-[1.7rem] font-bold text-slate-800 flex items-center'>
                <FaQuoteLeft size={13} />
                {searchTerm}
                <FaQuoteRight size={13}/>
              </p>
            </div>

            <p className='text-[1.4rem] font-bold text-slate-800'>Try adjusting your search. Here are some ideas: </p>

            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <TbPointFilled size={12}/> Make sure all words are spelled correctly
              </div>
              <div className="flex gap-3 items-center">
                <TbPointFilled size={12}/> Try different search terms
              </div>
              <div className="flex gap-3 items-center">
                <TbPointFilled size={12}/> Try more general search terms
              </div>
            </div>
          </div>
        }

        {isLoading && <Spinner size={50}/>}
        
        {(!isLoading && searchResults) && 
          <>
            <div className="flex flex-col px-5">
              <p className=' flex items-center text-[2rem] font-bold text-slate-900 gap-3'>
                10, 000 result for 
              </p>
              <p className='flex items-center text-[2rem] font-bold text-slate-900'>
                <FaQuoteLeft size={13}/> {searchTerm} <FaQuoteRight size={13}/>
              </p>
              <div className="flex justify-between mt-5">
                <div className="flex gap-2 w-full sm:w-auto">

                  {/* Mobile View */}
                  <button 
                    className='flex p-3 border border-slate-800 gap-1 items-center font-bold sm:hidden hover:bg-slate-50'
                    onClick={()=>{setIsRightNavOpen(!isRightNavOpen)}}
                  >
                      <BiFilter size={24}/>
                      <span>Filter</span>
                  </button>

                  {/* Desktop View */}
                  <button 
                    className='p-3 border border-slate-800 gap-1 items-center font-bold hidden sm:flex hover:bg-slate-50'
                    onClick={()=>{setIsFilterOpen(!isFilterOpen);}}
                  >
                      <BiFilter size={24}/>
                      <span>Filter</span>
                  </button>

                  <button className='flex p-3 border border-slate-800 gap-4 items-center hover:bg-slate-50 w-full  sm:w-auto'>
                    <div className="flex flex-col items-start flex-1">
                      <small className='font-semibold text-slate-700 '>Sorted by</small>
                      <span>Most reviewd</span>
                    </div>
                    <BiChevronDown size={24}/>
                  </button>
                </div>
                <p className='hidden sm:flex font-bold text-slate-700 self-end text-[1.2rem]'>10,000 results</p>
              </div>
              <div 
                className={`flex py-7 transition duration-500 items-start ${isFilterOpen ?'gap-3':'gap-0'}`}
              >
                <div 
                  className={`hidden duration-500 w-2/5 md:1/4 ${isFilterOpen ? 'sm:flex' : 'sm:flex h-0 over w-0 overflow-hidden'}`}
                >
                  <Filter />
                </div>
                <div className="flex duration-500 flex-col gap-4 w-full">
                  <SearchCard />
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Search