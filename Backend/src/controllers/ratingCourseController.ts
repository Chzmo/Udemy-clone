import { response } from "express";
// import { v4 as uuidv4 } from "uuid";
import { db } from "../utils/db.server";

type CourseRating = {
	courseId: number;
	userId: number;
	ratingScore: number;
	review: string;
	ratingId: number;
};

export const createRating = async (courseRating: CourseRating) => {
	const { courseId, userId, ratingScore, review } = courseRating;

	try {
		return await db.$transaction(async (txt) => {
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
	} catch (error) {
		return response.send({ error });
	}
};

export const deleteRating = async (courseRating: CourseRating) => {
	const { courseId, userId, ratingId } = courseRating;
	try {
		return await db.userOnCourseRating.deleteMany({
			where: {
				AND: [{ ratingId }, { userId }, { courseId }],
			},
		});
	} catch (error) {
		response.send({ error });
	}
};
