import ReviewService from "../services/review.service.js";

class ReviewController {
  constructor() {
    this.service = new ReviewService();
  }
  async createReview(req, res, next) {
    try {
      const data = await this.service.createReviews(req.body);
      res.status(201).json({ messsage: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async getAllReview(req, res, next) {
    try {
      const data = await this.service.getAll();
      res.status(201).json({ messsage: "success", data });
    } catch (error) {
      next(error);
    }
  }
}

export default ReviewController;
