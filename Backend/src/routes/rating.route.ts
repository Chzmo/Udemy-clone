import express from "express";
import { Request, Response } from "express";

import * as ratingController from "./../controllers/ratingCourseController";
import { authMiddleware } from "../../middleware/authMiddleware";
import { ratingType } from "../utils/customTypes";

export const ratingRouter = express.Router();

// POST: Create Rating
ratingRouter.post(
	"/",
	authMiddleware,
	async (request: Request, response: Response) => {
		try {
			const rating = ratingType.parse(request.body);
			return response
				.status(200)
				.json(await ratingController.createRating(rating));
		} catch (error: any) {
			return response.status(400).json({ error });
		}
	}
);
