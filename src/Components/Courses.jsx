import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import CourseDetails from './CourseDetails'


function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(props.defaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div 
        onClick={handleToggle}
        className='flex justify-between'
      >
       <p className='font-bold'> {props.title}</p>
       <div>{isOpen ? <BiChevronUp size={15}/> : <BiChevronDown size={15}/>}</div>
      </div>
      {/* {isOpen && <div>{props.content}</div>} */}
      {isOpen && 
        <div className='flex gap-3 h-full mt-7 overflow-x-scroll overflow-y-hidden'>
          <CourseDetails />
          <CourseDetails />
          <CourseDetails />
        </div>
      }
    </div>
  );
}

function Courses(props) {
  const [course, setCourse] = useState('Python')
  const data =  [
    { 
        title: 'Drawing', 
        content: (
            <>
                <p>
                    My process is simple and effective. It starts with an intro/discovery call 
                    with the client and then I create some low fidelity mockups for the design with the help of the client. 
                    Then, I do some research about the competitors and gather some ideas about the style for the website.
                </p> 

                <p>
                    Once everything is in place then I start working on the design. The first thing that I do while starting
                    the design is to create a styleguide so all the designs that I will create stay in the same pattern and 
                    follow the symmetry.
                </p> 
                
                <p>
                    Once styleguide is created then I start working on the actual design and create the first draft and submit 
                    it to the client for approval. If everything looks good to the client, then I start working on the remaining 
                    pages using the styleguide I had created and once all the pages are completed, I submit them to the client 
                    for review.
                </p>
            </>
        ) 
    },

    { 
        title: 'Data Science', 
        content: (
            <>
                <p>
                    I use figma for designing and share the view access with clients so they can view the real time progress
                    and leave feedback easily. I can also use Adobe XD or Photoshop when needed.
                </p> 
            </>
        ) 
    },

    { 
        title: 'Excel',
        content: (
            <>
                <p>Email, Zoom, Whatsapp, and Telegram</p>
            </>
        ) 
    },

    { 
        title: 'Python', 
        content: (
            <>
                <p>I would love to connect with you on all common social media platforms 
                    and while we are waiting for the meeting to start, I think its a good 
                    time to connect with me on following social media platforms:
                </p>
                
                <ul>
                    <li>Twitter: https://twitter.com</li>
                    <li>Linkedin: https://www.linkedin.com/in/</li>
                    <li>Facebook: https://instagram.com</li>
                </ul>
            </>
        ) 
    },
  ]

  const sample = [
    {'title': 'Python', 'content':'testing1'},
    {'title': 'Web', 'content':'testing2'},
    {'title': 'Hello', 'content':'testing3'},
  ]

  useEffect(() => {
    // console.log(course)
  }, [course])
  
  return (
    <>
      <div id='courses' className='py-12 px-7 hidden md:flex md:flex-col'>
        <h2 className="text-3xl font-bold " >A broad selection of courses</h2>
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
        <div className="border border-slate-500 mt-3 p-7">
          <h2 className="hidden md:flex text-2xl font-bold">Expand your career opportunities with {course}</h2>
          <p className='hidden md:flex py-4 text-lg max-w-screen-lg'>
            Take one of Udemy’s range of Python courses and learn how to code using this 
            incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, 
            Django, data science, and machine learning. You’ll learn how to build everything from games to 
            sites to apps. Choose from a range of courses that will appeal to
          </p>
          <Link className='hidden md:inline-block border border-black py-2 px-4 font-bold'>Explore {course}</Link>
          <div className="flex gap-5 mt-7">
            <CourseDetails />
          </div>
        </div>
      </div>
      <div id='courses' className='py-3 px-7 md:hidden'>
        <h2 className="text-2xl font-bold " >A broad selection of courses</h2>
        <hr className='mt-3 mb-2'/>
        {sample?.map((item, index) => (
          <>
            <AccordionItem 
              key={index} 
              title={item.title} 
              content={item.content}
              defaultOpen={index === 0}
            />
            <hr className='my-3'/>
          </>
        ))}
      </div>
    </>
  )
}

export default Courses