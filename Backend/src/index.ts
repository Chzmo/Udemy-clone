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
import { ratingRouter } from "./routes/rating.route";

dotenv.config();

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", authMiddleware, userRouter);
app.use("/api/users", authMiddleware, usersRouter);
app.use("/api/register", legisterRouter);
app.use("/api/login", loginRouter);

// COURSES ROUTES
app.use("/api/courses", coursesRouter);
app.use("/api/course", courseRouter);

// CATEGORIES ROUTES
app.use("/api/category", categoryRouter);
app.use("/api/categories", categoryRouter);

// RATING ROUTES
app.use("/api/rating", ratingRouter);

app.listen(PORT, () => {
	console.log("Listening on port ", PORT);
});
