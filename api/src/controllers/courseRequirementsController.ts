import { db } from "../utils/db.server";

type CourseRequirements = Array<{
	title: string;
	courseId: string;
}>;

export const createCourseRequirements = async (
	courseRequirements: CourseRequirements,
	courseId: string
) => {
	// return await db.$transaction(async (txt) => {
	const deletedCourseRequirements = await db.requirements.deleteMany({
		where: {
			courseId,
		},
	});

	if (deletedCourseRequirements) {
		const courseRequirementsData = await db.requirements.createMany({
			data: courseRequirements,
		});

		return courseRequirementsData;
	}

	throw new Error("Failed to create requirements");
	// });
};
