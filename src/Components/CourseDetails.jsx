import React, { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
// import 'react-tooltip/dist/react-tooltip.css'

const randomImage1 = "https://source.unsplash.com/600x499/?learing/programming";
// const randomImage3 = "https://source.unsplash.com/600x501/?learing"
// const randomImage4 = "https://source.unsplash.com/600x502/?learing"
// const randomImage5 = "https://source.unsplash.com/600x498/?learing"

function CourseDetails({ course, setIsOpen, setTooltipData }) {
	const data = [
		{ heading: course?.title },
		{ updatedAt: course?.updatedAt },
		{ level: "42.5 total hours All Levels Subtitles" },
		{ subHeading: course?.description },
		{
			objectives: [
				{ name: "You will master the programming language by" },
				{ name: "You will master the Python programming" },
			],
		},
	];
	const rating = course?.rating?.length | 4.5;
	const Stars = (props) => {
		let stars = [];

		for (let i = 0; i < parseInt(props.stars); i++) {
			stars.push(<MdStarRate color='#f3ca8c' key={i} />);
		}

		return <div className='flex items-center text-slate-500'>{stars}</div>;
	};

	return (
		<>
			<HashLink
				to={
					`/${course?.price > 0 ? "paid-course" : "free-course"}/${course.id}` + "#"
				}
				data-tooltip-id={`my-tooltip`}
				// data-tooltip-content= {[<p>fdgdgd</p>]}
				onMouseEnter={() => {
					setIsOpen(true);
					setTooltipData(data);
				}}
				onMouseLeave={() => setIsOpen(false)}>
				<div className='h-32'>
					<img
						src={`https://source.unsplash.com/600x499/?programming/${course?.title}`}
						alt={`course`}
						className='h-full w-full bg-slate-100 object-cover'
					/>
				</div>
				<h2 className='w-64 font-bold text-xl'>
					{course?.title?.length > 40
						? course?.title.slice(0, 40) + "..."
						: course?.title}
				</h2>
				<small className=' text-slate-500'>{course?.author?.userName}</small>
				<div className='flex gap-2'>
					<h2>{rating}</h2>
					<Stars stars={rating} />
					<p>({`${course?.rating?.length | 40}`})</p>
				</div>
				<p className='flex gap-1'>
					<span className='font-bold'>{`${
						course?.revisedPrice && "$" + course?.revisedPrice
					}`}</span>
					<span className='line-through text-slate-400'>{`${
						course?.price && "$" + course?.price
					}`}</span>
				</p>
			</HashLink>
		</>
	);
}

export default CourseDetails;
