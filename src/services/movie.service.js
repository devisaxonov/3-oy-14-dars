import { MovieModel } from "../models/movies.model.js";
import ValidationService from "./validation.service.js";

class MovieService {
  constructor() {
    this.movieModel = MovieModel;
    this.validationService = new ValidationService();
  }
  async addMovie(data) {
    await this.validationService.movieValidation(data);
    await this.movieModel.create(data);
  }
  async getAllMovies() {
    const data = await this.movieModel.find();
    return data;
  }
  async getOneMovie(id) {
    const data = await this.movieModel.findById(id);
    return data;
  }
  async updatemovie(id, data) {
    const updatedMovie = await this.movieModel.findByIdAndUpdate(id, data);
    return updatedMovie;
  }
  async deleteMovie(id) {
    await this.movieModel.deleteOne({ id: id });
  }
}

export default MovieService;
