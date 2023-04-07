import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TbPointFilled } from 'react-icons/tb'
import { BsQuote } from 'react-icons/bs';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Spinner from '../Components/Spinner';

function Search() {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="min-h-[400px] pt-16">
        {(!isLoading && searchResults) && 
          <>
            <h2>849 results for {searchTerm}</h2>
          </>
        }

        { (!searchResults && !isLoading) &&
          <div className="flex flex-col px-7 gap-5">
            <div className="flex flex-col">
              <p className='text-[1.7rem] font-bold text-slate-800'>Sorry, we couldn't find any results for </p>
              <p className='text-[1.7rem] font-bold text-slate-800 flex items-center'>
                <FaQuoteLeft size={13} className='transform -scale-x-1 '/>
                {searchTerm}
                <FaQuoteRight size={13} className='transform -scale-x-1 '/>
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
        
      </div>
    </>
  )
}

export default Search