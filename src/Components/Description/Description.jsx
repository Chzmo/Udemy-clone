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