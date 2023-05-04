import Header from './Header'
import CartDetails from './CartDetails'
import WhatYouLearn from './WhatYouLearn'
import Companies from '../../Components/Companies/Companies'
import CourseContent from '../../Components/CourseContent/CourseContent'
import Description from '../../Components/Description/Description'

function PaidCourses() {
    return (
        <>
            <Header />
            <div className="flex md:flex-row mt-3.5 gap-4 w-[90%] md:flex md:gap-6 m-auto md:w-[81%] mb-12">
                <div className="flex flex-col w-full lg:w-4/5 gap-5">
                    <WhatYouLearn />  
                    <Companies />
                    <CourseContent />
                    <Description />
                </div>  
                <CartDetails />
            </div>
        </>
    )
}

export default PaidCourses