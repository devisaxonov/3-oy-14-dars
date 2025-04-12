import MovieService from "../services/movie.service.js";

class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }
  async addMovie(req, res, next) {
    try {
      const data = req.body;
      await this.movieService.addMovie(data);
      res.status(201).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  }
  async getAllMovies(req, res, next) {
    try {
      const data = await this.movieService.getAllMovies();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async getOneMovie(req, res, next) {
    try {
      const data = await this.movieService.getOneMovie(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async updateMovie(req, res, next) {
    try {
      const body = req.body;
      const data = await this.movieService.updateMovie(req.params.id, body);
      res.status(201).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async deleteMovie(req, res, next) {
    try {
      await this.movieService.deleteMovie(req.params.id);
      res.status(200).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  }
}

export default MovieController;
