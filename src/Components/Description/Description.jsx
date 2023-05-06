import { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

function Description() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <h2 className="bold font-bold text-2xl">Description</h2>
            <div className="space-y-2">
                <div className={`w-full space-y-2 ${!isOpen && 'h-[242px] overflow-hidden'}`}>
                    <p>Do you want to build fast and powerful back-end applications with JavaScript? Would you like to become a more complete and in-demand developer?</p>
                    <p>Then Node.js is the hot technology for you to learn right now, and you came to the right place to do it!</p>
                    <p>Welcome to the Complete Node.js, Express, and MongoDB Bootcamp, your fast track to modern back-end development.</p>
                    <p><strong>This course is the perfect all-in-one package that will take you from a complete beginner to an advanced, highly-skilled Node.js developer.</strong></p>
                    <p>Like all my other courses, this one is completely project-based! And not just any project: it's a complete, beautiful, and feature-rich application, containing 
                        both a RESTful API and a server-side rendered website. It's the most fantastic and complete project that you will 
                        find in any Node.js course on the internet!
                    </p>
                </div>
                <p className=' flex gap-1 items-center' onClick={ ()=> setIsOpen(!isOpen)}>
                    <small className='font-bold text-purple-700 cursor-pointer'>
                        {isOpen ? 'Show less' : 'Show more'}
                    </small>
                    {isOpen ? <BiChevronUp size={20}/> : <BiChevronDown size={20}/>}
                </p>
            </div>
        </>
    )
}

export default Description