import { createUserSchema } from "../../utils/customTypes";
import { db } from "../../utils/db.server";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

type User = {
	userName: string;
	email: string;
	image: string;
};

// GENERATE A LOGIN TOKEN
const generateToken = (id: string) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
};

// GET UNIQUE USER BY ID
const getUserbByEmail = async (email: string) => {
	return db.user.findUnique({
		where: {
			email,
		},
		select: {
			id: true,
			email: true,
			userName: true,
			image: true,
		},
	});
};

// // LOGIN USER INTO THE SYSTEM
// export const loginUser = async (user: Omit<User, "userName">) => {
// 	const { email, password } = user;
// 	const authUser = await getUserbByEmail(email);

// 	if (authUser && (await bcrypt.compare(password, authUser.password))) {
// 		return {
// 			...authUser,
// 			token: generateToken(authUser.id.toString()),
// 		};
// 	} else {
// 		throw new Error("Invalid credentials");
// 	}
// };

// REGISTER NEW USER INTO THE SYSTEM
export const registerUser = async (user: Omit<createUserSchema, "id">) => {
	const { userName, email, image } = user;

	const userExists = await getUserbByEmail(email);
	const { existUserId }: any = userExists;

	if (userExists) {
		return { ...userExists, token: generateToken(existUserId) };
	}

	const registeredUser: object = await db.user.create({
		data: {
			userName,
			email,
			image,
		},

		select: {
			id: true,
			email: true,
			userName: true,
			image: true,
			createdAt: true,
			updatedAt: true,
		},
	});

	const { id }: any = registeredUser;
	return { ...registeredUser, token: generateToken(id) };
};
