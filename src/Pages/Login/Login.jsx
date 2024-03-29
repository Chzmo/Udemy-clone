import { useState } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useClickOutside } from "@mantine/hooks";
import jwtDecode from "jwt-decode";

import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { BsApple } from "react-icons/bs";

import Footer from "../../Components/Footer/Footer";
import { postData } from "../../Utils/Query";

import eventbrite from "./../../assets/icons/eventbrite-dark.svg";
import boxd from "./../../assets/icons/box-dark.svg";
import volkswagen from "./../../assets/icons/volkswagen-dark.svg";
import netapp from "./../../assets/icons/netapp-dark.svg";
import nasdaq from "./../../assets/icons/nasdaq-dark.svg";

function Login() {
	const [isEmailOpen, setIsEmailOpen] = useState(false);
	const [isPasswordOpen, setIsPasswordOpen] = useState(false);
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const signIn = useSignIn();
	const isAuthenticated = useIsAuthenticated();
	const navigate = useNavigate();

	const responseGoogle = (response) => {
		localStorage.setItem("user", JSON.stringify(response.credential));
		const decode = jwtDecode(localStorage.getItem("user"));
		const { name, sub, picture, email } = decode;
		const doc = {
			_id: sub,
			_type: "user",
			userName: name,
			image: picture,
			email: email,
		};

		console.log(doc);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		if (email && password) {
			const body = { email, password };
			setLoading(true);

			try {
				setLoading(true);
				const response = await postData("/api/login", body);
				const data = await response.json();

				if (
					signIn({
						token: data.token,
						tokenType: "Bearer",
						expiresIn: 3600,
						authState: {
							userName: data.userName,
							email: data.email,
							userId: data.id,
						},
					})
				) {
					navigate("/");
					setLoading(false);
				}
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		} else {
			alert("email and password");
		}
	};

	if (isAuthenticated) {
		navigate("/");
	}

	return (
		<>
			<div className='flex items-center justify-center py-12'>
				<div className='flex flex-col gap-3 w-full px-6 sm:px-0 xsm:w-auto'>
					<div className='flex flex-col gap-2'>
						<h2 className='font-[700] text-md'>Log in to your Udemy account</h2>
						{/* <div className='flex px-3 py-2 gap-3 border border-black items-center hover:cursor-pointer hover:bg-slate-100 xsm:w-[22rem]'>
							<FcGoogle size={33} />
							<h2 className='font-bold text-sm '>Continue with Google</h2>
						</div> */}
						<GoogleLogin
							className=' text-slate-900'
							onSuccess={(response) => responseGoogle(response)}
							onFailure={(response) => console.log(response)}
							cookiePolicy='single_host_origin'
						/>
						{/* <div className='flex px-3 py-2 gap-3 border border-black items-center hover:cursor-pointer hover:bg-slate-100 xsm:w-[22rem]'>
							<SiFacebook color='#4267b2' size={33} />
							<h2 className='font-bold text-sm '>Continue with Facebook</h2>
						</div>
						<div className='flex px-3 py-2 gap-3 border border-black items-center hover:cursor-pointer hover:bg-slate-100 xsm:w-[22rem]'>
							<BsApple color='#1c1d1f' size={33} />
							<h2 className='font-bold text-sm '>Continue with Apple</h2>
						</div> */}
						{/* <div
							onClick={() => setIsEmailOpen(true)}
							className='flex flex-col justify-center px-3 py-2 gap-1 border border-black hover:cursor-pointer h-16 xsm:w-[22rem]'>
							<p
								className={`font-bold text-sm duration-900 ${
									isEmailOpen && "text-slate-500"
								}`}>
								Email
							</p>
							<input
								onFocus={0}
								tabIndex={0}
								type='email'
								name='email'
								required
								className={`w-full outline-none duration-900 ${
									isEmailOpen ? "h-full" : "h-0"
								}`}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div> */}
						{/* <div
							onClick={() => setIsPasswordOpen(true)}
							className='flex flex-col justify-center px-3 py-2 gap-1 border border-black hover:cursor-pointer h-16 xsm:w-[22rem]'>
							<p
								className={`font-bold text-sm duration-900 ${
									isPasswordOpen && "text-slate-500"
								}`}>
								Password
							</p>
							<input
								onFocus={0}
								tabIndex={0}
								type='password'
								name='password'
								required
								value={password}
								className={`w-full outline-none duration-900 focus:bg-white ${
									isPasswordOpen ? "h-full" : "h-0"
								}`}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div> */}
					</div>
					{/* <div className='flex flex-col gap-2'>
						<button
							type='submit'
							className='w-full bg-[#a435f0] py-3 font-bold text-white font-sm '>
							{loading ? "Loading..." : "Log in"}
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
					</div> */}
				</div>
			</div>

			{/* FOOTER  */}
			<div
				onClick={() => {
					setIsEmailOpen(false);
					setIsPasswordOpen(false);
				}}
				className='flex flex-col gap-4 md:flex-row justify-between px-7 py-7 border-b border-slate-500 bg-[#1c1d1f]'>
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
