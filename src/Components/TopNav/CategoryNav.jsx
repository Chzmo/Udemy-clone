import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

function CategoryNav({
	isCatergoryNavOpen,
	setIsCatergoryNavOpen,
	globalState,
}) {
	const [isLoadingTopics, setIsLoadingTopics] = useState(null);
	const [categories, setCategories] = useState(null);
	const [topics, setTopics] = useState(null);

	useEffect(() => {
		setTopics(null);
	}, [categories]);

	return (
		<>
			<div
				className={`h-screen absolute border border-slate-300 min-w-64 top-12 z-10 bg-white -left-8 ${
					isCatergoryNavOpen ? "flex" : "hidden"
				} ${!globalState?.topCategories && "hidden"}`}
				onMouseEnter={() => {
					setIsCatergoryNavOpen(true);
				}}
				onMouseLeave={() => {
					setIsCatergoryNavOpen(false);
				}}>
				<div className='h-screen w-64 flex flex-col hover:text-black py-4 gap-4'>
					{globalState?.topCategories &&
						globalState?.topCategories?.map((topCategory, index) => {
							return (
								<Link
									key={topCategory?.id}
									className='px-3 hover:text-purple-800 flex items-center justify-between w-full'
									onMouseEnter={() => setCategories(topCategory.category)}
									onMouseLeave={() => setTopics(null)}>
									<p>{topCategory?.title}</p> <BiChevronRight />
								</Link>
							);
						})}
				</div>
				<div
					className={`h-screen w-64 border-l flex-col  top-0 py-4 gap-4 ${
						categories ? "flex" : "hidden"
					}`}
					onMouseEnter={() => setIsCatergoryNavOpen(true)}>
					{categories &&
						categories?.map((course, index) => {
							return (
								<Link
									key={index}
									className='px-3 hover:text-purple-800 flex items-center justify-between w-full'
									onMouseEnter={() => {
										setTopics(course?.title);
										setIsLoadingTopics(true);
									}}>
									<p>{course?.title}</p> <BiChevronRight />
								</Link>
							);
						})}
				</div>

				<div
					className={`h-screen px-3 w-64 border-l flex flex-col gap-4 top-0 py-4 ${
						!topics && "hidden"
					}`}
					onMouseLeave={() => setIsCatergoryNavOpen(false)}>
					<h2 className='font-semibold text-sm text-slate-600 '>Popular topics</h2>
					{isLoadingTopics ? (
						<>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
								return (
									<div
										key={index}
										className='animate-pulse w-full h-5 bg-slate-200'></div>
								);
							})}
						</>
					) : (
						<>
							{[1, 2, 3, 4, 5, 6, 7, 8].map((topics, index) => {
								return (
									<Link
										to={`/topic/`}
										key={index}
										className='hover:text-purple-800 flex items-center justify-between w-full'>
										Python
									</Link>
								);
							})}
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default CategoryNav;
