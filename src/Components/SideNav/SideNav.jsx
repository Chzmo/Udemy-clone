import React, { useState } from "react";
import { useIsAuthenticated } from "react-auth-kit";

import { RiCloseFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";

import SideMenu from "./SideMenu";

const categories = [
	{
		name: "Web Development",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
	{
		name: "Mobile Development",
		subCategories: [
			{ name: "Google Flutter" },
			{ name: "Android Development" },
			{ name: "iOS Development" },
			{ name: "React Native" },
			{ name: "Dart (programming Language)" },
			{ name: "Swift" },
			{ name: "SwiftUI" },
			{ name: "Kotlin" },
			{ name: "Mobile App Development" },
		],
	},
	{
		name: "Game Development",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
	{
		name: "Entrepreneurship",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
	{
		name: "Business Analytics & Intellience",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
	{
		name: "Digital Marketing",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
	{
		name: "Graphic Design & Illustration",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
	{
		name: "IT Certifications",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
	{
		name: "Personal Transformation",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
	{
		name: "All Categories",
		subCategories: [
			{ name: "Web Development" },
			{ name: "JacaScript" },
			{ name: "React Js" },
			{ name: "CSS" },
			{ name: "Angular" },
			{ name: "Node.js" },
			{ name: "ASP.NET Core" },
			{ name: "Typescript" },
			{ name: "HTML5" },
		],
	},
];
function SideNav({ isSideNavOpen, setIsSideNavOpen, handleSideNav }) {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
	const [subCategories, setSubCategories] = useState(null);

	const isAuthenticated = useIsAuthenticated();

	return (
		<>
			{/* Black Opacity */}
			<div
				className={`static bg-black opacity-40 top-0 left-0 right-0 h-screen
          z-40 fixed ${isSideNavOpen ? "" : "hidden"}`}
				onClick={() => setIsSideNavOpen(false)}
			></div>

			{/* Close icon */}
			<div
				className={`static fixed bg-white  
          right-3 rounded-full flex items-center 
          justify-center z-40 p-3 duration-500
           ${isSideNavOpen ? "top-3" : " -top-12"}`}
				onClick={() => {
					setIsSideNavOpen(!isSideNavOpen);
					handleSideNav();
				}}
			>
				<RiCloseFill size={20} />
			</div>

			{/* Side Nav */}
			<div
				className={`static bg-white h-screen top-0 z-40 overflow-hidden overflow-y-scroll fixed
            w-4/5 duration-500
            ${isSideNavOpen ? " left-0 " : " -left-full"}
          `}
				onScroll={(e) => e.stopPropagation()}
				onTouchMove={(e) => e.stopPropagation()}
			>
				<div className='relative h-screen pb-[100px]'>
					<SideMenu
						isSideMenuOpen={isSideMenuOpen}
						setIsSideMenuOpen={setIsSideMenuOpen}
						subCategories={subCategories}
					/>
					<div className='flex flex-col gap-2 px-3 mt-4 mb-3'>
						{isAuthenticated ? (
							<>welcome</>
						) : (
							<>
								<Link to='/login' className='text-purple-800'>
									Log in
								</Link>
								<Link to='/register' className='text-purple-800'>
									Sign up
								</Link>
							</>
						)}
					</div>
					<hr />

					<div className='flex flex-col gap-2 my-3 px-3'>
						<small className='text-slate-600 font-bold'>Most popular</small>
						{categories &&
							categories.map((category) => {
								return (
									<div
										key={category.name}
										className='flex justify-between'
										onClick={() => {
											setIsSideMenuOpen(true);
											setSubCategories(category.subCategories);
										}}
									>
										<p className='w-4/5'>{category.name}</p> <BiChevronRight />
									</div>
								);
							})}
					</div>
					<hr />

					{/* 4dr5 */}

					<div className='flex flex-col gap-2 my-3 px-3'>
						<small className='text-slate-600 font-bold'>Most popular</small>
						<div className='flex justify-between'>
							<p className='w-3/4'>Udemy Business</p> <BiChevronRight />
						</div>
						<div className='flex justify-between'>
							<p className='w-3/4'>Get the app</p> <BiChevronRight />
						</div>
						<div className='flex justify-between'>
							<p className='w-3/4'>Invite Friends</p> <BiChevronRight />
						</div>
						<div className='flex justify-between'>
							<p className='w-3/4'>Help</p> <BiChevronRight />
						</div>
					</div>
					<div className='ml-3 mb-3 w-32'>
						<Link className='border border-black text-black py-2 text-sm px-4 pr-6 flex gap-1 items-center'>
							<AiOutlineGlobal size={20} /> English
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default SideNav;
