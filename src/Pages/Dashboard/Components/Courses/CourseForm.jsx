import React from 'react'

function CourseForm(props) {
    const { formInputs, handleFormSubmit, handleChange, categories, setCreateCourse} = props;
    return (
        <form onSubmit={ handleFormSubmit } className="flex flex-col gap-3 w-full mt-9 text-[#6b7280] font-normal">
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="title" className='flex items-center gap-1'>
                    <span>Title</span><span className='text-red-600'>*</span>
                </label>
                <input type="text" name='title' value={formInputs.title} onChange={handleChange} className='border-2 border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0]' required/>
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="description" className='flex items-center gap-1'>
                    <span>Description</span><span className='text-red-600'>*</span>
                </label>
                <textarea name='description' value={formInputs.description} onChange={handleChange} className='border-2 border-[#6b7280] border-solid outline-none bg-transparent py-3 px-2 hover:border-[#5624d0] focus:border-[#5624d0] min-h-[100px]' required>
                </textarea>
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="thumbnail" className='flex items-center gap-1'>
                    <span>Url thumbnail</span><span className='text-red-600'>*</span>
                </label>
                <input type="url" name='thumbnail' value={formInputs.thumbnail} onChange={handleChange} pattern="https?://.+" className='border-2 border-[#6b7280] border-solid outline-none bg-transparent focus:bg-[#1b1f23] p-2 hover:border-[#5624d0] focus:border-[#5624d0]' required
                />
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="price" className='flex items-center gap-1'>
                    <span>Price</span>
                </label>
                <input type="number" min={0} name='price' value={formInputs.price} onChange={handleChange} className='border-2 border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0]'
                />
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="categoryId" className='flex items-center gap-1'>
                    <span>Course category</span><span className='text-red-600'>*</span>
                </label>
                <select required name='categoryId' value={formInputs.categoryId} onChange={handleChange} className='border-2 border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0]' >
                    <option key={'rnkdmi290snfjs'} className='bg-[#1b1f23] text-[#6b7280] ' value="" >Select a category</option>
                    {categories &&
                        categories?.map((category) => (
                            <option key={category.id} className='bg-[#1b1f23] text-[#6b7280] border-solid border-[#6b7280] hover:bg-[#5624d0] hover:text-[#1b1f23] mt-2' value={category?.id}>
                                {category.title} 
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="flex gap-3">
                <input type="submit" value={'CREATE'} className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 hover:text-[#5624d0] bg-[#5624d0] hover:bg-transparent text-[#1b1f23]'/>
                <input type="button" value={'CANCEL'} onClick={()=>{setCreateCourse(false)}} className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'/>
            </div>
        </form>
    )
}

export default CourseForm