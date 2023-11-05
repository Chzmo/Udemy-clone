import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { fetchData } from "../Utils/Query";

import TopNav from "../Components/TopNav/TopNav";

function Container() {
	const [topCategories, setTopCategories] = useState([null]);
	const [loading, setLoading] = useState(false);

	const globalState = {
		loading,
		setLoading,
		topCategories,
		setTopCategories,
	};

	useEffect(() => {
		const categoriesData = fetchData("/api/topcategories");

		categoriesData.then((response) => {
			if (response.ok) {
				response.json().then((data) => {
					console.log(data);
					setTopCategories(data);
				});
			}
		});
	}, []);

	return (
		<div>
			<TopNav globalState={globalState} />
			<Outlet context={{ globalState }} />
		</div>
	);
}

export default Container;

export function useGlobalState() {
	return useOutletContext();
}
