import eventbrite from './../../assets/icons/eventbrite-dark.svg'
import boxd from './../../assets/icons/box-dark.svg'
import volkswagen from './../../assets/icons/volkswagen-dark.svg'
import netapp from './../../assets/icons/netapp-dark.svg'
import nasdaq from './../../assets/icons/nasdaq-dark.svg'
import { Link } from 'react-router-dom'

function Companies() {
  return (
    <div className="flex flex-col gap-4">
        <div className="space-y-3">
            <h2>Top companies offer this course to their employees</h2>
            <p>This course was selected for our collection of top-rated courses trusted by businesses worldwide. <Link>Learn more</Link></p>
        </div>
    </div>
  )
}

export default Companies