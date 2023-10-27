import { db } from "../utils/db.server";

export const createCourseContent = async (title: string, courseId: string) => {
	const courseContent = await db.content.create({
		data: { title, courseId },
		select: {
			id: true,
			title: true,
		},
	});

	return courseContent;
};
