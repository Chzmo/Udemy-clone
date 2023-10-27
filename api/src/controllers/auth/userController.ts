import { db } from "../../utils/db.server";
import { createUserSchema } from "../../utils/customTypes";

type User = {
	userName: string;
	email: string;
	image: string;
};

export const listUsers = async () => {
	return db.user.findMany({
		select: {
			id: true,
			email: true,
			userName: true,
			image: true,
		},
	});
};

export const getUser = async (id: string) => {
	return await db.user.findUnique({
		where: {
			id,
		},
		select: {
			id: true,
			email: true,
			userName: true,
			image: true,
		},
	});
};

export const updatedUser = async (
	user: Omit<createUserSchema, "id">,
	id: string
) => {
	const { email, userName, image } = user;
	return db.user.update({
		where: {
			id,
		},
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
		},
	});
};

export const deleteUser = async (id: string): Promise<void> => {
	await db.user.delete({
		where: {
			id,
		},
	});
};
