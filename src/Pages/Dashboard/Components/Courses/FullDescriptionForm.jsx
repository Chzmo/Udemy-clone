import React, { useState, useEffect } from "react";
import { updateData } from "../../../../Utils/Query";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function FullDescriptionForm({
	fullDescription,
	setFullDescription,
	courseDetails,
}) {
	const { courseId } = useParams();
	const token = localStorage.getItem("_auth");
	const userId = jwtDecode(localStorage.getItem("_auth_state"))?.id;

	const [submitStatus, setSetsubmitStatus] = useState(
		fullDescription?.length > 0 ? true : false
	);
	const [loadingFullDescription, setLoadingFullDescription] = useState(false);

	const successNotify = () => toast.success("Success ");
	const erorNotify = () => toast.warn("Failed to update full Description");

	const submitFullDescription = (e) => {
		e.preventDefault();
		if (fullDescription == null || fullDescription.length < 1) {
			alert("validation error");
		} else {
			setLoadingFullDescription(true);
			const updateCourseDescription = updateData(
				"/api/course/",
				{
					...courseDetails,
					fullDescription: fullDescription,
					userId,
				},
				token,
				courseId
			);

			// Clear form full description input and start loading
			setFullDescription("");
			setLoadingFullDescription(true);
			updateCourseDescription.then((response) => {
				if (response.status == 200) {
					response.json().then((data) => {
						successNotify();
						setLoadingFullDescription(false);
						setFullDescription(data.fullDescription);
						setSetsubmitStatus(true);
						return;
					});
				} else {
					erorNotify();
					setSetsubmitStatus(false);
					setLoadingFullDescription(false);
				}
			});
		}
	};

	return (
		<>
			<ToastContainer hideProgressBar={true} theme='dark' autoClose={2000} />
			{!submitStatus ? (
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
							value={fullDescription}
							autoFocus
							placeholder='Provide full Description about the whole Course here...'
							onChange={(e) => setFullDescription(e.target.value)}
							className='border-2 border-[#6b7280] border-solid outline-none bg-transparent py-3 px-2 hover:border-[#5624d0] focus:border-[#5624d0] min-h-[200px]'
							required></textarea>
					</div>
					<div className='flex w-full justify-end'>
						{loadingFullDescription ? (
							<button>
								<AiOutlineLoading3Quarters
									size={15}
									className='w-9 h-9 text-[#5624d0] animate-spin'
								/>
							</button>
						) : (
							<div className='flex gap-3'>
								<button
									onClick={() => {
										setSetsubmitStatus(!submitStatus);
									}}
									className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 hover:text-[#5624d0] bg-[#5624d0] hover:bg-transparent text-[#1b1f23]'>
									CANCEL
								</button>
								<button
									type='submit'
									className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] bg-[#1b1f23] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
									SAVE
								</button>
							</div>
						)}
					</div>
				</form>
			) : (
				<div className='flex flex-col w-3/4 gap-3'>
					<p>{fullDescription}</p>
					<div className='flex w-full justify-end'>
						<input
							type='submit'
							value={"EDIT"}
							onClick={() => {
								setSetsubmitStatus(!submitStatus);
							}}
							className='text-sm font-semibold cursor-pointer border-[#5624d0] border-2 border-solid px-3 py-2 hover:text-[#5624d0] bg-[#5624d0] hover:bg-transparent text-[#1b1f23]'
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default FullDescriptionForm;
