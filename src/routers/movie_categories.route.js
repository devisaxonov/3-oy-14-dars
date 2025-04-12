import { Router } from "express";
import MovieCategoriesController from "../controllers/movie_categories.controller.js";

const moviecategoryRouter = Router();
const controller = new MovieCategoriesController();

moviecategoryRouter.post(
  "/addmoviecategory",
  controller.createController.bind(controller)
);
moviecategoryRouter.get(
  "/getallmovcat",
  controller.getAllController.bind(controller)
);

export default moviecategoryRouter;
