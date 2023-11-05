import { response } from "express";
import { db } from "../utils/db.server";

export const createCategory = async (title: string, topCategoryId: string) => {
	const createCategory: object = await db.category.create({
		data: {
			title,
			topCategoryId,
		},
		select: {
			id: true,
			createdAt: true,
			updatedAt: true,
			title: true,
		},
	});
	return createCategory;
};

export const getCategories = async () => {
	try {
		return await db.category.findMany({
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
	} catch (error) {
		console.log(error);
		response.send();
	}
};
