import React, { useEffect, useState } from 'react'

function Courses() {
  const [course, setCourse] = useState('python')

  useEffect(() => {
    console.log(course)
  }, [course])
  
  return (
    <div id='courses'>
      <h2 className="text-3xl font-bold">A broad selection of courses</h2>
      <p className='pt-4 text-lg'>Choose from 213,000 online video courses with new additions published every month</p>
      <div className="flex gap-3">
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black hover:text-slate-500'>Python</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black hover:text-slate-500'>Excel</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black hover:text-slate-500'>Web Development</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black hover:text-slate-500'>Javascript</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black hover:text-slate-500'>Data Science</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black hover:text-slate-500'>AWS Certification</p>
        <p onClick={(e) => setCourse(e.target.innerText)} className='font-bold text-lg text-black hover:text-slate-500'>Drawing</p>
      </div>
    </div>
  )
}

export default Courses