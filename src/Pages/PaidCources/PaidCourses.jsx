import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../Utils/Query";
import { useParams } from "react-router-dom";

import Header from "./Header";
import CartDetails from "./CartDetails";
import WhatYouLearn from "./WhatYouLearn";
import Companies from "../../Components/Companies/Companies";
import CourseContent from "../../Components/CourseContent/CourseContent";
import Requirements from "../../Components/Requirements/Requirements";
import Description from "../../Components/Description/Description";
import Related from "./Related";
import Instructor from "./Instructor";
import ReviewCourse from "./ReviewCourse";
import Footer from "../../Components/Footer/Footer";

import eventbrite from "./../../assets/icons/eventbrite-dark.svg";
import boxd from "./../../assets/icons/box-dark.svg";
import volkswagen from "./../../assets/icons/volkswagen-dark.svg";
import netapp from "./../../assets/icons/netapp-dark.svg";
import nasdaq from "./../../assets/icons/nasdaq-dark.svg";
import logo from "./../../assets/logo/logo-udemy-inverted.svg";

function PaidCourses() {
	const { courseId } = useParams();
	const [course, setCourse] = useState(null);
	const [loadindCourse, setLoadingCourse] = useState(false);

	useEffect(() => {
		setLoadingCourse(true);
		const courseData = fetchData("/api/course/", courseId);
		courseData.then((response) => {
			if (response.ok) {
				response.json().then((data) => {
					setCourse(data);
					setLoadingCourse(false);
				});
			}
		});
	}, [courseId]);

	return (
		<>
			<Header course={course} loadindCourse={loadindCourse} />
			<div className='flex md:flex-row mt-3.5 gap-4 w-[90%] md:flex md:gap-6 m-auto md:w-[81%] mb-12'>
				<div className='flex flex-col w-full lg:w-4/5 gap-5'>
					<WhatYouLearn course={course} loadindCourse={loadindCourse} />
					<Companies />
					<CourseContent course={course} loadindCourse={loadindCourse} />
					<Requirements course={course} loadindCourse={loadindCourse} />
					<Description course={course} loadindCourse={loadindCourse} />
					<Related course={course} />
					<Instructor course={course} />
					<ReviewCourse course={course} />
				</div>
				<CartDetails course={course} />
			</div>
			<div className='flex flex-col gap-4 md:flex-row justify-between px-7 py-7 border-b border-slate-500 bg-[#1c1d1f]'>
				<p className='text-xl font-bold text-white'>
					Top companies choose{" "}
					<Link className='text-purple-300 hover:underline'>Udemy Business</Link> to
					build in-demand career skills.
				</p>
				<div className='flex flex-1 items-start justify-evenly sm:justify-between flex-wrap'>
					<img src={nasdaq} alt='' />
					<img src={volkswagen} alt='' />
					<img src={boxd} alt='' />
					<img src={netapp} alt='' />
					<img src={eventbrite} alt='' />
				</div>
			</div>
			<Footer />
			<div className='flex flex-col gap-4 md:flex-row justify-between p-7 pb-20 bg-[#1c1d1f]'>
				<div className='w-24'>
					<img src={logo} alt='logo' className='w-full h-full' />
				</div>
				<small className='text-white'>© 2023 chzmo.</small>
			</div>
			{/* BUY NOW */}
			<div className='flex py-2 px-7 sticky bottom-0 justify-between shadow-lg items-center bg-white sm:hidden gap-5'>
				<p className='font-bold text-xl'>{`$88.99`}</p>
				<button className='py-3 border flex-1 px-16 bg-purple-600 text-white font-bold'>
					Buy Now
				</button>
			</div>
		</>
	);
}

export default PaidCourses;
