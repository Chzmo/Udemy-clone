import { BsDot } from "react-icons/bs";

function Requirements({ course, loadindCourse }) {
	return (
		<>
			<h2 className='bold font-bold text-xl'>Requirements</h2>
			<div className='flex flex-col mt-2'>
				{course?.requirements?.map((requirement) => {
					return (
						<div key={requirement.id} className='pl-3 flex items-center gap-3'>
							<BsDot size={14} />
							<p className='text-sm'>{requirement?.title}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Requirements;
