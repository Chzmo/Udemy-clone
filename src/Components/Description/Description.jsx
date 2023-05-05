import { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

function Description() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <h2 className="bold font-bold text-2xl">Description</h2>
            <div className="space-y-2">
                <div className={`w-full shadow-inner ${!isOpen && 'h-60'}`}>
                    Hello World
                </div>
                <p className=' flex gap-2 items-center' onClick={ ()=> setIsOpen(!isOpen)}>
                    <span className='font-bold text-purple-700 cursor-pointer'>Show more</span>
                    <span>{!isOpen ? <BiChevronUp size={20}/> : <BiChevronDown size={20}/>}</span>
                </p>
            </div>
        </>
    )
}

export default Description