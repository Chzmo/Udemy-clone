import React, { useState } from "react";
import { updateData } from "../../../../Utils/Query";
import { useParams } from "react-router-dom";

function FullDescriptionForm({
	fullDescription,
	setFullDescription,
	courseDetails,
}) {
	const { courseId } = useParams();
	const userId = "65324c693ef056bdd52e7a04";
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzI0YzY5M2VmMDU2YmRkNTJlN2EwNCIsImlhdCI6MTY5ODIzOTA5NCwiZXhwIjoxNjk4MzI1NDk0fQ.WNh5OMoQlmBZgwGSEHzbckcGii0ggD_zMhB_04IXkeg";

	const [newFullDescription, setNewFullDescription] = useState(fullDescription);
	const [loadingFullDeescription, setLoadingFullDeescription] = useState(false);

	const submitFullDescription = (e) => {
		e.preventDefault();
		if (newFullDescription == null || newFullDescription.length < 1) {
			alert("validation error");
		} else {
			setLoadingFullDeescription(true);
			const updateCourseDescription = updateData(
				"/api/course/",
				{
					...courseDetails,
					fullDescription: newFullDescription,
					userId,
				},
				token,
				courseId
			);

			updateCourseDescription
				.then((response) => {
					setLoadingFullDeescription(true);
					setFullDescription(response.fullDescription);
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
					setLoadingFullDeescription(false);
				});
		}
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
						autoFocus
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
