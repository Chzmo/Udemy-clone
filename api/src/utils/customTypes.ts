import { z } from "zod";

const createUserSchema = z.object({
	id: z.number(),
	email: z
		.string({
			required_error: "email field is required",
			invalid_type_error: "email must be a string",
		})
		.email(),
	userName: z.string(),
	password: z.string(),
});

export type createUserSchema = z.infer<typeof createUserSchema>;

export const CourseType = z.object({
	title: z.string(),
	price: z.number(),
	categoryId: z.string(),
	revisedPrice: z.number(),
	authorId: z.string(),
	thumbnail: z.string().url(),
	description: z.string(),
	fullDescription: z.string(),
});

export const ratingType = z.object({
	userId: z.string(),
	courseId: z.string(),
	ratingId: z.string(),
	ratingScore: z.number(),
	review: z.string(),
});
