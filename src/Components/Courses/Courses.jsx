import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CourseDetails from "../CourseDetails";
import DataTooltip from "../DataTooltip";
import { fetchData } from "../../Utils/Query";
import { data } from "autoprefixer";

function AccordionItem(props) {
	const { defaultOpen, title, courses, searchParam } = props;
	const [isOpen, setIsOpen] = useState(defaultOpen);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div onClick={handleToggle} className='flex justify-between'>
				<p className='font-bold'> {title}</p>
				<div>
					{isOpen ? <BiChevronUp size={15} /> : <BiChevronDown size={15} />}
				</div>
			</div>

			{isOpen && (
				<div className='flex gap-3 h-full mt-7 overflow-x-scroll overflow-y-hidden pb-3'>
					{courses ? (
						courses?.map((course, index) => {
							return (
								<div className=''>
									<CourseDetails
										key={index}
										// globalState={globalState}
										course={course}
										isOpen={isOpen}
										setIsOpen={setIsOpen}
										// setTooltipData={setTooltipData}
									/>
								</div>
							);
						})
					) : (
						<>
							<div className='flex flex-col w-full'>
								<div className='h-32'>
									<div className='h-full w-full object-cover animate-pulse  bg-slate-200'></div>
								</div>
								<h2 className='w-full h-6 font-bold bg-slate-200 animate-pulse mt-3'></h2>
								<h2 className='w-52 h-6 font-bold bg-slate-100 animate-pulse mt-3'></h2>
								<h2 className='w-48 h-6 font-bold bg-slate-100 animate-pulse mt-3'></h2>
								<h2 className='w-64 h-6 font-bold bg-slate-100 animate-pulse mt-3'></h2>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
}

function Courses({ globalState }) {
	const [course, setCourse] = useState("Python");
	const [courses, setCourses] = useState(null);
	const [loadingCourse, setLoadingCourse] = useState(false);
	const [searchParam, setSearchParam] = useState(0);
	const [tooltipData, setTooltipData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1124,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	const sample = [
		{ title: "Python", content: "testing1" },
		{ title: "Web", content: "testing2" },
		{ title: "Hello", content: "testing3" },
	];

	useEffect(() => {
		setLoadingCourse(true);
		const courseData = fetchData("/api/courses/");
		courseData.then((response) => {
			if (response.ok) {
				response.json().then((data) => {
					setLoadingCourse(false);
					setCourses(data);
				});
			} else {
				setLoadingCourse(false);
				setCourses([]);
			}
		});
	}, []);

	useEffect(() => {
		// console.log("halla");
	}, [course]);

	return (
		<>
			<div id='courses' className='py-12 px-7 hidden md:flex md:flex-col'>
				<h2 className='text-3xl font-bold '>A broad selection of courses</h2>
				<p className='pt-4 text-lg'>
					Choose from 213,000 online video courses with new additions published every
					month
				</p>
				<div className='flex gap-3 mt-3'>
					{courses &&
						courses?.map((course, index) => {
							return (
								index < 2 && (
									<p
										key={index}
										onClick={(e) => setCourse(e.target.innerText)}
										className={`font-bold text-lg hover:text-black cursor-pointer ${
											course.title === course ? "text-black" : "text-slate-500"
										}`}>
										{/* {course.title} */}
									</p>
								)
							);
						})}
					{courses &&
						courses?.map((course, index) => {
							return (
								2 < index < 5 && (
									<p
										key={index}
										onClick={(e) => setCourse(e.target.innerText)}
										className={`font-bold text-lg hover:text-black cursor-pointer ${
											course.name === course ? "text-black" : "text-slate-500"
										}`}>
										{/* {course.title} */}
									</p>
								)
							);
						})}
				</div>
				<div className='border border-slate-500 mt-3 p-7'>
					<h2 className='hidden md:flex text-2xl font-bold'>
						Expand your career opportunities with {course}
					</h2>
					<p className='hidden md:flex py-4 text-lg max-w-screen-lg'>
						Take one of Udemy’s range of Python courses and learn how to code using
						this incredibly useful language. Its simple syntax and readability makes
						Python perfect for Flask, Django, data science, and machine learning.
						You’ll learn how to build everything from games to sites to apps. Choose
						from a range of courses that will appeal to
					</p>
					<Link className='hidden md:inline-block border border-black py-2 px-4 font-bold'>
						Explore {course}
					</Link>
					<div className='mt-7'>
						<Slider {...settings} className='w-scren'>
							{!loadingCourse && courses
								? courses?.map((course, index) => {
										return (
											<div className=''>
												<CourseDetails
													key={index}
													course={course}
													isOpen={isOpen}
													setIsOpen={setIsOpen}
													setTooltipData={setTooltipData}
												/>
											</div>
										);
								  })
								: [1, 2, 3, 4].map((index) => {
										return (
											<>
												<div key={index} className='h-32'>
													<div className='h-full w-full object-cover animate-pulse  bg-slate-200'></div>
												</div>
												<h2 className='w-64 h-6 font-bold bg-slate-200 animate-pulse mt-3'></h2>
												<h2 className='w-52 h-6 font-bold bg-slate-100 animate-pulse mt-3'></h2>
												<h2 className='w-48 h-6 font-bold bg-slate-100 animate-pulse mt-3'></h2>
												<h2 className='w-64 h-6 font-bold bg-slate-100 animate-pulse mt-3'></h2>
											</>
										);
								  })}
						</Slider>
					</div>
					<DataTooltip
						tooltipData={tooltipData}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				</div>
			</div>
			<div id='courses' className='py-3 px-7 md:hidden'>
				<h2 className='text-2xl font-bold '>A broad selection of courses</h2>
				<hr className='mt-3 mb-2' />
				{sample?.map((item, index) => (
					<>
						<AccordionItem
							key={index}
							title={item.title}
							content={item.content}
							defaultOpen={index === 0}
							courses={courses}
							course={course}
							searchParam={searchParam}
						/>
						<hr className='my-3' />
					</>
				))}
			</div>
		</>
	);
}

export default Courses;
