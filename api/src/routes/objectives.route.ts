import express, { Request, Response } from "express";
import { validationResult, body } from "express-validator";

import * as courseObjectives from "../controllers/courseObjectivesController";
import { authMiddleware } from "../../middleware/authMiddleware";

export const courseobjectivesRouter = express.Router();

courseobjectivesRouter.post(
	"/",
	authMiddleware,
	// body("title").isString(),
	// body("topCategoryId").isString(),

	async (request: Request, response: Response) => {
		try {
			return response.status(200).json(request);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);
