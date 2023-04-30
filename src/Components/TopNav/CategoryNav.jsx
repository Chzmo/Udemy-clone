import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function CategoryNav({
    isCatergoryNavOpen, setIsCatergoryNavOpen, isLoadingTopics, globalState, courses, topics
}) {
  return (
    <>
        <div 
            className={`h-screen absolute border border-slate-300 min-w-64 top-12 z-10 bg-white -left-8 ${isCatergoryNavOpen ? 'flex' : 'hidden' } flex ${!globalState?.categories && 'hidden'}`}
            onMouseEnter={() => {setIsCatergoryNavOpen(true)}}
            onMouseLeave={() => {setIsCatergoryNavOpen(false)}}
        >
            <div className="h-screen w-64 flex flex-col hover:text-black py-4 gap-4">
                {globalState?.categories && 
                    globalState?.categories?.map((category, index)=>{
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
    </>
  )
}

export default CategoryNav