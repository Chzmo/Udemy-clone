import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import uuid from "react-uuid";
import { BiCheck } from "react-icons/bi";
import { postData } from "../../../../Utils/Query";

function Objective({ objectives, setObjectives }) {
	const { courseId } = useParams();
	const [newObjective, setNewObjective] = useState("");

	const addObjective = (e) => {
		e.preventDefault();
		if (newObjective != "") {
			// The id is used to separate the old ones from the new ones
			setObjectives([...objectives, { title: newObjective, courseId }]);
			setNewObjective("");
		}
	};

	const removeObjective = (index) => {
		// Remove an element and sets assign it to objectives
		setObjectives([
			...objectives.slice(0, index),
			...objectives.slice(index + 1),
		]);
	};

	const submitObjectives = () => {
		if (objectives.length > 0) {
			const postObjectives = postData(
				"/api/courseobjectives",
				objectives,
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzI0YzY5M2VmMDU2YmRkNTJlN2EwNCIsImlhdCI6MTY5ODA5MjcxNywiZXhwIjoxNjk4MTc5MTE3fQ.mMRP1eWlGm9nCBvAs3ZkzJy9YSXvbGJD7GQ03Wvz3wE"
			);
			postObjectives
				.then((response) => {
					console.log(response);
				})
				.catch((error) => console.log(error));
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
								<div>{objective.title}</div>
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
				<button
					onClick={submitObjectives}
					className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
					SAVE
				</button>
			</div>
		</div>
	);
}

export default Objective;
