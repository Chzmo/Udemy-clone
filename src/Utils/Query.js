export const fetchData = async (endPoint, id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

	const myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

	const response = await fetch(VITE_APP_BASE_URL + endPoint + id);
	const data = await response.json();
	return data;
};

export const postData = async (endPoint, body = null, token = "", id = "") => {
	const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
	var myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");

	if (token) {
		myHeaders.append("Authorization", "Bearer " + token);
	}

	var formdata = new FormData();
	formdata.append("email", "test@gmail.com");
	formdata.append("password", "password");

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: formdata,
		redirect: "follow",
	};

	const options = {
		method: "POST",
		headers: {
			Authorization: token,
		},
		body: JSON.stringify(body),
	};

	const response = await fetch(VITE_APP_BASE_URL + endPoint + id, options);
	const data = await response.json();
	return data;
};
