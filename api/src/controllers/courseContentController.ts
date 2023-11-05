import { db } from "../utils/db.server";

export const createCourseContent = async (title: string, courseId: string) => {
	const courseContent = await db.content.create({
		data: { title, courseId },
		select: {
			id: true,
			title: true,
			contentSection: {
				select: {
					id: true,
					title: true,
					url: true,
					author: true,
				},
			},
		},
	});

	return courseContent;
};

export const getCourseContent = async (contentId: string) => {
	const courseContent = await db.content.findUnique({
		where: { id: contentId },
		select: {
			id: true,
			title: true,
			contentSection: {
				select: {
					id: true,
					title: true,
					url: true,
					author: true,
				},
			},
		},
	});

	return courseContent;
};

// UPDATE COURSE CONTENT
export const updateCourseContent = async (title: string, id: string) => {
	const courseContent = await db.content.update({
		where: { id },
		data: { title },
		select: {
			id: true,
			title: true,
			contentSection: {
				select: {
					id: true,
					title: true,
					url: true,
					author: true,
				},
			},
		},
	});

	return courseContent;
};
