import { ReviewsModel,} from "../models/reviews.model.js";

class ReviewService {
  constructor() {
    this.model = ReviewsModel;
  }
  async createReviews(data) {
    const ans = await this.model.create(data);
    return ans;
  }
  async getAll() {
    const data = await this.model
      .find()
      .populate("movie_id")
      .populate("user_id");
    return data;
  }
}

export default ReviewService;
