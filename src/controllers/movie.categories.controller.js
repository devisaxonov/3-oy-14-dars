import MovieCategoriesService from "../services/movie.categories.service.js";

class MovieCategoriesController {
  constructor() {
    this.service = new MovieCategoriesService();
  }
  async createMovieCategory(req, res, next) {
    try {
      await this.service.addMovCatService(req.body);
      res.status(201).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  }
  async getAllMovieCategory(req, res, next) {
    try {
      const data = await this.service.getAll();
      res.status(200).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
}

export default MovieCategoriesController;
