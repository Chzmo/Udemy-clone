import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchData, postData } from "../../../../Utils/Query";
import Spinner from "../Spinner/Spinner";
import CourseForm from "./CourseForm";
import DashboardNav from "../DashboardNav/DashboardNav";

function Courses() {
	const navigate = useNavigate();
	const userId = "65324c693ef056bdd52e7a04";
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzI0YzY5M2VmMDU2YmRkNTJlN2EwNCIsImlhdCI6MTY5NzkyNzYwOSwiZXhwIjoxNjk4MDE0MDA5fQ.PwhCrg0SS5iux1GPdqb3POoWpCKLGp400ERg6XXmeOU";
	const [createCourse, setCreateCourse] = useState(false);
	const initialFormInputs = {
		title: "",
		description: "",
		price: 0,
		categoryId: "",
		thumbnail: "",
	};
	const [formInputs, setformInputs] = useState(initialFormInputs);
	const [topCategories, setTopCategories] = useState(null);
	const [categories, setCategories] = useState(null);
	const [errors, setErrors] = useState({ formValidationError: null });
	const [loadingStates, setLoadingStates] = useState({ topCategories: true });

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
			},
			token
		);
		setformInputs(initialFormInputs);

		fetchCourseDetails
			.then((response) => {
				console.log(response);
				navigate("/dashboard/courses/" + response?.id);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	async function getData() {
		try {
			const data = await fetchData("/api/topcategories");
			setTopCategories(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData()
			.then(() => {
				setLoadingStates({ ...loadingStates, topCategories: false });
			})
			.catch((error) => {
				console.log(error);
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

	useEffect(() => {
		setCreateCourse(false);
	}, []);

	return (
		<>
			<DashboardNav />
			{loadingStates.topCategories && (
				<div className='flex min-h-[600px] w-full justify-center items-center'>
					<Spinner />
				</div>
			)}
			{createCourse && !loadingStates.topCategories ? (
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
				!loadingStates.topCategories && (
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

						<div className='flex min-h-[500px]'></div>
					</>
				)
			)}
		</>
	);
}

export default Courses;
