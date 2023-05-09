import React from "react";
import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function Advert() {
	return (
		<>
			<div className='w-full mt-6 flex flex-wrap gap-16 p-5 bg-[#f7f9fa]'>
				<div className='flex flex-col gap-6'>
					<h2 className='font-bold text-xl'>
						Try free courses or enroll in paid courses
					</h2>
					<div className='w-full flex gap-5 p-4 border bg-white items-center'>
						<div className='rounded-full w-8 h-8 bg-black text-white font-bold flex items-center justify-center'>
							<p className='text-sm'>i</p>
						</div>
						<p className='font-bold text-sm sm:text-lg sm:w-80 flex-1'>
							Not sure? All courses have a 30-day money-back guarantee
						</p>
					</div>
					<div>
						<button className='p-3 w-full sm:w-auto font-bold text-sm border border-black'>
							View pain Amazom AWS paid courses
						</button>
					</div>
				</div>
				<div className='flex flex-col gap-6'>
					<h2 className='font-bold text-xl'>Free courses</h2>
					<div className='flex flex-col gap-2'>
						<div className='flex items-center gap-3'>
							<BiCheck size={23} color='green' className='w-9' />{" "}
							<p className=''>Online video content</p>
						</div>
						<div className='flex items-center gap-3'>
							<RxCross2 size={23} color='red' className='w-9' />
							<p className=''>Certificate of completion</p>
						</div>
						<div className='flex items-center gap-3'>
							<RxCross2 size={23} color='red' className='w-9' />
							<p className=''>Instructor Q&A</p>
						</div>
						<div className='flex items-center gap-3'>
							<RxCross2 size={23} color='red' className='w-9' />
							<p className=''>Instructor direct message</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-6'>
					<h2 className='font-bold text-xl'>Paid courses</h2>
					<div className='flex flex-col gap-2'>
						<div className='flex items-center gap-3'>
							<BiCheck color='green' size={23} className='w-9' />{" "}
							<p className=''>Online video content</p>
						</div>
						<div className='flex items-center gap-3'>
							<BiCheck color='green' size={23} className='w-9' />
							<p className=''>Certificate of completion</p>
						</div>
						<div className='flex items-center gap-3'>
							<BiCheck color='green' size={23} className='w-9' />
							<p className=''>Instructor Q&A</p>
						</div>
						<div className='flex items-center gap-3'>
							<BiCheck color='green' size={23} className='w-9' />
							<p className=''>Instructor direct message</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Advert;
