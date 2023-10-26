import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineGlobal } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import jwtDecode from "jwt-decode";

import logo from "../../assets/logo/logo-udemy.svg";
import SideNav from "../SideNav/SideNav";
import SearchInput from "../../Pages/Search/SearchInput";
import CategoryNav from "./CategoryNav";
import { GoogleLogin } from "@react-oauth/google";

function TopNav({ globalState }) {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	const [isSeachInputOpen, setIsSeachInputOpen] = useState(false);
	const [isCatergoryNavOpen, setIsCatergoryNavOpen] = useState(false);
	const [searchTearm, setSearchTearm] = useState("");

	const signIn = useSignIn();
	const isAuthenticated = useIsAuthenticated();
	const navigate = useNavigate();

	const responseGoogle = (response) => {
		localStorage.setItem("user", JSON.stringify(response.credential));
		const decode = jwtDecode(localStorage.getItem("user"));
		const { name, sub, picture, email } = decode;
		const doc = {
			_id: sub,
			userName: name,
			image: picture,
			email: email,
		};

		console.log(doc);
	};

	const handleLogin = async (e) => {
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

	const handleSideNav = useCallback(() => {
		if (isSideNavOpen) {
			return (document.body.style.display = "none");
		}
		document.body.style.overflow = "unset";
	}, []);

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchTearm) navigate("/search/" + searchTearm);
	};
	console.log(globalState.categories);
	return (
		<>
			<SideNav
				isSideNavOpen={isSideNavOpen}
				setIsSideNavOpen={setIsSideNavOpen}
				handleSideNav={handleSideNav}
			/>

			<SearchInput
				isSeachInputOpen={isSeachInputOpen}
				setIsSeachInputOpen={setIsSeachInputOpen}
			/>

			<div className='w-full bg-white flex py-3 px-6 gap-5 items-center justify-between shadow-lg sticky z-30 '>
				<div
					className='sm:hidden'
					onClick={() => {
						setIsSideNavOpen(true);
						handleSideNav();
					}}>
					<RxHamburgerMenu />
				</div>
				<Link to={`/`}>
					<img className='h-6 sm:h-9' src={logo} alt='logo' />
				</Link>
				<div
					className='hidden sm:flex relative'
					onMouseEnter={() => {
						setIsCatergoryNavOpen(true);
					}}>
					<p className='hover:text-purple-800 hover:cursor-pointer h-full'>
						Categories
					</p>
					<CategoryNav
						isCatergoryNavOpen={isCatergoryNavOpen}
						setIsCatergoryNavOpen={setIsCatergoryNavOpen}
						globalState={globalState}
					/>
				</div>
				<label
					htmlFor='search'
					className='
                        hidden sm:flex
                        flex-1 
                        gap-3 
                        items-center 
                        rounded-full 
                        border 
                        border-slate-700 
                        py-2 px-4
                        bg-slate-100'>
					<AiOutlineSearch />
					<form onSubmit={handleSearchSubmit} className='w-full'>
						<input
							type='text'
							name='search'
							placeholder='Seach for anything'
							className=' flex-1 border-none outline-none w-full bg-transparent text-sm'
							value={searchTearm}
							onChange={(e) => setSearchTearm(e.target.value)}
						/>
					</form>
				</label>
				<Link className='hidden md:flex'>Udemy Business</Link>
				<Link className='hidden lg:flex'> Teach on Udemy</Link>
				<MdOutlineShoppingCart size={23} className='hidden font-semibold sm:flex' />
				<div className='gap-2 items-center hidden sm:flex'>
					{isAuthenticated() ? (
						<>
							<Link className='border border-black py-1.5 font-semibold px-4'>
								Log out
							</Link>
						</>
					) : (
						<>
							<GoogleLogin
								className=' text-slate-900'
								onSuccess={(response) => responseGoogle(response)}
								onFailure={(response) => console.log(response)}
								cookiePolicy='single_host_origin'
							/>
						</>
					)}
					<button className='border border-black p-2.5'>
						<AiOutlineGlobal />
					</button>
				</div>
				<div className='flex items-center gap-2 sm:hidden'>
					<AiOutlineSearch
						size={20}
						onClick={() => {
							setIsSeachInputOpen(true);
						}}
					/>
					<div className='flex items-center'>
						<MdOutlineShoppingCart size={23} className='font-semibold' />
					</div>
				</div>
			</div>
		</>
	);
}

export default TopNav;
