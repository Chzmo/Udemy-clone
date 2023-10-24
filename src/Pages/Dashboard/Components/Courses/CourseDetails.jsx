import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiFloppyDiskFill } from "react-icons/pi";
import { BsArrowLeft } from "react-icons/bs";

import { fetchData } from "../../../../Utils/Query";
import Spinner from "../Spinner/Spinner";
import Objective from "./Objective";
import { AiOutlineFileText } from "react-icons/ai";
import Requirements from "./Requirements";
import FullDescriptionForm from "./FullDescriptionForm";

function CourseDetails() {
	const { courseId } = useParams();
	const [courseDetails, setCourseDetails] = useState(null);
	const [tabSwitch, setTabSwitch] = useState(null);
	const [objectives, setObjectives] = useState(null);
	const [requirements, setRequirements] = useState(null);
	const [loadingCourse, setLoadingCourse] = useState(true);
	const [submitRequirements, setSubmitRequirements] = useState(false);
	const [submitCourseObjectives, setSubmitCoursesObjectives] = useState(false);
	const [fullDescription, setFullDescription] = useState(null);

	useEffect(() => {
		const courseData = fetchData("/api/course/", courseId);
		courseData.then((responce) => {
			setCourseDetails(responce);
			setLoadingCourse(false);
			setObjectives(responce.objective);
			setRequirements(responce.requirements);
			setFullDescription(responce.fullDescription);
			console.log(responce);
		});
	}, [courseId]);

	const switchTabSection = (tabIndex) => {
		setTabSwitch(tabIndex);
	};

	return (
		<>
			{loadingCourse && (
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
					<div className='flex gap-1 w-full text-[#6b7280] min-h-[600px] '>
						<div className='flex flex-col gap-3 w-1/4'>
							<div
								onClick={() => switchTabSection(null)}
								className={`flex gap-2 items-center cursor-pointer font-semibold text-lg w-fit hover:text-[#5624d0] ${
									!tabSwitch ? "text-[#5624d0]" : ""
								}`}>
								<AiOutlineFileText />
								<h4>What you'll learn</h4>
							</div>
							<div
								onClick={() => switchTabSection("requirements")}
								className={`flex gap-2 items-center cursor-pointer font-semibold text-lg w-fit hover:text-[#5624d0] ${
									tabSwitch == "requirements" ? "text-[#5624d0]" : ""
								}`}>
								<AiOutlineFileText />
								<h4>Requirements</h4>
							</div>
							<div
								onClick={() => switchTabSection("description")}
								className={`flex gap-2 items-center cursor-pointer font-semibold text-lg w-fit hover:text-[#5624d0] ${
									tabSwitch == "description" ? "text-[#5624d0]" : ""
								}`}>
								<AiOutlineFileText />
								<h4>Full Description</h4>
							</div>
						</div>
						{/* Switch Tabs based on conditions*/}
						{!tabSwitch && (
							<Objective
								objectives={objectives}
								setObjectives={setObjectives}
								submitCourseObjectives={submitCourseObjectives}
								setSubmitCoursesObjectives={setSubmitCoursesObjectives}
							/>
						)}
						{tabSwitch == "requirements" && (
							<Requirements
								requirements={requirements}
								setRequirements={setRequirements}
								submitRequirements={submitRequirements}
								setSubmitRequirements={setSubmitRequirements}
							/>
						)}
						{tabSwitch == "description" && (
							<FullDescriptionForm
								fullDescription={fullDescription}
								setFullDescription={setFullDescription}
							/>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default CourseDetails;
