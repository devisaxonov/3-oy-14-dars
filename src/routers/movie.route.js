import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";

const movieRouter = Router();
const controller = new MovieController();

movieRouter.post("/movie", controller.addMovie.bind(controller));
movieRouter.get("/movies",controller.getAllMovies.bind(controller));
movieRouter.get("/movie/:id",controller.getOneMovie.bind(controller));
movieRouter.put("/movie/:id",controller.updateMovie.bind(controller));
movieRouter.delete("/movie/:id", controller.deleteMovie.bind(controller));

export default movieRouter;
