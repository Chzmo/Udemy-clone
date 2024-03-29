import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import { postData, updateData } from "../../../../Utils/Query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function MainLectureForm({
	tabSwitch,
	contentId,
	courseDetails,
	setCourseDetails,
	setTabSwitch,
}) {
	const title = courseDetails?.content?.reduce((accumulator, currentItem) => {
		if (currentItem.id == tabSwitch) {
			accumulator.push(currentItem);
		}
		return accumulator;
	}, [])[0]?.title;

	const { courseId } = useParams();
	const token = localStorage.getItem("_auth");
	const userId = jwtDecode(localStorage.getItem("_auth_state"))?.id;

	const [newTitle, setNewTitle] = useState(title);
	const [loadingContentSubmission, setLoadingContentSubmission] =
		useState(false);

	const successNotify = () => toast.success("Success ");
	const errorNotify = () => toast.warn("Failed to update course content");

	const submitLecture = (e) => {
		e.preventDefault();
		if (newTitle.length < 10) {
			toast.warn("Topic must have at least 10 characters");
			return;
		}

		setLoadingContentSubmission(true);
		if (tabSwitch == "random_section_id") {
			const courseContent = postData(
				"/api/course/content/",
				{ title: newTitle, userId },
				token,
				courseId
			);
			courseContent.then((response) => {
				if (response.ok) {
					response.json().then((data) => {
						successNotify();
						setLoadingContentSubmission(false);
						const newObject = { id: data?.id, title: data?.title };
						const index = courseDetails?.content?.findIndex(
							(item) => item.id === contentId
						);
						const newContent = [...courseDetails?.content];
						newContent[index] = newObject;
						setCourseDetails({ ...courseDetails, content: newContent });
						setTabSwitch(data?.id);
						console.log(data);
					});
				} else {
					errorNotify();
					setLoadingContentSubmission(false);
					console.log(response);
				}
			});
		} else {
			const updateCourseContent = updateData(
				"/api/course/content/",
				{
					title: newTitle,
					userId,
				},
				token,
				tabSwitch
			);
			updateCourseContent.then((response) => {
				if (response.ok) {
					response.json().then((data) => {
						successNotify();
						setLoadingContentSubmission(false);
						const newObject = { id: data?.id, title: data?.title };
						const index = courseDetails?.content?.findIndex(
							(item) => item.id === contentId
						);
						const newContent = courseDetails?.content;
						newContent[index] = data;
						setCourseDetails({ ...courseDetails, content: newContent });
						setTabSwitch(data?.id);
						console.log(data);
					});
				} else {
					errorNotify();
					setLoadingContentSubmission(false);
					console.log(response);
				}
			});
		}
	};

	// useEffect(() => {
	// 	const index = courseDetails?.content?.findIndex(
	// 		(item) => item.id === contentId
	// 	);
	// 	const newContent = courseDetails?.content;
	// 	newContent[index].title = newTitle;
	// 	setCourseDetails({ ...courseDetails, content: newContent });
	// 	console.log(newContent);
	// }, [newTitle]);

	return (
		<>
			<div className='flex flex-col w-3/4'>
				<form onSubmit={submitLecture} className='flex flex-col w-full gap-2'>
					<input
						type='text'
						name='title'
						value={newTitle}
						autoFocus
						placeholder='Lecture Topic...'
						onChange={(e) => {
							setNewTitle(e.target.value);
						}}
						className='border-[1px] border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0] w-full'
					/>
					<div className='flex justify-end'>
						{loadingContentSubmission ? (
							<>
								<button>
									<AiOutlineLoading3Quarters
										size={15}
										className='w-9 h-9 text-[#5624d0] animate-spin'
									/>
								</button>
							</>
						) : (
							<>
								<button
									type='submit'
									className='flex items-center justify-center border-[1px] border-[#6b7280] border-solid outline-none p-2 hover:border-[#5624d0] hover:text-[#1b1f23] hover:bg-[#5624d0] cursor-pointer'>
									{tabSwitch == "random_section_id" ? "SAVE" : "UPDATE"}
								</button>
							</>
						)}
					</div>
				</form>
			</div>
		</>
	);
}

export default MainLectureForm;
