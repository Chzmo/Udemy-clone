import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function MainLectureForm({lectureTopic}) {
	const [lecture, setLecture] = useState(null);

	const submitLecture = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className='flex flex-col w-3/4'>
				<form onSubmit={submitLecture} className='flex flex-col w-full gap-2'>
					<input
						type='text'
						name='title'
						value={lectureTopic}
						autoFocus
						placeholder='Lecture Topic...'
						onChange={(e) => {
							setLecture(e.target.value);
						}}
						className='border-[1px] border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0] w-full'
					/>
					<div className='flex justify-end'>
						<button
							type='submit'
							className='flex items-center justify-center border-[1px] border-[#6b7280] border-solid outline-none p-2 hover:border-[#5624d0] hover:text-[#1b1f23] hover:bg-[#5624d0] cursor-pointer'>
							SAVE
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default MainLectureForm;
