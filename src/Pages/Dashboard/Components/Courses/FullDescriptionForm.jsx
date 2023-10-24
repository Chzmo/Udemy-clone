import React, { useState } from "react";

function FullDescriptionForm({ fullDescription, setFullDescription }) {
	const [newFullDescription, setNewFullDescription] = useState(fullDescription);

	const submitFullDescription = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form
				onSubmit={submitFullDescription}
				className='flex flex-col w-3/4  gap-2'>
				<div className='flex flex-col w-full gap-2'>
					<label htmlFor='fullDescription' className='flex items-center gap-1'>
						<span>Full Description</span>
						<span className='text-red-600'>*</span>
					</label>
					<textarea
						name='fullDescription'
						value={newFullDescription}
						placeholder='Provide full Description about the whole Course here...'
						onChange={(e) => setNewFullDescription(e.target.value)}
						className='border-2 border-[#6b7280] border-solid outline-none bg-transparent py-3 px-2 hover:border-[#5624d0] focus:border-[#5624d0] min-h-[200px]'
						required></textarea>
				</div>
				<div className='flex w-full justify-end'>
					<input
						type='submit'
						value={"SAVE"}
						className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 hover:text-[#5624d0] bg-[#5624d0] hover:bg-transparent text-[#1b1f23]'
					/>
				</div>
			</form>
		</>
	);
}

export default FullDescriptionForm;
