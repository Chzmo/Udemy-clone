import { db } from "../utils/db.server";

export const createTopCategory = async (title: string) => {
	const createTopCategory: object = await db.topCategory.create({
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

	return createTopCategory;
};

export const getTopCategories = async () => {
	const getTopCategories: object = db.topCategory.findMany({
		select: {
			id: true,
			createdAt: true,
			updatedAt: true,
			title: true,
			category: {
				select: {
					id: true,
					createdAt: true,
					updatedAt: true,
					title: true,
				}
			}
		},
	});

	return getTopCategories;
};
