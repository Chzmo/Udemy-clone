import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { postData } from "../../../../Utils/Query";

function TopicForm({ courseDetails, setCourseDetails }) {
	const initialFormInputs = {
		title: "",
		thumbnail: "",
	};

	const authUser = jwtDecode(localStorage.getItem("_auth_state"));
	const token = localStorage.getItem("_auth");
	const userId = authUser?.id;
	const { courseId } = useParams();

	const [formInputs, setFormInputs] = useState(initialFormInputs);
	const [loadingForm, setLoadingForm] = useState(false);

	const handleFormSubmit = () => {
		setLoadingForm(true);
		const body = {
			userId,
		};
		console.log(setCourseDetails?.content);
		return;
		const response = postData("/api/course/", body, token, courseId);
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
				className='flex flex-col gap-3 w-3/4 mt-9 text-[#6b7280] font-normal'>
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
					<label htmlFor='thumbnail' className='flex items-center gap-1'>
						<span>Url thumbnail</span>
						<span className='text-red-600'>*</span>
					</label>
					<input
						type='url'
						name='thumbnail'
						value={formInputs.thumbnail}
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
