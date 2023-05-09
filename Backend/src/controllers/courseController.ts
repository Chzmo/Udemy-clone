import { response } from "express";
import { db } from "../utils/db.server";

type Course = {
	id: number;
	name: string;
	title: string;
	price: number;
	revisedPrice: number;
	description: string;
	thumbnail: string;
};

export const createCourse = async (
	authorId: number,
	catergoryId: number,
	course: Omit<Course, "id">
) => {
	const { name, title, description, thumbnail } = course;
	const price = parseInt(course.price.toString());
	const revisedPrice = parseInt(course.revisedPrice.toString());
	const createdCourse: object = await db.course.create({
		data: {
			name,
			title,
			description,
			price: 0,
			revisedPrice: 0,
			thumbnail,
			authorId,
			categoryId: catergoryId,
		},
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
			// authorId: true,
			// categotyId: true
		},
	});

	return createdCourse;
};

export const getCoursesByCategory = async (categoryId: any) => {
	const id = parseInt(categoryId.toString());

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
				name: true,
				title: true,
				description: true,
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

export const getCourse = async (id: number) => {
	return await db.course.findUnique({
		where: {
			id,
		},
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
};

export const updateCourse = async (course: Omit<Course, "id">, id: number) => {
	const { name, title, description, thumbnail } = course;
	const price = parseInt(course.price.toString());
	const revisedPrice = parseInt(course.revisedPrice.toString());
	return db.course.update({
		where: {
			id,
		},
		data: {
			name,
			title,
			description,
			price,
			revisedPrice,
			thumbnail,
		},
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
		},
	});
};

export const deleteCourse = async (id: number) => {
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
