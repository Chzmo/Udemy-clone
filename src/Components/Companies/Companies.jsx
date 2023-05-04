import { Link } from 'react-router-dom'

import eventbrite from './../../assets/icons/eventbrite-dark.svg'
import boxd from './../../assets/icons/box-dark.svg'
import volkswagen from './../../assets/icons/volkswagen-dark.svg'
import netapp from './../../assets/icons/netapp-dark.svg'
import nasdaq from './../../assets/icons/nasdaq-dark.svg'

function Companies() {
  return (
    <div className="flex flex-col gap-4 border p-4">
        <div className="space-y-1  ">
            <h2 className='font-bold text-black'>Top companies offer this course to their employees</h2>
            <p>This course was selected for our collection of top-rated courses trusted by businesses worldwide. <Link to={`/`}>Learn more</Link></p>
        </div>
        <div className="flex items-center justify-evenly sm:justify-between w-full flex-wrap">
            <img src={nasdaq} alt="" />
            <img src={volkswagen} alt="" />
            <img src={boxd} alt="" />
            <img src={netapp} alt="" />
            <img src={eventbrite} alt="" />
        </div>
    </div>
  )
}

export default Companies