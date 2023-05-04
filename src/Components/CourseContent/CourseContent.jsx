import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function AccordionItem({defaultOpen, title}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
  
    return (
        <div>
            <div  onClick={() => setIsOpen(!isOpen)} className='flex justify-between p-4 w-full border-t bg-zinc-100'>
                <div className="flex gap-4 items-center ">
                    <div>{isOpen ? <BiChevronUp size={20}/> : <BiChevronDown size={20}/>}</div>
                    <p className='font-bold'> {title}</p>
                </div>
                <div className="flex items-center gap-2">
                    <p>12 Lessons</p>
                </div>
            </div>
            {isOpen && 
            <div className='flex gap-3 p-4 border-t'>
                
            </div>
            }
        </div>
    );
}

function CourseContent() {
  return (
    <>
        <div className="flex flex-col border-x border-b">
            {[0,1,2,3,4,5,6,7].map((index)=>{
                return <AccordionItem key={index} title='Kingman'  defaultOpen={index === 0}/>
            })}
        </div>
    </>
  )
}

export default CourseContent