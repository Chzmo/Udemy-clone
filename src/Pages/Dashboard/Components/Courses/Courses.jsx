import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { fetchData, postData } from "../../../../Utils/Query";
import Spinner from "../Spinner/Spinner";
import CourseForm from "./CourseForm";
import DashboardNav from "../DashboardNav/DashboardNav";
import { ToastContainer } from "react-toastify";

function Courses() {
	const navigate = useNavigate();
	const authUser = jwtDecode(localStorage.getItem("_auth_state"));
	const token = localStorage.getItem("_auth");
	const userId = authUser?.id;
	const [createCourse, setCreateCourse] = useState(false);
	const initialFormInputs = {
		title: "",
		description: "",
		price: 0,
		categoryId: "",
		thumbnail: "",
	};

	const [courses, setCourses] = useState([]);
	const [categories, setCategories] = useState(null);
	const [topCategories, setTopCategories] = useState(null);
	const [formInputs, setformInputs] = useState(initialFormInputs);
	const [errors, setErrors] = useState({ formValidationError: null });
	const [loadingCourses, setLoadingCourses] = useState(true);
	const [loadingTopCategories, setLoadingTopCategories] = useState(true);

	const handleChange = (e) => {
		setformInputs({
			...formInputs,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (
			formInputs.title === "" ||
			formInputs.description === "" ||
			formInputs.categoryId === ""
		) {
			alert("fill all required fields");
			return;
		}

		// GET TOP CATEGORY ID
		const topCategoryId = topCategories?.filter((item) => {
			if (item.category.length > 0) {
				return item.category[0].id === formInputs.categoryId;
			}
			return false;
		})[0]?.id;

		// CREATE COURSE
		const fetchCourseDetails = postData(
			"/api/course",
			{
				...formInputs,
				topCategoryId,
				userId,
				authorId: userId,
				price: parseInt(formInputs.price),
				revisedPrice: 0,
				fullDescription: "",
			},
			token
		);
		setformInputs(initialFormInputs);

		fetchCourseDetails.then((response) => {
			if (response.status == 200) {
				response.json().then((data) => {
					navigate("/dashboard/courses/" + data?.id);
					console.log(data);
				});
			} else {
				console.log(response.json());
			}
		});
	};

	useEffect(() => {
		const getTopCategories = fetchData("/api/topcategories");
		getTopCategories.then((response) => {
			if (response.status == 200) {
				response.json().then((data) => {
					setTopCategories(data);
					setLoadingTopCategories(false);
				});
			} else {
				setLoadingTopCategories(false);
				console.log(response.json());
			}
		});
	}, []);

	useEffect(() => {
		const getCoursesByauthor = fetchData("/api/courses/author/", userId);
		getCoursesByauthor.then((response) => {
			if (response.status == 200) {
				response.json().then((data) => {
					setCourses(data);
					setLoadingCourses(false);
					console.log(data);
				});
			} else {
				console.log(response);
				setLoadingCourses(false);
			}
		});
	}, []);

	useEffect(() => {
		const data = topCategories?.reduce((acc, item) => {
			if (item.category.length > 0) {
				acc.push(...item.category);
			}
			return acc;
		}, []);
		setCategories(data);
	}, [topCategories]);

	if (!authUser) {
		//redirect
	}

	return (
		<>
			<DashboardNav />
			{loadingTopCategories && (
				<div className='flex min-h-[600px] w-full justify-center items-center'>
					<Spinner />
				</div>
			)}
			{createCourse && !loadingTopCategories ? (
				<>
					<CourseForm
						formInputs={formInputs}
						categories={categories}
						handleChange={handleChange}
						handleFormSubmit={handleFormSubmit}
						setCreateCourse={setCreateCourse}
					/>
				</>
			) : (
				!loadingTopCategories && (
					<>
						<div className='w-full flex justify-end mt-9'>
							<button
								onClick={() => {
									setCreateCourse(true);
								}}
								className='text-sm font-semibold border-[#5624d0] border-2 border-solid px-3 py-2 text-[#5624d0] hover:bg-[#5624d0] hover:text-[#1b1f23]'>
								CREATE COURSE
							</button>
						</div>
						{loadingCourses ? (
							<div className='flex min-h-[500px] w-full justify-center items-center'>
								<Spinner />
							</div>
						) : (
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[500px] w-full mt-3'>
								{courses &&
									courses?.map((course) => (
										<Link
											to={"/dashboard/courses/" + course.id}
											key={course.id}
											className='flex flex-col gap-3 p-4 border border-solid border-[#6b7280] text-[#6b7280]'>
											<h3 className='text-[#5624d0] font-semibold'>{course.title}</h3>
											<p>{course.description}</p>
										</Link>
									))}
							</div>
						)}
					</>
				)
			)}
			<ToastContainer hideProgressBar={true} theme='dark' autoClose={2000} />
		</>
	);
}

export default Courses;
