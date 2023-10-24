import express, { Request, Response } from "express";
import { validationResult, check } from "express-validator";

import * as courseRequirementsController from "../controllers/courseRequirementsController";
import { authMiddleware } from "../../middleware/authMiddleware";

const validateRequest = [
	check("*.title").notEmpty().withMessage("Title is required"),
	check("*.courseId").notEmpty().withMessage("Course is required"),
];

export const courseRequirementsRouter = express.Router();

courseRequirementsRouter.post(
	"/:courseId",
	validateRequest,
	authMiddleware,

	async (request: Request, response: Response) => {
		const courseId: string = request.params.courseId;
		const errors = validationResult(request.body.courseRequirements);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const courseRequirements =
				await courseRequirementsController.createCourseRequirements(
					request.body.courseRequirements,
					courseId
				);
			console.log(request.body);
			return response.status(200).json(courseRequirements);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);
