import express, { Request, Response } from "express";
import { validationResult, check } from "express-validator";

import * as courseContentController from "../controllers/courseContentController";
import { authMiddleware } from "../../middleware/authMiddleware";

const validateRequest = [
	check("title").notEmpty().withMessage("Title is required"),
	check("userId").notEmpty().withMessage("userId is required"),
];

export const courseContentRouter = express.Router();

courseContentRouter.post(
	"/:courseId",
	validateRequest,
	authMiddleware,

	async (request: Request, response: Response) => {
		const courseId: string = request.params.courseId;
		const errors = validationResult(request.body);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const courseContent = await courseContentController.createCourseContent(
				request.body.title,
				courseId
			);
			console.log(request.body);
			return response.status(200).json(courseContent);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);
