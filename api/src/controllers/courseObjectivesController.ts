import { db } from "../utils/db.server";

type CoursesObjectives = Array<{
	title: string;
	courseId: string;
}>;

export const createCourseObjective = async (
	coursesObjectives: CoursesObjectives
) => {
	return await db.$transaction(async (txt) => {
		const deletedCourseObjectives = await txt.ojective.deleteMany({
			where: {
				courseId: "6534d70ae87ef79d4b6bcdcc",
			},
		});

		if (deletedCourseObjectives.count >= 0) {
			const coursesObjectivesData = await txt.ojective.createMany({
				data: coursesObjectives,
			});

			return coursesObjectivesData;
		}

		throw new Error("Failed to create objectives");
	});
};
