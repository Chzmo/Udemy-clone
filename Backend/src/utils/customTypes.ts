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
	name: z.string(),
	title: z.string(),
	price: z.number(),
	categoryId: z.number(),
	revisedPrice: z.number(),
	authorId: z.number().positive().gt(0),
	thumbnail: z.string().url(),
	description: z.string(),
});

export const ratingType = z.object({
	userId: z.number(),
	courseId: z.number(),
	ratingId: z.number(),
	ratingScore: z.number(),
	review: z.string(),
});
