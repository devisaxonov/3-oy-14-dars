import MovieCategoriesService from "../services/mavie_categories.service.js";

class MovieCategoriesController {
  constructor() {
    this.service = new MovieCategoriesService();
  }
  async createController(req, res, next) {
    try {
      await this.service.addMovCatService(req.body);
      res.status(201).json({ message: "success" });
    } catch (error) {
      next(error);
    }
  }
  async getAllController(req, res, next) {
    try {
      const data = await this.service.getAll();
      res.status(200).json({ message: "success", data });
    } catch (error) {
      next(error);
    }
  }
}

export default MovieCategoriesController;
