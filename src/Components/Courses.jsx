import React, { useEffect, useState } from 'react'

function Courses() {
  const [course, setCourse] = useState('Python')

  useEffect(() => {
    console.log(course)
  }, [course])
  
  return (
    <div id='courses' className='py-12 px-7'>
      <h2 className="text-3xl font-bold">A broad selection of courses</h2>
      <p className='pt-4 text-lg'>Choose from 213,000 online video courses with new additions published every month</p>
      <div className="flex gap-3 mt-3">
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black '>Python</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500'>Excel</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500'>Web Development</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500'>Javascript</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500'>Data Science</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500'>AWS Certification</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg hover:text-black text-slate-500'>Drawing</p>
      </div>
      <div className="border border-slate-500 mt-3 p-7 ">
        <h2 className="text-2xl font-bold">Expand your career opportunities with {course}</h2>
        <p className='pt-4 text-lg'>
          Take one of Udemy’s range of Python courses and learn how to code using this 
          incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, 
          Django, data science, and machine learning. You’ll learn how to build everything from games to 
          sites to apps. Choose from a range of courses that will appeal to
        </p>
      </div>
    </div>
  )
}

export default Courses