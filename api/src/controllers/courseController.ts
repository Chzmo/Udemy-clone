import { response } from "express";
import { db } from "../utils/db.server";

type Course = {
	id: string;
	title: string;
	price: number;
	revisedPrice: number;
	description: string;
	fullDescription: string;
	thumbnail: string;
};

export const createCourse = async (
	authorId: string,
	categoryId: string,
	course: Omit<Course, "id">
) => {
	const { title, description, thumbnail } = course;
	const price = parseInt(course.price.toString());
	const revisedPrice = parseInt(course.revisedPrice.toString());
	const createdCourse: object = await db.course.create({
		data: {
			title,
			description,
			fullDescription: "halla",
			price,
			revisedPrice,
			thumbnail,
			authorId,
			categoryId: categoryId,
		},
		select: {
			id: true,
			createdAt: true,
			updatedAt: true,
			title: true,
			description: true,
			fullDescription: true,
			price: true,
			revisedPrice: true,
			thumbnail: true,
			// authorId: true,
			// categotyId: true
		},
	});

	return createdCourse;
};

export const enrollCourse = async (userId: string, courseId: string) => {
	return await db.userOnCourse.create({
		data: {
			userId,
			courseId,
		},
	});
};

export const getCourseByAuthor = async (authorId: string) => {
	try {
		return await db.course.findMany({
			where: {
				authorId,
			},
			select: {
				id: true,
				createdAt: true,
				updatedAt: true,
				title: true,
				description: true,
				fullDescription: true,
				price: true,
				revisedPrice: true,
				thumbnail: true,
				author: {
					select: {
						id: true,
						userName: true,
					},
				},
				category: {
					select: {
						title: true,
					},
				},
				requirements: true,
				rating: {
					select: {
						rating: {
							select: {
								value: true,
							},
						},
					},
				},
			},
		});
	} catch (error) {
		console.log(error);
		response.send();
	}
};

export const getCoursesByCategory = async (categoryId: any) => {
	const id = categoryId.toString();

	try {
		return await db.course.findMany({
			where: {
				category: {
					id,
				},
			},
			select: {
				id: true,
				createdAt: true,
				updatedAt: true,
				title: true,
				description: true,
				fullDescription: true,
				price: true,
				revisedPrice: true,
				thumbnail: true,
				author: {
					select: {
						id: true,
						userName: true,
					},
				},
				category: {
					select: {
						title: true,
					},
				},
				requirements: true,
				rating: {
					select: {
						rating: {
							select: {
								value: true,
							},
						},
					},
				},
			},
		});
	} catch (error) {
		response.status(500).json().send(error);
	}
};

export const getCourse = async (id: string) => {
	return await db.course.findUnique({
		where: {
			id,
		},
		select: {
			id: true,
			createdAt: true,
			updatedAt: true,
			title: true,
			description: true,
			fullDescription: true,
			price: true,
			revisedPrice: true,
			thumbnail: true,
			categoryId: true,
			authorId: true,
			author: {
				select: {
					id: true,
					userName: true,
				},
			},
			category: {
				select: {
					id: true,
					title: true,
				},
			},
			requirements: true,
			objective: true,
			rating: {
				select: {
					rating: {
						select: {
							value: true,
						},
					},
				},
			},
		},
	});
};

export const updateCourse = async (course: Omit<Course, "id">, id: string) => {
	const { title, description, thumbnail, fullDescription } = course;
	const price = parseInt(course.price.toString());
	const revisedPrice = parseInt(course.revisedPrice.toString());
	return db.course.update({
		where: {
			id,
		},
		data: {
			title,
			description,
			fullDescription,
			price,
			revisedPrice,
			thumbnail,
		},
		select: {
			id: true,
			createdAt: true,
			updatedAt: true,
			title: true,
			description: true,
			fullDescription: true,
			price: true,
			revisedPrice: true,
			thumbnail: true,
			categoryId: true,
			authorId: true,
		},
	});
};

export const deleteCourse = async (id: string) => {
	try {
		return await db.course.delete({
			where: {
				id,
			},
		});
	} catch (error) {
		response.send();
	}
};
