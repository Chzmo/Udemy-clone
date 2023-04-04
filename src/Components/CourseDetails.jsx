import React, { useState } from 'react'
import { CiStar } from 'react-icons/ci';
import { BiCheck } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css'


const randomImage1 = "https://source.unsplash.com/600x499/?learing"
const randomImage2 = "https://source.unsplash.com/601x500/?learing"
const randomImage3 = "https://source.unsplash.com/600x501/?learing"
const randomImage4 = "https://source.unsplash.com/600x502/?learing"
const randomImage5 = "https://source.unsplash.com/600x498/?learing"

function CourseDetails() {

    const [isOpen, setIsOpen] = useState(false)

    const Stars = (props) =>{
        let stars = [];
    
        for (let i = 0; i < parseInt(props.stars); i++){
            stars.push(< CiStar key={i}/>);
        }
        
        return(
            <div className="flex items-center text-slate-500">
                {stars}
            </div>
        );
    }

    return (
        <>
            <div 
                data-tooltip-id="my-tooltip" 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <div className="h-40 w-72">
                <img 
                    src={randomImage1} 
                    alt={`course`} 
                    className='h-40 w-72 bg-slate-100 object-cover'
                />
                </div>
                <h2 className='w-64 font-bold text-xl'>The Complete Bootcamp From Zero To Hero..</h2>
                <p>Jose Name</p>
                <div className="flex gap-2"><h2>4.6</h2><Stars stars={5}/><p>(12,004)</p></div>
                <p>$182.99</p>
            </div>
            <Tooltip 
                id="my-tooltip" 
                place="right"
                className='
                hidden
                md:flex
                p-5 bg-white border border-slate-300
                absolute z-10 -left-4
                '
                isOpen={isOpen}
                >
                <div 
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className='flex flex-col gap-1'
                >
                    <h2 className='w-72 font-bold text-lg text-slate-600'>Automate the boring stuff with Python Programming</h2>
                    <small className='text-xsm text-emerald-700'>Updated <span className='font-bold'>February 2023</span></small>
                    <small className='text-xsm text-slate-600'>42.5 total hours All Levels Subtitles</small>
                    <p className='text-md w-72'>
                        Learn to create Machine Learning Algorithms in Python and R 
                    </p>
                    <div className="div flex w-72">
                        <BiCheck size={24} className='w-9'/>
                        <p className="text-md w-60">
                            You will master the Python  language by building 100 unique projects over 100 days
                        </p>
                    </div>
                    <div className="div flex w-72">
                        <BiCheck size={24} className='w-9'/>
                        <p className="text-md w-60">
                            You will master the programming language by 
                        </p>
                    </div>
                    <div className="div flex w-72">
                        <BiCheck size={24} className='w-9'/>
                        <p className="text-md w-60">
                            You will master the Python programming 
                        </p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <button className='py-3 border border-slate-300 px-16 bg-purple-700 text-white font-bold'>Add to cart</button>
                        <button className='rounded-full border border-slate-600 p-4'><BsHeart /></button>
                    </div>
                </div>
            </Tooltip>
        </>
    )
}

export default CourseDetails