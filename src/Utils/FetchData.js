export const fetchData = async (endPoint, id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

	const myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

	const response = await fetch(VITE_APP_BASE_URL + endPoint + id);
	const data = await response.json();
	return data;
};

export const postData = async (endPoint, id = "", body = null) => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

	const myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

	var formData = new FormData();
	formData.append("image", imageAsset);
	formData.append("user_id", auth().user.id);
	formData.append("description", content);
	formData.append("project", project);

	if (body) {
		array.forEach((element) => {
			formData.append(`${""}`);
		});
	}

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		redirect: "follow",
		body: formData,
	};

	const response = await fetch(
		VITE_APP_BASE_URL + endPoint + id,
		requestOptions
	);
	const data = await response.json();
	return data;
};
