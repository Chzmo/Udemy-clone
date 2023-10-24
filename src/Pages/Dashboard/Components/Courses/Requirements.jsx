import { useState } from "react";
import { useParams } from "react-router-dom";
import {
	AiOutlinePlus,
	AiOutlineDelete,
	AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { postData } from "../../../../Utils/Query";

function Requirements({ requirements, setRequirements }) {
	const userId = "65324c693ef056bdd52e7a04";

	const { courseId } = useParams();
	const [newRequirement, setNewRequirement] = useState("");
	const [submitRequirements, setSubmitRequirements] = useState(false);
	const [loadingRequirements, setLoadingRequirements] = useState(false);

	const addRequirement = (e) => {
		e.preventDefault();
		if (newRequirement != "") {
			// The id is used to separate the old ones from the new ones
			setRequirements([...requirements, { title: newRequirement, courseId }]);
			newRequirement("");
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

	const submitCourseRequirements = () => {
		if (requirements.length > 0 && submitRequirements) {
			setLoadingObjectiveSubmission(true);
			const postRequirements = postData(
				"/api/courseobjectives/",
				{ requirements, userId },
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzI0YzY5M2VmMDU2YmRkNTJlN2EwNCIsImlhdCI6MTY5ODA5MjcxNywiZXhwIjoxNjk4MTc5MTE3fQ.mMRP1eWlGm9nCBvAs3ZkzJy9YSXvbGJD7GQ03Wvz3wE",
				courseId
			);
			postRequirements
				.then((response) => {
					console.log(response);
					setSubmitRequirements(false);
					setLoadingRequirements(false);
				})
				.catch((error) => {
					console.log(error);
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

			<form onSubmit={addObjective} className='flex items-center gap-2'>
				<input
					type='text'
					name='title'
					value={newObjective}
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
		</div>
	);
}

export default Requirements;
