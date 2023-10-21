import React from 'react'
import { Outlet, useOutletContext, Link } from "react-router-dom";
import DashboardTopNav from './Components/DashboardTopNav'

function dashboard() {
  return (
    <div className="flex flex-col w-full h-full bg-[#1b1f23]">
      <div className="flex w-[90%] m-auto flex-col">
        <DashboardTopNav />
        <div className='flex flex-col w-3/4 m-auto h-full my-8'>
            <div className="flex w-full gap-3 items-center text-[#6b7280] font-semibold ">
                <Link to={'/dashboard'} className='text-[#5624d0]'>Account</Link>
                <Link to={'/dashboard/Courses'} >Courses </Link>
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard