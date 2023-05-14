import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import Footer from "../../Components/Footer/Footer";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

import eventbrite from "./../../assets/icons/eventbrite-dark.svg";
import boxd from "./../../assets/icons/box-dark.svg";
import volkswagen from "./../../assets/icons/volkswagen-dark.svg";
import netapp from "./../../assets/icons/netapp-dark.svg";
import nasdaq from "./../../assets/icons/nasdaq-dark.svg";

function Login() {
	return (
		<>
			<div className='flex items-center justify-center py-12'>
				<div className='flex flex-col gap-3 w-full px-6 sm:px-0 xsm:w-auto'>
					<div className='flex flex-col gap-2'>
						<h2 className='font-[700] text-sm'>Log in to your Udemy account</h2>
						<div className='flex px-3 py-2 gap-3 border border-black items-center hover:cursor-pointer hover:bg-slate-100 xsm:w-[22rem]'>
							<FcGoogle size={33} />
							<h2 className='font-bold text-sm '>Continue with Google</h2>
						</div>
						<div className='flex px-3 py-2 gap-3 border border-black items-center hover:cursor-pointer hover:bg-slate-100 xsm:w-[22rem]'>
							<SiFacebook color='#4267b2' size={33} />
							<h2 className='font-bold text-sm '>Continue with Facebook</h2>
						</div>
						<div className='flex px-3 py-2 gap-3 border border-black items-center hover:cursor-pointer hover:bg-slate-100 xsm:w-[22rem]'>
							<BsApple color='#1c1d1f' size={33} />
							<h2 className='font-bold text-sm '>Continue with Apple</h2>
						</div>
						<div className='flex flex-col items-start px-3 py-2 gap-1 border border-black hover:cursor-pointer h-16 xsm:w-[22rem]'>
							<p className='font-bold text-sm '>Email</p>
							<input type='email' className='w-full outline-none' />
						</div>
						<div className='flex px-3 py-2 gap-3 border border-black items-center hover:cursor-pointer h-16 hover:bg-slate-100 xsm:w-[22rem]'>
							<p className='font-bold text-sm '>Password</p>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<button className='w-full bg-purple-700 py-3 font-bold text-white font-sm'>
							Login
						</button>
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<p className='text-sm'>
							or{" "}
							<HashLink className='text-[1rem] text-[#8243d0] font-bold'>
								Forgot Password
							</HashLink>
						</p>
						<hr className='w-full' />
						<p className='text-sm'>
							Don't have an account? Sign up?{" "}
							<HashLink className='text-[1rem] text-[#8243d0] font-bold'>
								Sign up
							</HashLink>
						</p>
						<HashLink className='text-sm text-[#8243d0] font-bold'>
							Log in with your organization
						</HashLink>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-4 md:flex-row justify-between px-7 py-7 border-b border-slate-500 bg-[#1c1d1f]'>
				<p className='text-xl font-bold text-white'>
					Top companies choose{" "}
					<HashLink className='text-purple-300 hover:underline'>
						Udemy Business
					</HashLink>{" "}
					to build in-demand career skills.
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
		</>
	);
}

export default Login;
