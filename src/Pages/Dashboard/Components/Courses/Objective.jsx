import { useState } from "react";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

function Objective({ objectives, setObjectives }) {
	const [newObjective, setNewObjective] = useState("");

	const addObjective = (e) => {
		e.preventDefault();
		if (newObjective != "") {
			// The id is used to separate the old ones from the new ones
			setObjectives([...objectives, { title: newObjective, id: "newObjective" }]);
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
			alert();
		}
	};

	return (
		<div className='w-3/4 flex flex-col gap-2'>
			{objectives &&
				objectives?.map((objective, index) => {
					return (
						<div className='flex items-end justify-between'>
							<div key={objective.id + index} className='flex items-start gap-2 '>
								<BiCheck size={20} />
								<div>{objective.title}</div>
							</div>
							<div
								key={objective.id + index}
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
					onClick={() => {}}
					className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
					SAVE
				</button>
			</div>
		</div>
	);
}

export default Objective;
