import express, { Request, Response } from "express";
import { validationResult, check } from "express-validator";

import * as courseObjectivesController from "../controllers/courseObjectivesController";
import { authMiddleware } from "../../middleware/authMiddleware";

const validateRequest = [
	check("*.title").notEmpty().withMessage("Title is required"),
	check("*.courseId").notEmpty().withMessage("Course is required"),
];

export const courseobjectivesRouter = express.Router();

courseobjectivesRouter.post(
	"/:courseId",
	validateRequest,
	authMiddleware,
	// body("topCategoryId").isString(),

	async (request: Request, response: Response) => {
		const courseId: string = request.params.courseId;
		const errors = validationResult(request.body.courseObjectives);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const courseObjectives =
				await courseObjectivesController.createCourseObjective(
					request.body.courseObjectives,
					courseId
				);
			console.log(request.body);
			return response.status(200).json(courseObjectives);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);
