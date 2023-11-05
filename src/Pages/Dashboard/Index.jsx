import React from "react";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import DashboardTopNav from "./Components/DashboardTopNav";

function dashboard() {
	return (
		<div className='flex flex-col w-full h-full bg-[#1b1f23] items-start justify-start overflow-y-hidden overflow-x-hidden'>
			<div className='flex w-[90%] m-auto flex-col'>
				<DashboardTopNav />
				<div className='flex flex-col min-h-fit w-4/5 m-auto  my-8'>
					<div className=''>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default dashboard;
