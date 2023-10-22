import { useEffect, useState } from 'react'
import { fetchData, postData } from '../../../../Utils/Query';
import Spinner from '../Spinner/Spinner';

function Courses() {
    const id = '65324c693ef056bdd52e7a04';
    const tocken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzI0YzY5M2VmMDU2YmRkNTJlN2EwNCIsImlhdCI6MTY5NzkyNzYwOSwiZXhwIjoxNjk4MDE0MDA5fQ.PwhCrg0SS5iux1GPdqb3POoWpCKLGp400ERg6XXmeOU​'
    const [createCourse, setCreateCourse] = useState(false);
    const [formInputs, setformInputs] = useState({ title: '', description: '', price: 0, category_id: '', });
    const [topCategories, setTopCategories] = useState(null);
    const [categories, setCategories] = useState(null);
    const [errors, setErrors] = useState({ validationError: null });
    const [loadingStates, setLoadingStates] = useState({ topCategories: true });

    const handleChange = (e) => {
        setformInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }

     const  handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formInputs.title === '' || formInputs.description === '' || formInputs.category_id === '') {
            alert('validate');
            return;
        }
        
        try {
            const courseDetails = await postData('', formInputs, tocken, id).json();
            console.log(courseDetails);
        } catch (error) {
            console.log(error)
        }
    }

    async function getData() {
        try {
            const data = await fetchData('/api/topcategories');
            setTopCategories(data);
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getData()
            .then(() => {
                setLoadingStates({ ...loadingStates, topCategories: false })
                
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        const data = topCategories?.reduce((acc, item) => {
            if (item.category.length > 0) {
                acc.push(...item.category);
            }
            return acc;
        }, []);
        setCategories(data);
        console.log(data) 
    }, [topCategories])
    
    useEffect(() => {
        setCreateCourse(false);
    }, [])
    
    return (
        <>
            {loadingStates.topCategories && (
                <div className="flex min-h-[500px] w-full justify-center items-start">
                    <Spinner />
                </div>
            )}
            {(createCourse && !loadingStates.topCategories) ? (
                <>
                    <form onSubmit={ handleFormSubmit } className="flex flex-col gap-3 w-full mt-9 text-[#6b7280] font-normal">
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="title" className='flex items-center gap-1'>
                                <span>Title</span><span className='text-red-600'>*</span>
                            </label>
                            <input type="text" name='title' onChange={handleChange} className='border-2 border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0]' required/>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="description" className='flex items-center gap-1'>
                                <span>Description</span><span className='text-red-600'>*</span>
                            </label>
                            <textarea name='description' onChange={handleChange} className='border-2 border-[#6b7280] border-solid outline-none bg-transparent py-3 px-2 hover:border-[#5624d0] focus:border-[#5624d0] min-h-[150px]' required>
                            </textarea>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="price" className='flex items-center gap-1'>
                                <span>Price</span>
                            </label>
                            <input type="number" min={0} name='price' value={formInputs.price} onChange={handleChange} className='border-2 border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0]' />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label htmlFor="category_id" className='flex items-center gap-1'>
                                <span>Course category</span><span className='text-red-600'>*</span>
                            </label>
                            <select required name='category_id'onChange={handleChange} className='border-2 border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0]' >
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
                </>
            ):( (!loadingStates.topCategories) &&(
                <div className='w-full flex justify-end mt-9'>
                    <button onClick={() => {setCreateCourse(true)}} className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
                        CREATE COURSE
                    </button>
                </div>
                )
            )}
        </>
    )
}

export default Courses