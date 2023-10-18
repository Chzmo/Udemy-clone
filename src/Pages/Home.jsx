import React from "react";
import { useGlobalState } from "../Container/Container";
import Hero from "../Components/Hero/Hero";
import Courses from "../Components/Courses/Courses";
import Testimonial from "../Components/Testimonial";
import Categories from "../Components/Categories";
import Featured from "../Components/Featured/Featured";
import Footer from "../Components/Footer/Footer";

function Home() {
	const { globalState } = useGlobalState();
	console.log(globalState);
	return (
		<>
			<Hero />
			<Courses globalState={globalState} />
			<Testimonial />
			<Categories />
			<Featured />
			<Footer />
		</>
	);
}

export default Home;
