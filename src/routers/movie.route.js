import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";

const movieRouter = Router();
const controller = new MovieController();

movieRouter.post("/addmovie", controller.addMovieController.bind(controller));
movieRouter.get(
  "/getallmovies",
  controller.getAllMoviesController.bind(controller)
);
movieRouter.get(
  "/getmovie/:id",
  controller.getOneMovieController.bind(controller)
);
movieRouter.put(
  "/updatemovie/:id",
  controller.updateMovieController.bind(controller)
);
movieRouter.delete(
  "/deletemovie/:id",
  controller.deleteMovieController.bind(controller)
);
export default movieRouter;
