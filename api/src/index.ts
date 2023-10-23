import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { authMiddleware } from "../middleware/authMiddleware";

import {
	userRouter,
	usersRouter,
	loginRouter,
	legisterRouter,
} from "./routes/auth/auth.router";

import { courseRouter, coursesRouter } from "./routes/course.route";

import { categoryRouter } from "./routes/category.route";
import { topCategoryRouter } from "./routes/topCategory.route";

import { ratingRouter } from "./routes/rating.route";
import { db } from "./utils/db.server";

dotenv.config();

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors());
app.use(express.json());

// AUTH ROUTES
app.use("/api/user", authMiddleware, userRouter);
app.use("/api/users", authMiddleware, usersRouter);

// REGISTER A NEW USER
app.use("/api/register", legisterRouter);

// LOGIN
app.use("/api/login", loginRouter);

// COURSES ROUTES
app.use("/api/courses", coursesRouter);
app.use("/api/course", courseRouter);

// TOP CATEGORIES ROUTES
app.use("/api/topcategories", topCategoryRouter);

// CATEGORIES ROUTES
app.use("/api/category", categoryRouter);
app.use("/api/categories", categoryRouter);

// RATING ROUTES
app.use("/api/rating", ratingRouter);

app.listen(PORT, () => {
	console.log("Listening on port ", PORT);
});

const courseData: any = [
	{
		title: "Python For Dummies",
		price: 1,
		authorId: '65324c693ef056bdd52e7a04',
		revisedPrice: 1,
		description: "You will Love Python For Dummies",
		thumbnail: "http://chzmo.com/image",
		catergoryId: 1,
	},
];

type Course = {
	title: string;
	price: number;
	authorId: string;
	revisedPrice: number;
	description: string;
	thumbnail: string;
	catergoryId: string;
};

courseData.forEach((course: Course) => {
	return;
	const {
		price,
		revisedPrice,
		title,
		authorId,
		catergoryId,
		description,
		thumbnail,
	} = course;
	db.course.create({
		data: {
			title,
			description,
			price,
			revisedPrice,
			thumbnail,
			authorId,
			categoryId: catergoryId,
		},
	});
});
