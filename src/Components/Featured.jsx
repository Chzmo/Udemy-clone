import React from 'react'
import { Link } from 'react-router-dom'

const featuredData = [
  {'title':'Develoment', 'courses':[
    {'course':'Python', 'studentsNum':'23494543'}, 
    {'course':'Web Development', 'studentsNum':'234543'}, 
    {'course':'Machine Learning', 'studentsNum':'234543'}
  ]},
  {'title':'Business', 'courses':[
    {'course':'Finacial Analysis', 'studentsNum':'23494543'},
    {'course':'SQL', 'studentsNum':'23494543'},
    {'course':'PMP', 'studentsNum':'234543'}
  ]},
  {'title':'IT and Software', 'courses':[
    {'course':'AWS Certification', 'studentsNum':'23494543'}, 
    {'course':'Ethical Hacking', 'studentsNum':'23494543'}, 
    {'course':'Cyber Security', 'studentsNum':'234543'}
  ]},
  {'title':'Design', 'courses':[
    {'course':'Photoshop', 'studentsNum':'23494543'},
    {'course':'Graphic Design', 'studentsNum':'23494543'},
    {'course':'Drawing', 'studentsNum':'234543'}
  ]}
]
function Featured() {
  return (
    <div id='featured' className='p-7 bg-slate-100 relative'>
      <h2 className='font-bold text-xl pt-6'>Featured topics by category</h2>
      <div className='mt-7 columns-4 hover:cursor-pointer'>
        {featuredData && featuredData.map((item, index) => {
          return(
            <div key={index} className='flex flex-col gap-4'>
              <h2 className="font-bold mb-6 text-lg">{item.title}</h2>
              {item.courses.map((course)=>{
                return (
                  <div>
                    <Link>{course.course}</Link>
                    <p>{course.studentsNum}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Featured