import RewievService from "../services/rewiev.service.js";

class RewievController {
  constructor() {
    this.service = new RewievService();
  }
  async createRewievController(req, res, next) {
    try {
      const data = await this.service.createRewievs(req.body);
      res.status(201).json({ messsage: "success", data });
    } catch (error) {
      next(error);
    }
  }
  async getAllRewievController(req, res, next) {
    try {
      const data = await this.service.getAll();
      res.status(201).json({ messsage: "success", data });
    } catch (error) {
      next(error);
    }
  }
}

export default RewievController;
