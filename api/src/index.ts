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

import { ratingRouter } from "./routes/rating.route";
import { categoryRouter } from "./routes/category.route";
import { topCategoryRouter } from "./routes/topCategory.route";
import { courseobjectivesRouter } from "./routes/objectives.route";
import { courseRequirementsRouter } from "./routes/courseRequirements.route";

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

// COURSES OBJECTS ROUTES (what tou will learn routes)
app.use("/api/courseobjectives", courseobjectivesRouter);

// COURSES REQUIREMENTS ROUTES (Requirements)
app.use("/api/courseRequirements", courseRequirementsRouter);

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
