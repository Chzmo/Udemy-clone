import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { GoVideo } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";
import { PiFloppyDiskFill } from "react-icons/pi";
import { ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import {
	AiOutlineDelete,
	AiOutlineFileText,
	AiOutlinePlus,
} from "react-icons/ai";

import { deleteData, fetchData } from "../../../../Utils/Query";
import Spinner from "../Spinner/Spinner";
import Objective from "./Objective";

import Requirements from "./Requirements";
import FullDescriptionForm from "./FullDescriptionForm";
import MainLectureForm from "./MainLectureForm";
import TopicForm from "./TopicForm";

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
	const [contentId, setContentId] = useState(null);
	const [topicId, setTopicId] = useState(null);
	const [contentSectionId, setContentSectionId] = useState(null);

	const switchTabSection = (tabIndex) => {
		setTabSwitch(tabIndex);
	};

	const addSection = () => {
		const content = courseDetails?.content;
		if (tabSwitch == "random_section_id") {
			// A SECTION EXISTS ALREADY JUST RETURN
			return;
		}
		const index = courseDetails?.content?.findIndex(
			(item) => item.id == "random_section_id"
		);

		if (index == -1) {
			//IF INDEX NOT FOUND
			setCourseDetails({
				...courseDetails,
				content: [...content, { title: "Untitled Topic", id: "random_section_id" }],
			});
		}
		switchTabSection("lecture");
		setTabSwitch("random_section_id");
		setContentId("random_section_id");
	};

	const addTopic = () => {
		if (tabSwitch == "topic") {
			// A TOPIC EXISTS ALREADY JUST RETURN
			return;
		}
		switchTabSection("topic");
		setTabSwitch("topic");
		setTopicId("random_topic_id");
	};

	const deleteTopic = () => {
		Swal.fire({
			text: "You won't be able to revert this!",
			theme: "Dark",
			showDenyButton: true,
			confirmButtonText: "Yes, delete it!?",
			denyButtonText: `No, cancel!`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				const deleteTopic = deleteData("/api/course/topic/", token, topicId);

				deleteTopic.then((response) => {
					if (response.ok) {
						response.json().then((data) => {});
					}
				});
			} else if (result.isDenied) {
				return;
			}
		});
	};

	useEffect(() => {
		const courseData = fetchData("/api/course/", courseId);
		courseData.then((response) => {
			if (response.ok) {
				response.json().then((data) => {
					setCourseDetails(data);
					setLoadingCourse(false);
					setObjectives(data.objective);
					setRequirements(data.requirements);
					setFullDescription(data.fullDescription);
				});
			} else {
				setLoadingCourse(false);
				console.log(response);
			}
		});
	}, []);

	return (
		<>
			{loadingCourse && (
				<div className='flex min-h-[600px] w-full justify-center items-center'>
					<Spinner />
				</div>
			)}
			{courseDetails && (
				<div className='flex flex-col w-full'>
					{/* TOP NAVIGATION*/}
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
					{/* END TOP NAVIGATION*/}

					<div className='flex gap-3 w-full text-[#6b7280] min-h-[600px] '>
						{/* START LEFT NAVIGATON */}
						<div key={"no_need_key"} className='flex flex-col gap-3 w-1/4'>
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
							{courseDetails?.content &&
								courseDetails?.content.map((content) => (
									<>
										{/* CONTENT/LECTURE TITLE */}
										<div
											key={content.id}
											className={`flex justify-between w-full items-center cursor-pointer font-semibold text-lg`}>
											<div
												onClick={() => switchTabSection(content.id)}
												className={`flex gap-2 w-full items-center hover:text-[#5624d0] ${
													tabSwitch == content.id ? "text-[#5624d0]" : ""
												}`}>
												<AiOutlineFileText />
												<h4 className='flex-1'>
													{content?.title.length > 20
														? `${content?.title?.slice(0, 20)}...`
														: content?.title}
												</h4>
											</div>
											<AiOutlineDelete
												size={20}
												className='self-center justify-self-end hover:text-red-600'
												onClick={deleteTopic}
											/>
										</div>

										{/* TOPIC TITLE */}
										<div className='w-full pl-7 flex flex-col gap-1'>
											{content?.contentSection?.map((topic) => {
												return (
													<div
														key={topic.id}
														className='flex justify-between items-center cursor-pointer'>
														<div
															onClick={() => {
																switchTabSection(topic.id);
															}}
															className={`flex items-center gap-2 hover:text-[#5624d0] ${
																tabSwitch == topic.id ? "text-[#5624d0]" : ""
															}`}>
															<GoVideo />
															<span className='text-sm'>
																{topic?.title.length > 20
																	? `${topic?.title?.slice(0, 20)}...`
																	: topic?.title}
															</span>
														</div>
														<AiOutlineDelete
															size={18}
															className='self-center justify-self-end hover:text-red-600'
															onClick={deleteTopic}
														/>
													</div>
												);
											})}

											{contentId != "random_section_id" && (
												<button
													onClick={(e) => {
														setContentSectionId(content?.id);
														addTopic(e);
													}}
													className='flex gap-2 w-full items-center text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
													<AiOutlinePlus size={18} />
													<span>ADD TOPIC</span>
												</button>
											)}
										</div>
									</>
								))}
							<div className='flex'>
								<button
									onClick={addSection}
									className='flex gap-2 w-full items-center text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
									<AiOutlinePlus size={18} />
									<span>ANOTHER SECTION</span>
								</button>
							</div>
						</div>
						{/* START END NAVIGATON */}

						{/* SWITCH RIGHT TABS BASED ON CONDITIONS*/}
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
								courseDetails={courseDetails}
								fullDescription={fullDescription}
								setFullDescription={setFullDescription}
							/>
						)}
						{tabSwitch == "lecture" && (
							<MainLectureForm
								contentId={contentId}
								courseDetails={courseDetails}
								setCourseDetails={setCourseDetails}
								tabSwitch={tabSwitch}
								setTabSwitch={setTabSwitch}
							/>
						)}
						{tabSwitch == "topic" && (
							<TopicForm
								topicId={topicId}
								courseDetails={courseDetails}
								setCourseDetails={setCourseDetails}
								tabSwitch={tabSwitch}
								setTabSwitch={setTabSwitch}
								contentSectionId={contentSectionId}
								setContentSectionId={setContentSectionId}
							/>
						)}
						{courseDetails?.content &&
							courseDetails?.content.map((content) => {
								return (
									tabSwitch == content.id && (
										<MainLectureForm
											key={content.id}
											contentId={content.id}
											courseDetails={courseDetails}
											setCourseDetails={setCourseDetails}
											tabSwitch={tabSwitch}
											setTabSwitch={setTabSwitch}
										/>
									)
								);
							})}
						{courseDetails?.content &&
							courseDetails?.content.map((content) => {
								return content?.contentSection?.map((topic) => {
									return (
										tabSwitch === topic.id && (
											<TopicForm
												key={topic.id}
												topicId={topic.id}
												courseDetails={courseDetails}
												setCourseDetails={setCourseDetails}
												tabSwitch={tabSwitch}
												setTabSwitch={setTabSwitch}
												contentSectionId={content.id}
												setContentSectionId={setContentSectionId}
											/>
										)
									);
								});
							})}

						{/* END SWITCH RIGHT TABS BASED ON CONDITIONS*/}
					</div>
				</div>
			)}
			<ToastContainer hideProgressBar={true} theme='dark' autoClose={2000} />
		</>
	);
}

export default CourseDetails;
