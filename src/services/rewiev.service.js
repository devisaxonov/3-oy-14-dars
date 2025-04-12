import { RewievsModel } from "../models/rewievs.model.js";

class RewievService {
  constructor() {
    this.model = RewievsModel;
  }
  async createRewievs(data) {
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

export default RewievService;
