import { Router } from "express";
import ReviewController from "../controllers/reviews.controller.js";

const reviewsRouter = Router();
const controller = new ReviewController();

reviewsRouter.post("/review", controller.createReview.bind(controller));
reviewsRouter.get("reviews",controller.getAllReview.bind(controller));

export default reviewsRouter;
