import React from 'react'
import { Link } from 'react-router-dom'

function DashboardNav() {
  return (
    <div className="flex w-full gap-3 items-center text-[#6b7280] font-semibold ">
        <Link to={'/dashboard'} >Account</Link>
        <Link to={'/dashboard/Courses'} className='text-[#5624d0]'>Courses </Link>
    </div>
  )
}

export default DashboardNav