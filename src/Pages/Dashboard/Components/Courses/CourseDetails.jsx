import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiFloppyDiskFill } from "react-icons/pi";
import { BsArrowLeft } from "react-icons/bs";

import { fetchData } from "../../../../Utils/Query";
import Spinner from "../Spinner/Spinner";
import Objective from "./Objective";

function CourseDetails() {
	const { courseId } = useParams();
	const [courseDetails, setCourseDetails] = useState(null);
	const [objectives, setObjectives] = useState(null);
	const [loadingStates, setLoadingStates] = useState({ course: true });

	useEffect(() => {
		const courseData = fetchData("/api/course/", courseId);
		courseData.then((responce) => {
			setCourseDetails(responce);
			setLoadingStates({ ...loadingStates, course: false });
			setObjectives(responce.objective);
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
							<Link
								to={"/dashboard/courses"}
								className='flex items-center gap-2 hover:text-[#5624d0] font-light text-lg w-fit'>
								<BsArrowLeft />
								<span>Back to courses</span>
							</Link>
							<h3>{courseDetails.title}</h3>
							<p>{courseDetails.description}</p>
						</div>
						<div className='flex gap-1'>
							<button
								onClick={() => {}}
								className='flex gap-2 items-center text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
								<PiFloppyDiskFill size={18} />
								<span>PUBLISH</span>
							</button>
						</div>
					</div>
					<hr className='border-t-[1px] border-[#6b7280] my-5 ' />
					<div className='flex gap-1 w-full text-[#6b7280]'>
						<div className='flex flex-col gap-3 w-1/4'>
							<div className='flex cursor-pointer font-semibold '>
								<h4>What you'll learn</h4>
							</div>
						</div>
						<Objective objectives={objectives} setObjectives={setObjectives} />
					</div>
				</div>
			)}
		</>
	);
}

export default CourseDetails;
