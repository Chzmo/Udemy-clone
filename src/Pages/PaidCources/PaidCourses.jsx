import Header from './Header'
import { MdOndemandVideo } from 'react-icons/md'

import WhatYouLearn from './WhatYouLearn'
import Companies from '../../Components/Companies/Companies'
import CartDetails from './CartDetails'

function PaidCourses() {
    return (
        <>
            <Header />
            <div className="flex   md:flex-row mt-3.5 gap-4 w-[90%] md:flex md:gap-6 m-auto md:w-[81%] ">
                <div className="flex flex-col w-full lg:w-4/5 gap-5 sticky -z-20">
                    <WhatYouLearn />  
                    <Companies />
                    <WhatYouLearn />  
                </div>  
                <CartDetails />
            </div>
            <div className="flex h-screen"></div>
        </>
    )
}

export default PaidCourses