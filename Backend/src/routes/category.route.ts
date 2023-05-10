import express, { Request, Response } from "express";
import { validationResult, body } from "express-validator";

import * as categoryController from "../controllers/categoryController";
import { authMiddleware } from "../../middleware/authMiddleware";

export const categoryRouter = express.Router();

// Auth: Category Routes
categoryRouter.post(
	"/",

	body("title").isString(),
	body("topCategoryId").isInt(),
	authMiddleware,

	async (request: Request, response: Response) => {
		const errors = validationResult(request);

		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const category = await categoryController.createCategory(
				request.body.title,
				request.body.topCategoryId
			);
			return response.status(200).json(category);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);

categoryRouter.get("/", async (request: Request, response: Response) => {
	try {
		const categories = await categoryController.getCategories();
		return response.status(200).json(categories);
	} catch (error) {
		return response.status(401).json(error);
	}
});
