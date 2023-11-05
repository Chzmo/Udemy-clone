export const fetchData = async (endPoint, id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
	return await fetch(VITE_APP_BASE_URL + endPoint + id);
};

export const postData = async (endPoint, body, token = "", Id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
	const customHeaders = new Headers();
	customHeaders.append("Content-Type", "application/json");
	customHeaders.append("Authorization", "Bearer " + token);

	const options = {
		method: "POST",
		headers: customHeaders,
		body: JSON.stringify(body),
	};

	return await fetch(VITE_APP_BASE_URL + endPoint + Id, options);
};

export const updateData = async (endPoint, body, token = "", Id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
	const customHeaders = new Headers();
	customHeaders.append("Content-Type", "application/json");
	customHeaders.append("Authorization", "Bearer " + token);

	const options = {
		method: "PUT",
		headers: customHeaders,
		body: JSON.stringify(body),
	};

	return await fetch(VITE_APP_BASE_URL + endPoint + Id, options);
};

export const deleteData = async (endPoint, token = "", Id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
	const customHeaders = new Headers();
	customHeaders.append("Content-Type", "application/json");
	customHeaders.append("Authorization", "Bearer " + token);

	const options = {
		method: "DELETE",
		headers: customHeaders,
	};

	return await fetch(VITE_APP_BASE_URL + endPoint + Id, options);
};
