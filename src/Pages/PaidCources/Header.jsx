import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

import Rating from "../../Components/Rating";
import { MdOndemandVideo } from "react-icons/md";
const randomImage1 = "https://source.unsplash.com/600x499/?learing";

function Header({ loadindCourse, course }) {
	return (
		<>
			<div
				className={`
                    fixed z-20 top-0 hidden md:flex flex-col justify-center px-6 py-3 w-full bg-[#1c1d1f] text-white shadow-lg
                `}>
				<div className='hidden md:flex flex-col gap'>
					<p className='font-bold'>{course?.title}</p>
					<small className='flex gap-1'>
						<Rating gap={1} />
						<Link className='text-purple-300'>(458,574 ratings)</Link>
						<p>1,702,710 students</p>
					</small>
				</div>
			</div>
			<div className='bg-[#1c1d1f] relative -z-20'>
				<div className='flex flex-col justify-center px-6 top-0 py-3 w-full bg-[#1c1d1f] -z-10 text-white'>
					<small className='flex md:hidden gap-2 items-center text-purple-300 font-bold'>
						<Link>Programming Languages</Link>
						<BiChevronRight />
						<Link>Python</Link>
					</small>
				</div>
				<div className='flex md:flex-row items-start flex-col-reverse gap-4 w-[90%] md:flex md:gap-6 m-auto md:w-[81%] text-white md:py-7'>
					<div
						className={`
                            w-full md:w-4/5 m-auto gap-2 self-end
                        `}>
						<small className='md:flex hidden w-3/4 gap-2 items-center text-purple-300 font-bold'>
							<Link>Development</Link>
							<BiChevronRight />
							<Link>Programming Languages</Link>
							<BiChevronRight />
							<Link>Python</Link>
						</small>
						<h1 className='font-bold text-[1.3rem] md:text-[2rem]'>
							{course?.title}
						</h1>
						<h2 className='text-[1rem] md:text-[1.4rem] pr-5 '>
							{course?.description}
						</h2>
						<div className='text-[.9rem] md:text-[1rem] flex gap-1 py-2 flex-wrap'>
							<Rating gap={1} />
							<Link className='text-purple-300'>(458,574 ratings)</Link>
							<p>1,702,710 students</p>
						</div>
						<div className='flex gap-2 items-center'>
							<p className='text-[.8rem] md:text-1rem]'>Created by </p>
							<Link className='text-purple-300 flex items'>
								<small>Zaliro</small>
							</Link>
						</div>
						<div className='flex gap-4 items-center mb-12 md:mb-0'>
							<small> Last updated 03/2021 </small>
							<small> English</small>
						</div>

						<div className='md:hidden block w-full h-max space-y-3'>
							<div className='flex gap-2'>
								<p className='font-bold text-[2rem] '>{`$88.99`}</p>
							</div>
							<div className='flex flex-col gap-2'>
								<button className='py-3 px-16 bg-purple-600 text-white font-bold'>
									Add to cart
								</button>
							</div>
							<div className='flex flex-col items-center gap-1'>
								<small>30-Day Money-Back Guarantee </small>
								<small> Full Lifetime Access</small>
							</div>

							<div className='flex items-center justify-between'>
								<p className='underline font-bold p-1 hover:cursor-pointer mb-12'>
									Share
								</p>
								<p className='underline font-bold p-1 hover:cursor-pointer mb-12'>
									Gift this course
								</p>
								<p className='underline font-bold p-1 hover:cursor-pointer  mb-12'>
									Apply Coupon
								</p>
							</div>
						</div>
					</div>

					<div className='w-full md:w-2/5  '>
						<div className='flex flex-col '>
							<div className='w-full  '>
								<img
									src={randomImage1}
									alt={`course`}
									className='h-64 w-full sm:h-[19rem] md:h-52 bg-slate-100 object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
