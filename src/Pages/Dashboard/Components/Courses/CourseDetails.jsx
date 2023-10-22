import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import { fetchData } from "../../../../Utils/Query";
import Spinner from "../Spinner/Spinner";

function CourseDetails() {
	const { courseId } = useParams();
	const [courseDetails, setCourseDetails] = useState(null);
	const [loadingStates, setLoadingStates] = useState({ course: true });

	useEffect(() => {
		const courseData = fetchData("/api/course/", courseId);
		courseData.then((responce) => {
			setCourseDetails(responce);
			setLoadingStates({ ...loadingStates, course: false });
			console.log(responce);
		});
	}, [courseId]);

	return (
		<>
			{loadingStates.course && (
				<div className='flex min-h-[600px] w-full justify-center items-center'>
					<Spinner />
				</div>
			)}
			{courseDetails && (
				<div className='flex flex-col w-full'>
					<div className='flex w-full justify-between items-end gap-3'>
						<div className='flex flex-col gap-1 text-[#6b7280] font-semibold'>
							<Link to={"/dashboard/courses"} className='flex items-center gap-2'>
								Courses
							</Link>
							<h3>{courseDetails.title}</h3>
							<p>{courseDetails.description}</p>
						</div>
						<div className='flex'>
							<input
								type='button'
								value={"PUBLISH"}
								onClick={() => {}}
								className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'
							/>
						</div>
					</div>
					<hr className='border-t-[1px] border-[#6b7280] my-5 ' />
					<div className='flex gap-1 w-full text-[#6b7280]'>
						<div className='flex flex-col gap-3 w-1/4'>
							<div className='flex cursor-pointer font-semibold'>
								<h4>What you'll learn</h4>
							</div>
						</div>
            <div className='w-3/4 flex flex-col gap-2'>
              {}
							<div className='flex items-center gap-2'></div>
							<div className='flex items-center gap-2'>
								<input
									type='text'
									name='title'
									value={""}
									// onChange={handleChange}
									className='border-[1px] border-[#6b7280] border-solid outline-none bg-transparent p-2 hover:border-[#5624d0] focus:border-[#5624d0] w-full'
									required
								/>
								<div className='flex items-center justify-center border-[1px] border-[#6b7280] border-solid outline-none p-2 hover:border-[#5624d0] hover:text-[#1b1f23] hover:bg-[#5624d0]'>
									<AiOutlinePlus size={25} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default CourseDetails;
