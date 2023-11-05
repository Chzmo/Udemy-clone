import { db } from "../utils/db.server";
import { getCourseContent } from "./courseContentController";

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

	await db.contentSection.create({
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

	return await getCourseContent(contentId);
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
		select: {
			id: true,
			title: true,
			url: true,
			contentId: true,
			authorId: true,
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
