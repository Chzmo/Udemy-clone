import { Link } from 'react-router-dom'

const featuredData = [
  {'title':'Develoment', 'courses':[
    {'course':'Python', 'studentsNum':'234,945,43'}, 
    {'course':'Web Development', 'studentsNum':'234,543'}, 
    {'course':'Machine Learning', 'studentsNum':'234,543'}
  ]},
  {'title':'Business', 'courses':[
    {'course':'Finacial Analysis', 'studentsNum':'234,945,43'},
    {'course':'SQL', 'studentsNum':'234,945,43'},
    {'course':'PMP', 'studentsNum':'234,543'}
  ]},
  {'title':'IT and Software', 'courses':[
    {'course':'AWS Certification', 'studentsNum':'334,965,43'}, 
    {'course':'Ethical Hacking', 'studentsNum':'734,935,43'}, 
    {'course':'Cyber Security', 'studentsNum':'834,543'}
  ]},
  {'title':'Design', 'courses':[
    {'course':'Photoshop', 'studentsNum':'234,945,43'},
    {'course':'Graphic Design', 'studentsNum':'23494543'},
    {'course':'Drawing', 'studentsNum':'234543'}
  ]}
]
function Featured() {
  return (
    <div id='featured' className='p-7 bg-slate-100'>
      <h2 className='font-bold text-xl pt-6'>Featured topics by category</h2>
      <div className='mt-7 grid grid-cols-2 gap-12 md:grid-cols-4'>
        {featuredData && featuredData.map((item, index) => {
          return(
            <div key={index} className='flex flex-col gap-4'>
              <h2 className="font-bold text-lg">{item.title}</h2>
              {item.courses.map((course)=>{
                return (
                  <div key={course.course}>
                    <Link className='text-purple-700 font-semibold'>{course.course}</Link>
                    <p className='text-slate-700 mt-1'>{course.studentsNum} students</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="mt-7">
        <Link className='border border-black py-2 font-bold text-sm px-4'>Explore more topics</Link>
      </div>
    </div>
  )
}

export default Featured