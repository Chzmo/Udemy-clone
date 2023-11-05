import React from "react";
import { BiCheck } from "react-icons/bi";

function WhatYouLearn({ course, loadindCourse }) {
	console.log(course);

	return (
		<>
			<div
				className={`
                w-full gap-2 border flex flex-col py-7 sticky -z-20
            `}>
				<p className='px-4 bold font-bold text-2xl'>What You Will Learn</p>
				<div className='flex flex-col justify-start gap-2 sm:grid sm:grid-cols-2 sm:gap-4 px-5'>
					{course?.objective?.map((objective) => {
						return (
							<div key={objective?.id} className='flex gap-4 items-start'>
								<BiCheck size={20} className='w-9' />
								<p className='text-sm flex-1'> {objective?.title}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default WhatYouLearn;
