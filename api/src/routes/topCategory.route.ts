import express, { Request, Response } from "express";
import { validationResult, body } from "express-validator";

import * as topCategoryController from "../controllers/topCategoryController";
import { authMiddleware } from "../../middleware/authMiddleware";

export const topCategoryRouter = express.Router();

// Auth: TopCategory Routes
topCategoryRouter.post(
	"/",
	body("title").isString(),
	authMiddleware,
	async (request: Request, response: Response) => {
		const errors = validationResult(request);

		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const topCategory = await topCategoryController.createTopCategory(
				request.body.title
			);
			return response.status(200).json(topCategory);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);

topCategoryRouter.get("/", async (request: Request, response: Response) => {
	try {
		const topCategories = await topCategoryController.getTopCategories();
		return response.status(200).json(topCategories);
	} catch (error) {
		return response.status(400).json(error);
	}
});
