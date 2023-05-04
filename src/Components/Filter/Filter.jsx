import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

function AccordionItem(props) {
    const [isOpen, setIsOpen] = useState(props.defaultOpen);
  
    return (
        <div>
            <div  onClick={() => setIsOpen(!isOpen)} className='flex justify-between'>
                <p className='font-bold'> {props.title}</p>
                <div>{isOpen ? <BiChevronUp size={15}/> : <BiChevronDown size={15}/>}</div>
            </div>
            {isOpen && 
            <div className='flex gap-3 mt-7 overflow-x-scroll overflow-y-hidden'>
                
            </div>
            }
        </div>
    );
}

function Filter() {
    const sample = [
      {'title': 'Python', 'content':'testing1'},
      {'title': 'Web', 'content':'testing2'},
      {'title': 'Hello', 'content':'testing3'},
    ]
  
    return (
        <>
            <div id='courses' className='px-1 h-full w-full'>
                <hr className='mt-3 mb-2'/>
                {sample?.map((item, index) => (
                <>
                    <AccordionItem 
                        key={item.title} 
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

export default Filter