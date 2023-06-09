import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "react-auth-kit";

import Container from "./Container/Container";
import Home from "./Pages/Home";
import Search from "./Pages/Search/Search";
import PaidCourses from "./Pages/PaidCources/PaidCourses";
import FreeCourses from "./Pages/FreeCourses/FreeCourses";
import Login from "./Pages/Login/Login";

function App() {
	return (
		<AuthProvider
			authType={"localstorage"}
			authName={"_auth"}
			//cookieSecure= {false}   //{window.location.protocol === "https:"}
			//cookieDomain={window.location.hostname}
		>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<Container />} />
					<Route path='/' element={<Container />}>
						<Route path='/' element={<Home />} />
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/search/:searchTerm' element={<Search />} />
						<Route path='/paid-course/:courseName' element={<PaidCourses />} />
						<Route path='/free-course/:courseName' element={<FreeCourses />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
