import { db } from "../utils/db.server";

type CoursesObjectives = Array<{
	title: string;
	courseId: string;
}>;

export const createCourseObjective = async (
	coursesObjectives: CoursesObjectives,
	courseId: string
) => {
	// return await db.$transaction(async (txt) => {
	const deletedCourseObjectives = await db.ojective.deleteMany({
		where: {
			courseId,
		},
	});

	if (deletedCourseObjectives) {
		const coursesObjectivesData = await db.ojective.createMany({
			data: coursesObjectives,
		});

		return coursesObjectivesData;
	}

	throw new Error("Failed to create objectives");
	// });
};
