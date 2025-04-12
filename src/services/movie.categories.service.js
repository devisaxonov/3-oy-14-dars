import { CategoriesModel } from "../models/categories.model.js";
import { MovieCategoriesModel } from "../models/movie.categories.model.js";
import { MovieModel } from "../models/movies.model.js";
import CustomError from "../utils/custom.error.js";

class MovieCategoriesService {
  constructor() {
    this.model = MovieCategoriesModel;
    this.movieModel = MovieModel;
    this.categoryModel = CategoriesModel;
  }
  async addMovCatService(data) {
    const findMovie = await this.movieModel.findById(data.movie_id);
    if (!findMovie) throw new CustomError("Movie not found", 404);
    const findCategory = await this.categoryModel.findById(data.category_id);
    if (!findCategory) throw new CustomError("Category not found", 404);
    await this.model.create(data);
  }
  async getAll() {
    const data = await this.model
      .find()
      .populate("movie_id")
      .populate("category_id");
    return data;
  }
}

export default MovieCategoriesService;
