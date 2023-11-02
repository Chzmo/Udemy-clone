import express, { Request, Response } from "express";
import { validationResult, check } from "express-validator";

import * as courseTopicControler from "../controllers/courseTopicControler";
import { authMiddleware } from "../../middleware/authMiddleware";
import { deleteCourseTopic } from "../controllers/courseTopicControler";

const validateRequest = [
	check("title").notEmpty().withMessage("Title is required"),
	check("url").notEmpty().withMessage("Url is required"),
	check("userId").notEmpty().withMessage("userId is required"),
];

export const courseTopicRouter = express.Router();

courseTopicRouter.post(
	"/:contentId",
	validateRequest,
	authMiddleware,

	async (request: Request, response: Response) => {
		const contentId: string = request.params.contentId;
		const errors = validationResult(request.body);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const courseTopic = await courseTopicControler.createCourseTopic(
				request.body,
				contentId
			);
			return response.status(200).json(courseTopic);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);

courseTopicRouter.put(
	"/:id",
	validateRequest,
	authMiddleware,

	async (request: Request, response: Response) => {
		const id: string = request.params.id;
		const errors = validationResult(request.body);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const courseTopic = await courseTopicControler.createCourseTopic(
				request.body,
				id
			);
			return response.status(200).json(courseTopic);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);

courseTopicRouter.delete(
	"/:topicId",
	authMiddleware,

	async (request: Request, response: Response) => {
		const id: string = request.params.topicId;

		try {
			const courseTopic = await courseTopicControler.deleteCourseTopic(id);
			return response.status(200).json(courseTopic);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
);
