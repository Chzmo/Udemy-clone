import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { AiOutlineFileText, AiOutlineLoading3Quarters } from "react-icons/ai";
import { postData, updateData } from "../../../../Utils/Query";

function TopicForm({
	courseDetails,
	setCourseDetails,
	setTabSwitch,
	tabSwitch,
	topicId,
	contentSectionId,
	setContentSectionId,
}) {
	const initialFormInputs =
		topicId == "random_topic_id"
			? {
					title: "",
					url: "",
			  }
			: {};

	const authUser = jwtDecode(localStorage.getItem("_auth_state"));
	const token = localStorage.getItem("_auth");
	const userId = authUser?.id;

	const [formInputs, setFormInputs] = useState(initialFormInputs);
	const [loadingForm, setLoadingForm] = useState(false);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(courseDetails);
		const index = courseDetails?.content?.findIndex(
			(item) => item.id == contentSectionId
		);

		const body = {
			userId,
			...formInputs,
			contentId: contentSectionId,
			contentId: courseDetails?.content[index]?.id,
		};

		setLoadingForm(true);

		if (topicId == "random_topic_id") {
			const createTopic = postData(
				"/api/course/topic/",
				body,
				token,
				contentSectionId
			);
			createTopic.then((response) => {
				if (response.ok) {
					response.json().then((data) => {
						const updatedContent = courseDetails?.content;
						updatedContent[index] = data;
						setCourseDetails({
							...courseDetails,
							content: [...updatedContent],
						});

						console.log(data);
						setFormInputs(initialFormInputs);
						setLoadingForm(false);
					});
				} else {
				}
				setLoadingForm(false);
			});
		} else {
			const createTopic = updateData(
				"/api/course/topic/",
				body,
				token,
				contentSectionId
			);
			createTopic.then((response) => {
				if (response.ok) {
					response.json().then((data) => {
						setLoadingForm(false);
						setFormInputs(initialFormInputs);
						console.log(data);
						// setCourseDetails({
						// 	...courseDetails,
						// 	content: [...courseDetails?.content, courseDetails?.content[index]],
						// });
					});
				} else {
				}
				setLoadingForm(false);
			});
		}
	};

	const handleChange = (e) => {
		setFormInputs({
			...formInputs,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<form
				onSubmit={handleFormSubmit}
				className='flex flex-col gap-3 w-3/4 text-[#6b7280] font-normal'>
				<div className='flex gap-2 items-center text-lg font-bold'>
					<AiOutlineFileText size={20} />
					<span>
						{
							// THIS GETS THE HEADING OF THE SECTION
							courseDetails?.content[
								courseDetails?.content?.findIndex((item) => item.id == contentSectionId)
							].title
						}
					</span>
				</div>
				<div className='flex flex-col w-full gap-2'>
					<label htmlFor='title' className='flex items-center gap-1'>
						<span>Title</span>
						<span className='text-red-600'>*</span>
					</label>
					<input
						type='text'
						name='title'
						value={formInputs.title}
						onChange={handleChange}
						className='border-2 border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0]'
						required
					/>
				</div>
				<div className='flex flex-col w-full gap-2'>
					<label htmlFor='url' className='flex items-center gap-1'>
						<span>Url thumbnail</span>
						<span className='text-red-600'>*</span>
					</label>
					<input
						type='url'
						name='url'
						value={formInputs.url}
						onChange={handleChange}
						pattern='https?://.+'
						className='border-2 border-[#6b7280] border-solid outline-none bg-transparent focus:bg-[#1b1f23] p-2 hover:border-[#5624d0] focus:border-[#5624d0]'
						required
					/>
				</div>
				<div className='flex gap-3 justify-end'>
					{loadingForm ? (
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
							<input
								type='submit'
								value={"CREATE"}
								className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 hover:text-[#5624d0] bg-[#5624d0] hover:bg-transparent text-[#1b1f23]'
							/>
							<input
								type='button'
								value={"CANCEL"}
								onClick={() => {
									setCreateCourse(false);
								}}
								className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'
							/>
						</>
					)}
				</div>
			</form>
		</>
	);
}

export default TopicForm;
