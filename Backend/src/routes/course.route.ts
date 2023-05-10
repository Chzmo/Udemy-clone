import express from "express";
import { Request, Response } from "express";

import * as courseController from "../controllers/courseController";
import { authMiddleware } from "../../middleware/authMiddleware";
import { CourseType as Course } from "../utils/customTypes";

export const courseRouter = express.Router();
export const coursesRouter = express.Router();

// POST: Create Course
courseRouter.post(
	"/",
	authMiddleware,
	async (request: Request, response: Response) => {
		try {
			// const data = Course.refine(data => data.authorId === data.categoryId, {
			//     message: "fields should match",
			//     path: ["fields should match"]
			// })
			const course = Course.parse(request.body);
			const newCourse = await courseController.createCourse(
				request.body.authorId,
				request.body.categoryId,
				course
			);
			return response.status(200).json(newCourse);
		} catch (error: any) {
			return response.status(400).json(error);
		}
	}
);

// GET: List all Courses in a category
coursesRouter.get(
	"/:categoryId",
	async (request: Request, response: Response) => {
		try {
			const categoryId: number = parseInt(request.params.categoryId);
			return response
				.status(200)
				.json(await courseController.getCoursesByCategory(categoryId));
		} catch (error: any) {
			return response.status(400).json({ message: "Bad request" });
		}
	}
);

// GET: a Course by ID
courseRouter.get("/:id", async (request: Request, responce: Response) => {
	try {
		const id: number = parseInt(request.params.id, 10);
		return responce.status(200).json(await courseController.getCourse(id));
	} catch (error: any) {
		return responce.status(400).json({ message: "Bad request" });
	}
});

// PUT: UPDATE Course
// Params: CourseId
courseRouter.put(
	"/:id",
	authMiddleware,
	async (request: Request, response: Response) => {
		try {
			const course = Course.parse(request.body);
			const updatedCourse = await courseController.updateCourse(
				course,
				parseInt(request.params.id)
			);
			return response.status(200).json(updatedCourse);
		} catch (error: any) {
			return response.status(400).json(error);
		}
	}
);

// DELETE: Delete Course
// Params: id
courseRouter.delete(
	"/:id",
	authMiddleware,
	async (request: Request, response: Response) => {
		try {
			const id: number = parseInt(request.params.id, 10);
			await courseController.deleteCourse(id);
			return response
				.status(200)
				.json({ message: "Course has been successfully deleted" });
		} catch (error: any) {
			return response.status(500).json({ message: "Course not found" });
		}
	}
);
