import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";

function AccordionItem({ defaultOpen, title, contentSection }) {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<div>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className='flex justify-between p-4 w-full border-t bg-zinc-100 hover:cursor-pointer'>
				<div className='flex gap-4 items-center '>
					<div>
						{isOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
					</div>
					<p className='font-bold'> {title}</p>
				</div>
				<div className='flex items-center gap-2'>
					<p>{contentSection.length ? contentSection.length : "No"} Lessons</p>
				</div>
			</div>
			{isOpen && (
				<div className='flex flex-col gap-3 p-4 border-t w-full'>
					{contentSection?.map((topic) => {
						return (
							<div key={topic?.id} className='flex items-start justify-between w-full'>
								<div className='flex gap-2 sm:gap-3 items-center'>
									<div className='w-7 flex-1'>
										{" "}
										<MdOndemandVideo size={20} />
									</div>
									<small className='text-sm'>{topic?.title}</small>
								</div>
								<p className='hidden sm:flex'>12 min</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

function CourseContent({ course, loadindCourse }) {
	const [isOpen, setIsOpen] = useState(0);
	console.log(course);

	return (
		<>
			<h2 className='bold font-bold text-2xl'>Course Content</h2>
			<div className='flex items-center justify-between'>
				<small className='text-slate-600'>
					23 sections • 273 lectures • 14h 36m total length
				</small>
				<small
					className='text-purple-600 font-bold hover:cursor-pointer hidden sm:flex'
					onClick={() => setIsOpen(-1)}>
					Collapse all sections
				</small>
			</div>
			<div className='flex flex-col border-x border-b'>
				{course?.content?.map((content, index) => {
					return (
						<AccordionItem
							key={content?.id}
							title={content?.title}
							defaultOpen={index === isOpen}
							contentSection={content?.contentSection}
						/>
					);
				})}
			</div>
		</>
	);
}

export default CourseContent;
