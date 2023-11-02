import { db } from "../utils/db.server";

type CourseTopic = {
	title: string;
	url: string;
	userId: string;
	thumbnail: string;
};

export const createCourseTopic = async (
	courseTopic: CourseTopic,
	contentId: string
) => {
	const { title, url, userId } = courseTopic;
	const coursesTopicData = await db.contentSection.create({
		data: {
			title,
			url,
			contentId,
			authorId: userId,
		},
		select: {
			id: true,
			title: true,
			url: true,
			contentId: true,
			authorId: true,
		},
	});

	return coursesTopicData;
};

export const updateCourseTopic = async (
	courseTopic: CourseTopic,
	id: string
) => {
	const { title, url, userId } = courseTopic;
	return db.contentSection.update({
		where: {
			id,
		},
		data: {
			title,
			url,
			authorId: userId,
		},
	});
};

export const deleteCourseTopic = async (id: string) => {
	return await db.contentSection.delete({
		where: {
			id,
		},
	});
};
