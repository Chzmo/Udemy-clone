export const fetchData = async (endPoint, id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

	const myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

	const response = await fetch(VITE_APP_BASE_URL + endPoint + id);
	const data = await response.json();
	return data;
};

export const postData = async (endPoint, id = "", body = null, token = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

	const options = {
		method: "POST",
		headers: {
			Authorization: token,
		},
		body,
	};

	const response = await fetch(VITE_APP_BASE_URL + endPoint + id, options);
	const data = await response.json();
	return data;
};
