import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiStar } from 'react-icons/ci'

const randomImage2 = "https://source.unsplash.com/600x500/?learing"

function Courses() {
  const [course, setCourse] = useState('Python')

  useEffect(() => {
    console.log(course)
  }, [course])

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
    <div id='courses' className='py-12 px-7'>
      <h2 className="text-3xl font-bold">A broad selection of courses</h2>
      <p className='pt-4 text-lg'>Choose from 213,000 online video courses with new additions published every month</p>
      <div className="flex gap-3 mt-3">
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black '>Python</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500 cursor-pointer'>Excel</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500 cursor-pointer'>Web Development</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500 cursor-pointer'>Javascript</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500 cursor-pointer'>Data Science</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500 cursor-pointer'>AWS Certification</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500 cursor-pointer'>Drawing</p>
      </div>
      <div className="border border-slate-500 mt-3 p-7 ">
        <h2 className="text-2xl font-bold">Expand your career opportunities with {course}</h2>
        <p className='py-4 text-lg max-w-screen-lg'>
          Take one of Udemy’s range of Python courses and learn how to code using this 
          incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, 
          Django, data science, and machine learning. You’ll learn how to build everything from games to 
          sites to apps. Choose from a range of courses that will appeal to
        </p>
        <Link className='border border-black py-2 px-4 font-bold'>Explore {course}</Link>
        <div className="flex gap-5 mt-7">
          <div>
            <img 
              src={randomImage2} 
              alt={course} 
              className='h-40 w-72'
            />
            <h2 className='w-64 font-bold text-xl'>The Complete Bootcamp From Zero To Hero..</h2>
            <p>Jose Name</p>
            <div className="flex gap-2"><h2>4.6</h2><Stars stars={4}/><p>(12,004)</p></div>
            <p>$182.99</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses