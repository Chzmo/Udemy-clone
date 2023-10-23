import express, { Request, Response } from "express";
import { validationResult, body } from "express-validator";

import * as courseObjectivesController from "../controllers/courseObjectivesController";
import { authMiddleware } from "../../middleware/authMiddleware";

export const courseobjectivesRouter = express.Router();

courseobjectivesRouter.post(
	"/",
	// authMiddleware,
	// body("title").isString(),
	// body("topCategoryId").isString(),

	async (request: Request, response: Response) => {
		try {
			console.log(request.body);
			return response.status(200).json({ ok: 1 });
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);
