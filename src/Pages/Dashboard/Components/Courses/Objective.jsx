import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
	AiOutlinePlus,
	AiOutlineDelete,
	AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { postData } from "../../../../Utils/Query";
import jwtDecode from "jwt-decode";

function Objective({
	objectives,
	setObjectives,
	setSubmitCoursesObjectives,
	submitCourseObjectives,
}) {
	const token = localStorage.getItem("_auth");
	const userId = jwtDecode(localStorage.getItem("_auth_state"))?.id;
	const { courseId } = useParams();

	const [newObjective, setNewObjective] = useState("");
	const [loadingObjectiveSubmission, setLoadingObjectiveSubmission] =
		useState(false);

	const successNotify = () => toast.success("Success ");
	const errorNotify = () => toast.warn("Failed to update course objectives");

	const addObjective = (e) => {
		e.preventDefault();
		if (newObjective != "") {
			// The id is used to separate the old ones from the new ones
			setObjectives([...objectives, { title: newObjective, courseId }]);
			setNewObjective("");
			setSubmitCoursesObjectives(true);
		}
	};

	const removeObjective = (index) => {
		if (objectives.length <= 1) {
			return;
		}
		// Remove an element and sets assign it to objectives
		setObjectives([
			...objectives.slice(0, index),
			...objectives.slice(index + 1),
		]);
		setSubmitCoursesObjectives(true);
	};

	const submitObjectives = () => {
		if (objectives.length > 0 && submitCourseObjectives) {
			setLoadingObjectiveSubmission(true);
			const postObjectives = postData(
				"/api/courseobjectives/",
				{ courseObjectives: objectives, userId },
				token,
				courseId
			);
			postObjectives
				.then((response) => {
					console.log(response);
					successNotify();
					setSubmitCoursesObjectives(false);
					setLoadingObjectiveSubmission(false);
				})
				.catch((error) => {
					console.log(error);
					errorNotify();
					setSubmitCoursesObjectives(true);
					setLoadingObjectiveSubmission(false);
				});
			setSubmitCoursesObjectives(false);
		} else {
			alert("add stuff man");
		}
	};

	return (
		<div className='w-3/4 flex flex-col gap-2'>
			{objectives &&
				objectives?.map((objective, index) => {
					return (
						<div
							key={"courseObjective_" + index}
							className='flex items-end justify-between'>
							<div className='flex items-start gap-2 '>
								<BiCheck size={20} />
								<div className='flex flex-1'>{objective.title}</div>
							</div>
							<div
								onClick={() => removeObjective(index)}
								className='flex items-center justify-center cursor-pointer hover:text-[#5624d0]'>
								<AiOutlineDelete size={20} />
							</div>
						</div>
					);
				})}
			<form onSubmit={addObjective} className='flex items-center gap-2'>
				<input
					type='text'
					name='title'
					value={newObjective}
					autoFocus
					placeholder='Add objectives and learning outcomes...'
					onChange={(e) => {
						setNewObjective(e.target.value);
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
				{submitCourseObjectives && (
					<button
						onClick={submitObjectives}
						className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
						SAVE
					</button>
				)}
				{loadingObjectiveSubmission && (
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

export default Objective;
