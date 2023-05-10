import { response } from "express";
import { db } from "../utils/db.server";

export const createCategory = async (title: string) => {
	// return { title };
	try {
		const createCategory: object = db.category.create({
			data: {
				title,
			},
			select: {
				id: true,
				createdAt: true,
				updatedAt: true,
				title: true,
			},
		});
		return createCategory;
	} catch (error) {
		return response.status(400).send({ error });
	}

	return createCategory;
};

export const getCategories = async () => {
	const createCategory: object = db.category.findMany({
		select: {
			id: true,
			createdAt: true,
			updatedAt: true,
			title: true,
			course: {
				select: {
					id: true,
					createdAt: true,
					updatedAt: true,
					name: true,
					title: true,
					description: true,
					price: true,
					revisedPrice: true,
					thumbnail: true,
					authorId: true,
					categoryId: true,
					author: true,
					rating: true,
				},
			},

			// rating: true
		},
	});

	return createCategory;
};
