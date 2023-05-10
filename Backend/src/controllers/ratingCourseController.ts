import { response } from "express";
import { db } from "../utils/db.server";

// import { v4 as uuidv4 } from "uuid";

type CourseRating = {
	courseId: number;
	userId: number;
	ratingScore: number;
	review: string;
	ratingId: number;
};

export const createRating = async (courseRating: CourseRating) => {
	const { courseId, userId, ratingScore, review } = courseRating;

	return await db.$transaction(async (txt) => {
		const getRating = await txt.userOnCourseRating.findFirst({
			where: {
				AND: [{ userId }, { courseId }],
			},
		});

		if (getRating) throw new Error("Cant create a dublicate key");

		const user = db.user.findUnique({
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

		if (user[0]) {
			return user[0];
		} else {
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

export const deleteRating = async (ratingId: number) => {
	return await db.rating.delete({
		where: {
			id: ratingId,
		},
	});
};
