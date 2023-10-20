import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CourseDetails from "../CourseDetails";
import DataTooltip from "../DataTooltip";

function AccordionItem(props) {
	const { defaultOpen, title, globalState, searchParam } = props;
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
					{globalState.categories &&
						globalState?.categories[searchParam]?.course?.map((_course, index) => {
							return (
								<div className=''>
									<CourseDetails
										key={index}
										globalState={globalState}
										course={_course}
									/>
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
}

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`bg-black`}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		/>
	);
}

function Courses({ globalState }) {
	const [course, setCourse] = useState("Python");
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
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
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
		// console.log(globalState?.categories && globalState?.categories[0]?.course)
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
					{globalState.categories &&
						globalState?.categories[0]?.course?.map((_course, index) => {
							return (
								index < 2 && (
									<p
										key={index}
										onClick={(e) => setCourse(e.target.innerText)}
										className={`font-bold text-lg hover:text-black cursor-pointer ${
											_course.name === course ? "text-black" : "text-slate-500"
										}`}
									>
										{_course.name}
									</p>
								)
							);
						})}
					{globalState.categories &&
						globalState.categories[5]?.course?.map((_course, index) => {
							return (
								index < 2 && (
									<p
										key={index}
										onClick={(e) => setCourse(e.target.innerText)}
										className={`font-bold text-lg hover:text-black cursor-pointer ${
											_course.name === course ? "text-black" : "text-slate-500"
										}`}
									>
										{_course.name}
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
							{globalState.categories &&
								globalState?.categories[searchParam]?.course?.map((_course, index) => {
									return (
										<div className=''>
											<CourseDetails
												key={index}
												globalState={globalState}
												course={_course}
												isOpen={isOpen}
												setIsOpen={setIsOpen}
												setTooltipData={setTooltipData}
											/>
										</div>
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
							globalState={globalState}
							_course={course}
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
