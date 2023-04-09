import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function SearchInput({isSeachInputOpen, seIsSeachInputOpen}) {

    const [searchTearm, setSearchTearm] = useState('')
    const navigate = useNavigate()

    const handleSearchSubmit = (e) =>{
        e.preventDefault()
        seIsSeachInputOpen(false)
        if(searchTearm) navigate('/search/' + searchTearm);
    }

    return (
        <div
            className={`
                ${isSeachInputOpen? '': 'hidden'}
                static fixed h-screen z-20 bg-white w-screen
            `}
        >
            <div className="border border-bottom-slate-600 px-4 flex items-center">
                <label 
                    htmlFor="search"
                    className='
                        flex-1 
                        flex 
                        gap-3 
                        items-center 
                        py-2 px-4
                    ' 
                >
                    < AiOutlineSearch 
                        onClick={()=> {handleSearchSubmit; seIsSeachInputOpen(false)}}
                    />
                    <form 
                        onSubmit={handleSearchSubmit}
                        className='w-full'
                    >
                        <input 
                            required
                            type="text" 
                            name='search' 
                            placeholder='Seach for anything'
                            className=' flex-1 border-none outline-none w-full bg-transparent text-sm'
                            value={searchTearm}
                            onChange={e => setSearchTearm(e.target.value)}
                        />
                    </form>
                </label>
                <div 
                    className={`flex items-center justify-center`
                    }
                    onClick={() => {seIsSeachInputOpen(false);} }
                >
                    <RiCloseFill size={20}/>
                </div>
            </div>
        </div>
    )
}

export default SearchInput