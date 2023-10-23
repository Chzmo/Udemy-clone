import { response } from "express";
import { db } from "../utils/db.server";

// import { v4 as uuidv4 } from "uuid";

type CourseRating = {
	courseId: string;
	userId: string;
	ratingScore: number;
	review: string;
	ratingId: string;
};

export const createRating = async (courseRating: CourseRating) => {
	const { courseId, userId, ratingScore, review } = courseRating;

	return await db.$transaction(async (txt) => {
		const getRating = await txt.userOnCourseRating.findFirst({
			where: {
				AND: [{ userId }, { courseId }],
			},
		});

		// It should return null
		if (getRating) throw new Error("Cant create a dublicate key");

		const user = await db.user.findUnique({
			where: {
				id: userId,
			},
			select: {
				enrolled: {
					select: {
						courseId: true,
					},
				},
			},
		});

		if (!user || !user.enrolled[0] || !(user.enrolled[0].courseId === courseId)) {
			throw new Error("Cant create a dublicate key");
		}

		const rating = await txt.rating.create({
			data: {
				value: ratingScore,
				review,
			},
			select: {
				id: true,
			},
		});

		const courseRating = await txt.userOnCourseRating.create({
			data: {
				courseId,
				userId,
				ratingId: rating.id,
			},
		});

		return courseRating;
	});
};

export const deleteRating = async (ratingId: string) => {
	return await db.rating.delete({
		where: {
			id: ratingId,
		},
	});
};
