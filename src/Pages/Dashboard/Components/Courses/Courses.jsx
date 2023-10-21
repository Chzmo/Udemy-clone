import { useEffect, useState } from 'react'

function Courses() {
    const [createCourse, setCreateCourse] = useState(false)

    useEffect(() => {
        setCreateCourse(false);
    }, [])
    
    return (
        <>
            {createCourse ? (
                <>
                    <form action="" className="flex flex-col w-full mt-9 text-[#6b7280] font-normal">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="title" className='flex items-center gap-1'>
                                <span>Title</span><span className='text-red-600'>*</span>
                            </label>
                            <input type="text" name='title' className='border-2 border-[#6b7280] border-solid outline-none bg-transparent px-4 py-2 hover:border-[#5624d0] focus:border-[#5624d0]'/>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="title" className='flex items-center gap-1'>
                                <span>Title</span><span className='text-red-600'>*</span>
                            </label>
                            <input type="text" name='title' className='border-2 border-[#6b7280] border-solid outline-none bg-transparent px-4 py-2 hover:border-[#5624d0] focus:border-[#5624d0]'/>
                        </div>
                    </form>
                </>
            ):(
                <div className='w-full flex justify-end mt-9'>
                    <button onClick={() => {setCreateCourse(true)}} className='border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0]'>
                        CREATE COURSE
                    </button>
                </div>
            )}
        </>
    )
}

export default Courses