import { useState } from "react"
import { BiCheck } from "react-icons/bi"
import Requirements from "../../Components/Requirements/Requirements"
import Instructor from "../PaidCources/Instructor"
import Description from "../../Components/Description/Description"
import CourseContent from "../../Components/CourseContent/CourseContent"

function FreeContent() {
    const [openIndex, setopenInd] = useState(0)
    return (
        <>
            <div className="w-full gap-4 flex overflow-x-scroll xsm:overflow-x-hidden mt-5 border-b">
                {["What you'll learn","Course Content","Reviews","Instructors"].map((item, index)=>{
                    return(
                        <h1 
                            key={index}
                            onClick={()=>setopenInd(index)}
                            className={`hover:text-black hover:cursor-pointer tex font-bold py-4 ${(openIndex === index) ? 
                                'text-black border-b-2 border-black': 
                                'text-slate-500 '}`}
                        >{item}</h1>
                    )
                })}
            </div>
            <div className="mt-2 w-full">
                {(openIndex === 0) && 
                    <div className="flex flex-col justify-start gap-2 sm:grid sm:grid-cols-1 sm:gap-4 px-5">
                    {[1,2,3,4,5].map((index)=>{
                        return(
                            <div key={index} className='flex gap-4 items-start'>
                                <BiCheck size={20} className='w-9'/>
                                <p>Master the entire modern back-end stack: Node, Express, MongoDB and Mongoose (MongoDB JS driver)</p>
                            </div>
                        )
                    })}
                </div>
                }
                {(openIndex === 1) && 
                    <div className="flex flex-col gap-4">
                        <Requirements />
                        <Description />
                        <CourseContent />
                    </div>
                }
                {(openIndex === 3) && <Instructor />}
            </div>
        </>
    )
}

export default FreeContent