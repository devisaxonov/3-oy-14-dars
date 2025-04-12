import { Router } from "express";
import MovieCategoriesController from "../controllers/movie.categories.controller.js";

const movieCategoryRouter = Router();
const controller = new MovieCategoriesController();

movieCategoryRouter.post("/moviecategory",controller.createMovieCategory.bind(controller));
movieCategoryRouter.get("/all/moviecategory", controller.getAllMovieCategory.bind(controller));

export default movieCategoryRouter;
