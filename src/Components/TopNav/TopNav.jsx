import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo/logo-udemy.svg'
import SideNav from '../SideNav/SideNav'
import SearchInput from '../../Pages/Search/SearchInput'


function TopNav({globalState}) {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const [isSeachInputOpen, setIsSeachInputOpen] = useState(false)
    const [courses, setCourses] = useState(null)
    const [isLoadingTopics, setIsLoadingTopics] = useState(null)
    const [topics, setTopics] = useState(null)
    const [isCatergoryNavOpen, setIsCatergoryNavOpen] = useState(false)
    
    const [searchTearm, setSearchTearm] = useState('')
    const navigate = useNavigate()

    const handleSideNav = useCallback(()=>{
        if (isSideNavOpen){
            return document.body.style.display = 'none'
        }
        document.body.style.overflow = 'unset'
    }, [])

    const handleSearchSubmit = (e) =>{
        e.preventDefault()
        if(searchTearm) navigate('/search/' + searchTearm);
    }
    console.log(globalState.categories)
    return (
        <>
            <SideNav 
                isSideNavOpen={isSideNavOpen}
                setIsSideNavOpen={setIsSideNavOpen}
                handleSideNav={handleSideNav}
            />

            <SearchInput 
                isSeachInputOpen={isSeachInputOpen}
                setIsSeachInputOpen={setIsSeachInputOpen}
            />

            <div 
                className="w-full bg-white flex py-3 px-6 gap-5 items-center justify-between shadow-lg z-30"
            >
                <div 
                    className='sm:hidden'
                    onClick={() => {setIsSideNavOpen(true); handleSideNav()}}
                >
                    <RxHamburgerMenu />
                </div>
                <Link to={`/`}>
                    <img className='h-6 sm:h-9' 
                        src={logo} alt="logo" 
                    />
                </Link>
                <div 
                    className='hidden sm:flex relative'
                    onMouseEnter={() => {setIsCatergoryNavOpen(true)}}
                >
                    <p 
                        className='hover:text-purple-800 hover:cursor-pointer h-full'
                        
                    >
                        Categories
                    </p>
                    <div 
                        className={`h-screen absolute border border-slate-300 min-w-64 top-12 z-10 bg-white -left-8 ${isCatergoryNavOpen? 'flex' : 'hidden' } flex ${!globalState.categories && 'hidden'}`}
                        onMouseEnter={() => {setIsCatergoryNavOpen(true)}}
                        onMouseLeave={() => {setIsCatergoryNavOpen(false)}}
                    >
                        <div className="h-screen w-64 flex flex-col hover:text-black py-4 gap-4">
                            {globalState.categories && 
                                globalState.categories?.map((category, index)=>{
                                    return (
                                        <Link 
                                            key={index} 
                                            className="px-3 hover:text-purple-800 flex items-center justify-between w-full"
                                            onMouseEnter={() => setCourses(category.course)}
                                        >
                                            <p>{category?.title}</p> <BiChevronRight/>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className={`h-screen w-64 border-l flex flex-col  top-0 py-4 gap-4 ${!courses && 'hidden'}`}>
                            {courses && 
                                courses?.map((course, index)=>{
                                    return (
                                        <Link key={index} className="px-3 hover:text-purple-800 flex items-center justify-between w-full">
                                            <p>{course?.name}</p> <BiChevronRight/>
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        <div className={`h-screen px-3 w-64 border-l flex flex-col gap-4 top-0 py-4 ${!topics && 'hidden'}`}>
                            <h2 className='font-semibold text-sm text-slate-600 '>Popular topics</h2>
                            {isLoadingTopics ? 
                                <>
                                    {[1,2,3,4,5,6,7].map(index => {
                                        return (
                                            <div key={index} className="animate-pulse w-full h-5 bg-slate-200"></div>
                                        )
                                    })}
                                </>
                                :
                                <>
                                    {[1,2,3,4,5,6,7,8].map(index => {
                                        return (
                                            <div className="hover:text-purple-800 flex items-center justify-between w-full"></div>
                                        )
                                    })}
                                </>
                            }
                        </div>
                    </div>
                </div>
                <label 
                    htmlFor="search"
                    className='
                        hidden sm:flex
                        flex-1 
                        gap-3 
                        items-center 
                        rounded-full 
                        border 
                        border-slate-700 
                        py-2 px-4
                        bg-slate-100' 
                >
                    < AiOutlineSearch />
                    <form 
                        onSubmit={handleSearchSubmit}
                        className='w-full'
                    >
                        <input 
                        
                            type="text" 
                            name='search' 
                            placeholder='Seach for anything'
                            className=' flex-1 border-none outline-none w-full bg-transparent text-sm'
                            value={searchTearm}
                            onChange={e => setSearchTearm(e.target.value)}
                        />
                    </form>
                </label>
                <Link className='hidden md:flex'>Udemy Business</Link>
                <Link className='hidden lg:flex'> Teach on Udemy</Link>
                <MdOutlineShoppingCart size={23} className='hidden font-semibold sm:flex'/>
                <div className="gap-2 items-center hidden sm:flex">
                    <Link className='border border-black py-1.5 font-semibold px-4'>Log In</Link>
                    <Link className='border border-black py-1.5 px-4 bg-black font-semibold text-white'>Sign Up</Link>
                    <button className='border border-black p-2.5'><AiOutlineGlobal /></button>
                </div>
                <div className="flex items-center gap-2 sm:hidden">
                    <AiOutlineSearch 
                        size={20}
                        onClick={() => {setIsSeachInputOpen(true);}}
                    />
                    <div className="flex items-center">
                        <MdOutlineShoppingCart size={23} className='font-semibold'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav