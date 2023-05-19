export const fetchData = async (endPoint, id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

	const response = await fetch(VITE_APP_BASE_URL + endPoint + id);
	const data = await response.json();
	return data;
};

export const postData = async (endPoint, body, token = "", id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

	const options = {
		method: "POST",
		headers: {
			"content-type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(body),
	};

	return await fetch(VITE_APP_BASE_URL + endPoint + id, options);
};
