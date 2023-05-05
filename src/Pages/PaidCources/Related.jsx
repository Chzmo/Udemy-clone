import React from 'react'
import { BsHeart } from 'react-icons/bs';
import { MdGroup, MdStarRate } from 'react-icons/md';
const data = [  "Complete Python Bootcamp: From Zero to Hero in Python 3",  "The Complete Web Developer Course 2.0",  "React - The Complete Guide (incl Hooks, React Router, Redux)",  "Machine Learning A-Z™: Hands-On Python & R In Data Science",  "AWS Certified Solutions Architect - Associate 2022",  "The Complete Digital Marketing Course - 12 Courses in 1",  "The Complete Financial Analyst Course 2022",  "JavaScript: Understanding the Weird Parts",  "Ultimate Google Ads Training 2022: Profit with Pay Per Click",  "iOS 15 & Swift 5 - The Complete iOS App Development Course"]

function Related() {
    return (
        <>
            <h2 className="bold font-bold text-2xl">Students also bought</h2>
            <div className="flex flex-col gap-4 w-full">
                {data.map((title, index)=>{
                    return (
                        <div key={`related-${index}`} className="flex gap-2 w-full">
                            <div className="h-16 w-16 bg-slate-300">
                                <img className='h-full w-full object-cover' src="" alt="related" />
                            </div>
                            <div className="flex-1 flex flex-wrap justify-between w-full sm:flex-row sm:flex-nowrap">
                                <div className="flex flex-col gap-2 w-full">
                                    <h2 className='font-bold text-lg max-w-[19rem]'>{title}</h2>
                                    <small className="flex gap-3 items-center">
                                        <span className='text-green-900 font-semibold'>12 total hours</span>
                                        <span className=''>Updated 1/2023</span>
                                    </small>
                                </div>
                                <div className="flex items-center flex-wrap sm:flex-nowrap sm:items-start md:justify-between md:gap-6">
                                    <div className='flex items-center text-[#bb7725]'><p>4.4</p> <p><MdStarRate color='#e69a1d'/></p></div> 
                                    <div className='flex items-center gap-1'><MdGroup size={20}/> <span>3,455</span></div> 
                                    <div className="font-bold">{`$64.99`}</div>
                                    <button className='rounded-full border border-slate-600 p-3 hidden md:flex'><BsHeart size={20}/></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Related