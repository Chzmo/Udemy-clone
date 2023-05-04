import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";

function AccordionItem({defaultOpen, title}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
  
    return (
        <div>
            <div  
                onClick={() => setIsOpen(!isOpen)} 
                className='flex justify-between p-4 w-full border-t bg-zinc-100 hover:cursor-pointer'
            >
                <div className="flex gap-4 items-center ">
                    <div>{isOpen ? <BiChevronUp size={20}/> : <BiChevronDown size={20}/>}</div>
                    <p className='font-bold'> {title}</p>
                </div>
                <div className="flex items-center gap-2">
                    <p>12 Lessons</p>
                </div>
            </div>
            {isOpen && 
            <div className='flex flex-col gap-3 p-4 border-t'>
                {['AWS Account Activation Troubleshooting', 'Important Message', 'About your instructor'].map((intro)=>{
                    return (
                        <div key={intro} className="flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <MdOndemandVideo /> {intro}
                            </div>
                            <p>12 min</p>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    );
}

function CourseContent() {
  return (
    <>
        <h2 className="bold font-bold text-2xl">Course Content</h2>
        <div className="flex items-center justify-between">
            <small className="text-slate-600">23 sections • 273 lectures • 14h 36m total length</small>
            <small className="text-purple-600 font-bold hover:cursor-pointer">Collapse all sections</small>
        </div>
        <div className="flex flex-col border-x border-b">
            {[0,1,2,3,4,5,6,7].map((index)=>{
                return <AccordionItem key={index} title='Introduction'  defaultOpen={index === 0}/>
            })}
        </div>
    </>
  )
}

export default CourseContent