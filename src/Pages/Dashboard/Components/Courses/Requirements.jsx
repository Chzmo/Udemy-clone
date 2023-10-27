import { useState } from "react";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import {
	AiOutlinePlus,
	AiOutlineDelete,
	AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { postData } from "../../../../Utils/Query";

function Requirements({
	requirements,
	setRequirements,
	submitRequirements,
	setSubmitRequirements,
}) {
	const token = localStorage.getItem("_auth");
	const userId = jwtDecode(localStorage.getItem("_auth_state"))?.id;

	const { courseId } = useParams();
	const [newRequirement, setNewRequirement] = useState("");
	const [loadingRequirements, setLoadingRequirements] = useState(false);

	const addRequirement = (e) => {
		e.preventDefault();
		if (newRequirement != "") {
			// The id is used to separate the old ones from the new ones
			setRequirements([...requirements, { title: newRequirement, courseId }]);
			setNewRequirement("");
			setSubmitRequirements(true);
		}
	};

	const removeRequirement = (index) => {
		if (requirements.length <= 1) {
			return;
		}
		// Remove an element and sets assign it to requirements
		setRequirements([
			...requirements.slice(0, index),
			...requirements.slice(index + 1),
		]);
		setSubmitRequirements(true);
	};

	const successNotify = () => toast.success("Success ");
	const errorNotify = () => toast.warn("Failed to update Requirements");

	const submitCourseRequirements = () => {
		if (requirements.length > 0 && submitRequirements) {
			setLoadingRequirements(true);
			// console.log(requirements);
			const postRequirements = postData(
				"/api/courseRequirements/",
				{ courseRequirements: requirements, userId },
				token,
				courseId
			);
			postRequirements
				.then((response) => {
					console.log(response);
					successNotify();
					setSubmitRequirements(false);
					setLoadingRequirements(false);
				})
				.catch((error) => {
					console.log(error);
					errorNotify();
					setSubmitRequirements(true);
					setLoadingRequirements(false);
				});
			setSubmitRequirements(false);
		} else {
			alert("add stuff man");
		}
	};

	return (
		<div className='w-3/4 flex flex-col gap-2'>
			{requirements &&
				requirements?.map((requirement, index) => {
					return (
						<div
							key={"courseObjective_" + index}
							className='flex items-end justify-between'>
							<div className='flex items-start gap-2 '>
								<BiCheck size={20} />
								<div>{requirement.title}</div>
							</div>
							<div
								onClick={() => removeRequirement(index)}
								className='flex items-center justify-center cursor-pointer hover:text-[#5624d0]'>
								<AiOutlineDelete size={20} />
							</div>
						</div>
					);
				})}

			<form onSubmit={addRequirement} className='flex items-center gap-2'>
				<input
					type='text'
					name='title'
					value={newRequirement}
					autoFocus
					placeholder='Add requirements or prerequisites...'
					onChange={(e) => {
						setNewRequirement(e.target.value);
					}}
					className='border-[1px] border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0] w-full'
				/>
				<button
					type='submit'
					className='flex items-center justify-center border-[1px] border-[#6b7280] border-solid outline-none p-2 hover:border-[#5624d0] hover:text-[#1b1f23] hover:bg-[#5624d0] cursor-pointer'>
					<AiOutlinePlus size={25} />
				</button>
			</form>
			<div className='flex items-center justify-end w-full'>
				{submitRequirements && (
					<button
						onClick={submitCourseRequirements}
						className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
						SAVE
					</button>
				)}
				{loadingRequirements && (
					<button>
						<AiOutlineLoading3Quarters
							size={15}
							className='w-9 h-9 text-[#5624d0] animate-spin'
						/>
					</button>
				)}
			</div>
			<ToastContainer hideProgressBar={true} theme='dark' autoClose={2000} />
		</div>
	);
}

export default Requirements;
